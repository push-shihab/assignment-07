import Image from "next/image";
import React, { use } from "react";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoIosArchive } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import FriendAction from "./FriendAction";
import { notFound } from "next/navigation";

const FriendDetails = async ({ params }) => {
  const { friendId } = await params;
  const fetchData = await fetch(
    "https://assignment-07-delta.vercel.app/friends.json",
  );
  const friendsData = await fetchData.json();
  const specificFriend = friendsData.find(
    (friend) => friend.id === parseInt(friendId),
  );
  if (!specificFriend) {
    notFound();
  }
  const {
    picture,
    status,
    tags,
    name,
    bio,
    days_since_contact,
    next_due_date,
    goal,
    email,
  } = specificFriend;
  return (
    <main className="bg-[#F8FAFC] py-20">
      <section className="container mx-auto grid lg:grid-cols-3 gap-6 items-center">
        <div className="space-y-3 lg:p-0 pl-4">
          <div className="px-12 py-4 flex flex-col items-center space-y-2 bg-white shadow-xl rounded-2xl border border-base-300">
            <Image
              className="rounded-full"
              src={picture}
              alt={name}
              width={100}
              height={100}
            ></Image>
            <h2 className="text-[20px] font-semibold">{name}</h2>
            <span
              className={`${
                status === "overdue"
                  ? "bg-red-800"
                  : status === "on-track"
                    ? "bg-green-800"
                    : "bg-amber-400"
              } text-white py-1 px-2 rounded-2xl text-[12px] capitalize`}
            >
              {status}
            </span>
            <div className="uppercase text-[12px] flex items-center justify-center gap-1.5">
              {tags.map((tag, i) => (
                <span className="py-1 px-2 rounded-xl bg-green-200" key={i}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="font-medium italic text-[#64748B]">{bio}</p>
            <span className="text-[14px] text-[#64748B]">
              Preferred Email: <span className="text-gray-700">{email}</span>
            </span>
          </div>
          <div className="font-medium cursor-pointer hover:bg-black hover:text-white transition ease-in-out duration-400 hover:scale-110 py-4 text-center bg-white shadow-xl rounded-2xl border border-base-300 flex justify-center items-center gap-2">
            <HiOutlineBellSnooze /> Snooze 2 weeks
          </div>
          <div className="font-medium cursor-pointer hover:bg-black hover:text-white transition ease-in-out duration-400 hover:scale-110 py-4 text-center bg-white shadow-xl rounded-2xl border border-base-300 flex justify-center items-center gap-2">
            <IoIosArchive />
            Archive
          </div>
          <div className="font-medium cursor-pointer hover:bg-red-500 hover:text-white transition ease-in-out duration-400 hover:scale-90 py-4 text-center bg-white shadow-xl rounded-2xl border border-base-300 text-red-500 flex justify-center items-center gap-2">
            <RiDeleteBin6Line /> Delete
          </div>
        </div>
        <div className="space-y-6 col-span-2">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 text-center">
            <div className="px-4 py-6 space-y-2 shadow-xl rounded-2xl bg-white">
              <h2 className="font-semibold text-[30px] text-[#244D3F]">
                {days_since_contact}
              </h2>
              <p className="text-[18px] text-[#64748B]">Days Since Contact</p>
            </div>
            <div className="px-4 py-6 space-y-2  shadow-xl rounded-2xl bg-white">
              <h2 className="font-semibold text-[30px] text-[#244D3F]">
                {goal}
              </h2>
              <p className="text-[18px] text-[#64748B]">Goal (Days)</p>
            </div>
            <div className="px-4 py-6 space-y-2 shadow-xl rounded-2xl bg-white">
              <h2 className="font-semibold text-[30px] text-[#244D3F]">
                {next_due_date}
                <p className="text-[18px] text-[#64748B]">Next Due</p>
              </h2>
            </div>
          </div>
          <div className="flex justify-between p-6 shadow-xl rounded-2xl bg-white">
            <div className="space-y-2">
              <h3 className="font-medium text-[20px] text-[#244D3F]">
                Relationship Goal
              </h3>
              <p className="text-[18px]">
                <span className="text-[#64748B]">Connect every </span>
                <span className="font-bold">{goal} days</span>
              </p>
            </div>
            <div>
              <a className="btn">Edit</a>
            </div>
          </div>
          <div className="shadow-xl rounded-2xl p-6 bg-white">
            <div>
              <h3 className="font-medium text-[20px] text-[#244D3F]">
                Quick Check-In
              </h3>
            </div>
            <FriendAction specificFriend={specificFriend}></FriendAction>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FriendDetails;
