import React from "react";
import color_game_img from "../static/color-game-img.png";

class Footer_page extends React.Component {
  render() {
    return (
      <>
        <div className="bg-second-black-color h-full md:pt-36 pt-16">
          <div className="bg-fourth-black-color md:p-20 p-5 md:mx-20 mx-3 rounded-3xl md:space-y-10 space-y-3">
            <div className="text-center font-bold md:mb-32">
              <div className="text-six-black-color  md:text-2xl text-lg ">
                CARNIVAL METAVERSE
              </div>
              <div className="text-white md:text-6xl text-4xl">
                SET THE WORLD ON FUN
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-col-1 md:gap-10 gap-5">
              <div className="bg-seven-black-color md:py-6 py-3 text-center md:text-2xl md:rounded-3xl rounded-xl text-white font-bold">
                WHITEPAPER
              </div>
              <div className="bg-seven-black-color md:py-6 py-3 text-center md:text-2xl md:rounded-3xl rounded-xl text-white font-bold">
                WHITEPAPER
              </div>
              <div className="bg-seven-black-color md:py-6 py-3 text-center md:text-2xl md:rounded-3xl rounded-xl text-white font-bold">
                WHITEPAPER
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 md:w-2/3 mx-auto">
              <div className="bg-seven-black-color md:py-6 py-3 text-center md:text-2xl md:rounded-3xl rounded-xl text-white font-bold">
                WHITEPAPER
              </div>
              <div className="bg-seven-black-color md:py-6 py-3 text-center md:text-2xl md:rounded-3xl rounded-xl text-white font-bold">
                WHITEPAPER
              </div>
            </div>
          </div>
          <div className="text md:text-2xl text-center font-bold text-six-black-color py-16">
            Copyright 2021 - Carnival Metaverse
          </div>
        </div>
      </>
    );
  }
}

export default Footer_page;
