import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import React from 'react'
import "./blogs.scss"
import Blog from '@/components/Blog'
import { blogs } from '@/lib/cms'
import Footer from '@/components/Footer'

export const metadata = {
    title: "L’empire Builders Blog | Expert Tips on Building Better Homes",
    description: "Read expert blogs filled with tips, trends, and inspiration for creating thoughtful, well-designed living spaces. Learn, explore, and stay updated with fresh insights.",
};

const Blogs = () => {
    return (
        <>
            <div className='blog_page padding_section' >
                <BreadCrumbs title='BLOG ' />

                <div className='list_blogs' >
                    {
                        blogs.map((blog, i) => <Blog data={blog} key={i} />)
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blogs;