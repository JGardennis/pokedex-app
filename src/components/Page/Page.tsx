import React from "react";

interface iProps {
  children: React.ReactNode;
  className: string;
}

const Page = ({ className, children }: iProps) => (
  <div className={`${className} page`}>{children}</div>
);

export default Page;
