import Accordion from '@/components/Accordion/Accordion'
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import { SectionTitle } from '@/components/Texts/Texts'
import React from 'react'
import "./faq.scss"
import { faqs } from '@/lib/cms'
import Footer from '@/components/Footer'

export const metadata = {
    title: "FAQs | L’empire Builders | Construction & Design Questions",
    description: "Find answers to common questions about design process, project timelines, quality standards, costing, and home renewal services. Get clarity before you build.",
};


const FAQ = () => {
    return (
        <>
            <div className='faq_page padding_section' >
                <BreadCrumbs title='FAQs' />

                <div className='faq_wrapper' >
                    {
                        faqs.map((item, index) => {
                            return (
                                <div className='accordians_wrapper' key={index} >
                                    <div style={{ textWrap: "nowrap", width: "100%" }} >
                                        <SectionTitle title_1={item.title} txt_color="#010205" />
                                    </div>
                                    <div className="accordians" style={{ width: "100%" }} >
                                        {
                                            item.accordian.map((accordion, i) => <Accordion
                                                key={i}
                                                title={accordion.title}
                                                content={accordion.desc}
                                            />)
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer title='Your next project starts here' />
        </>
    )
}

export default FAQ
