import { useSelector } from "react-redux";
import UserCard from "../../components/UserCard";

const Feed = () => {
  const feedData = useSelector((store) => store.feed);

  return (
    <div className="flex justify-center my-10">
      {/* FIX: Adding the key prop forces React to mount a fresh card when the ID changes */}
      {feedData.length > 0 ? (
        <UserCard key={feedData[0]._id} feedData={feedData[0]} />
      ) : (
        <h2 className="card-title text-2xl text-white">
          You are all caught up!
        </h2>
      )}
    </div>
  );
};
export default Feed;
