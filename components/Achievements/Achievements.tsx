import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import "./Achievements.scss"

const Achievements = ({ bg_color, font_color }: { bg_color?: string; font_color?: string; }) => {
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
                    <h2>250 <span>+</span> </h2>
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
                    <h2>15 <span>+</span> </h2>
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
                    <h2>7 <span>+</span> </h2>
                    <p>COUNTRY’S NRI CLIENTS</p>
                </div>
                <div className='list' ></div>
                <div className='list' ></div>
            </div>
        </div>
    )
}

export default Achievements;
