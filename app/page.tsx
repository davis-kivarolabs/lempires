import Achievements from '@/components/Achievements/Achievements'
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import ContactSection from '@/components/ContactSection/ContactSection'
import Footer from '@/components/Footer'
import OverlaySection, { OverlayCountSection } from '@/components/OverlaySection/OverlaySection'
import PropertyCarousel from '@/components/PropertyCarousel/PropertyCarousel'
import Reviews from '@/components/Reviews/Reviews'
import Services from '@/components/Services/Services'
import TitleText, { DescTexts, SectionTitle } from '@/components/Texts/Texts'
import VideoBanner from '@/components/VideoBanner/VideoBanner'
import React from 'react'


const Home = () => {
  return (
    <>
      <div className="home_page">
        <VideoBanner />
        {/* <div className="banner_section h-[100dvh] bg-[#242424] flex items-end justify-center" >
          <h1 className='text-[clamp(48px, 2vw, 84px)] text-white z-10' style={{ fontSize: "clamp(48px, 4vw, 84px)", textAlign: "center" }} >
            Architecture of <span className='text-[#3CBBCE]'>Being</span>
          </h1>
        </div> */}

        <div className="who_we_are_section"> <TitleText /> </div>
        <OverlaySection>
          <div className="home_aboutus_section padding_section">
            <div className='home_aboutus_section_titles' >
              <BreadCrumbs title='ABOUT US' />
              <SectionTitle title_1='Building Homes,' title_2='Building Trust' />
            </div>
            <div className='home_aboutus_section_desc' >
              <DescTexts color='#878C91' desc={`At L'empire Builders, we believe great spaces should feel right from the moment you enter. We create homes that balance beautiful design with practical living, blending timeless Vaastu principles with contemporary comfort. Our approach is simple: listen deeply, design intentionally, and deliver spaces where life unfolds naturally.`} />
            </div>
          </div>
        </OverlaySection>

        <div className="home_services_section" >
          <Services />
        </div>
      </div>

      <Achievements font_color='#FFFFFF' bg_color="#242424" />

      {/* <div className="home_reveiw_count_section" >
        <OverlayCountSection
          content_1={"HOMES DELIVERED"}
          content_2={"YEARS IN INDUSTRY"}
          content_3={"COUNTRY’S NRI CLIENTS"}
        />
      </div> */}

      <div className='home_portfolio_section padding_section grid gap-[23px] bg-[#F7F6F1]' >
        <BreadCrumbs title='Portfolio' />
        <PropertyCarousel />
      </div>

      <div className='home_reviews_section padding_section' style={{ paddingTop: "150px", paddingBottom: "150px" }} >
        <BreadCrumbs title='REVIEWS' />
        <Reviews />
      </div>

      <div className="home_contact_section" >
        <ContactSection />
      </div>
      <Footer title='Ready to work with us ?' />
    </>
  )
}

export default Home;


// 'use client'

// import OverlaySection from '@/components/OverlaySection/OverlaySection'
// import React from 'react'
// import { motion } from 'framer-motion'

// const Home = () => {
//   return (
//     <div className='home_page'>


//       <div className='who_we_are_section' >
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-[40px] font-bold"
//         >
//           <h1>We are Architects of Environment & <br /> Curators of Space</h1>
//         </motion.p>
//       </div>

//       <OverlaySection />
//     </div>
//   )
// }

// export default Home;