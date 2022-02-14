import { useRouter } from "next/router";
import React from "react";
import Footer from "../footer/footer";
import Topbar2 from "../navbar/topbar2";
import Topnav from "../navbar/topnav";

export default function Layout(props) {
  const router = useRouter();
  const url = router.asPath.split("/")[1];
  return (
    <>
      {router.asPath === "/astrologer-admin/login" ||
      router.asPath === "/astrologer-admin/astroprofile-form" ? (
        <div className="bg-white min-h-screen">{props.children}</div>
      ) : (
        <>
          {url === "astrologer-admin" ? (
            <div>
              <Topbar2 />
              <div className="bg-white min-h-screen">{props.children}</div>
            </div>
          ) : (
            <div>
              <Topnav />
              {props.children}
              <Footer />
            </div>
          )}
        </>
      )}
    </>
  );
}
