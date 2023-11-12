import { BsArrowRight } from "react-icons/bs";

function JoinFuture() {
  return (
    <>
      <section>
        <div className="mt-16 m-auto h-[290px] flex flex-col justify-center items-center bg-gray-900 text-white rounded-3xl w-[90%] gap-9 p-9">
          <h2 className="text-3xl font-bold">
            Transforming Chats into Experiences - Tailor Talks
          </h2>
          <a
            href="https://talkui-production.up.railway.app/login"
            target="__blank"
            className="px-3 py-2 text-gray-900 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
          >
            Join Now <BsArrowRight className="inline" />
          </a>
        </div>
      </section>
      <p className="mt-12 text-lg text-center text-gray-700">
        Have questions or need assistance? Contact us or chat with our chatbot{" "}
        <span>
          <BsArrowRight className="inline" />
        </span>
      </p>
    </>
  );
}

export default JoinFuture;
