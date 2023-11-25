// code for "Demo" page - /demo

import ChatBotCreationData from "@/components/DemoPage/ChatBotCreate";

export const metadata = {
  title: "Demo | Tailor Talk",
  description:
    "Tailor Talks is your go-to platform for seamless and intelligent conversations. Explore a new era of communication with Tailor Talks.",
};

function Demo() {
  // Using min-h-[calc(100vh-4rem)] to remove the height of navbar, should be removed later when /demo page get completed
  return (
    <div>
      <div className="my-8">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Data Sources
        </h1>
        <p className="text-center text-zinc-500">Add your data sources to train your chatbot</p>
      </div>
      <ChatBotCreationData/>
    </div>
  );
}

export default Demo;
