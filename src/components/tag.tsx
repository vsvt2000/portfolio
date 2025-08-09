import React from "react";

function CardTag({ text }: { text: string }) {
  const colorMap:{[x:string]:string} = {
    music: "bg-green-200",
    sports: "bg-red-200",
    musings: "bg-yellow-300",
    generic: "bg-blue-200",
  };
  return <div className={`p-2 max-w-fit font-extrabold text-[10px] ${colorMap[text || "generic"]}`}>{text}</div>;
}

export default CardTag;
