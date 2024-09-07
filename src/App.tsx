
import { Footer } from "./components/componentReusable/Footer";
import MainContainer from "./components/componentReusable/MainContainer"
import { MainTechnology } from "./components/componentReusable/MainTechnology";
import Portfolio from "./components/componentReusable/PortfolioMenu"
import { PortfolioTimeline } from "./components/componentReusable/PortfolioTimeline";
import { SertifikatOpening } from "./components/componentReusable/SertifikatOpening";
import TextRevealByWord from "./components/ui/text-reveal";


function App() {

  return (
    <>
    <MainContainer/>
    <Portfolio/>
    <PortfolioTimeline/>
    <MainTechnology/>
    <TextRevealByWord text="Terimakasih anda sudah menjelajah sejauh ini, aku harap kamu dapat bertahan hingga akhir."/>
    <SertifikatOpening/>
    <Footer/>
    </>
  )
}

export default App
