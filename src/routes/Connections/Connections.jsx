import { useLoaderData } from "react-router";
import ConnectionCard from "../../components/ConnectionCard";

const Connections = () => {
  const connectionData = useLoaderData();
  console.log(connectionData);
  return (
    <div className="flex flex-col items-center justify-center my-10 gap-4">
      <h2 className="card-title text-2xl ">Connections</h2>
      {connectionData.length > 0 ? (
        connectionData.map((connection) => (
          <ConnectionCard key={connection._id} connections={connection} />
        ))
      ) : (
        <h2 className="card-title text-2xl ">You have no connections yet!</h2>
      )}
    </div>
  );
};

export default Connections;
