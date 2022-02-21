import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <img
        src="/imgs/tail-spin.svg"
        className="w-[100px] h-[100px]"
        alt="loader"
      />
    </div>
  );
}
