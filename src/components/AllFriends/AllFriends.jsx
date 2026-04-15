import Friend from "./Friend";

const AllFriends = async () => {
  const fetchData = await fetch("http://localhost:3000/friends.json");
  const friendsData = await fetchData.json();
  return (
    <div className="py-15">
      <h2 className="font-semibold text-2xl">Your Friends</h2>
      <main className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10 pt-8">
        {friendsData.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </main>
    </div>
  );
};

export default AllFriends;
