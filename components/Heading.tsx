import * as React from "react";

const Heading = ({ className, ...props }: any) => (
  <h1
    {...props}
    className={`text-5xl font-bold leading-tight text-gray-900 font-sans ${className}`}
  />
);

export default Heading;
