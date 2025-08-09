import { CardProps } from "@/utils/types";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import CardTag from "./tag";
import Image from "next/image";

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  tag,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4 hover:shadow-lg transition-shadow">
      {tag && <CardTag text={tag} />}

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
      </div>
      {imageUrl && <div className="flex justify-center"><Image src={imageUrl} height={200} width={200} alt="image-card"/></div>}
      {description && <p className="text-gray-600 text-sm">{description}</p>}
      {link && (
        <a href={link} className="flex items-center" target="blank">
          <ArrowRightCircleIcon height={20} width={20} />
          &nbsp;View More
        </a>
      )}
    </div>
  );
};

export default Card;
