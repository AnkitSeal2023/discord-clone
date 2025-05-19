"use client";
type Props = {
      channel_id: string
      subchannel_id: string
  }
  export default function ServersPage({ channel_id , subchannel_id }: Props) {
    console.log(" route:", channel_id, subchannel_id);
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Server Name: {channel_id}</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
                Subchannel ID: {subchannel_id}
            </p>
            <p className=" text-1xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut perspiciatis magnam dicta adipisci nostrum tempora sed nisi, pariatur sequi ab! Officia laboriosam ad dolore provident tempora minima maiores autem aut a, minus quas voluptas illum quos amet accusantium impedit commodi ipsum repellendus sit. Assumenda natus deserunt sed, iure excepturi rerum, rem esse maxime blanditiis accusantium ducimus repellendus sint quae repellat, quam placeat! Ea voluptatum excepturi est dolore repellendus fuga quod? Molestiae asperiores obcaecati magnam quos velit. Ad laudantium incidunt sint porro ipsum quaerat, laborum ab tempora nostrum provident sequi eligendi reprehenderit impedit quisquam debitis saepe cumque cum architecto soluta.
            </p>
          </div>
        </div>
      );
    }