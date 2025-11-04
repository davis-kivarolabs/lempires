// app/lib/cms.ts

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  ogImage: string;
};

// For now, we’ll use a simple in-memory array.
// Later, you can replace this with a fetch() call or database.
const posts: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build your first app with Next.js 14 and TypeScript.",
    content: `
      <h2>Introduction</h2>
      <p>Next.js is a React framework that makes building fullstack apps simple.</p>
      <p>In this tutorial, we’ll set up a project, add TypeScript, and deploy it.</p>
    `,
    ogImage: "/images/nextjs-guide.jpg",
  },
  {
    slug: "smooth-scroll-with-lenis",
    title: "Smooth Scrolling with Lenis in Next.js",
    excerpt: "Add buttery-smooth scrolling to your Next.js site using Lenis.",
    content: `
      <h2>Setup</h2>
      <p>Install <code>@studio-freight/lenis</code> and wrap your layout with the SmoothScroll component.</p>
      <p>Lenis provides physics-based smooth scroll with minimal setup.</p>
    `,
    ogImage: "/images/lenis-scroll.jpg",
  },
];

// Fetch one post by slug
export async function getPost(slug: string): Promise<Post | null> {
  const post = posts.find((p) => p.slug === slug);
  return post || null;
}

// Optional: fetch all posts (for listing/blog index page)
export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export const faqs = [
  {
    title: "Process & Timeline",
    accordian: [
      {
        title: "What defines your design approach?",
        desc: [
          "We create spatial harmony through Vaastu-compliant layouts blended with contemporary aesthetics. Each design emerges from deep client collaboration, ensuring spaces reflect personal narratives while maintaining architectural integrity.",
        ],
      },
      {
        title: "How long does a typical project take?",
        desc: [
          "Timelines vary by scope: ",
          "• Interior transformations: 8-12 weeks",
          "• Custom residences: 8-14 months We maintain transparent",
          "communication throughout, with regular progress updates and milestone tracking.",
        ],
      },
    ],
  },
  {
    title: "Quality & Assurance",
    accordian: [
      {
        title: "How do you ensure construction quality?",
        desc: [
          "Through rigorous protocols: ",
          "• Premium material selection and verification",
          "• Skilled artisan craftsmanship",
          "• Multi-stage quality inspections",
          "• Continuous project supervision",
        ],
      },
      {
        title: "Can you work with existing structures?",
        desc: [
          "Absolutely. Our 'Home Renewal' service specializes in transforming existing spaces while respecting their original character. We enhance flow, update aesthetics, and optimize functionality.",
        ],
      },
    ],
  },
  {
    title: "Financial Transparency",
    accordian: [
      {
        title: "How is project costing structured?",
        desc: [
          "We provide: ",
          "• Preliminary budget assessment during consultation",
          "• Detailed transparent costing after design finalization",
          "• Clear breakdown of all project components",
          "• No hidden charges or surprise additions",
        ],
      },
    ],
  },
];


export type BlogType = {
  slug: string;
  title: string;
  image: string;
  created_by: string;
  contents:
  {
    title: string;
    image: string;
    desc: string[];
  }[]

}

export const blogs: BlogType[] =
  [
    {
      slug: "behind-the-build-what-makes-a-home-truly-last",
      title: "Behind the Build: What Makes a Home Truly Last?",
      image: "",
      created_by: "by lempire builders | Oct 13, 2025 | Blog, English",
      contents: [
        {
          title: "Introduction: Building Beyond Bricks and Mortar",
          image: "",
          desc: ["When you picture your dream home, you might imagine stylish interiors, warm lighting, and the joy of walking into your very own space. But a truly lasting home is much more than what you see. It’s about what lies beneath — the design, the materials, and the craftsmanship that hold it all together.",
            "At Lempire Builders, one of the leading construction companies in Kerala, we’ve learned that longevity isn’t a coincidence. It’s the result of smart planning, honest work, and quality in every detail. Whether it’s a modern minimalist house or a traditional family home, our mission is to create spaces that remain strong, beautiful, and functional for generations.",
            "Let’s look behind the build to discover what makes a home truly last."]
        },
        {
          title: "Strong Foundations That Stand the Test of Time",
          image: "",
          desc: ["Every great home starts with a great foundation. This is where strength, safety, and stability are born.",
            "As experienced home builders and civil contractors, we know that a foundation is more than concrete and steel. It’s about accuracy, from soil testing and leveling to waterproofing and reinforcement. Ignoring these steps can lead to long-term issues like cracks, dampness, or shifting walls.",
            "A well-built foundation may not be visible, but it quietly supports every moment you live in your home."]
        },
        {
          title: "Smart Planning and Design",
          image: "",
          desc: ["The design process decides how long your home will remain comfortable and efficient. A strong plan is not only about looks; it’s about how your space works for you every day.",
            "We start with 2D design layouts to ensure perfect space planning. Then, using 3D home visualization, our clients can see how light, movement, and furniture flow throughout the space before construction even begins.",
            "When you can visualize your home before it’s built, you make smarter decisions and avoid costly design changes later. Smart planning today saves frustration tomorrow."]
        },
        {
          title: "Choosing the Right Materials",
          image: "",
          desc: [
            "The materials you choose can make or break your home’s longevity. Even the best designs fall short if the materials don’t last.",
            "At Lempire Builders, we only use tested, high-quality materials. This includes durable cement, rust-proof steel, weather-resistant paints, and termite-proof wood. In a climate like Kerala’s, where humidity and rainfall can challenge any structure, using the right materials is non-negotiable.",
            "Even your modular kitchen design matters. Water-resistant cabinets, durable countertops, and quality fixtures ensure your kitchen stays functional and beautiful for years. A well-built home is not just about luxury; it’s about durability that adds value to your investment."
          ]
        },
        {
          title: "Interiors That Balance Beauty and Function",
          image: "",
          desc: [
            "Your interiors are where life happens. It’s where families gather, stories are shared, and comfort takes center stage. That’s why interiors should be both beautiful and built to last",
            "Our interior design team focuses on timeless concepts that never go out of style. Instead of chasing short-lived trends, we create spaces that feel elegant, balanced, and easy to maintain.",
            "From modular kitchens and cozy living spaces to custom wardrobes and creative storage solutions, our goal is to make every corner of your home functional and refined",
            "When your interiors are planned thoughtfully, they don’t just look great; they work perfectly for years without constant maintenance."
          ]
        },
        {
          title: "The Importance of the Right Team",
          image: "",
          desc: [
            "One of the most important decisions a homeowner can make is choosing the right home builders. A home’s longevity depends on experience, integrity, and attention to detail.",
            "A professional construction company ensures every stage of building, from design to finishing, follows strict quality control. It’s not just about completing a project quickly but about doing it right the first time.",
            "At Lempire Builders, we offer turnkey home construction, which means we handle everything — design, construction, interiors, and finishing. This approach saves clients time and stress, ensuring a seamless experience from start to finish.",
            "When the right team is behind your build, your home will always stand the test of time.",
          ]
        },
        {
          title: "Sustainable Design for the Future",
          image: "",
          desc: [
            "A lasting home should also be kind to the planet. Sustainable building practices make your home energy-efficient, eco-friendly, and cost-effective over time.",
            "We integrate green ideas into every project, maximizing natural light, encouraging ventilation, and using energy-efficient fixtures. From solar panel readiness to rainwater harvesting systems, small design decisions today make a big difference for the future.",
            "Sustainability isn’t just about saving resources; it’s about creating homes that stay healthy, comfortable, and efficient for decades.",
          ]
        },
        {
          title: "Building Smart Within Budget",
          image: "",
          desc: [
            "A lasting home doesn’t have to mean an expensive home. It’s about smart budgeting and choosing where to invest.",
            "Many homeowners ask, 'How much does it cost to build a house in Kerala?' The answer depends on the size, design, and finishes. That’s why we provide a clear and detailed estimate for house construction before we begin.",
            "We help clients balance costs with quality, recommending materials and layouts that deliver value without compromising on strength or style.",
            "When your budget and your builder are aligned, your home becomes a lasting investment rather than a costly project."
          ]
        },
        {
          title: "The Role of Design Technology",
          image: "",
          desc: [
            "Technology has changed the way we build. Tools like 3D home visualization and floor plan creation have made it easier for homeowners to understand their project in detail before construction starts.",
            "By previewing designs, experimenting with colors, and adjusting layouts digitally, you avoid surprises and ensure your vision is perfectly translated into reality.",
            "We combine traditional craftsmanship with modern technology to give our clients confidence at every step of the journey."
          ]
        },
        {
          title: "The Lempire Promise: Homes That Endure",
          image: "",
          desc: [
            "At Lempire Builders, we believe a lasting home is built on trust, precision, and passion. Our team brings together architects, engineers, and interior designers who share one goal — to create homes that look beautiful and stay strong.",
            "Whether it’s turnkey house construction, home renovation, or a brand-new project, we approach every build with the same commitment to quality. From foundation to finish, we make sure every detail reflects the strength and warmth of your dream.",
            "We don’t just build houses; we build places that grow with you, adapt to your lifestyle, and last through generations."
          ]
        },
        {
          title: "Conclusion: Building Homes That Truly Last",
          image: "",
          desc: [
            "A home that stands the test of time is built with more than just bricks and cement. It’s built with vision, careful planning, durable materials, and a team that truly cares.",
            "At Lempire Builders, we design and construct homes that reflect your dreams and values. Whether you’re planning to build your first home or renovate your existing one, we’re here to make it happen beautifully, sustainably, and reliably.",
            "When quality meets craftsmanship, your home becomes more than a structure. It becomes a part of your legacy.",
            "Step into the future of home building with Lempire Builders, where every detail is crafted to last."
          ]
        }
      ]
    }
  ]
