import React from "react";

interface ItalicProps {
  children: React.ReactNode;
}

export default function Italic({ children }: ItalicProps) {
  return <em className="italic font-libre-caslon">{children}</em>;
}
