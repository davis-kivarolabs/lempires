import { getPost } from '@/lib/cms';
import PostContent from '@/lib/PostContent';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.contents[0].desc[0]
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return <p>Not found</p>;
    return <PostContent post={post} />;
}


// // import { getPost } from '@/lib/cms';
// import { getPost } from '@/lib/cms';
// import PostContent from '@/lib/PostContent';
// import type { Metadata } from 'next';
// // import PostContent from '@/components/PostContent';

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//     const post = await getPost(params.slug);
//     if (!post) return {};
//     return {
//         title: post.title,
//         description: post.excerpt,
//         openGraph: {
//             title: post.title,
//             description: post.excerpt,
//             images: [{ url: post.ogImage }],
//             type: 'article',
//         },
//     };
// }

// export default async function Page({ params }: { params: { slug: string } }) {
//     const post = await getPost(params.slug);
//     if (!post) return <p>Not found</p>;
//     return <PostContent post={post} />;
// }
