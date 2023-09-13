import * as React from "react";

const SubHeading = ({ className, ...props }: any) => (
  <h1 {...props} className={`text-xl text-gray-500 text-sans ${className}`} />
);

export default SubHeading;
