import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";

const Feed = () => {
  const feedData = useSelector((store) => store.feed);
  console.log(feedData.data[0]);

  return (
    <div className="flex justify-center my-10">
      <UserCard feedData={feedData?.data[0]} />
    </div>
  );
};

export default Feed;
