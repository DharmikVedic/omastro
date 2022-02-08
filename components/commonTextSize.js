import React from "react";

export default function Header(props) {
  const lineheigth = props.lineheight || 1.2;
  const extra = props.extra || "md:text-5xl text-4xl";
  return (
    <h2 style={{ lineHeight: lineheigth }} className={`${extra}`}>
      {props.children}
    </h2>
  );
}

export function Paragraph(props) {
  const extra = props.extra || "text-zinc-700  md:text-xl text-lg";
  return (
    <p style={{ lineHeight: 1.6 }} className={`${extra} `}>
      {props.children}
    </p>
  );
}
