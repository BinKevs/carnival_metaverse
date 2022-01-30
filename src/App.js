import logo from "./logo.svg";
import "./App.css";

import Landing from "./component/Landing";
import Game_Intro from "./component/Game_Intro";
import NFT_Intro from "./component/NFT_Intro";
import CVAL_token from "./component/CVAL_token";
import Upcoming_games from "./component/Upcoming_games";
import Fusion_upgrade_system from "./component/Fusion_upgrade_system";
import FAQ from "./component/FAQ";
import Footer_page from "./component/Footer_page";

import Roadmap from "./component/Roadmap";
function App() {
  return (
    <>
      <Landing />
      <Game_Intro />
      <NFT_Intro />
      <Fusion_upgrade_system />
      <CVAL_token />
      <Upcoming_games />
      <Roadmap />
      <FAQ />
      <Footer_page />
    </>
  );
}

export default App;
