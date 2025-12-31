
import LandingBodyC from "./LandingBodyC";
import LandingBodyInfo from "./LandingBodyInfo";
import LandingBody from "./LandingBodyTitle";
import LandingContact from "./LandingContact";
import LandingFooter from "./LandingFooter";
import LandingHeader from "./LandingHeader";

export default function LandingPage() {
  return (
    <div >

 

          <section className="parallax ">
            <LandingBody/>
          </section>

          <section className="parallax2">
            <LandingBodyInfo/>
          </section>

          <section className="parallax"> 
            <LandingBodyC/>
          </section>
          
          <section className="parallax3">
            <LandingContact/>
          </section>
    


    </div>
  )
}

