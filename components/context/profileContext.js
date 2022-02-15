import React, { createContext, useEffect, useState } from "react";

export const Profile = createContext(null);

export default function ProfileContect(props) {
  const [profile, setprofile] = useState({ astrologer: "", currentuser: "" });

  useEffect(() => {
    setprofile(JSON.parse(sessionStorage.getItem("astrologer")));
  }, []);

  const storeCurrentAstrologer = (value, value2) => {

    sessionStorage.setItem(
      "astrologer",
      JSON.stringify({ astrologer: value, currentuser: value2 })
    );
    setprofile({ astrologer: value, currentuser: value2 });
  };

  const value = {
    profile,
    storeCurrentAstrologer,
  };
  return <Profile.Provider value={value}>{props.children}</Profile.Provider>;
}
