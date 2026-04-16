import Friend from "./Friend";

const AllFriends = async () => {
  const fetchData = await fetch("http://localhost:3000/friends.json");
  const friendsData = await fetchData.json();
  return (
    <div className="py-15">
      <h2 className="font-semibold text-2xl">Your Friends</h2>
      <Friend friendsData={friendsData}></Friend>
    </div>
  );
};

export default AllFriends;
