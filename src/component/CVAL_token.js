import React from "react";
import carnival_logo from "../static/landing-bg.png";

class CVAL_token extends React.Component {
  render() {
    return (
      <>
        <div className="md:bg-cval-token-bg bg-white md:h-screen h-full flex flex-col md:flex-row md:py-0 py-20">
          <div className="md:w-1/2 w-full flex md:justify-end justify-center">
            <div className="w-4/5 my-auto">
              {" "}
              <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6">
                <div className="md:text-5xl text-3xl font-outfit font-black md:text-start text-center text-black my-auto">
                  $CVAL TOKEN
                </div>
                <div>
                  <button
                    className={
                      "md:px-14 px-8 md:py-5 py-4  md:text-lg text-md font-outfit font-bold  bg-violet-color text-white rounded-xl"
                    }
                  >
                    ADD TO PHANTOM
                  </button>
                </div>
              </div>
              <div className="md:text-2xl text-lg mx-auto font-outfit font-bold md:text-left text-center text-black mt-8 md:space-y-10 space-y-5 md:w-11/12 w-full ">
                <div>
                  $CVAL Tokens are used as an in-game currency for all the games
                  introduced in the Carnival Metaverse.
                </div>
                <div>
                  $CVAL Official Contract Address
                  <div className="text-violet-color">
                    0xJ1H23jh123123n H141h9t5Ps562x24bG557
                  </div>
                </div>
                <div>
                  Listing and Game Release:
                  <div>-$CVAL will be listed on Pancakeswap on February.</div>
                  <div>
                    -Game will be released on March 1, in a web platform.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex md:justify-start justify-center ">
            <div className="w-3/4 h-5/6 my-auto bg-stone-900 rounded-3xl p-40">
              dasfasdf
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CVAL_token;
