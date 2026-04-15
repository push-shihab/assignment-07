import Image from "next/image";

const Friend = ({ friend }) => {
  return (
    <div
      className="p-4 shadow-lg rounded-2xl border border-base-200 text-center flex flex-col items-center space-y-3"
      key={friend.id}
    >
      <Image
        className="rounded-full"
        src={friend.picture}
        alt={friend.name}
        width={100}
        height={100}
        loading="eager"
      ></Image>
      <h2 className="font-semibold text-[20px]">{friend.name}</h2>
      <p className="text-[#64748B] text-[12px]">
        {friend.days_since_contact}d ago
      </p>
      <div className="uppercase text-[12px] flex flex-wrap items-center justify-center gap-1.5">
        {friend.tags.map((tag, i) => (
          <span className="py-1 px-2 rounded-xl bg-green-200" key={i}>
            {tag}
          </span>
        ))}
      </div>
      <span
        className={`${
          friend.status === "overdue"
            ? "bg-red-800"
            : friend.status === "on-track"
              ? "bg-green-800"
              : "bg-amber-400"
        } text-white py-1 px-2 rounded-2xl text-[12px] capitalize`}
      >
        {friend.status}
      </span>
    </div>
  );
};

export default Friend;
