import Footer from "../Components/Footer";
import Header from "../Components/Header";

import "./TechStack.css";
import FooterCTASection from "../Components/FooterCTASection.jsx";
import AppDevComponent from "../Components/TechComponent/AppDevCom.jsx";
import UiComponent from "../Components/TechComponent/Ux-comp.jsx";
import DevOps from "../Components/TechComponent/DevOpsComp.jsx";
import QAComp from "../Components/TechComponent/QAComp.jsx";
import DataEngCom from "../Components/TechComponent/DataEnginCom.jsx";
import WebDevlopComponent from "../Components/TechComponent/WebDevlopComponent.jsx";
import TechHeroSection from "../Components/TechComponent/TechHeroSection.jsx";
// import { Header } from '../components/Header'WWW
// import Footer from '../components/footer'

const TechStackPage = () => {
  return (
    <div className="w-full">
      <Header />
      <TechHeroSection />
      {/* for frontend and backend tech and pic  */}

      <WebDevlopComponent />
      <AppDevComponent />
      <UiComponent />
      <DevOps />
      <QAComp />
      <DataEngCom />
      {/* lg section */}
      <FooterCTASection />
      <Footer />
    </div>
  );
};

export default TechStackPage;
