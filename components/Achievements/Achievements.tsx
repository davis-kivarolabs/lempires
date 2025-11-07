'use client'

import "./Achievements.scss"
const Achievements = ({ bg_color, font_color }: { bg_color?: string; font_color?: string; }) => {
    const homeDelivered: any = useCountUp(250);
    const yearsIndustry: any = useCountUp(15);
    const nriClients: any = useCountUp(7);

    return (
        <div className='achievements_section padding_section' style={{ backgroundColor: bg_color }} >
            <div className='lists' >
                <div className='list' >
                    <BreadCrumbs color='#8D8D8A' title='ACHIEVEMENTS ' />
                </div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
            </div>

            <div className='lists' >
                <div className='list' ></div>
                <div className='list content' style={{ color: font_color }} >
                    <h2 ref={homeDelivered.ref}>{homeDelivered.count} <span>+</span></h2>
                    <p>HOMES DELIVERED</p>
                </div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
            </div>

            <div className='lists' >
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list content' style={{ color: font_color }} >
                    <h2 ref={yearsIndustry.ref}>{yearsIndustry.count} <span>+</span></h2>
                    <p>YEARS IN INDUSTRY</p>
                </div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
            </div>

            <div className='lists' >
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list content' style={{ color: font_color }} >
                    <h2 ref={nriClients.ref}>{nriClients.count} <span>+</span></h2>
                    <p>COUNTRY’S NRI CLIENTS</p>
                </div>
                <div className='list' ></div>
                <div className='list' ></div>
            </div>
        </div>
    )
}

export default Achievements;

import { useEffect, useState, useRef } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

function useCountUp(end: number, duration = 1500) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const stepTime = Math.abs(Math.floor(duration / end));
                    const timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start === end) clearInterval(timer);
                    }, stepTime);

                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return { count, ref };
}



// import React from 'react'
// import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
// import "./Achievements.scss"

// const Achievements = ({ bg_color, font_color }: { bg_color?: string; font_color?: string; }) => {
//     return (
//         <div className='achievements_section padding_section' style={{ backgroundColor: bg_color }} >
//             <div className='lists' >
//                 <div className='list' >
//                     <BreadCrumbs color='#8D8D8A' title='ACHIEVEMENTS ' />
//                 </div>
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//             </div>
//             <div className='lists' >
//                 <div className='list' ></div>
//                 <div className='list content' style={{ color: font_color }} >
//                     <h2>250 <span>+</span> </h2>
//                     <p>HOMES DELIVERED</p>
//                 </div>
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//             </div>
//             <div className='lists' >
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//                 <div className='list content' style={{ color: font_color }} >
//                     <h2>15 <span>+</span> </h2>
//                     <p>YEARS IN INDUSTRY</p>
//                 </div>
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//             </div>
//             <div className='lists' >
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//                 <div className='list content' style={{ color: font_color }} >
//                     <h2>7 <span>+</span> </h2>
//                     <p>COUNTRY’S NRI CLIENTS</p>
//                 </div>
//                 <div className='list' ></div>
//                 <div className='list' ></div>
//             </div>
//         </div>
//     )
// }

// export default Achievements;
