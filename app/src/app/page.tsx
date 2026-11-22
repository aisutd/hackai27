import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-screen flex-col mx-auto justify-center gap-20 bg-blue-950 dark:bg-black sm:items-start">
        <div className="flex flex-wrap w-1/2 mx-auto justify-center gap-x-4 gap-y-2">
          <span className="inline-block text-2xl text-white font-mono opacity-0 animate-word-reveal [animation-delay:0ms]"></span>
          <span className="inline-block text-2xl text-white font-mono opacity-0 animate-word-reveal [animation-delay:500ms]">HackAI</span>
          <span className="inline-block text-2xl text-white font-mono opacity-0 animate-word-reveal [animation-delay:500ms]">2027</span>
          <span className="inline-block text-2xl text-white/60 font-mono opacity-0 animate-word-reveal [animation-delay:1500ms]">is</span>
          <span className="inline-block text-2xl text-white/60 font-mono opacity-0 animate-word-reveal [animation-delay:2500ms]">coming</span>
          <span className="inline-block text-2xl text-white/60 font-mono opacity-0 animate-word-reveal [animation-delay:3500ms]">soon.</span>
        </div>
        {/* <div className="flex flex-wrap w-1/2 mx-auto justify-center gap-x-4 gap-y-2">
          <span className="">
            We can't wait to have you.
          </span>
        </div> */}
        <div className="flex flex-wrap w-1/2 mx-auto justify-center gap-x-4 gap-y-2">
          <a className="font-ais text-white text-md font-semibold text-center hover:underline-offset opacity-0 animate-word-reveal [animation-delay:4500ms]" href="https://aisutd.org">
            - Artificial Intelligence Society @ UTD
          </a>
        </div>
        
      </main>
    </div>
  );
}
