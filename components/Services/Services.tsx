"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { DescTexts, ServicesTitle } from "../Texts/Texts";
import { PrimaryButton } from "../Button/Button";
import "./Services.scss";

const servicesData = [
  {
    title: "TURNKEY RESIDENCES",
    desc: "Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.",
    image: "/images/services/TURNKEY RESIDENCES.png",
  },
  {
    title: "2D / 3D DESIGNS",
    desc: "Architectural solutions balancing modern needs with ancient wisdom. Spaces that feel right and function perfectly.",
    image: "/images/services/VAASTU-COMPLIANT DESIGNS.png",
  },
  {
    title: "INTERIOR TRANSFORMATIONS",
    desc: "Creative makeovers showcasing dramatic yet functional transformations.",
    image: "/images/services/INTERIOR TRANSFORMATIONS.png",
  },
  {
    title: "NRI DREAM PROJECTS",
    desc: "Space reimagining through strategic design interventions. Before-and-after journeys showcasing dramatic yet functional makeovers.",
    image: "/images/services/NRI DREAM PROJECTS.png",
  },
  // {
  //     title: "VAASTU-COMPLIANT DESIGNS",
  //     desc: "Architectural solutions balancing modern needs with ancient wisdom. Spaces that feel right and function perfectly.",
  //     image: "/images/services/VAASTU-COMPLIANT DESIGNS.png",
  // },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);
  const leftOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={sectionRef} className="services_section">
      {/* LEFT SIDE CONTENT */}
      <motion.div
        className="services_section_contents"
        style={{ opacity: leftOpacity }}
      >
        <div className="breadcrumb_wrap">
          <BreadCrumbs title="SERVICES" />
        </div>

        {/* DESKTOP SERVICE TEXT */}
        <div className="desktop_services">
          {servicesData.map((service, index) => {
            return (
              <AnimatedService
                key={index}
                index={index}
                total={servicesData.length}
                title={service.title}
                desc={service.desc}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
          <div className="btn_wrap">
            <PrimaryButton label="MORE ABOUT US" />
          </div>
        </div>

        {/* MOBILE SERVICE (Title + Desc + Image) */}
        <div className="mobile_services">
          {servicesData.map((service, index) => (
            <div key={index} className="mobile_service_block">
              <ServicesTitle title={service.title} />
              <DescTexts color="#878C91" desc={service.desc} />
              <Image
                src={service.image}
                alt={service.title}
                width={1200}
                height={800}
                className="mobile_service_image"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
          <div className="btn_wrap">
            <PrimaryButton label="MORE ABOUT US" />
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE IMAGES (DESKTOP ONLY) */}
      <div className="services_section_images">
        {servicesData.map((service, index) => (
          <CrossfadeImage
            key={index}
            index={index}
            total={servicesData.length}
            image={service.image}
            scrollYProgress={scrollYProgress}
            imageY={imageY}
          />
        ))}
      </div>
    </section>
  );
};

const AnimatedService = ({
  title,
  desc,
  index,
  total,
  scrollYProgress,
}: {
  title: string;
  desc: string;
  index: number;
  total: number;
  scrollYProgress: any;
}) => {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;
  const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [start, start + 0.1], [600, 0]);
  // const y = useTransform(scrollYProgress, [start, start + 0.1], [40, 0]);

  return (
    <motion.div
      style={{
        opacity,
        y,
        transition: "opacity 0.6s ease, transform 0.6s ease",
        marginBottom: "40px",
      }}
    >
      <ServicesTitle title={title} />
      <DescTexts color="#878C91" desc={desc} />
    </motion.div>
  );
};

const CrossfadeImage = ({
  image,
  index,
  total,
  scrollYProgress,
  imageY,
}: {
  image: string;
  index: number;
  total: number;
  scrollYProgress: any;
  imageY: any;
}) => {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{
        opacity,
        y: imageY,
        position: "absolute",
        inset: 0,
      }}
    >
      <Image
        src={image}
        alt="Service Image"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        priority
      />
    </motion.div>
  );
};

export default Services;

// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
// import { DescTexts, ServicesTitle } from "../Texts/Texts";
// import { PrimaryButton } from "../Button/Button";
// import "./Services.scss"

// const servicesData = [
//     {
//         title: "TURNKEY RESIDENCES",
//         desc: "Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.",
//         image: "/images/service_img.jpg",
//     },
//     {
//         title: "NRI DREAM PROJECTS",
//         desc: "Space reimagining through strategic design interventions. Before-and-after journeys showcasing dramatic yet functional makeovers.",
//         image: "/images/service_img_2.jpg",
//     },
//     {
//         title: "INTERIOR TRANSFORMATIONS",
//         desc: "Creative makeovers showcasing dramatic yet functional transformations.",
//         image: "/images/service_img.jpg",
//     },
//     {
//         title: "VAASTU-COMPLIANT DESIGNS",
//         desc: "Architectural solutions balancing modern needs with ancient wisdom. Spaces that feel right and function perfectly.",
//         image: "/images/service_img_2.jpg",
//     },
// ];

// const Services = () => {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start end", "end start"],
//     });

//     const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);

//     const leftOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.9, 1], [0, 1, 1, 0]);

//     return (
//         <section ref={sectionRef} className="services_section" >

//             <motion.div className="services_section_contents" style={{ opacity: leftOpacity }}  >
//                 <div style={{ marginBottom: "60px", display: "flex", alignItems: "center" }}>
//                     <BreadCrumbs title="SERVICES" />
//                 </div>

//                 <div>
//                     {servicesData.map((service, index) => (
//                         <AnimatedService key={index} index={index} total={servicesData.length} title={service.title} desc={service.desc} scrollYProgress={scrollYProgress} />
//                     ))}
//                     <div><PrimaryButton label="MORE ABOUT US" /></div>
//                 </div>
//             </motion.div>

//             <div className="services_section_images" >
//                 {servicesData.map((service, index) => (
//                     <CrossfadeImage key={index} index={index} total={servicesData.length} image={service.image} scrollYProgress={scrollYProgress} imageY={imageY} />
//                 ))}
//             </div>
//         </section>
//     );
// };

// const AnimatedService = ({ title, desc, index, total, scrollYProgress }: { title: string; desc: string; index: number; total: number; scrollYProgress: any }) => {
//     const step = 1 / total;
//     const start = index * step;
//     const end = (index + 1) * step;

//     const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);
//     const y = useTransform(scrollYProgress, [start, start + 0.1], [40, 0]);

//     return (
//         <motion.div style={{ opacity, y, transition: "opacity 0.6s ease, transform 0.6s ease", marginBottom: "40px", }} >
//             <ServicesTitle title={title} />
//             <DescTexts color="#878C91" desc={desc} />
//         </motion.div>
//     );
// };

// const CrossfadeImage = ({ image, index, total, scrollYProgress, imageY, }: { image: string; index: number; total: number; scrollYProgress: any; imageY: any }) => {
//     const step = 1 / total;
//     const start = index * step;
//     const end = (index + 1) * step;

//     const opacity = useTransform(scrollYProgress, [start - 0.05, start, end, end + 0.05], [0, 1, 1, 0]);
//     return (
//         <motion.div
//             style={{ opacity, y: imageY, position: "absolute", inset: 0, }} >
//             <Image src={image} alt="Service Image" fill style={{ objectFit: "cover", objectPosition: "center", }} priority />
//         </motion.div>
//     );
// };

// export default Services;
