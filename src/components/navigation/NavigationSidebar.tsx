"use client"

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { MessageCircle, Plus } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { joined_servers } from "@/data/servers";
import Link from "next/link";

interface ServerIconProps {
  id: string;
  name: string;
  imageUrl: string;
}


const ServerIcon = ({ id, name, imageUrl }: ServerIconProps) => {
  const params = useParams();
  const router = useRouter();
  const onClick = () => {
    router.push(`/servers/${id}`);
  }
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button
          onClick={onClick}
          className={cn(
            "group relative flex items-center justify-center rounded-[24px] h-[48px] w-[48px] mx-3 hover:rounded-[16px] transition-all overflow-hidden",
            params?.serverId === id && "rounded-[16px] bg-primary/10"
          )}
          variant="ghost"
        >
          <Image
            fill
            src={imageUrl}
            alt={name}
            sizes="48px"
            className="object-cover"
          />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent 
        side="right" 
        className="text-md font-semibold px-3 py-2 bg-black/90 border-none text-white"
      >
        {name}
      </HoverCardContent>
    </HoverCard>
  )
}

// Temporary mock data - replace with real data from your backend
const SERVERS = joined_servers

export const NavigationSidebar = () => {
  return (
    <div className="space-y-4 flex flex-col items-center h-full w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      
      <Link
        className=" cursor-pointer group flex items-center justify-center rounded-[24px] h-[48px] w-[48px] mx-3 hover:rounded-[16px] transition-all bg-background dark:bg-neutral-700 hover:bg-emerald-500"
        href={"/channels/me"}
      >
        <MessageCircle className="group-hover:text-white transition" />
      </Link>
      <Button
        variant="ghost"
        className="group flex items-center justify-center rounded-[24px] h-[48px] w-[48px] mx-3 hover:rounded-[16px] transition-all bg-background dark:bg-neutral-700 hover:bg-emerald-500"
      >
        <Plus className="group-hover:text-white transition" size={25} />
      </Button>
      <Separator
        className="h-[2px] w-10 mx-auto bg-zinc-300 dark:bg-zinc-700 rounded-md"
      />
      <ScrollArea className="flex-1 w-full">
        {SERVERS.map((server) => (
          <div key={server.id} className="mb-4">
            <ServerIcon
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
    </div>
  )
} 