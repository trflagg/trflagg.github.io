import * as React from "react";
import { FaDatabase } from "react-icons/fa";

interface OwnProps {
  category: Category;
}

const iconForCategory = {
  Infrastructure: FaDatabase,
};

const CategoryTag = ({ category }: OwnProps) => {
  if (!iconForCategory[category]) {
    return null;
  }

  return (
    <a
      href="#"
      className="relative z-10 rounded-full bg-gray-200 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-300 flex items-center w-fit"
    >
      <span className="mr-2">{iconForCategory[category]?.()}</span>
      <span>{category}</span>
    </a>
  );
};

export default CategoryTag;
