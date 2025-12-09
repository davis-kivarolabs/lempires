// app/lib/cms.ts

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
          "Interior transformations: 8-12 weeks",
          "Custom residences: 8-14 months We maintain transparent",
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
          "Premium material selection and verification",
          "Skilled artisan craftsmanship",
          "Multi-stage quality inspections",
          "Continuous project supervision",
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
          "Preliminary budget assessment during consultation",
          "Detailed transparent costing after design finalization",
          "Clear breakdown of all project components",
          "No hidden charges or surprise additions",
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
  contents: {
    title: string;
    image: string;
    desc: string[];
  }[];
};

export const blogs: BlogType[] = [
  {
    slug: "behind-the-build-what-makes-a-home-truly-last",
    title: "Behind the Build: What Makes a Home Truly Last?",
    image: "/images/blogs/behind_the_build.png",
    created_by: "by L'empire builders | Oct 13, 2025 | Blog, English",
    contents: [
      {
        title: "Introduction: Building Beyond Bricks and Mortar",
        image: "",
        desc: [
          "When you picture your dream home, you might imagine stylish interiors, warm lighting, and the joy of walking into your very own space. But a truly lasting home is much more than what you see. It's about what lies beneath — the design, the materials, and the craftsmanship that hold it all together.",
          "At Lempire Builders, one of the leading construction companies in Kerala, we've learned that longevity isn't a coincidence. It's the result of smart planning, honest work, and quality in every detail. Whether it's a modern minimalist house or a traditional family home, our mission is to create spaces that remain strong, beautiful, and functional for generations.",
          "Let's look behind the build to discover what makes a home truly last.",
        ],
      },
      {
        title: "Strong Foundations That Stand the Test of Time",
        image: "",
        desc: [
          "Every great home starts with a great foundation. This is where strength, safety, and stability are born.",
          "As experienced home builders and civil contractors, we know that a foundation is more than concrete and steel. It's about accuracy, from soil testing and leveling to waterproofing and reinforcement. Ignoring these steps can lead to long-term issues like cracks, dampness, or shifting walls.",
          "A well-built foundation may not be visible, but it quietly supports every moment you live in your home.",
        ],
      },
      {
        title: "Smart Planning and Design",
        image: "",
        desc: [
          "The design process decides how long your home will remain comfortable and efficient. A strong plan is not only about looks; it's about how your space works for you every day.",
          "We start with 2D design layouts to ensure perfect space planning. Then, using 3D home visualization, our clients can see how light, movement, and furniture flow throughout the space before construction even begins.",
          "When you can visualize your home before it's built, you make smarter decisions and avoid costly design changes later. Smart planning today saves frustration tomorrow.",
        ],
      },
      {
        title: "Choosing the Right Materials",
        image: "",
        desc: [
          "The materials you choose can make or break your home's longevity. Even the best designs fall short if the materials don't last.",
          "At Lempire Builders, we only use tested, high-quality materials. This includes durable cement, rust-proof steel, weather-resistant paints, and termite-proof wood. In a climate like Kerala's, where humidity and rainfall can challenge any structure, using the right materials is non-negotiable.",
          "Even your modular kitchen design matters. Water-resistant cabinets, durable countertops, and quality fixtures ensure your kitchen stays functional and beautiful for years. A well-built home is not just about luxury; it's about durability that adds value to your investment.",
        ],
      },
      {
        title: "Interiors That Balance Beauty and Function",
        image: "",
        desc: [
          "Your interiors are where life happens. It's where families gather, stories are shared, and comfort takes center stage. That's why interiors should be both beautiful and built to last",
          "Our interior design team focuses on timeless concepts that never go out of style. Instead of chasing short-lived trends, we create spaces that feel elegant, balanced, and easy to maintain.",
          "From modular kitchens and cozy living spaces to custom wardrobes and creative storage solutions, our goal is to make every corner of your home functional and refined",
          "When your interiors are planned thoughtfully, they don't just look great; they work perfectly for years without constant maintenance.",
        ],
      },
      {
        title: "The Importance of the Right Team",
        image: "",
        desc: [
          "One of the most important decisions a homeowner can make is choosing the right home builders. A home's longevity depends on experience, integrity, and attention to detail.",
          "A professional construction company ensures every stage of building, from design to finishing, follows strict quality control. It's not just about completing a project quickly but about doing it right the first time.",
          "At Lempire Builders, we offer turnkey home construction, which means we handle everything — design, construction, interiors, and finishing. This approach saves clients time and stress, ensuring a seamless experience from start to finish.",
          "When the right team is behind your build, your home will always stand the test of time.",
        ],
      },
      {
        title: "Sustainable Design for the Future",
        image: "",
        desc: [
          "A lasting home should also be kind to the planet. Sustainable building practices make your home energy-efficient, eco-friendly, and cost-effective over time.",
          "We integrate green ideas into every project, maximizing natural light, encouraging ventilation, and using energy-efficient fixtures. From solar panel readiness to rainwater harvesting systems, small design decisions today make a big difference for the future.",
          "Sustainability isn't just about saving resources; it's about creating homes that stay healthy, comfortable, and efficient for decades.",
        ],
      },
      {
        title: "Building Smart Within Budget",
        image: "",
        desc: [
          "A lasting home doesn't have to mean an expensive home. It's about smart budgeting and choosing where to invest.",
          "Many homeowners ask, 'How much does it cost to build a house in Kerala?' The answer depends on the size, design, and finishes. That's why we provide a clear and detailed estimate for house construction before we begin.",
          "We help clients balance costs with quality, recommending materials and layouts that deliver value without compromising on strength or style.",
          "When your budget and your builder are aligned, your home becomes a lasting investment rather than a costly project.",
        ],
      },
      {
        title: "The Role of Design Technology",
        image: "",
        desc: [
          "Technology has changed the way we build. Tools like 3D home visualization and floor plan creation have made it easier for homeowners to understand their project in detail before construction starts.",
          "By previewing designs, experimenting with colors, and adjusting layouts digitally, you avoid surprises and ensure your vision is perfectly translated into reality.",
          "We combine traditional craftsmanship with modern technology to give our clients confidence at every step of the journey.",
        ],
      },
      {
        title: "The Lempire Promise: Homes That Endure",
        image: "",
        desc: [
          "At Lempire Builders, we believe a lasting home is built on trust, precision, and passion. Our team brings together architects, engineers, and interior designers who share one goal — to create homes that look beautiful and stay strong.",
          "Whether it's turnkey house construction, home renovation, or a brand-new project, we approach every build with the same commitment to quality. From foundation to finish, we make sure every detail reflects the strength and warmth of your dream.",
          "We don't just build houses; we build places that grow with you, adapt to your lifestyle, and last through generations.",
        ],
      },
      {
        title: "Conclusion: Building Homes That Truly Last",
        image: "",
        desc: [
          "A home that stands the test of time is built with more than just bricks and cement. It's built with vision, careful planning, durable materials, and a team that truly cares.",
          "At Lempire Builders, we design and construct homes that reflect your dreams and values. Whether you're planning to build your first home or renovate your existing one, we're here to make it happen beautifully, sustainably, and reliably.",
          "When quality meets craftsmanship, your home becomes more than a structure. It becomes a part of your legacy.",
          "Step into the future of home building with Lempire Builders, where every detail is crafted to last.",
        ],
      },
    ],
  },
  {
    slug: "interior-design-struggles-clients-face-in-kerala",
    title: "Interior Design Struggles Clients Face in Kerala",
    image: "/images/blogs/interior_design_struggles.jpg",
    created_by: "by lempire builders | Oct 10, 2025 | Blog, English, Interior",
    contents: [
      {
        title: "I Don't Know Where to Start - The Overwhelm of Beginning",
        image: "",
        desc: [
          "For many first-time home builders and families, the entire process can feel overwhelming. It's often unclear what should come first—floor plans or interior design—and how to balance lighting, furniture placement, and vastu principles together. Without a structured approach, people end up coordinating multiple freelancers, carpenters, and vendors on their own, leading to confusion, delays, and unsatisfactory results.",
          "To avoid this, it's important to choose turnkey services that provide complete support from planning to execution. L'empire Builders offers end-to-end guidance, including space planning, 3D visualizations, and on-ground execution. With 1:1 consultations and a clear step-by-step process, clients always know what to expect at every stage of their project.",
        ],
      },
      {
        title: "Hidden Interior Design Costs & Budget Anxiety in Kerala",
        image: "",
        desc: [
          "One of the biggest concerns homeowners face is unexpected budget escalation. Many start with a quoted amount—like ₹5 lakhs—only to be told midway that the cost has risen to ₹9 lakhs. This kind of scope creep is common, especially when quotes are vague, material pricing isn't transparent, or additional work keeps getting added without clarity.",
          "The solution is to work with teams who prioritize transparency. Look for detailed BOQs, package-based pricing, and clear lists of what's included and what's not. With L'empire Builders' custom design packages, every cost is clearly defined from the beginning, ensuring you know exactly what you are paying for with no hidden surprises.",
        ],
      },

      {
        title: "Poor Execution & Delays",
        image: "",
        desc: [
          "Many homeowners experience this: you finalize a beautiful design, pay the advance, and then communication stops. Weeks pass, and when you check the site, the execution looks nothing like what was promised. This usually happens due to the absence of proper project management, unskilled labor, and poor on-site supervision, leading to misalignment between design and reality.",
          "To avoid this, choose a team that offers dedicated site engineers, a defined project timeline, and consistent weekly progress updates. Clear accountability and structured execution ensure the final result matches the design you approved.",
        ],
      },
      {
        title: "Remote Control Problems (Especially for NRIs)",
        image: "",
        desc: [
          "For Malayalis living abroad in the Gulf, UK, or US, managing an interior project back home can feel uncertain and stressful. Without the ability to visit the site, many are left relying on occasional photos and fragmented updates, making the entire process feel like they're working blind.",
          "This lack of transparency often leads to trust issues and a disconnect from the project's progress and quality. NRIs deserve a system that keeps them involved and informed, ensuring their vision is executed exactly as intended—even from thousands of miles away.",
        ],
      },
      {
        title: "Interior Designs That Don't Match Your Lifestyle",
        image: "",
        desc: [
          "Many interiors may look appealing in photos but fail to work in everyday life. Common problems include limited storage, poor lighting planning, and kitchens or work-from-home spaces that don't support real usage. For young professionals and newly married couples, generic, one-size-fits-all layouts often feel impractical and uninspiring.",
          "To avoid this, work with designers who take time to understand your routine, habits, and lifestyle—not just your budget. At L'empire Builders, interiors are customized to be modern, functional, and minimal, with smart modular solutions that align with the needs of tech-savvy homeowners.",
        ],
      },
      {
        title: "Poor Communication & Vanishing Designers",
        image: "",
        desc: [
          "Many clients face the frustration of poor communication during interior projects. Messages get ignored, revisions take far too long, and some designers even disappear after receiving the final payment. This leaves homeowners feeling stuck, helpless, and burdened with an incomplete or poorly executed space.",
          "To prevent this, work with teams that have clear service-level agreements, structured communication practices, and a full support team rather than a single freelancer. With L'empire Builders, you receive a dedicated point of contact who provides consistent updates, manages follow-ups, and stays with you through execution, handover, and post-completion support.",
        ],
      },
      {
        title: "Conclusion: Don't Let Frustration Ruin Your Dream Home",
        image: "",
        desc: [
          "Interior design shouldn't feel overwhelming. With the right team guiding you, the process can be enjoyable, creative, and deeply meaningful. Whether you're a Kerala family seeking a peaceful home, an NRI building from abroad, or a young achiever wanting a modern aesthetic, your space should reflect your life and aspirations.",
          "Your dream deserves a process rooted in clarity and care. With thoughtful planning, transparent communication, and a team committed to execution, you can build a home that feels personal, functional, and truly yours.",
        ],
      },
      {
        title: "Conclusion: Don't Let Frustration Ruin Your Dream Home",
        image: "",
        desc: [
          `
            <li>
            <ul>skdfjasdklf dfkjasdkl;fa</ul>
            </li>
            `,
        ],
      },
    ],
  },
  {
    slug: "best-time-to-build-a-house-in-kerala-seasonal-guide",
    title: "Best Time to Build a House in Kerala | Seasonal Guide",
    image: "/images/blogs/best_time_to_build.png",
    created_by: "by lempire builders | Oct 6, 2025 | Blog, English",
    contents: [
      {
        title: "Understanding Kerala's Weather and Why It Matters",
        image: "",
        desc: [
          "Kerala's climate includes four major phases: summer, the southwest monsoon, the northeast monsoon, and winter. Each of these seasons has a unique impact on building materials, work timelines, and quality control. Poor planning around weather often leads to delays, structural issues, and budget overruns.",
          "At L'empire Builders, we understand Kerala's climate inside-out — and help you plan smartly, ensuring on-time project completion with quality assurance.",
        ],
      },
      {
        title: "Seasonal House Construction Guide for Kerala",
        image: "",
        desc: [
          "Summer (February to May) is generally the best time to begin home construction in Kerala. The dry climate and lower humidity create ideal conditions for foundation work, structural construction, roof slab casting, and wall building. Cement curing is more efficient during this period, and the soil remains stable, making it a reliable phase to start major construction activities.",
          "During the monsoon season (June to September), frequent rain, moisture, and the risk of flooding make construction difficult. Heavy structural work should be minimized or avoided during this time. Instead, this period is better used for planning, material procurement, design development, or interior concept discussions. Avoid starting foundation or concrete work in monsoon conditions to prevent structural issues later.",
        ],
      },
      {
        title: "Winter (December to January): Ideal for Completion",
        image: "",
        desc: [
          "Post-monsoon to early winter offers another favorable phase for construction finishing. The weather remains stable with low humidity, allowing paint to dry evenly and woodwork to settle without moisture-related warping. This makes it an ideal time for tasks like painting, installing modular fittings, completing cabinetry, and handling exterior or landscape work.",
          "During this period, it's wise to finalize all interior and exterior finishing details to ensure optimal quality and durability. The controlled climate supports smoother execution, resulting in a polished, long-lasting finish for your home.",
        ],
      },
      {
        title: "Plan Smart with Kerala's Climate for Better Home Construction",
        image: "",
        desc: [
          "Starting your project in late January or early February is ideal for uninterrupted progress and consistent quality. This timing offers sufficient dry months to complete major structural work before the monsoon sets in, reducing delays and weather-related complications. At L'empire Builders, we plan construction timelines around seasonal patterns to ensure maximum efficiency and minimal risk.",
          "Smart seasonal planning delivers clear advantages: faster project completion, reduced material wastage, better cement curing and structural integrity, controlled budgets with fewer delays, and smoother, stress-free progress from start to finish.",
        ],
      },
    ],
  },
];

export type PortfoliosType = {
  id: number;
  title: string;
  location: string;
  images: string[][];
};

export const portfolios: PortfoliosType[] = [
  {
    id: 1,
    title: "DR. SUMESH'S RESIDENCE",
    location:
      "Kottayam, Kerala | Completed in 2025 | Turnkey Residence | 5000 Sq. feet",
    images: [
      ["/images/portfolio/dr_sumesh_residence/pic_1.webp"],
      ["/images/portfolio/dr_sumesh_residence/pic_2.webp"],
      ["/images/portfolio/dr_sumesh_residence/pic_3.webp"],
      ["/images/portfolio/dr_sumesh_residence/pic_4.webp"],
      [
        "/images/portfolio/dr_sumesh_residence/pic_5.1.webp",
        "/images/portfolio/dr_sumesh_residence/pic_5.2.webp",
      ],
      [
        "/images/portfolio/dr_sumesh_residence/pic_6.1.webp",
        "/images/portfolio/dr_sumesh_residence/pic_6.2.webp",
      ],
    ],
  },
  {
    id: 2,
    title: "MR. JAMES'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/james_pakalomattam_residence/01.webp"],
      ["/images/portfolio/james_pakalomattam_residence/02.webp"],
      ["/images/portfolio/james_pakalomattam_residence/03.webp"],
      [
        "/images/portfolio/james_pakalomattam_residence/04.1.webp",
        "/images/portfolio/james_pakalomattam_residence/04.2.webp",
      ],
    ],
  },
  {
    id: 3,
    title: "MR. RIYAS'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_riyas_residence/01.webp"],
      ["/images/portfolio/mr_riyas_residence/02.webp"],
      [
        "/images/portfolio/mr_riyas_residence/03.1.webp",
        "/images/portfolio/mr_riyas_residence/03.2.webp",
      ],
    ],
  },
  {
    id: 6,
    title: "MR. SARATH'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_sarath_residence/01.webp"],
      ["/images/portfolio/mr_sarath_residence/02.webp"],
      ["/images/portfolio/mr_sarath_residence/03.webp"],
    ],
  },
  {
    id: 7,
    title: "MR. JACOB'S RESIDENCE",
    location: "Thiruvalla, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_jacobs_residence/03.webp"],
      ["/images/portfolio/mr_jacobs_residence/02.webp"],
      ["/images/portfolio/mr_jacobs_residence/01.webp"],
      ["/images/portfolio/mr_jacobs_residence/04.webp"],
    ],
  },
  {
    id: 8,
    title: "MR. DEEPU'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_deepu_residence/01.webp"],
      ["/images/portfolio/mr_deepu_residence/02.webp"],
      [
        "/images/portfolio/mr_deepu_residence/03.1.webp",
        "/images/portfolio/mr_deepu_residence/03.2.webp",
      ],
    ],
  },
  {
    id: 9,
    title: "MR. ANOOP'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_anoop_residence/02.webp"],
      ["/images/portfolio/mr_anoop_residence/01.webp"],
      [
        "/images/portfolio/mr_anoop_residence/03.1.webp",
        "/images/portfolio/mr_anoop_residence/03.2.webp",
      ],
    ],
  },
  {
    id: 11,
    title: "MR. JEFRIN'S RESIDENCE",
    location: "Ernakulam, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [["/images/portfolio/mr_jefrins_residence/01.webp"]],
  },
  {
    id: 12,
    title: "MR. SHIBU GEORGE'S RESIDENCE",
    location: "Mavelikkara, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [["/images/portfolio/shibu_george_residence/01.webp"]],
  },
  {
    id: 13,
    title: "MR. MANISH'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_manish_residence/01.webp"],
      ["/images/portfolio/mr_manish_residence/02.webp"],
    ],
  },
  {
    id: 14,
    title: "MR. JAMES'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [["/images/portfolio/mr_james_residence/01.webp"]],
  },
  {
    id: 15,
    title: "MR. JOE SYLVESTER'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_joe_sylvester_residence/01.webp"],
      ["/images/portfolio/mr_joe_sylvester_residence/02.webp"],
    ],
  },
  {
    id: 16,
    title: "MR. MATHEW'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [["/images/portfolio/mr_mathew_residence/01.webp"]],
  },
  {
    id: 18,
    title: "MR. ANIL'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_anil_residence/01.webp"],
      ["/images/portfolio/mr_anil_residence/02.webp"],
    ],
  },
  {
    id: 20,
    title: "MR. JAYAPRAKASH'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [["/images/portfolio/mr_jayaprakash_residence/01.webp"]],
  },
  {
    id: 190,
    title: "MR. KIRAN RAJU'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_kiran_raju_residence/01.webp"],
      ["/images/portfolio/mr_kiran_raju_residence/02.webp"],
      ["/images/portfolio/mr_kiran_raju_residence/03.webp"],
      ["/images/portfolio/mr_kiran_raju_residence/04.webp"],
    ],
  },
  {
    id: 800,
    title: "MR. JAIMON'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [["/images/portfolio/mr_jaimon_residence/01.webp"]],
  },
  {
    id: 400,
    title: "MR. VIVEK'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [["/images/portfolio/mr_vivek_residence/01.webp"]],
  },
  {
    id: 200,
    title: "MR. SUNIL'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_sunil_residence/01.webp"],
      ["/images/portfolio/mr_sunil_residence/02.webp"],
      ["/images/portfolio/mr_sunil_residence/03.webp"],
    ],
  },
  {
    id: 130,
    title: "MR. AJIN K GEORGE'S RESIDENCE",
    location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_ajin_k_george_residence/01.webp"],
      ["/images/portfolio/mr_ajin_k_george_residence/02.webp"],
      ["/images/portfolio/mr_ajin_k_george_residence/03.webp"],
      ["/images/portfolio/mr_ajin_k_george_residence/04.webp"],
    ],
  },
  {
    id: 200,
    title: "MR. MANAIKH LAL'S RESIDENCE",
    location: "Thrissur, Kerala | Turnkey Residence | 2500 Sq. feet",
    images: [
      ["/images/portfolio/mr_manaikh_lals_residence/pic_1.webp"],
      ["/images/portfolio/mr_manaikh_lals_residence/pic_2.webp"],
    ],
  },
  // {
  //   id: 18,
  //   title: "MR. ROSHIN'S RESIDENCE",
  //   location: "Pala, Kerala | Turnkey Residence | 2500 Sq. feet",
  //   images: [
  //     [
  //       "/images/portfolio/mr_roshans_residence/pic_1.png"
  //     ]
  //   ]
  // },
  // {
  //   id: 21,
  //   title: "MR. ANOOP'S RESIDENCE",
  //   location: "Manvettom, Kottayam, Kerala | Turnkey Residence | 2500 Sq. feet",
  //   images: [
  //     [
  //       "/images/portfolio/mr_anoops_residence/pic_1.png"
  //     ],
  //     [
  //       "/images/portfolio/mr_anoops_residence/pic_2.1.png",
  //       "/images/portfolio/mr_anoops_residence/pic_2.2.png"
  //     ]
  //   ]
  // },

  // {
  //   id: 23,
  //   title: "MR. AJIN'S RESIDENCE",
  //   location: "Kuruppumthara, Kerala | Turnkey Residence | 2500 Sq. feet",
  //   images: [
  //     [
  //       "/images/portfolio/mr_ajins_residence/pic_1.png"
  //     ],
  //   ]
  // },
  // {
  //   id: 24,
  //   title: "MR. KIRAN'S RESIDENCE",
  //   location: "Mavelikkara, Kerala | Turnkey Residence | 2500 Sq. feet",
  //   images: [
  //     [
  //       "/images/portfolio/mr_kirans_residence/pic_1.png"
  //     ],
  //     [
  //       "/images/portfolio/mr_kirans_residence/pic_2.png"
  //     ],
  //   ]
  // },
];

export const reviews = [
  {
    name: "Mr. Joe & Family",
    role: "Stock Consultant",
    img: "/images/reviews/joe_and_family.png",
    review:
      "I had an outstanding experience with L'empire Builders! From the start, their team demonstrated remarkable planning and attention to detail. They listened carefully to our needs, creating a plan that aligned perfectly with our vision and budget. Highly recommended!",
  },
  {
    name: "Mr. Jefrin",
    role: "Entrepreneur",
    img: "/images/reviews/mr_jefrin.png",
    review:
      "I'm extremely impressed with L'empire Builders' interior services! They understood my ideas and transformed my space with precision, staying within budget and on schedule. The result is a beautifully designed interior that truly reflects my style. Highly recommended for anyone seeking professional and thoughtful interior solutions.",
  },
  {
    name: "Mr. Anto",
    role: "Canadian Govt. Employee",
    img: "/images/reviews/mr_anto.png",
    review:
      "I'm truly satisfied with L'empire Builders' planning and 3D services! They created a detailed design that exceeded my expectations. The 3D renderings helped me visualize my home before construction. The process was smooth, and they were highly responsive to adjustments as well.",
  },
  {
    name: "Mr. Jackson",
    role: "Canara Bank Manager",
    img: "/images/reviews/mr_jackson.png",
    review:
      "L'empire Builders delivered exceptional service from start to finish. Their professionalism, attention to detail, and top-quality craftsmanship exceeded our expectations. The project was completed on time, within budget, and flawlessly executed. Highly recommended!",
  },
  {
    name: "Mr. Sunil",
    role: "Sr. Software Engineer",
    img: "/images/reviews/mr_sunil.png",
    review:
      "L'empire exceeded our expectations with their expert craftsmanship and attention to detail. From planning to execution, their team ensured a seamless experience, delivering a stunning and well-built home. Highly recommended for anyone seeking quality construction!",
  },
  {
    name: "Mr. Vivek",
    role: "Kollam",
    img: "/images/reviews/mr_vivek.png",
    review:
      "Building our dream home felt effortless with L'empire. Their team listened to our ideas, provided expert guidance, and delivered a home that perfectly matched our vision. The attention to detail and commitment to quality were truly impressive. Highly recommended!",
  },
  {
    name: "Mr. Jayaprakash",
    role: "Thrissur",
    img: "/images/reviews/mr_jayaprakash.png",
    review:
      "L'empire turned our dream into reality with their flawless execution and dedication. Every step of the process was smooth, and the final result was beyond what we imagined. If you want a home built with passion and expertise, L'empire is the right choice!",
  },
  {
    name: "Mr. Noel & Family",
    role: "Thalayolaparambu",
    img: "/images/reviews/mr_noel_family.png",
    review:
      "We had a limited plot area and a modest budget, which made the planning stage quite challenging. But L'empire Builders took on every difficulty with expertise and creativity. Despite the constraints, they designed a beautiful home that perfectly suits our needs. Their dedication, flawless execution, and constant support made our journey smooth from start to finish.",
  },
];

// Fetch one post by slug
export async function getPost(slug: string): Promise<BlogType | null> {
  const post = blogs.find((p) => p.slug === slug);
  return post || null;
}

// Optional: fetch all posts (for listing/blog index page)
export async function getAllPosts(): Promise<BlogType[]> {
  return blogs;
}
