import React from 'react';
import "./ApproachSection.scss"
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

const ApproachSection = () => {
    return (
        <div className='approach_section padding_section' >
            <div className='lists' >
                <div className='list' >
                    <BreadCrumbs color='#F7F6F180' title='OUR DISTINCTION ' />
                </div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
            </div>
            <div className='lists' >
                <div className='list' ></div>
                <div className='list content' >
                    <h2>HOLISTIC APPROACH</h2>
                    <p>Architecture and interiors conceived as one cohesive vision</p>
                </div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
            </div>
            <div className='lists' >
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list content' >
                    <h2>VAASTU INTEGRATION</h2>
                    <p>Ancient wisdom meeting modern design principles</p>
                </div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
            </div>
            <div className='lists' >
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list content' >
                    <h2>TECHNOLOGICAL MASTERY</h2>
                    <p>Precision planning through AutoCAD 2D and 3D visualization</p>
                </div>
                <div className='list' ></div>
                <div className='list' ></div>
            </div>
            <div className='lists' >
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list' ></div>
                <div className='list content' >
                    <h2>TURNKEY EXCELLENCE</h2>
                    <p>Seamless execution from concept to completion</p>
                </div>
                <div className='list' ></div>
            </div>
        </div>
    )
}

export default ApproachSection
