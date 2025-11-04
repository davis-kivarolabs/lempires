import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import { DescTexts, SectionTitle } from '@/components/Texts/Texts'
import "../blogs.scss"
import { blogs } from '@/lib/cms'
import BlogContent from './BlogContent'

interface BlogPageProps {
    params: {
        slug: string;
    };
}

const Page = ({ params }: BlogPageProps) => {
    const blog = blogs.find((item) => item.slug === params.slug);

    return (
        <div className='blog_detail_page padding_section'>
            <BreadCrumbs title='BLOG ' />

            <div className='blog_wrapper'>
                <div className='detailed_blog_title'>
                    <SectionTitle title_1='Behind the Build:' title_2='What Makes a Home Truly Last?' />
                    <DescTexts color='#878C91' desc='by lempire builders | Oct 13, 2025 | Blog, English' />
                </div>

                <BlogContent blog={blog} />
            </div>
        </div>
    )
}

export default Page


// import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
// import { DescTexts, SectionTitle } from '@/components/Texts/Texts'
// import React from 'react'
// import "../blogs.scss"
// import Image from 'next/image'
// import { blogs } from '@/lib/cms'



// const page = () => {
//     return (
//         <div className='blog_detail_page padding_section' >
//             <BreadCrumbs title='BLOG ' />

//             <div className='blog_wrapper' >
//                 <div className='grid gap-[10px] detailed_blog_title' >
//                     <SectionTitle title_1='Behind the Build:' title_2='What Makes a Home Truly Last?' />
//                     <DescTexts color='#878C91' desc='by lempire builders | Oct 13, 2025 | Blog, English' />
//                 </div>

//                 <div className='detail_blog' >
//                     <div className='sub_titles' >
//                         {
//                             blogs[0].contents.map((item, i) => <div className='sub_title' >
//                                 <div className='count' >
//                                     <p>{i + 1}</p>
//                                 </div>
//                                 <p className='sub_title_text' >{item.title}</p>
//                             </div>)
//                         }
//                     </div>

//                     <div className='detail_blog_content' >
//                         <Image
//                             className='details_blog_image'
//                             alt='blog'
//                             src={"/images/portfolio/MR. RIYAS RESIDENCE_1.jpg"}
//                             width={614}
//                             height={384}
//                         />
//                         <div className='detailed_blog_title_mob' >
//                             <SectionTitle title_1='Behind the Build:' title_2='What Makes a Home Truly Last?' />
//                             <DescTexts color='#878C91' desc='by lempire builders | Oct 13, 2025 | Blog, English' />
//                         </div>

//                         <div className='blog_description' >
//                             {
//                                 blogs[0].contents.map((item, i) => {
//                                     return (

//                                         <div>
//                                             <h2>{item.title}</h2>
//                                             <div className='grid gap-[15px]' >
//                                                 {
//                                                     item?.desc?.map((desc) => <DescTexts color='#878C91' desc={desc || ""} />)
//                                                 }
//                                             </div>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default page
