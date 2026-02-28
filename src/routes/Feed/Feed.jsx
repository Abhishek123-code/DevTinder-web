import { useSelector } from "react-redux";
import UserCard from "../../components/UserCard";

const Feed = () => {
  const feedData = useSelector((store) => store.feed);
  console.log(feedData);
  console.log(feedData.length);

  return (
    <div className="flex justify-center my-10">
      {feedData.length > 0 ? (
        <UserCard feedData={feedData[0]} />
      ) : (
        <h2 className="card-title text-2xl ">You are all caught up!</h2>
      )}
    </div>
  );
};

export default Feed;
