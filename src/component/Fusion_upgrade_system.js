import React from "react";
import fusion_upgrade_img from "../static/fusion_upgrade_img.png";

class Fusion_upgrade_system extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white md:h-screen h-full flex flex-col w-full border-4 ">
          <div className=" md:space-y-16 space-y-6 ">
            <div className="lg:text-5xl text-3xl  font-outfit font-black text-center text-black mt-16">
              FUSION UPGRADE SYSTEM
            </div>

            <div className="flex flex-col md:flex-row w-full justify-center  md:space-x-5 md:space-y-0 space-y-8  items-stretch ">
              <div className="md:w-1/4 w-10/12 md:mt-16 mt-6 md:mx-0 mx-auto ">
                <div className="font-outfit font-bold md:text-3xl text-2xl text-black md:text-right text-center">
                  We at the Carnival Metaverse introduce you our unique way of
                  giving the best benefits out of your minted NFTs!
                </div>
              </div>
              <img
                src={fusion_upgrade_img}
                alt=""
                className="mx-auto h-4/5 md:w-auto w-11/12"
              />
              <div className="md:w-1/4 w-10/12 md:mx-0 mx-auto md:pb-16 pb-6 md:flex md:items-end">
                <div className="font-outfit font-bold md:text-3xl text-2xl text-black md:text-right text-center">
                  Combine three same-tier NFTs to upgrade them a tier further
                  and receive the tier’s corresponding benefits!
                </div>
              </div>
              {/* <div className="md:w-1/4 w-10/12 md:mb-16 mb-6 md:flex md:items-end border-4">
                <div className="font-outfit font-bold md:text-3xl text-2xl text-black md:text-left text-center">
                  Combine three same-tier NFTs to upgrade them a tier further
                  and receive the tier’s corresponding benefits!
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Fusion_upgrade_system;
