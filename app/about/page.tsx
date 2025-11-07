import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import { DescTexts, SectionTitle } from '@/components/Texts/Texts';
import Image from 'next/image';
import React from 'react'
import "./about.scss"
import Footer from '@/components/Footer';
import ApproachSection from '@/components/ApproachSection/ApproachSection';
import Achievements from '@/components/Achievements/Achievements';

export const metadata = {
    title: "About Us",
    description: "About Us",
};

const About = () => {
    return (
        <>
            <div className='about_page' >
                <div className='our_ethos_section bg-[#F7F6F1] padding_section' >
                    <div className='title_wrapper' >
                        <BreadCrumbs title='OUR ETHOS' />
                        <div style={{ textWrap: "nowrap" }} >
                            <SectionTitle title_1='Building Homes,' title_2='Building Trust' />
                        </div>
                    </div>
                    <div className='content' >
                        <DescTexts color='#878C91' desc="At L'empire Builders, we believe great spaces should feel right from the moment you enter. We create homes that balance beautiful design with practical living, blending timeless Vaastu principles with contemporary comfort. Our approach is simple: listen deeply, design intentionally, and deliver spaces where life unfolds naturally." />
                        <Image className='our_ethos_image' alt='about our ethos' src={"/images/about_our_ethos.jpg"} width={700} height={700} />
                    </div>
                </div>

                <Achievements />

                {/* <div className="founders_note_section padding_section">
                    <div className='breadcrumbs_wrapper_mob' >
                        <BreadCrumbs title='FOUNDER’S NOTE ' />
                    </div>
                    <div className='founders_list' >
                        <div className='breadcrumbs_wrapper' >
                            <BreadCrumbs title='FOUNDER’S NOTE ' />
                        </div>
                        <div className="founder_note">
                            <div className='founder_details' >
                                <Image alt='about our ethos' src={"/images/founders/albin.png"} width={294} height={441} />
                                <div>
                                    <h2 className='name' >ALBIN THOMAS</h2>
                                    <p className='position' >CO-FOUNDER</p>
                                </div>
                            </div>
                            <div className='desc' >
                                <DescTexts color='#878C91' desc="Architecture, to us, is the art of translating dreams into tangible reality. We approach each project as a unique narrative, weaving client aspirations with spatial poetry. Our commitment extends beyond construction—we craft legacies." />
                            </div>
                        </div>
                        <div className="founder_note">
                            <div className='founder_details' >
                                <Image alt='about our ethos' src={"/images/founders/emil.png"} width={294} height={441} />
                                <div>
                                    <h2 className='name' >EMIL JOSE</h2>
                                    <p className='position' >CO-FOUNDER</p>
                                </div>
                            </div>
                            <div className='desc' >
                                <DescTexts color='#878C91' desc="True excellence lies in the seamless integration of form and function. We blend artistic creativity with scientific accuracy, ensuring every project achieves perfect harmony between aesthetic appeal and practical living." />
                            </div>
                        </div>
                    </div>
                </div> */}

                <ApproachSection />


                <div className="exhibitions_section padding_section">
                    <BreadCrumbs title='EXHIBITIONS ' />
                    <div className="exhibition_pics flex justify-center items-center py-10">
                        <div className="w-full max-w-6xl px-4">
                            {/* Grid layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Left Column */}
                                <div className="grid grid-rows-2 gap-4">
                                    <div className="relative w-full h-64 md:h-80 overflow-hidden shadow">
                                        <Image
                                            src="/images/exhibition/pic_1.png"
                                            alt="Expo team interaction"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative w-full h-64 md:h-80 overflow-hidden shadow">
                                        <Image
                                            src="/images/exhibition/pic_2.png"
                                            alt="Client discussion"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="relative w-full h-[530px] md:h-[660px] overflow-hidden shadow">
                                    <Image
                                        src="/images/exhibition/pic_3.png"
                                        alt="Expo showcase"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text' >
                        <p>PARPIDAM 2025</p>
                    </div>
                </div>
            </div>
            <Footer title='Start your project with us' />
        </>
    )
}

export default About;
