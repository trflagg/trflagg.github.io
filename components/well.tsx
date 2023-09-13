import * as React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Well = ({ className, ...props }: Props) => (
  <div
    className={`rounded-lg border bg-header-blue-secondary min-w-[25%]  p-5 ${
      className || ""
    }`}
    {...props}
  />
);

export default Well;
