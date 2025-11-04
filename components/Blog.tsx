'use client'

import Image from 'next/image'
import React from 'react'
import { DescTexts } from './Texts/Texts'
import { PrimaryButton } from './Button/Button'
import { useRouter } from 'next/navigation'
import { BlogType } from '@/lib/cms'

const Blog = ({ data }: { data: BlogType }) => {
    const router = useRouter();

    const handleRedirect = (title: string) => {
        router.push(`/blog/${title}`);
    };

    return (
        <div className='blog'>
            <Image
                className='blog_image'
                alt='blog'
                src={"/images/portfolio/MR. RIYAS RESIDENCE_1.jpg"}
                width={407}
                height={254}
            />
            <div className='blog_base_contents'>
                <div className="titles">
                    <h1>{data.title}</h1>
                    <p>{data.created_by}</p>
                </div>
                <DescTexts color='#878C91' desc='When you picture your dream home, you might imagine stylish interiors, warm lighting, and the joy of walking into your very own space. But a truly lasting home is much more than what you see.' />
                <PrimaryButton onClick={() => handleRedirect(data.slug)} bgColor='transparent' label='READ MORE' />
            </div>
        </div>
    )
}

export default Blog;


// 'use client'

// import Image from 'next/image'
// import React from 'react'
// import { DescTexts } from './Texts/Texts'
// import { PrimaryButton } from './Button/Button'

// const Blog = () => {
//     return (
//         <div className='blog' >
//             <Image className='blog_image' alt='blog' src={"/images/portfolio/MR. RIYAS RESIDENCE_1.jpg"} width={407} height={254} />
//             <div className='blog_base_contents' >
//                 <div className="titles">
//                     <h1>Behind the Build: What Makes a Home Truly Last?</h1>
//                     <p>by lempire builders | Oct 13, 2025 | Blog, English</p>
//                 </div>
//                 <DescTexts color='#878C91' desc='When you picture your dream home, you might imagine stylish interiors, warm lighting, and the joy of walking into your very own space. But a truly lasting home is much more than what you see.' />
//                 <PrimaryButton onClick={} bgColor='transparent' label='READ MORE' />
//             </div>
//         </div>
//     )
// }

// export default Blog;
