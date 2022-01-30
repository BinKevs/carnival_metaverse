import React from "react";

import carnival_logo from "../static/carnival-metaverse-logo.png";
class Roadmap extends React.Component {
  render() {
    return (
      <>
        <div className="bg-second-black-color md:h-screen h-full flex flex-col">
          <div className="my-auto md:space-y-28 space-y-10 ">
            <div className="flex md:flex-row flex-col md:ml-10 justify-start items-center md:mt-0 mt-10">
              <img src={carnival_logo} alt="" className="w-28" />
              <div className="md:text-5xl text-3xl my-auto font-outfit font-black text-start text-white">
                ROADMAP 1.0
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center md:space-x-10 md:space-y-0 space-y-10 md:items-baseline items-center">
              <div className="border-4 border-white md:p-20 p-14 md:w-1/4 w-11/12 rounded-3xl space-y-16">
                <div>
                  <div className="md:text-3xl text-xl text-left font-outfit font-semibold text-white">
                    November - January
                  </div>
                  <div className="md:text-5xl text-3xl text-left font-outfit font-semibold text-first-green-color">
                    Stage One
                  </div>
                </div>

                <div className="md:text-2xl text-lg mx-auto font-outfit font-bold text-start text-white mt-5 space-y-2">
                  <div>• Conceptualization</div>
                  <div>• Game Assets Development</div>
                  <div>• Social Media Channels</div>
                  <div>• Website Release</div>
                  <div className="text-third-black-color">
                    • Color Game Demo Release
                  </div>
                  <div className="text-third-black-color">
                    • $CVAL Token Release
                  </div>
                  <div className="text-third-black-color">
                    • Whitepaper Release
                  </div>
                </div>
              </div>

              <div className="border-4 border-white md:w-1/5 w-10/12 md:p-12 p-7 rounded-3xl space-y-5 my-auto">
                <div>
                  <div className="md:text-3xl text-xl text-left font-outfit font-semibold text-white">
                    February - March
                  </div>
                  <div className="md:text-5xl text-3xl text-left font-outfit font-semibold text-second-green-color">
                    Stage Two
                  </div>
                </div>

                <div className="md:text-lg text-sm mx-auto font-outfit font-bold text-start text-third-black-color mt-5 space-y-1">
                  <div>• Community Growth</div>
                  <div>• NFT Minting</div>
                  <div>• Rarity Table Release</div>
                  <div>• Liquidity Pool Funding</div>
                  <div>• Color Game Official Release</div>
                  <div>• Claw Machine Demo Release</div>
                  <div>• Roadmap 2.0 Release</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Roadmap;
