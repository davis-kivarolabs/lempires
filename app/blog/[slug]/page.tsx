import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import { DescTexts, SectionTitle } from '@/components/Texts/Texts'
import "../blogs.scss"
import { blogs, getPost } from '@/lib/cms'
import BlogContent from './BlogContent'
import Footer from '@/components/Footer'

interface BlogPageProps {
    params: {
        slug: string;
    };
}


interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}



export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  console.log("ddd", post);

  return {
    title: post?.title ?? "Blog",
    description: post?.contents?.[0]?.desc?.[0] ?? "",
  };
}


const Page = async ({ params }: BlogPageProps) => {
  const { slug } = await params;

  console.log("params", slug);

  const blog = blogs.find((item) => item.slug === slug);

  return (
    <>
      <div className="blog_detail_page padding_section">
        <BreadCrumbs title="BLOG" />

        <div className="blog_wrapper">
          <div className="detailed_blog_title">
            <div style={{ width: "40%" }}>
              <SectionTitle title_1={blog?.title || ""} />
            </div>

            <DescTexts color="#878C91" desc={blog?.created_by || ""} />
          </div>

          <BlogContent blog={blog} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;


// export async function generateMetadata({ params }: { params: any }) {
//     const post = await getPost(params.slug);
//     console.log("ddd", post)

//     return {
//         title: post?.title,
//         description: post?.contents[0]?.desc[0],
//     };
// }

// const Page = ({ params }: BlogPageProps) => {
//     const blog = blogs.find((item) => item.slug === params.slug);

//     return (
//         <>
//             <div className='blog_detail_page padding_section'>
//                 <BreadCrumbs title='BLOG ' />

//                 <div className='blog_wrapper'>
//                     <div className='detailed_blog_title'>
//                         <div style={{ width: "40%" }} >
//                             <SectionTitle title_1={blog?.title || ""} />
//                         </div>
//                         <DescTexts color='#878C91' desc={blog?.created_by || ""} />
//                     </div>

//                     <BlogContent blog={blog} />
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default Page;