import React from "react";
import Header from "./Header/Header";
import Detailvid from "./Detailvid/Detailvid";
import Gaminginfo from "./Gaminginfo/Gaminginfo";
import Slider from "./Slider/Slider";
import GameSlides from "./GameSlides/GameSlides";
import VidSec from "./ModalVidSec/VidSec";
import MediaSec from "./MediaSection/MediaSec";
import Reviews from "./Reviews/Reviews";
import DownloadSec from "./DownloadSection/DownloadSec";
import OurPartners from "./OurPartners/OurPartners";

function Home() {
  return (
    <>
      <Header />
      <Detailvid />
      <Gaminginfo />
      <Slider />
      <GameSlides />
      <VidSec />
      <MediaSec />
      <Reviews />
      <DownloadSec />
      <OurPartners />
    </>
  );
}

export default Home;
