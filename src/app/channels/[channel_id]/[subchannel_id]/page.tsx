import TopBar from "@/components/TopBar";
import ServersPage from "./ServersPage";

export default async function Servers({ params }: { params: Promise<{ channel_id: string; subchannel_id: string }> }) {
  const { channel_id, subchannel_id } = await params;
  console.log(" route:", channel_id, subchannel_id);
  return (
    <>
      <TopBar/>
      <ServersPage 
        channel_id={channel_id}
        subchannel_id={subchannel_id}/>
    </>
    );
  }