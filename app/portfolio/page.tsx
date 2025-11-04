'use client'

import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import { PropertyCarouselPerson } from '@/components/PropertyCarousel/PropertyCarousel';
import { portfolios } from '@/lib/cms';
import React from 'react'

const portfolio = () => {
    return (
        <div className='portfolio_page padding_section' >
            <div style={{ paddingTop: "100px" }} >
                <div className='flex' style={{ marginBottom: "23px" }} >
                    <BreadCrumbs title='Portfolio' />
                </div>
                <div className='grid gap-[50px]' >
                    {portfolios.map((item, i) => <PropertyCarouselPerson item={item} key={i} />)}
                </div>
            </div>
        </div>
    )
}

export default portfolio;
