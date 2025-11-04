import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import React from 'react'
import "./blogs.scss"
import Blog from '@/components/Blog'
import { blogs } from '@/lib/cms'

const Blogs = () => {
    return (
        <div className='blog_page padding_section' >
            <BreadCrumbs title='BLOG ' />

            <div className='list_blogs' >
                {
                    blogs.map((blog, i) => <Blog data={blog} key={i} />)
                }
            </div>
        </div>
    )
}

export default Blogs;