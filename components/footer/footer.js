import Link from "next/link";
import React from "react";

export default function Footer() {
  const menulink = {
    title: "Useful Link",
    link: [
      { text: "Home", link: "/" },
      { text: "Talk to Astrologer", link: "/talktoastrologer" },
      { text: "Privacy Poicy", link: "/privacy-policy" },
      { text: "Terms and Condition", link: "/terms-condition" },
      { text: "Help", link: "/help" },
    ],
  };
  return (
    <div className="py-28 bg-zinc-800">
      <div className="max-w-7xl px-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-start gap-x-10 gap-y-14">
        <div className="flex flex-col gap-5 cursor-default w-full">
          <div className="w-[60px]">
            <img src="/imgs/logo.jpg" alt="logo" className="h-full" />
          </div>
          <p className="text-lg text-zinc-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book{" "}
          </p>
        </div>
        <div className=" w-full flex sm:justify-center md:justify-center">
          <div className="flex flex-col gap-6">
            <h4 className="text-zinc-100">{menulink.title}</h4>
            <ul className="flex flex-col  gap-3 text-lg">
              {menulink.link.map((item, i) => (
                <li
                  className="text-zinc-300 hover:text-white hover:underline "
                  key={i}
                >
                  <Link href={item.link}>
                    <a>{item.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex  md:justify-center w-full">
          <div className="flex flex-col gap-6">
            <h4 className="text-zinc-100">Contact Us</h4>
            <div className="text-lg text-zinc-200 flex flex-col gap-2">
              <span>Phone: +91-1234567756</span>
              <span>Email: abc@homeastro.com</span>
            </div>
            <div>
              <div className="flex flex-col gap-5 border-t border-zinc-300 pt-6">
                <span className=" whitespace-nowrap text-xl text-zinc-100">
                  Follow Us On
                </span>
                <div className="flex gap-4   justify-between max-w-max w-full ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCAbOQqZ4P-cVjqLmdFx-LVQ"
                  >
                    <svg
                      className="w-10 h-10 fill-zinc-100 hover:fill-zinc-400"
                      id="Layer_1"
                      version="1.1"
                      viewBox="0 0 56.693 56.693"
                    >
                      <path d="M28.347,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.625-11.023,24.625-24.623  C52.972,16.184,41.946,5.157,28.347,5.157z M34.864,29.679h-4.264c0,6.814,0,15.207,0,15.207h-6.32c0,0,0-8.307,0-15.207h-3.006  V24.31h3.006v-3.479c0-2.49,1.182-6.377,6.379-6.377l4.68,0.018v5.215c0,0-2.846,0-3.398,0c-0.555,0-1.34,0.277-1.34,1.461v3.163  h4.818L34.864,29.679z" />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/VedicRishiAstro"
                  >
                    <svg
                      className="w-10 h-10 fill-zinc-100 hover:fill-zinc-400"
                      version="1.1"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm153.315,178.978c-3.68,-13.769 -14.522,-24.61 -28.29,-28.29c-24.958,-6.688 -125.025,-6.688 -125.025,-6.688c0,0 -100.067,0 -125.025,6.688c-13.765,3.68 -24.61,14.521 -28.29,28.29c-6.685,24.955 -6.685,77.024 -6.685,77.024c0,0 0,52.067 6.685,77.02c3.68,13.769 14.525,24.614 28.29,28.293c24.958,6.685 125.025,6.685 125.025,6.685c0,0 100.067,0 125.025,-6.685c13.768,-3.679 24.61,-14.524 28.29,-28.293c6.685,-24.953 6.685,-77.02 6.685,-77.02c0,0 0,-52.069 -6.685,-77.024Zm-185.316,125.025l0,-96.002l83.137,48.001l-83.137,48.001Z" />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/VedicRishiAstro/"
                  >
                    <svg
                      className="w-10 h-10 fill-zinc-100 hover:fill-zinc-400"
                      id="Layer_1"
                      version="1.1"
                      viewBox="0 0 56.7 56.7"
                    >
                      <g>
                        <circle cx="28.1" cy="30" r="4.4" />
                        <path d="M33.6,19.2h-11c-1.6,0-3,0.5-3.9,1.4c-0.9,0.9-1.4,2.3-1.4,3.9v11c0,1.6,0.5,3,1.5,4c1,0.9,2.3,1.4,3.9,1.4h10.9   c1.6,0,3-0.5,3.9-1.4c1-0.9,1.5-2.3,1.5-3.9v-11c0-1.6-0.5-2.9-1.4-3.9C36.6,19.7,35.3,19.2,33.6,19.2z M28.1,36.8   c-3.8,0-6.8-3.1-6.8-6.8c0-3.8,3.1-6.8,6.8-6.8S35,26.2,35,30C35,33.8,31.9,36.8,28.1,36.8z M35.2,24.5c-0.9,0-1.6-0.7-1.6-1.6   s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6S36.1,24.5,35.2,24.5z" />
                        <path d="M28.3,5.2c-13.6,0-24.6,11-24.6,24.6c0,13.6,11,24.6,24.6,24.6c13.6,0,24.6-11,24.6-24.6C53,16.2,41.9,5.2,28.3,5.2z    M41.4,35.6c0,2.3-0.8,4.3-2.2,5.7c-1.4,1.4-3.4,2.1-5.6,2.1H22.7c-2.2,0-4.2-0.7-5.6-2.1c-1.5-1.4-2.2-3.4-2.2-5.7v-11   c0-4.6,3.1-7.8,7.8-7.8h11c2.3,0,4.2,0.8,5.6,2.2c1.4,1.4,2.1,3.3,2.1,5.6V35.6z" />
                      </g>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/vedicrishiastro/"
                  >
                    <svg
                      className="w-10 h-10 fill-zinc-100 hover:fill-zinc-400"
                      version="1.1"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-45.091,392.158c113.283,0 175.224,-93.87 175.224,-175.223c0,-2.682 0,-5.364 -0.128,-7.919c12.005,-8.684 22.478,-19.54 30.779,-31.928c-10.983,4.853 -22.861,8.174 -35.377,9.706c12.772,-7.663 22.478,-19.668 27.076,-34.099c-11.878,7.024 -25.032,12.132 -39.081,14.942c-11.239,-12.005 -27.203,-19.412 -44.955,-19.412c-33.972,0 -61.558,27.586 -61.558,61.558c0,4.853 0.511,9.578 1.66,14.048c-51.213,-2.554 -96.552,-27.075 -126.947,-64.368c-5.237,9.068 -8.302,19.668 -8.302,30.907c0,21.328 10.856,40.23 27.459,51.213c-10.09,-0.255 -19.541,-3.065 -27.842,-7.662l0,0.766c0,29.885 21.2,54.661 49.425,60.409c-5.108,1.404 -10.6,2.171 -16.219,2.171c-3.96,0 -7.791,-0.383 -11.622,-1.15c7.79,24.521 30.523,42.274 57.471,42.784c-21.073,16.476 -47.637,26.31 -76.501,26.31c-4.981,0 -9.834,-0.256 -14.687,-0.894c26.948,17.624 59.387,27.841 94.125,27.841Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex sm:justify-center  text-zinc-100 text-3xl font-semibold">
          <div className="flex flex-col gap-8">
            Download App
            <div className="flex gap-5 flex-col max-w-[170px] w-full">
              <a href="/" rel="noreferrer" target="_blank">
                <img
                  src="/imgs/footer-app-store.png"
                  alt="app_store"
                  className="w-full"
                />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <img
                  src="/imgs/footer-play-store.png"
                  alt="play_store"
                  className="w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
