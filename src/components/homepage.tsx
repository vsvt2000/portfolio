import React from "react";
import HistoryDisclosure from "./disclosure";

function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-white text-lg md:text-2xl">
        Computer Science Engineer. Aspiring MBA Graduate. Classical Musician. 
        All amalgamated into one being.
      </div>
      <div className="italic text-white text-sm md:text-xl">
        I love to work on projects based on NextJS, React, Java, and Python. I am passionate about solving problems for users to the best of my ability.
      </div>
      <div>
       <div className="flex justify-center items-center h-fit bg-black">
      <video
        src="/vishnu_self_intro.mp4"
        controls
        className="h-[80vh] w-auto max-w-full"
      />
    </div>
      </div>
      <div>
        <HistoryDisclosure/>
      </div>
    </div>
  );
}

export default HomePage;
