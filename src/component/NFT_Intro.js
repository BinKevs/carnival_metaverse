import React from "react";
import color_game_img from "../static/color-game-img.png";

class NFT_Intro extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white lg:h-screen h-full flex flex-col md:py-0 py-20">
          <div className="my-auto space-y-16">
            <div className="lg:text-6xl text-4xl lg:w-2/5 w-10/12 mx-auto font-outfit font-black text-center text-black">
              COLOR GAME NFT
            </div>
            <div className="flex flex-col lg:flex-row items-center  justify-center lg:space-x-5 space-x-0 lg:space-y-0 space-y-5">
              <div className="rounded-3xl h-full lg:w-auto w-11/12">
                <img src={color_game_img} alt="" className="mx-auto h-4/5" />
                {/* <div className="text-center mt-10">
                  <button
                    className={
                      "px-10 py-5  text-xl font-outfit font-bold  bg-light-black-color bg-opacity-20 text-white rounded-xl"
                    }
                  >
                    MINT NOW
                  </button>
                </div> */}
              </div>
              <div className="bg-second-black-color lg:p-16 p-8 lg:w-1/4 w-11/12 rounded-3xl">
                <div className="lg:text-4xl text-3xl mx-auto font-outfit font-black text-center text-white mt-6">
                  NFT Utilities
                </div>
                <div className="text-md mx-auto font-outfit font-bold text-start text-white mt-5 lg:space-y-5 space-y-1">
                  <div>
                    • 100 $CVAL Token airdrop every day for the first month,
                    access to Beta version of upcoming games. (for Common, Rare,
                    Epic rarity holder/s) – 66%
                  </div>
                  <div>
                    • 10% bet refund when losing. (for Rare and Epic rarity
                    holder/s) – 33%
                  </div>
                  <div>
                    • 10% of the Royalties from secondary marketplaces will be
                    distributed. (for Epic rarity holder/s only) – 1%
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-second-black-color p-7 w-1/4 h-3/5">
              <div className="">
                <div className="text-3xl mx-auto font-outfit font-black text-center text-white mt-10">
                  Fusion Upgrade System
                </div>
                <div className="text-md mx-auto font-outfit font-bold text-start text-white mt-8 space-y-5">
                  <div>
                    • (3) Common Color NFTs can be fusion upgraded to be a (1)
                    Rare Color NFT.
                  </div>
                  <div>
                    • (3) Rare Color NFTs can be fusion upgraded to be an (1)
                    Epic Color NFT.
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default NFT_Intro;
