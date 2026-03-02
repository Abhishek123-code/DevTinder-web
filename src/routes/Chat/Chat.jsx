import { useEffect, useState, useRef } from "react";
import { createSocketConnection } from "../../utils/socket";
import { useLoaderData, useParams } from "react-router";
import { useSelector } from "react-redux";

const Chat = () => {
  const { targetUserId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const socketRef = useRef(null);

  // 1. Create a reference for the bottom of the chat
  const messagesEndRef = useRef(null);

  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const data = useLoaderData();

  const [messages, setMessages] = useState(() => {
    if (!data?.messages) return [];
    return data.messages.map((msg) => {
      return {
        firstName: msg.senderId.firstName,
        lastName: msg.senderId.lastName,
        text: msg.text,
      };
    });
  });

  // 2. Add this useEffect to trigger the scroll whenever 'messages' changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!userId) {
      console.log("user not connected");
      return;
    }

    const newSocket = createSocketConnection();
    socketRef.current = newSocket;

    newSocket.emit("joinChat", {
      firstName: user.firstName,
      targetUserId,
      userId,
    });

    newSocket.on("messageReceived", ({ firstName, text }) => {
      setMessages((prevMessages) => [...prevMessages, { firstName, text }]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [userId, targetUserId, user.firstName]);

  const sendMessage = () => {
    if (!socketRef.current || !newMessage.trim()) return;

    socketRef.current.emit("sendMessage", {
      firstName: user.firstName,
      userId,
      targetUserId,
      text: newMessage,
    });

    setNewMessage("");
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-4">
      <div className="card w-full max-w-3xl bg-base-300 shadow-xl border border-white/5">
        <div className="bg-base-200 px-6 py-4 border-b border-white/5 rounded-t-2xl">
          <h2 className="text-xl font-bold tracking-wide">Chat</h2>
        </div>

        <div className="h-[60vh] overflow-y-auto p-6 flex flex-col gap-2 bg-base-300/50">
          {messages.map((msg, index) => {
            const isMe = user.firstName === msg.firstName;
            return (
              <div
                key={index}
                className={`chat ${isMe ? "chat-end" : "chat-start"}`}
              >
                <div className="chat-header mb-1 text-white/70">
                  {msg.firstName}
                  <time className="text-xs opacity-50 ml-2">12:45</time>
                </div>
                <div
                  className={`chat-bubble ${
                    isMe
                      ? "chat-bubble-primary text-primary-content"
                      : "chat-bubble-neutral"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}
          {/* 3. Add the invisible dummy div at the very bottom of the list */}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-base-200 rounded-b-2xl border-t border-white/5 flex gap-3">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="input input-bordered flex-1 bg-base-300 focus:outline-none focus:border-primary"
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            className="btn btn-primary"
            disabled={!newMessage.trim()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 -rotate-45 mb-1"
            >
              <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
            </svg>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
