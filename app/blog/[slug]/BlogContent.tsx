'use client'

import React, { useRef, useState } from 'react'
import { DescTexts, SectionTitle } from '@/components/Texts/Texts'
import Image from 'next/image'
import { BlogType } from '@/lib/cms'


const BlogContent = ({ blog }: { blog: BlogType | undefined }) => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleScrollToSection = (index: number) => {
        const section = sectionRefs.current[index]
        if (section) {
            const offset = 150
            const topPos = section.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({
                top: topPos,
                behavior: 'smooth'
            })
            setActiveIndex(index)
        }
    }

    return (
        <div className='detail_blog'>
            <div className='sub_titles'>
                {blog?.contents?.map((item, i) => (
                    <div
                        key={i}
                        className={`sub_title cursor-pointer transition-all duration-200 ${activeIndex === i ? 'active_subtitle' : ''}`}
                        onClick={() => handleScrollToSection(i)}
                    >
                        <div className='count'>
                            <p>{i + 1}</p>
                        </div>
                        <p className='sub_title_text'>{item.title}</p>
                    </div>
                ))}
            </div>

            <div className='detail_blog_content'>
                <Image
                    className='details_blog_image'
                    alt='blog'
                    src={blog?.image || ""}
                    width={614}
                    height={500}
                />

                <div className='detailed_blog_title_mob'>
                    <SectionTitle title_1={blog?.title || ""} />
                    <DescTexts color='#878C91' desc={blog?.created_by || ""} />
                    {/* <SectionTitle title_1='Behind the Build:' title_2='What Makes a Home Truly Last?' /> */}
                    {/* <DescTexts color='#878C91' desc='by lempire builders | Oct 13, 2025 | Blog, English' /> */}
                </div>

                <div className='blog_description'>
                    {blog?.contents?.map((item, i) => (
                        <div
                            key={i}
                            ref={(el: any) => (sectionRefs.current[i] = el)}
                            className='blog_section mb-[50px]'
                        >
                            <h2>{item.title}</h2>
                            <div className='grid gap-[15px]'>
                                {item.desc.map((desc, idx) => (
                                    <DescTexts key={idx} color='#878C91' desc={desc} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogContent
