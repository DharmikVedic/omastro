import React, { createContext, useEffect, useState } from "react";

export const Loginc = createContext(null);

export default function Logincontext(props) {
  const [user, setuser] = useState(null);
  const [astrologer, setastrologer] = useState(null);

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("userdata")));
    setastrologer(JSON.parse(localStorage.getItem("astrologerdetail")));
  }, []);

  const storeuserdata = (value) => {
    localStorage.setItem("userdata", JSON.stringify(value));
    setuser(value);
  };

  const removeuserdata = (value) => {
    localStorage.removeItem(value);
    setuser(null);
  };

  const storeastrologerdata = (value) => {
    localStorage.setItem("astrologerdetail", JSON.stringify(value));
    setuser(value);
  };

  const removeAstrologerdata = (value) => {
    localStorage.removeItem(value);
    setuser(null);
  };

  const value = {
    user,
    storeuserdata,
    removeuserdata,
    storeastrologerdata,
    removeAstrologerdata,
    astrologer,
  };
  return <Loginc.Provider value={value}>{props.children}</Loginc.Provider>;
}
