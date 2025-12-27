import LandingBodyC from "./LandingBodyC";
import LandingBodyInfo from "./LandingBodyInfo";
import LandingBody from "./LandingBodyTitle";
import LandingContact from "./LandingContact";
import LandingFooter from "./LandingFooter";

import LandingHeader from "./LandingHeader";


export default function LandingPage() {
  return (
    <div >
        
        <LandingHeader/>
        <div className="fondo-landing-header">
          <LandingBody/>
        </div>
        <div className="fondo-landing-info">
          <LandingBodyInfo/>
        </div>
        <LandingBodyC/>

        <LandingContact/>

        <LandingFooter />

    </div>
  )
}

// 
