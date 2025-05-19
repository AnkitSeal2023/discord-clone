import TopBar from "@/components/TopBar";
import {online_friends} from "@/data/friends.js";
import Image from "next/image";

const ofl = online_friends.length
function OnLineFriendsList() {
  return online_friends.map((friend) => (
    <div key={friend.name}>
      <hr></hr>
      <div  className="flex items-center space-x-4">
        <Image src={friend.avatar}  alt="abc" className="w-10 h-10 rounded-full" width={10} height={10}/>
        <div>
          <h2 className="text-lg font-semibold">{friend.name}</h2>
          <p className="text-sm text-gray-500">{friend.isPlaying? friend.activity :friend.status}</p>
        </div>
      </div>
    </div>
  ));
}

export default function Home() {
  return (
    <>
      <TopBar />
      <div className=" p-3 bg-gray-100 dark:bg-inherit">
        <div>Online-{ofl}</div>
        <OnLineFriendsList />
      </div>
    </>
  );
}