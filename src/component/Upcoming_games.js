import React from "react";
import carnival_logo from "../static/landing-bg.png";

class Upcoming_games extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white h-screen border-4 flex flex-col w-full">
          <div className="my-auto">
            <div className="text-5xl font-outfit font-black text-center text-black mt-16">
              UPCOMING GAMES IN THE METAVERSE
            </div>
            <div className="flex w-full justify-center space-x-5">
              <div className="w-1/4 h-5/6 bg-stone-800">s</div>
              <div className="w-1/4 h-4/6 bg-red-800">s</div>
              <div className="w-1/4 h-4/6 bg-blue-800">s</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Upcoming_games;
