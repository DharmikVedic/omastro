import { useEffect, useState } from "react";
import { supabase } from "../supabase/supaclient";

export default function localuserdata() {
  const [user, setuser] = useState();
  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("userdata")));
  }, []);
  return user;
}

export function astrologerDetail() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("astrologerSignup") !== null) {
      const data = JSON.parse(localStorage.getItem("astrologerSignup"));
      fetchdata(data.email);
    }
  }, []);

  const fetchdata = async (email) => {
    const d = await supabase
      .from("astrologerProfile")
      .select("*")
      .eq("email", email);

    setuser(d.data[0]);
  };
  return user;
}
