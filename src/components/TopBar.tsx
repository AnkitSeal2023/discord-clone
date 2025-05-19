import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card";
import { Users } from "lucide-react";
import { Inbox, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function TopBar() {
    return (
        <div className=" bg-black h-12 flex items-center justify-center border-b-2 border-b-zinc-800">
            <div className="fixed right-0 z-0 flex items-center space-x-2 my-auto  pr-4">
                <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger asChild>
                        <button className="cursor-pointer">
                            <Inbox className="w-5" />
                        </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                        side="bottom"
                        align="center"
                        className="text-sm font-semibold px-1 py-1 bg-black/90 border-none text-white rounded"
                    >
                        Inbox
                    </HoverCardContent>
                </HoverCard>
                <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger asChild>
                        <button className="cursor-pointer">
                            <HelpCircle className="w-5" />
                        </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                        side="bottom"
                        align="start"
                        className=" text-sm font-semibold px-1 py-1 bg-black/90 border-none text-white rounded"
                    >
                        Questions
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="flex items-center justify-center px-4 bg-inherit shadow-md">
                <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger asChild>
                        <Button className="cursor-pointer bg-black text-white">
                            <Users className="w-5" /> Friends
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent
                        side="bottom"
                        className="text-sm font-semibold px-1 py-1 bg-black/90 border-none text-white rounded"
                    >
                        Friends
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
    );
}