// app/lib/cms.ts

export const faqs = [
  {
    title: "Process & Timeline",
    accordian: [
      {
        title: "How do you manage timelines and delays?",
        desc: [
          "Projects are executed using structured schedules and milestone-based planning. Regular monitoring, advance coordination of materials, and on-site supervision help minimise delays. Any unavoidable changes are communicated clearly.",
        ],
      },
      {
        title: "Will the same team handle design and execution?",
        desc: [
          "Yes. The same team coordinates both design and execution, ensuring alignment between planning and on-site implementation and reducing errors caused by handovers.",
        ],
      },
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
      {
        title: "How do you manage material selection and finishes?",
        desc: [
          "Material selection is guided by durability, performance, budget, and maintenance requirements. Options are clearly presented, and final selections are confirmed before execution to avoid last-minute changes.",
        ],
      },
      {
        title: "How do you ensure designs are practical for construction?",
        desc: [
          "Designs are developed with execution in mind. All drawings are reviewed for structural feasibility, site conditions, and constructability before work begins, ensuring smooth on-site implementation",
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
  desc?: string[];
  created_by: string;
  contents: {
    title: string;
    image: string;
    desc: string[];
  }[];
};

export const blogs: BlogType[] = [
  {
    slug: "nri-s-guide-to-building-a-home-in-kerala-without-being-on-site",
    title: "NRI’s Guide to Building a Home in Kerala Without Being on Site",
    image: "/images/portfolio/mr_riyas_residence/01.webp",
    desc: [
      "For many Non-Resident Indians (NRIs), NRI home construction in Kerala is more than just a project — it’s a dream. Some plan for retirement, others see it as an investment, and many simply want a family home where memories can be made.But there’s one big challenge: most of this has to be managed while living abroad. The idea of building a house without being on site can feel stressful. The good news? With the right builder and modern tools, it is not only possible but also smooth and rewarding.",
    ],
    created_by: "by L'empire builders | Oct 13, 2025 | Blog, English",
    contents: [
      {
        title: "Step 1: Find the Right Builder",
        image: "",
        desc: [
          "When you live far away, your builder becomes your eyes and ears. A reliable builder will:",
          "- Handle all approvals and permissions",
          "- Coordinate every stage of construction",
          "- Keep you updated without you needing to travel often",
          "Choosing the right partner means you don’t have to deal with multiple contractors or spend sleepless nights worrying about progress.",
        ],
      },
      {
        title: "step 2: Understand the Cost of NRI Home Construction in Kerala",
        image: "",
        desc: [
          "One of the most common NRI questions is: How much does it cost to build a house in Kerala?",
          "The answer depends on:",
          "- Location (city or rural area)",
          "- Size of the home (square feet)",
          "- Materials and finishes (basic vs. luxury)",
          "A simple home with basic finishes will cost less, while a house with luxury fittings, custom interiors, and a modular kitchen will naturally cost more.Always ask your builder for a clear, detailed estimate. A proper breakdown helps you plan your budget without surprises.",
        ],
      },
      {
        title: "Step 3: Use Modern Design Tools",
        image: "",
        desc: [
          "Since you’re away, design clarity becomes very important. Today’s tools make this easier than ever:",
          "- 2D floor plans to understand Layouts",
          "- 3D visualizations to see your home before construction begins",
          "- Virtual walkthroughs that let you explore the house online, room by room.",
          "These tools save you from last-minute changes and give peace of mind that your ideas are correctly understood.",
        ],
      },
      {
        title: "Step 4: Plan Interiors Early",
        image: "",
        desc: [
          "Interiors should not be an afterthought. Finalizing them while construction is ongoing saves both time and money.Popular choices in Kerala include:",
          "- Traditional woodwork for a warm, homely feel.",
          "- Modern minimalist interiors for easy maintenance.",
          "- Modular kitchens, custom wardrobes, and smart storage solutions.",
        ],
      },
      {
        title: "Step 5: Choose Turnkey Construction",
        image: "",
        desc: [
          "For NRIs, the turnkey model is the most stress-free option. Here, the builder takes care of everything — from design and permissions to interiors and final handover.npm That means you only deal with one company, and at the end, you get a ready-to-live home without chasing multiple teams.",
        ],
      },
      {
        title: "Step 6: Stay Connected with Technology",
        image: "",
        desc: [
          "Distance is no longer a barrier. Builders now use digital tools to keep NRIs updated:",
          "- Weekly site photos, videos, or even drone footage",
          "- Online meetings to finalize materials, colors, and finishes.",
          "- Digital payment milestones for easy transactions.",
          "This way, you stay involved in every decision without being physically present.",
        ],
      },
      {
        title: "Step 7: Think Long-Term",
        image: "",
        desc: [
          "Even if your new home won’t be occupied immediately, it will still need care. Many builders now offer:",
          "- Home maintenance services",
          "- Renovation and upgrade support",
          "Having the same team manage future updates makes things simple and stress-free.",
        ],
      },
      {
        title: "How Lempire Builders Helps NRIs",
        image: "",
        desc: [
          "At Lempire Builders,we specialize in helping NRIs build homes in Kerala without the hassle of being on site. Over the years, we’ve managed end-to-end projects — from planning and approvals to interiors and final handover.",
          "- Transparent cost estimates",
          "- Modern design tools (3D, walkthroughs)",
          "- Regular updates and progress reports",
          "Interior designs that balance Kerala tradition with modern living",
          "Building a home in Kerala while living abroad doesn’t have to be complicated. With the right builder, clear planning, and proper updates, your dream can become a reality no matter where in the world you are.",
          "If you’re an NRI looking to build your dream home in Kerala, Lempire Builders is here to guide you every step of the way. Contact us today for a free consultation and let’s start creating your home together.",
        ],
      },
    ],
  },
  {
    slug: "behind-the-build-what-makes-a-home-truly-last",
    title: "Behind the Build: What Makes a Home Truly Last?",
    image: "/images/portfolio/mr_kiran_raju_residence/04.webp",
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
    slug: "checklist before you start building your home in kerala",
    title: "Checklist Before You Start Building Your Home in Kerala",
    image: "/images/blogs/best_time_to_build.png",
    created_by: "by lempire builders |  Sep 18, 2025 | Blog, English",
    contents: [
      {
        title: "",
        image: "",
        desc: [
          "Building a house in Kerala Planning to build your home in Kerala is a dream for many is a dream for many. Maybe you’ve worked abroad and now want to settle back in your hometown. Or you’re building your very first home for your growing family. Either way, this journey is deeply personal and every step matters.",
          "Before a single foundation stone is laid, there are crucial decisions that can make or break your experience. This guide walks you through those decisions with clear, actionable advice — all based on real experiences of building your home in Kerala.",
        ],
      },
      {
        title: "Budget Planning Before Building Your Home in Kerala",
        image: "",
        desc: [
          "One of the biggest mistakes many families make is underestimating how much they’ll actually need to complete their home. A well thought out budget saves you from mid project stress and surprises.",
          "Here’s what you should factor in:",
          "- The cost of buying the land and getting it registered",
          "- Construction materials and skilled labour",
          "- Architectural drawings and design consultations",
          "- Interior work  like the kitchen, wardrobes, ceiling design",
          "- Government approvals, taxes, and utility connections",
          "A quick tip: Always set aside an additional 10–15% for unexpected costs. Material prices fluctuate, and small design changes can quickly add up.",

          "When planning your finances:",

          "- Compare different home loan options",
          "- Understand EMI commitments and loan eligibility",
          "- Get a clear project estimate from your builder with a breakdown of all costs",
          "Working with a builder who offers turnkey solutions, like L’empire, often makes budgeting much easier. You’ll get one point of contact and fewer surprises along the way.",
        ],
      },
      {
        title: "Choose the Right Plot of Land",
        image: "",
        desc: [
          "Choosing the right location is very important. You might find a cheap plot, but if the land has issues, your construction costs could double.",

          "Before you commit to buying land, look into:",

          "- Soil strength: Weak soil will need stronger foundations",
          "- Water levels: High water tables can create dampness or flooding problems",
          "- Access roads and drainage: Are they wide enough? Is waterlogging an issue?",
          "- Sunlight and wind direction: These affect ventilation, lighting, and energy use",
          "- Legal clarity: Always verify title deeds, encumbrance status, and tax records",
          "If you’re unsure, it’s wise to ask your builder to do a basic site inspection. L’empire, for instance, provides land assessment support so you know what you’re getting into.",
        ],
      },
      {
        title: "2D & 3D Design Planning for Home Construction in Kerala",
        image: "",
        desc: [
          "A strong design is not just about how your house looks, it’s how it lives.Lack of detailed planning can lead to costly mistakes and regrets later. Early 2D and 3D design planning is essential when building your home in Kerala, especially if you’re coordinating remotely.Start with 2D plans to set room sizes and flow. Then move on to 3D elevation views that help your family visualize the look and feel.Want to see how your kitchen tiles match the wall paint? Or how natural light enters the living room? That’s where 3D visualizations help.",

          "Designing early gives you:",

          "- Faster municipal approvals",
          "- Better clarity when discussing changes",
          "- A unified vision for the entire family",
          "If you’re working with a design first builder, you can explore layouts, lighting styles, and even furniture placement before a single wall is built.",
        ],
      },
      {
        title: "Define What Your Family Really Needs",
        image: "",
        desc: [
          "Every home should reflect the people who live in it. Instead of copying trends, focus on what works for your lifestyle.",

          "Start by asking these questions:",

          "- How many bedrooms do you really need  now and in the future?",
          "- Do you require an office or a study area for remote work?",
          "- Would your parents benefit from a bedroom on the ground floor?",
          "- Is a pooja room, balcony, or library a must-have?",
          "Create a list of must-haves and nice-to-haves. This clarity helps your designer avoid unnecessary expenses and makes sure every corner of your home has a purpose.",
        ],
      },
      {
        title: "Find the Right Builder in Kerala",
        image: "",
        desc: [
          "Your builder can be your most valuable ally or your most significant risk.",

          "Look for these qualities in a trusted construction partner:",

          "- A strong local portfolio (visit ongoing projects if possible)",
          "- End-to-end services (design, build, interiors)",
          "- Strong team of engineers, architects & site supervisors",
          "- Timely completion guarantee with clear project timelines",
          "Looking for a trusted construction partner in Kerala? Book a discovery call with L’empire Builders.",
        ],
      },
      {
        title: "Get All the Legal Approvals in Place",
        image: "",
        desc: [
          "Many families make the mistake of starting construction before getting all approvals, which can result in stop work notices or fines.",

          "What you’ll need:",

          "- Panchayat or municipality building permit",
          "- Property tax receipt and title deed",
          "- Electricity and water connections",
          "- Environmental approvals if near wetlands or forest zones",
          "Good builders will handle this entire process for you. At L’empire, we manage all legal steps so you’re not caught in red tape.",
        ],
      },
      {
        title: "Don’t Wait to Plan Interiors",
        image: "",
        desc: [
          "Interior planning shouldn’t come last — it should go hand in hand with your construction, especially when building your home in Kerala. Plumbing, electricals, and cabinet design must align from day one",
          "Here’s why early planning helps:",

          "- Switchboards and light points align with furniture layout",
          "- Kitchen counters and plumbing match your cabinet design",
          "- Wardrobes fit perfectly without last-minute resizing",
          "If you’re aiming for a well-finished home from Day 1, speak to an interior consultant early. L’empire offers interior support from the design phase itself, ensuring smooth execution.",
        ],
      },
      {
        title: "Set a Timeline and Stick to It",
        image: "",
        desc: [
          "One of the main reasons home projects go off track is poor communication. Define a project calendar right at the start.Break the project into key phases: foundation, walls, roofing, interiors and have weekly updates. A simple WhatsApp group for sharing site photos and updates works wonders.Consistent follow-ups are crucial for quality checks, faster approvals, and reducing back and forth.",
        ],
      },
      {
        title: "Conclusion: Ready to Build Your Home in Kerala?",
        image: "",
        desc: [
          "There’s no shortcut to building a home you’ll love  but there’s a clear path. With proper planning, the right team, and a realistic approach, your dream home in Kerala can become a beautiful reality.",
          "If you’re ready to take the first step, L’empire Builders is here to support you from start to finish land, design, permits, construction, and interiors.Contact us today for a free consultation and take the first confident step towards building your dream home in Kerala.",
        ],
      },
      {
        title: "Frequently Asked Questions",
        image: "",
        desc: [
          "Q1: How long does it take to build a house in Kerala?",
          "Typically, around 6–12 months, depending on house size, approvals, and weather.",
          "Q2: Can I build a home remotely from abroad?",
          "Yes. L’empire offers full NRI support, with regular updates, video calls, and digital documentation.",
          "Q3: What is the average cost to build a house",
          "Costs vary by location and materials used.",
          "Q4: Does L’empire offer interior work as part of turnkey projects?",
          "Yes, we include interior design and execution from planning to finishing in our turnkey offerings.",
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
      {
        title: "Plan Smart with Kerala's Climate for Better Home Construction",
        image: "",
        desc: [
          "If you want uninterrupted progress and quality results, the best time to start is late January or early February, just before summer. This gives your project a solid head start with enough dry months to complete major construction stages before the rains.At L’empire Builders, we help you schedule projects with detailed seasonal planning to reduce weather-related risks.",
          "Benefits of Smart Seasonal Planning",

          "Seasonal scheduling brings many benefits:",

          "- Faster Project Timelines",
          "- Reduced Material Waste & Water Damage",
          "- Better Cement Curing and Structural Strength",
          "- Less Downtime = Budget Control",
          "-Peace of Mind with Predictable Progress",
        ],
      },
      {
        title: "How L’empire Builders Makes It Easy",
        image: "",
        desc: [
          "We don’t just build- we plan, schedule, and deliver. Here’s how we manage seasonal challenges:",

          "- End-to-end planning based on local climate insights",
          "- Use of premium materials suited for Kerala’s humid and coastal conditions",
          "- Expert in-house teams for construction and interior",
          "- On-time project delivery — even with unpredictable weather",
        ],
      },
      {
        title: "Services Offered by L’empire Builders",
        image: "",
        desc: [
          "We are more than just builders — we’re your home construction and design partner.",

          "- Residential construction",
          "- Premium interior design",
          "- Renovation & remodeling",
          "- 2D & 3D architectural and interior designs",
          "- Turnkey project execution",
        ],
      },
      {
        title: "Final Thoughts: Let’s Build Smart, Build Better",
        image: "",
        desc: [
          "Building your dream home in Kerala doesn’t have to be a challenge — with the right timing and the right team, your project can be smooth and successful. Understanding the best season to build a house is the first step.",
          "L’empire Builders is here to guide you every step of the way — from climate-based planning to handing over a beautifully finished home.",
        ],
      },
    ],
  },
  {
    slug: "turnkey-vs-traditional-construction:-what’s the-difference?",
    title: "Turnkey vs Traditional Construction: What’s the Difference?",
    image: "/images/portfolio/mr_deepu_residence/01.webp",
    desc: [
      "Owning a home is one of the biggest dreams for any family. But when it’s time to begin, many people face a key question:Should you choose turnkey construction or traditional construction?",
      "Both methods can help you build your dream home — but the process, cost, and experience are very different.At Lempire Builders, one of the most trusted home builders in Kerala, we help clients choose the right approach based on their needs, budget, and lifestyle.",
      "Let’s explore both methods and understand how they differ.",
    ],
    created_by: "by lempire builders | Oct 23, 2025 | Blog, English, Interior",
    contents: [
      {
        title: "What Is Turnkey Construction?",
        image: "",
        desc: [
          "The term “turnkey” means that the builder takes care of everything — from design to handover — and gives you a fully finished, ready-to-move-in home.You simply share your requirements, style preferences, and budget. The builder then handles:",

          "- Architectural design (2D & 3D)",
          "- Approvals and permits",
          "- Construction, plumbing, and electrical work",
          "- Interior design and modular kitchen installation",
          "- Final cleaning and quality checks",
          "When the project is complete, you just turn the key and move in — hence the name turnkey construction.It’s a stress-free and fully managed experience.",

          "Example",
          "Suppose you want to build a modern 3BHK villa in Kerala.You contact Lempire Builders, share your vision, and our team takes care of everything from start to finish. You receive a beautiful, completed home — ready to welcome your family.",
        ],
      },
      {
        title: "What Is Traditional Construction?",
        image: "",
        desc: [
          "In traditional construction, you take the lead as the project manager.You hire separate professionals for each part of the process — an architect for design, a contractor for construction, and different workers for plumbing, painting, electrical, and interior work.You are responsible for coordinating between them, tracking costs, and managing timelines.",

          "Example",
          "If you plan to build a home in Kottayam, you might:",

          "Hire an architect for design",
          "Find a contractor for construction",
          "Buy materials yourself",
          "Hire interior designers later",
          "This gives you more control, but also more work, more time, and more stress — especially if you’re not familiar with construction.",
        ],
      },
      {
        title: "Pros and Cons of Turnkey Construction",
        image: "",
        desc: [
          "✅ Advantages",
          "- Hassle-free process: One trusted company handles everything.",
          "- Faster completion: No delays between multiple contractors.",
          "- Fixed budget: The total cost is agreed upon before starting.",
          "- Single point of contact: You only deal with one responsible builder.",
          "- Ready to move in: The home is delivered fully finished",

          "❌ Disadvantages",
          "- Less flexibility: Once the design and budget are fixed, major changes are harder.",
          "- Builder-dependent quality: The outcome depends on the builder’s skill and reliability.",
          "👉 That’s why choosing a trusted construction company in Kerala, like Lempire Builders, is so important.",
        ],
      },
      {
        title: "Pros and Cons of Traditional Construction",
        image: "",
        desc: [
          "✅ Advantages",
          "- Full control: You can modify designs or materials anytime.",
          "- Transparency: You personally manage purchases and costs.",
          "- Customization: Great for those who want unique or experimental designs.",

          "❌ Disadvantages",
          "- Time-consuming: Managing multiple teams takes effort and can cause delays.",
          "- Budget fluctuations: Costs may rise due to material price changes or rework.",
          "- Stressful: Coordinating workers, suppliers, and timelines can be overwhelming.",
        ],
      },
      {
        title: "How to Choose the Right Method",
        image: "",
        desc: [
          "Your choice depends on your goals, schedule, and comfort level with project management.",

          "Choose Turnkey Construction if you:",
          "- Want a hassle-free experience",
          "- Need a fixed budget with no surprise costs",
          "- Have a busy schedule or live abroad",
          "- Prefer a trusted team to handle everything",
          "At Lempire Builders, we offer complete turnkey home construction in Kerala — from design to interiors — with real-time updates, transparent pricing, and full support, even for NRI clients.",
        ],
      },
      {
        title: "Choose Traditional Construction if you:",
        image: "",
        desc: [
          "Enjoy managing projects hands-on",
          "- Have time to supervise regularly",
          "- Want to control every detail",
          "- Plan a highly customized or experimental design",
        ],
      },
      {
        title: "Why Turnkey Construction Is Growing in Kerala",
        image: "",
        desc: [
          "Turnkey projects are becoming the top choice for many homeowners in Kerala.Today’s families value convenience, transparency, and timely delivery.",

          "With more NRIs investing in homes back home, turnkey construction offers peace of mind — a reliable builder manages everything while clients stay updated remotely.",

          "At Lempire Builders, we specialize in:",

          " Complete house construction",
          "- Luxury villa projects",
          "- Modern and classic interiors",
          "- Renovation and remodeling",
          "- Modular kitchen design",
          "Our mission is to make home building simple, efficient, and enjoyable.",
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
    title: "DR. SUMESH MATHEW'S RESIDENCE",
    location: "Kottayam, Kerala | 5999 Sq. feet",
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
    location: "Idukki, Kerala | 5287 Sq. feet",
    images: [
      ["/images/portfolio/james_pakalomattam_residence/03.webp"],
      ["/images/portfolio/james_pakalomattam_residence/01.webp"],
      ["/images/portfolio/james_pakalomattam_residence/02.webp"],
      [
        "/images/portfolio/james_pakalomattam_residence/04.1.webp",
        "/images/portfolio/james_pakalomattam_residence/04.2.webp",
      ],
    ],
  },
  {
    id: 1,
    title: "MR. VIJESH CHERIYAN'S RESIDENCE",
    location: "Eranakulam, Kerala | 4733 Sq. feet",
    images: [
      ["/images/portfolio/mr_vijesh_cheriyan/10.png"],
      ["/images/portfolio/mr_vijesh_cheriyan/11.png"],
      ["/images/portfolio/mr_vijesh_cheriyan/12.png"],
      ["/images/portfolio/mr_vijesh_cheriyan/13.png"],
    ],
  },
  {
    id: 3,
    title: "MR. RIYAS'S RESIDENCE",
    location: "Trivandrum, Kerala | 3945 Sq. feet",
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
    id: 4,
    title: "MR. KIRAN RAJU'S RESIDENCE",
    location: "Alappuzha, Kerala | 2613 Sq. feet",
    images: [
      ["/images/portfolio/mr_kiran_raju_residence/04.webp"],
      ["/images/portfolio/mr_kiran_raju_residence/03.webp"],
      ["/images/portfolio/mr_kiran_raju_residence/01.webp"],
      ["/images/portfolio/mr_kiran_raju_residence/02.webp"],
    ],
  },
  {
    id: 12,
    title: "MR. SARATH'S RESIDENCE",
    location: "Kottayam, Kerala | 2123 Sq. feet",
    images: [
      ["/images/portfolio/mr_sarath_02/14.png"],
      ["/images/portfolio/mr_sarath_02/15.png"],
      ["/images/portfolio/mr_sarath_02/16.png"],
      ["/images/portfolio/mr_sarath_02/17.png"],
    ],
  },
  {
    id: 6,
    title: "MR. SARATH'S RESIDENCE",
    location: "Kottayam, Kerala | 1969 Sq. feet",
    images: [
      ["/images/portfolio/mr_sarath_residence/01.webp"],
      ["/images/portfolio/mr_sarath_residence/02.webp"],
      ["/images/portfolio/mr_sarath_residence/03.webp"],
    ],
  },
  {
    id: 7,
    title: "MR. JACOB'S RESIDENCE",
    location: "Pathanamthitta, Kerala | 4382 Sq. feet",
    images: [
      ["/images/portfolio/mr_jacobs_residence/03.webp"],
      ["/images/portfolio/mr_jacobs_residence/02.webp"],
      ["/images/portfolio/mr_jacobs_residence/01.webp"],
      ["/images/portfolio/mr_jacobs_residence/04.webp"],
    ],
  },
  {
    id: 12,
    title: "MR.  VINOD'S RESIDENCE",
    location: "Kottayam, Kerala | Sq. feet",
    images: [
      ["/images/portfolio/mr_vinod/18.png"],
      ["/images/portfolio/mr_vinod/19.png"],
      ["/images/portfolio/mr_vinod/20.png"],
      ["/images/portfolio/mr_vinod/21.png"],
    ],
  },
  {
    id: 8,
    title: "MR. DEEPU'S RESIDENCE",
    location: "Kottayam, Kerala | 1500 Sq. feet",
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
    location: "Kottayam, Kerala | 2593 Sq. feet",
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
    id: 12,
    title: "MR. CHACKO'S RESIDENCE",
    location: "IDUKKI, Kerala | 3770 Sq. feet",
    images: [
        ["/images/portfolio/mr_chacko/5.png"],
        ["/images/portfolio/mr_chacko/6.png"],
        ["/images/portfolio/mr_chacko/7.png"],
        ["/images/portfolio/mr_chacko/8.png"],
        ["/images/portfolio/mr_chacko/9.png"],
    ],
  },
  {
    id: 12,
    title: "MR. SHYJU ALEX'S RESIDENCE",
    location: "Kottayam, Kerala | 2766 Sq. feet",
    images: [
      ["/images/portfolio/mr_shyju/70.png"],
      ["/images/portfolio/mr_shyju/71.png"],
      ["/images/portfolio/mr_shyju/72.png"],
      ["/images/portfolio/mr_shyju/73.png"]
    ],
  },
  {
    id: 12,
    title: "MR. SHIBU GEORGE'S RESIDENCE",
    location: "Kottayam, Kerala | 2700 Sq. feet",
    images: [["/images/portfolio/shibu_george_residence/01.webp"]],
  },
  {
    id: 11,
    title: "MR. JEFRIN'S RESIDENCE",
    location: "Ernakulam, Kerala | 1901 Sq. feet",
    images: [["/images/portfolio/mr_jefrins_residence/01.webp"]],
  },
  {
    id: 12,
    title: "MR. TOMY'S RESIDENCE",
    location: "Kottayam, Kerala | 2428 Sq. feet",
    images: [
      ["/images/portfolio/mr_tomy/2.png"],
      ["/images/portfolio/mr_tomy/4.png"], 
      ["/images/portfolio/mr_tomy/3.png"], 
      ["/images/portfolio/mr_tomy/1.png"],
    ],
  },
  {
    id: 12,
    title: "MR. SHUKKOOR'S RESIDENCE",
    location: "Kollam, Kerala | 2970 Sq. feet",
    images: [
      ["/images/portfolio/mr_shukkoor/58.png"],
      ["/images/portfolio/mr_shukkoor/59.png"],
    ],
  },
  // {
  //   id: 12,
  //   title: "MR. JOJY'S RESIDENCE",
  //   location: "Kottayam, Kerala | 3085 Sq. feet",
  //   images: [
  //     ["/images/portfolio/mr_jojy_02/63.png"],
  //     ["/images/portfolio/mr_jojy_02/64.png"],
  //     ["/images/portfolio/mr_jojy_02/65.png"],
  //     ["/images/portfolio/mr_jojy_02/66.png"],
  //     ["/images/portfolio/mr_jojy_02/67.png"],
  //   ],
  // },
  {
    id: 17,
    title: "MR. AJIN K GEORGE'S RESIDENCE",
    location: "Kottayam, Kerala | 1898 Sq. feet",
    images: [
      ["/images/portfolio/mr_ajin_k_george_residence/01.webp"],
      ["/images/portfolio/mr_ajin_k_george_residence/02.webp"],
      ["/images/portfolio/mr_ajin_k_george_residence/03.webp"],
      ["/images/portfolio/mr_ajin_k_george_residence/04.webp"],
    ],
  },

  // {
  //   id: 13,
  //   title: "MR. MANISH'S RESIDENCE",
  //   location: "Trivandrum, Kerala | Turnkey Residence | 2500 Sq. feet",
  //   images: [
  //     ["/images/portfolio/mr_manish_residence/01.webp"],
  //     ["/images/portfolio/mr_manish_residence/02.webp"],
  //   ],
  // },
  {
    id: 14,
    title: "MR. JAMES'S RESIDENCE",
    location: "Palakkad, Kerala | 2912 Sq. feet",
    images: [["/images/portfolio/mr_james_residence/01.webp"]],
  },
  {
    id: 15,
    title: "MR. JOE SYLVESTER'S RESIDENCE",
    location: "Kottayam, Kerala | 2613 Sq. feet",
    images: [
      ["/images/portfolio/mr_joe_sylvester_residence/01.webp"],
      ["/images/portfolio/mr_joe_sylvester_residence/02.webp"],
    ],
  },
  {
    id: 16,
    title: "MR. MATHEW'S RESIDENCE",
    location: "Kottayam, Kerala | 2545 Sq. feet",
    images: [["/images/portfolio/mr_mathew_residence/01.webp"]],
  },
  {
    id: 16,
    title: "L'EMPIRE BUILDERS RESIDENCE",
    location: "Kottayam, Kerala | 2785 Sq.feet",
    images: [
      ["/images/portfolio/lempire_builders_residence/1.png"],
      ["/images/portfolio/lempire_builders_residence/2.png"],
      ["/images/portfolio/lempire_builders_residence/3.png"]
    ],
  },
  {
    id: 18,
    title: "MR. ANIL'S RESIDENCE",
    location: "Kottayam, Kerala | 2350 Sq. feet",
    images: [
      ["/images/portfolio/mr_anil_residence/01.webp"],
      ["/images/portfolio/mr_anil_residence/02.webp"],
    ],
  },
  {
    id: 12,
    title: "MR. JINTO'S RESIDENCE",
    location: "Thrissur, Kerala | 1388 Sq. feet",
    images: [
      ["/images/portfolio/mr_jinto/68.png"],
      ["/images/portfolio/mr_jinto/69.png"],
      ["/images/portfolio/mr_jinto/70.png"],
      ["/images/portfolio/mr_jinto/71.png"],
    ],
  },
  // {
  //   id: 12,
  //   title: "MR. GEORGE'S RESIDENCE",
  //   location: "Kottayam, Kerala | 1900 Sq. feet",
  //   images: [],
  // },
  {
    id: 19,
    title: "MR. JAYAPRAKASH'S RESIDENCE",
    location: "Thrissur, Kerala | 3042 Sq. feet",
    images: [["/images/portfolio/mr_jayaprakash_residence/01.webp"]],
  },
  {
    id: 400,
    title: "MR. VIVEK'S RESIDENCE",
    location: "Kollam, Kerala | 2849 Sq. feet",
    images: [["/images/portfolio/mr_vivek_residence/01.webp"]],
  },
  {
    id: 200,
    title: "MR. SUNIL'S RESIDENCE",
    location: "Kottayam, Kerala | 4700 Sq. feet",
    images: [
      ["/images/portfolio/mr_sunil_residence/01.webp"],
      ["/images/portfolio/mr_sunil_residence/02.webp"],
      ["/images/portfolio/mr_sunil_residence/03.webp"],
    ],
  },
  {
    id: 800,
    title: "MR. JAIMON'S RESIDENCE",
    location: "Kottayam, Kerala | 1950 Sq. feet",
    images: [["/images/portfolio/mr_jaimon_residence/01.webp"]],
  },
  // {
  //   id: 130,
  //   title: "MR. AJIN K GEORGE'S RESIDENCE",
  //   location: "Trivandrum, Kerala | 2500 Sq. feet",
  //   images: [
  //     ["/images/portfolio/mr_ajin_k_george_residence/01.webp"],
  //     ["/images/portfolio/mr_ajin_k_george_residence/02.webp"],
  //     ["/images/portfolio/mr_ajin_k_george_residence/03.webp"],
  //     ["/images/portfolio/mr_ajin_k_george_residence/04.webp"],
  //   ],
  // },
  // {
  //   id: 200,
  //   title: "MR. MANAIKH LAL'S RESIDENCE",
  //   location: "Thrissur, Kerala | Turnkey Residence | 2500 Sq. feet",
  //   images: [
  //     ["/images/portfolio/mr_manaikh_lals_residence/pic_1.webp"],
  //     ["/images/portfolio/mr_manaikh_lals_residence/pic_2.webp"],
  //   ],
  // },
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

export const servicesData = [
  {
    title: "TURNKEY RESIDENCES",
    desc: "Complete architectural and interior solutions where vision meets reality. Each residence tells a unique story of client collaboration and design excellence.",
    image: "/images/services/TURNKEY RESIDENCES.png",
  },
  {
    title: "Architectural Planning",
    desc: "Practical architectural planning with detailed 2D drawings and realistic 3D visualisations to ensure clarity before construction begins",
    image: "/images/services/VAASTU-COMPLIANT DESIGNS.png",
  },
  {
    title: "INTERIOR TRANSFORMATIONS",
    desc: "Creative makeovers showcasing dramatic yet functional transformations.",
    image: "/images/services/INTERIOR TRANSFORMATIONS.png",
  },
  {
    title: "NRI DREAM PROJECTS",
    desc: "Space reimagining through strategic design interventions. Before-and-after journeys showcasing dramatic yet functional makeovers.",
    image: "/images/services/NRI DREAM PROJECTS.png",
  },
  // {
  //     title: "VAASTU-COMPLIANT DESIGNS",
  //     desc: "Architectural solutions balancing modern needs with ancient wisdom. Spaces that feel right and function perfectly.",
  //     image: "/images/services/VAASTU-COMPLIANT DESIGNS.png",
  // },
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