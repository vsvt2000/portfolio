import { CardProps } from "@/utils/types";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-600 text-sm">{description}</p>}
      {link && (
        <a href={link} className="flex items-center" target="blank">
          <ArrowRightCircleIcon height={20} width={20}/>&nbsp;View More
        </a>
      )}
    </div>
  );
};

export default Card;
