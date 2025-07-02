import React from "react";
import HistoryDisclosure from "./disclosure";

function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-lg">
        Computer Science Engineer. Aspiring MBA Graduate. Classical Musician. 
        All amalgamated into one being.
      </div>
      <div className="italic">
        I love to work on projects based on NextJS, React, Java, and Python. I am passionate about solving problems for users to the best of my ability.
      </div>
      <div>
        <HistoryDisclosure/>
      </div>
    </div>
  );
}

export default HomePage;
