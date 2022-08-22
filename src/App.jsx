import styles from "./style";
// import React from 'react'i
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* <h1>Hello world </h1> */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}><Navbar />Hone Features Products Clients</div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>



        
        </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       < Stats />
       < Business/> 
       < Billing />
       < CardDeal />
       < Testimonials/> 
       < Clients />
       < CTA />
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;
