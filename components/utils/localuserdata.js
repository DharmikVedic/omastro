import React, { useEffect, useState } from "react";

export default function localuserdata() {
  const [user, setuser] = useState();
  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("userdata")));
  }, []);
  return user;
}
