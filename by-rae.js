/* By Rae — content (data) + app. Edit the content objects at the top to add resources, lessons and articles. */
/* ==========================================================
   BY RAE — CONTENT
   Everything on the site is generated from these objects.
   To add a resource, article, programme or lesson, add an
   object here — no new page code needed.
   ========================================================== */

const SITE = {
  name: "By Rae",
  wordmark: "by rae.",
  tagline: "Marketing is confusing enough. Let's figure it out together.",
  facebook: "https://www.facebook.com/byraesm",
  year: 2026,
};

/* ---------------- FREE RESOURCES ----------------
   status: "available" | "coming-soon"
   file:   null until a real file exists. Set file to a URL
           (e.g. "/downloads/content-calendar.xlsx") and status
           to "available" to switch on the real download button. */

const RESOURCE_CATEGORIES = [
  { slug: "all", label: "All Resources" },
  { slug: "social-templates", label: "Social Media Templates" },
  { slug: "strategy", label: "Strategy & Planning" },
  { slug: "analytics", label: "Analytics & Reporting" },
  { slug: "career", label: "Career Resources" },
];

const RESOURCES = [
  {
    slug: "content-calendar",
    title: "Social Media Content Calendar",
    category: "social-templates",
    format: "Spreadsheet template (Google Sheets & Excel)",
    status: "coming-soon",
    file: null,
    summary: "A no-drama calendar for planning a month of posts — dates, pillars, captions and status in one place.",
    description: "Most beginners plan content in their heads (or sa Notes app, tapos makakalimutan). This calendar gives you one place to plan what goes out, when, on which platform, and why. Simple enough for your first client, structured enough to show in a portfolio.",
    audience: ["Beginners managing their first page", "Freelancers handling small-business accounts", "Social Media Starter participants (Day 10)"],
    includes: ["Monthly and weekly planning tabs", "Columns for date, platform, pillar, format, caption, CTA and status", "A colour-coded status flow: idea → drafted → approved → scheduled → posted", "A notes column for links to visuals and references"],
    howTo: ["Make a copy and rename it for the brand you're planning for.", "List your content pillars first so every post has a reason to exist.", "Add key dates (paydays, holidays, launches) before regular posts.", "Draft captions directly in the sheet, then update the status as you go."],
    related: ["content-pillars-planner", "analytics-tracker", "campaign-brief-template"],
  },
  {
    slug: "portfolio-starter-kit",
    title: "Marketing Portfolio Starter Kit",
    category: "career",
    format: "Slide template + short guide (PDF)",
    status: "coming-soon",
    file: null,
    summary: "A starter structure for your first marketing portfolio — kahit wala ka pang clients.",
    description: "“Send your portfolio” is scary when you have nothing to send yet. This kit gives you a clear structure for presenting practice work, school projects or real client work — and a way to label each one honestly.",
    audience: ["Career shifters", "Students and fresh grads", "Aspiring social media managers and VAs"],
    includes: ["A portfolio page structure: about, skills, work samples, contact", "A case study template: context → problem → approach → output → what you'd measure", "A checklist for labelling concept work vs. real client work", "Tips for sharing your portfolio as a PDF or a single link"],
    howTo: ["Pick 3–5 pieces of work. Practice projects count — just label them as practice.", "Write each one up using the case study template.", "Keep it short. A hiring manager should get the gist in two minutes.", "Export as PDF or put it on one link that opens easily on mobile."],
    related: ["campaign-brief-template", "target-audience-worksheet", "content-calendar"],
  },
  {
    slug: "social-media-audit",
    title: "Social Media Audit Checklist",
    category: "analytics",
    format: "Checklist (PDF + Google Sheets)",
    status: "coming-soon",
    file: null,
    summary: "A step-by-step checklist for reviewing any brand's social media presence — yours, a client's, or a competitor's.",
    description: "Before you plan anything, look at what already exists. This checklist walks you through a page's basics, content, engagement and performance so you can make recommendations based on what you see, not vibes.",
    audience: ["Freelancers onboarding a new client", "Beginners practising on local brands", "Social Media Starter participants (Days 1 and 4)"],
    includes: ["Profile basics: name, bio, links, contact details, profile and cover images", "Content review: pillars, consistency, formats, visual identity", "Engagement review: comment quality, response time, tone", "A performance snapshot section", "A space for findings and recommendations"],
    howTo: ["Choose the page you're auditing and note the date — pages change fast.", "Go through each section and tick what's there and what's missing.", "Write down evidence (screenshots, examples), not just opinions.", "Finish with 3–5 prioritised recommendations."],
    related: ["target-audience-worksheet", "analytics-tracker", "content-pillars-planner"],
  },
  {
    slug: "target-audience-worksheet",
    title: "Target Audience Worksheet",
    category: "strategy",
    format: "Fillable worksheet (PDF & Google Docs)",
    status: "coming-soon",
    file: null,
    summary: "Turn “para sa lahat” into a real, specific audience you can actually write for.",
    description: "Guided prompts to help you describe who a brand is really for — not just age and location, but what they care about, what stops them from buying, and how they talk.",
    audience: ["Anyone starting a strategy from scratch", "Small business owners doing their own marketing", "Social Media Starter participants (Day 2)"],
    includes: ["Demographic prompts", "Psychographic prompts: values, interests, habits", "Pain points and motivations", "Where they spend time online", "“How they talk”: words and phrases your audience actually uses", "A one-paragraph audience summary"],
    howTo: ["Start with what you know, then mark what's still a guess.", "Check your guesses against real sources: comments, reviews, groups.", "Write the one-paragraph summary last.", "Revisit it whenever results surprise you."],
    related: ["content-pillars-planner", "campaign-brief-template", "social-media-audit"],
  },
  {
    slug: "content-pillars-planner",
    title: "Content Pillars Planner",
    category: "social-templates",
    format: "Worksheet + idea bank (Google Sheets)",
    status: "coming-soon",
    file: null,
    summary: "Define 3–5 content pillars and fill an idea bank so you never stare at a blank calendar again.",
    description: "Content pillars are the recurring themes a brand talks about. This planner helps you choose pillars that match both the brand's goals and the audience's interests, then brainstorm ideas under each one.",
    audience: ["Beginners planning content for the first time", "Freelancers building a strategy for a client", "Social Media Starter participants (Day 5)"],
    includes: ["A pillar definition template: name, purpose, example topics", "A goals-and-audience check for each pillar", "An idea bank with format suggestions", "A simple pillar mix tracker"],
    howTo: ["Write down the brand's goals and audience first.", "Draft 3–5 pillars that serve both.", "Brainstorm at least five ideas per pillar.", "Move your best ideas into the content calendar."],
    related: ["content-calendar", "target-audience-worksheet", "campaign-brief-template"],
  },
  {
    slug: "campaign-brief-template",
    title: "Campaign Brief Template",
    category: "strategy",
    format: "Document template (Google Docs & Word)",
    status: "coming-soon",
    file: null,
    summary: "A one-page brief that gets everyone aligned on a campaign before anyone opens Canva.",
    description: "A good brief saves hours of back-and-forth. This template covers the essentials of a social media campaign in one page so the client, the designer and you are working toward the same thing.",
    audience: ["Freelancers pitching or running campaigns", "Beginners practising campaign planning", "Social Media Starter participants (Day 13)"],
    includes: ["Objective and success measures", "Audience and key message", "Offer or call to action", "Timeline and campaign phases", "Channels, formats and deliverables", "Budget and approvals section"],
    howTo: ["Fill in the objective first — everything else depends on it.", "Keep it to one page; link out to extra details.", "Share it before production starts and get sign-off.", "Revisit it at the end to compare plan vs. results."],
    related: ["target-audience-worksheet", "content-calendar", "analytics-tracker"],
  },
  {
    slug: "analytics-tracker",
    title: "Basic Analytics Tracker",
    category: "analytics",
    format: "Spreadsheet template (Google Sheets & Excel)",
    status: "coming-soon",
    file: null,
    summary: "Log your key numbers weekly and see what's actually working — without a fancy dashboard.",
    description: "Platform dashboards show a lot of numbers. This tracker helps you keep the few that matter, compare them over time, and write down what you think they mean.",
    audience: ["Beginners learning to report results", "Freelancers sending monthly reports", "Social Media Starter participants (Day 12)"],
    includes: ["A weekly and monthly metrics log", "Engagement rate computed for you", "A top-performing posts tracker", "An insights column for what the numbers mean and what to try next"],
    howTo: ["Pick the same day each week to log your numbers.", "Copy figures from the platform's own insights.", "Look at trends over weeks, not single posts.", "Write one insight and one next step every time."],
    related: ["social-media-audit", "content-calendar", "campaign-brief-template"],
  },
];

/* ---------------- FREE PROGRAMMES ----------------
   lessonStatus: "draft" means lesson notes exist but are a first
   version under review. Worksheets/videos are tracked separately. */

const PROGRAMMES = [
  {
    slug: "social-media-starter",
    title: "The Social Media Starter",
    tagline: "14 days. zero tuition. actual marketing skills.",
    description: "A completely free, beginner-friendly social media marketing programme designed for Filipinos who want to understand the fundamentals and develop practical skills.",
    status: "Registration not yet open",
    open: false,
    facts: [
      ["Duration", "14 days"],
      ["Tuition", "Free"],
      ["Level", "Beginner — no experience needed"],
      ["Format", "Daily lesson + one practical assignment"],
      ["Status", "Registration not yet open"],
    ],
    forWho: ["Students curious about marketing", "Career shifters testing the waters", "Aspiring social media managers, freelancers and VAs", "Anyone who wants the fundamentals before paying for anything"],
    outcomes: ["A one-page audience profile and positioning statement", "Content pillars with a bank of post ideas", "A two-week content calendar with written captions", "A simple campaign brief", "A mini social media strategy you can use as a portfolio piece"],
    phases: [
      { name: "Foundations", from: 1, to: 4, blurb: "What social media marketing is, who you're talking to, and what makes a brand different." },
      { name: "Strategy", from: 5, to: 7, blurb: "Turning research into pillars and a strategy you can actually follow." },
      { name: "Execution", from: 8, to: 11, blurb: "Writing, creating, planning and talking to your community." },
      { name: "Measure & Plan", from: 12, to: 14, blurb: "Reading the numbers, planning campaigns, and putting it all together." },
    ],
    lessons: [
      {
        day: 1, title: "Introduction to Social Media Marketing",
        objectives: ["Explain what social media marketing is — and what it isn't", "Name the main tasks a social media manager handles", "Connect social media work to real business goals"],
        overview: "Social media marketing is not just “posting.” It's using platforms like Facebook, Instagram, TikTok and LinkedIn to help a business reach the right people, build trust, and get them to take an action — message, visit, buy, sign up. Today we zoom out muna bago mag-deep dive.",
        sections: [
          ["Organic vs. paid", "Organic content is what you post without paying to push it. Paid social is ads. Most beginner roles start with organic work, but it helps to know both exist and that they support each other — good organic content often becomes good ad content."],
          ["What a social media manager actually does", "Planning content, writing captions, creating or briefing visuals, scheduling, replying to comments and messages, and reporting results. In a small business, ikaw lahat 'yan. In a bigger team or agency, the work is split between strategists, writers, designers and community managers."],
        ],
        example: { title: "Posting vs. marketing", body: "A milk tea shop launches a new flavour. “Posting” is uploading a photo with “New flavor! 😍”. “Marketing” is knowing the shop's customers are mostly students nearby, posting before dismissal time, including the price and a limited-time promo, replying to every “magkano?” comment, and checking afterwards whether messages and walk-ins went up." },
        takeaways: ["Social media marketing is a business function, not just a feed", "Every post should have a job", "You don't need to be good at everything on Day 1"],
        assignment: "Pick two local brands you follow. For each one, list the platforms they use, how often they post, and — for three recent posts — what you think the post is trying to do: inform, entertain, sell, or build community.",
        related: ["social-media-audit", "content-calendar"],
      },
      {
        day: 2, title: "Understanding Your Target Audience",
        objectives: ["Explain why “everyone” is not a target audience", "Build a simple audience profile using demographics and psychographics", "Find audience insights using free, everyday sources"],
        overview: "“Para sa lahat” sounds generous, but it makes marketing harder. When you know exactly who you're talking to, it becomes easier to decide what to post, how to say it, and where to show up.",
        sections: [
          ["Demographics vs. psychographics", "Demographics are the facts: age, location, income range, occupation. Psychographics are the why: values, interests, habits, frustrations. Two people can share the same demographics and buy for completely different reasons."],
          ["Where to find real insights", "Read comments on the brand's and competitors' posts. Check reviews. Join (and lurk in) Facebook groups or Reddit threads where the audience hangs out. If you have access, look at page insights. And the simplest one: ask actual customers."],
        ],
        example: { title: "Going one level deeper", body: "A home-based bakery says its audience is “women 25–40 in Metro Manila.” A more useful version: working moms who order birthday cakes on short notice, decide through Messenger, and care most about on-time delivery and not having to explain their order three times." },
        takeaways: ["Specific beats broad", "Psychographics shape what you say; demographics shape where you say it", "Mark your guesses as guesses until you've checked them"],
        assignment: "Write a one-page audience profile for a small business (real or imaginary). Include demographics, psychographics, three pain points, where they spend time online, and a one-paragraph summary.",
        related: ["target-audience-worksheet"],
      },
      {
        day: 3, title: "Brand Positioning & Messaging",
        objectives: ["Explain what brand positioning is", "Write a simple positioning statement", "Define key messages and a tone of voice"],
        overview: "Positioning is the space a brand wants to own in the audience's mind. Messaging is how you say it, consistently, across posts. Without these, content feels random — even if every post looks nice.",
        sections: [
          ["A simple positioning formula", "For [audience] who [need], [brand] is the [category] that [key benefit], unlike [alternative]. It's not a tagline — it's an internal guide that keeps your content consistent."],
          ["Key messages and tone", "Pick three key messages the brand wants people to remember. Then define tone with three words and a “this, not that” for each — for example, friendly, not overly casual; confident, not arrogant."],
        ],
        example: { title: "A neighbourhood laundry shop", body: "For busy renters near the business district who don't have time to do laundry, this shop is the wash-and-fold service that delivers same-day and folds everything properly, unlike self-service laundromats that still eat up your weekend. Key messages: time saved, reliability, careful handling." },
        takeaways: ["Positioning is a choice — you can't be everything", "Key messages keep content consistent", "Tone should be defined, not guessed"],
        assignment: "For the business you used on Day 2, write a positioning statement, three key messages, and three tone words, each with a “this, not that.”",
        related: ["campaign-brief-template", "target-audience-worksheet"],
      },
      {
        day: 4, title: "Competitor Research",
        objectives: ["Tell direct and indirect competitors apart", "Review a competitor's social media presence systematically", "Spot gaps and opportunities"],
        overview: "Competitor research isn't about copying. It's about understanding what your audience already sees every day — and finding what nobody is doing well yet.",
        sections: [
          ["Direct vs. indirect competitors", "Direct competitors sell the same thing to the same people. Indirect competitors solve the same need differently. A café's direct competitor is another café; an indirect one might be a convenience store selling iced coffee."],
          ["What to look at", "Which platforms they use and how often they post. Which formats they rely on. Engagement relative to their follower count. What people say in the comments. And — often the most useful — what they don't do."],
        ],
        example: { title: "Finding the gap", body: "Two coffee shops in the same area post beautiful latte art photos but rarely answer questions in the comments. People keep asking about Wi-Fi, outlets and opening hours. The opportunity isn't prettier photos — it's being the café that clearly answers what students and remote workers want to know." },
        takeaways: ["Research what the audience sees, not just what you like", "Gaps are often about service and clarity, not aesthetics", "Write down evidence, not impressions"],
        assignment: "Analyse three competitors of your Day 2 business in a simple table: platforms, posting frequency, main formats, common comments, and one opportunity you noticed for each.",
        related: ["social-media-audit"],
      },
      {
        day: 5, title: "Content Pillars",
        objectives: ["Define what content pillars are", "Create 3–5 pillars tied to audience and goals", "Generate post ideas for each pillar"],
        overview: "Content pillars are the recurring themes a brand posts about. They make planning faster and keep a page from feeling random — or too salesy.",
        sections: [
          ["Choosing pillars", "Good pillars sit where three things overlap: what the brand wants to say, what the audience actually cares about, and what the business needs to happen. If a pillar only serves one of these, rethink it."],
          ["Balancing the mix", "Not every post should sell. A common approach is to mix helpful, relatable and promotional content so the audience gets value even when they're not ready to buy."],
        ],
        example: { title: "A small plant shop", body: "Pillars: (1) Plant care tips, (2) New arrivals, (3) Customer plant corners — sharing photos customers send, with permission, (4) Behind the scenes at the shop. Each pillar has a clear job: build trust, drive sales, build community, and make the brand human." },
        takeaways: ["Pillars make planning faster", "Every pillar needs a clear purpose", "Mix value with promotion"],
        assignment: "Create four content pillars for your business. For each, write its purpose and five post ideas.",
        related: ["content-pillars-planner", "content-calendar"],
      },
      {
        day: 6, title: "Content Strategy",
        objectives: ["Connect goals, audience, pillars and platforms into one plan", "Choose realistic formats and posting frequency", "Set simple, measurable goals"],
        overview: "A content strategy answers: what are we trying to achieve, for whom, with what kind of content, on which platforms, how often, and how will we know it worked? It's the thinking behind the calendar.",
        sections: [
          ["The chain", "Goal → audience → message → format → platform. If you start at “let's do Reels,” you've skipped four steps. Start with the goal and the rest gets easier to decide."],
          ["Realistic cadence", "Consistency beats volume. Three good posts a week that you can sustain are better than daily posts for two weeks followed by silence. Plan around the time and resources the business actually has."],
        ],
        example: { title: "Turning a goal into a plan", body: "Goal: more Messenger inquiries for a home bakery. Audience: busy working moms. Message: ordering is easy and on time. Formats: short videos showing the ordering process, carousels of past cakes with prices. Platform: Facebook, where they already message. Cadence: three posts a week. Measure: inquiries per week." },
        takeaways: ["Strategy comes before the calendar", "Pick formats and platforms for a reason", "A sustainable plan beats an ambitious one"],
        assignment: "Write a one-page content strategy for your business: goal, audience summary, key message, pillars, platforms, formats, posting frequency, and how you'll measure success.",
        related: ["content-calendar", "content-pillars-planner"],
      },
      {
        day: 7, title: "Strategy Workshop",
        objectives: ["Review and connect everything from Days 1–6", "Combine your work into a strategy one-pager", "Self-check your strategy for gaps"],
        overview: "Today is a breather and a build day. No new concepts — just pulling your work together and making sure it holds up.",
        sections: [
          ["Putting it together", "Bring your audience profile, positioning, competitor notes, pillars and strategy into one document. You'll notice contradictions when they sit side by side — that's the point."],
          ["Self-check questions", "Does every pillar serve the audience? Does the strategy reflect the positioning? Is the cadence realistic? Would the business owner understand this in five minutes? If not, simplify."],
        ],
        example: { title: "A common contradiction", body: "Your positioning says “premium and careful,” but your content ideas are mostly loud promo graphics with “SALE!!!” in big red text. The workshop is where you catch that and fix it." },
        takeaways: ["Strategy is a system — parts should agree with each other", "Simple and clear beats long and impressive", "Revising is part of the work"],
        assignment: "Compile Days 2–6 into a single strategy one-pager. Then answer the four self-check questions in writing and make at least one revision based on your answers.",
        related: ["target-audience-worksheet", "content-pillars-planner"],
      },
      {
        day: 8, title: "Copywriting & Captions",
        objectives: ["Structure a caption with a hook, body and call to action", "Write for the platform and the audience", "Keep brand voice consistent, including in Taglish"],
        overview: "Captions are where a lot of beginners rush. But the words do a lot of the selling, explaining and convincing — lalo na kapag the visual alone doesn't say enough.",
        sections: [
          ["Hook, body, CTA", "The hook earns attention in the first line. The body gives the useful details — what, how much, when, why it matters. The call to action tells people exactly what to do next: message us, save this, visit the shop."],
          ["Clarity first, cleverness second", "A clever caption that confuses people is a weak caption. Use the words your audience uses. Taglish is fine when it matches the brand voice and the audience — just keep it consistent."],
        ],
        example: { title: "Before and after", body: "Before: “Weekend treat! 🍰✨ #yum”. After: “Wala ka pang plano for Saturday? Our ube cheesecake is back this weekend only — ₱180 per slice, while supplies last. Message us to reserve yours before Friday.”" },
        takeaways: ["The first line decides if people keep reading", "Include the details people will ask about anyway", "Every caption needs one clear next step"],
        assignment: "Write five captions for your business, one per pillar plus one promo. Use a different call to action in each.",
        related: ["content-calendar", "content-pillars-planner"],
      },
      {
        day: 9, title: "Content Creation Basics",
        objectives: ["Understand common content formats and when to use them", "Apply basic visual principles", "Make content more accessible"],
        overview: "You don't need to be a designer to create decent content. You need to understand formats, keep things consistent, and make sure the message is easy to see.",
        sections: [
          ["Formats and their jobs", "Static posts work for quick announcements. Carousels work for tips and step-by-step explanations. Short videos work for showing process, personality and products in use. Stories work for timely, casual updates. Choose the format that fits the message."],
          ["Basic visual principles", "One main message per visual. Clear hierarchy — the most important thing should be the biggest. Consistent colours and fonts. Good lighting for phone photos. And yes, Canva is great — as a tool, after you know what you want to say."],
        ],
        example: { title: "Making content accessible", body: "Add captions or on-screen text to videos (many people watch on mute). Write alt text where the platform allows it. Keep enough contrast between text and background, and avoid tiny text on busy photos." },
        takeaways: ["Format follows message", "Consistency builds recognition", "Accessible content reaches more people"],
        assignment: "Create three pieces for your business: one static post, one carousel outline (slide-by-slide), and one 30-second video script. Note which pillar each one serves.",
        related: ["content-calendar"],
      },
      {
        day: 10, title: "Content Planning & Scheduling",
        objectives: ["Build a content calendar", "Batch content to save time", "Use scheduling tools sensibly"],
        overview: "A content calendar turns strategy into a schedule. It's also how clients, designers and you stay on the same page about what's going out and when.",
        sections: [
          ["What goes in a calendar", "Date and time, platform, pillar, format, caption, visual link, CTA, and status. Start with key dates — holidays, paydays, launches — then fill in regular content around them."],
          ["Batching and scheduling", "Batching means doing similar tasks together: write a week of captions in one sitting, then create the visuals. Scheduling tools, including the free ones built into platforms, let you queue posts ahead. Leave some open slots for timely content."],
        ],
        example: { title: "A two-week rhythm", body: "Monday: helpful tip (carousel). Wednesday: behind the scenes (short video). Friday: product or promo (static). Weekend: community or customer feature. Simple, repeatable, and easy to adjust." },
        takeaways: ["Plan key dates first", "Batching saves time and energy", "Leave room for the unexpected"],
        assignment: "Build a two-week content calendar for your business with at least six posts, each with a pillar, format, full caption and CTA.",
        related: ["content-calendar", "content-pillars-planner"],
      },
      {
        day: 11, title: "Community Management",
        objectives: ["Explain what community management involves", "Write response guidelines and an FAQ bank", "Handle negative comments calmly and professionally"],
        overview: "Posting is half the job. The other half is talking to people — replying to comments, answering messages, and handling the occasional complaint. This is where trust is built (or lost).",
        sections: [
          ["Response guidelines", "Decide on tone, response time targets, what you can answer yourself, and what needs to be escalated to the owner or client. Keep an FAQ bank of approved answers for common questions like prices, location and delivery."],
          ["Handling negative comments", "Acknowledge the concern, apologise for the experience where appropriate, move details to private messages, and follow up. Don't argue in public, and don't delete fair criticism — people notice."],
        ],
        example: { title: "A late delivery complaint", body: "Comment: “2 hours late yung order ko, wala man lang update.” Reply: “Hi! We're really sorry about the delay and the lack of updates — that's not the experience we want for you. We've sent you a message so we can check your order and make this right.” Then actually follow up in Messenger." },
        takeaways: ["Replies are content too", "Guidelines and FAQ banks make you faster and consistent", "Handle complaints publicly with care, privately with details"],
        assignment: "Write mini community guidelines for your business, ten FAQ replies, and responses to two negative comments you make up.",
        related: ["social-media-audit"],
      },
      {
        day: 12, title: "Social Media Analytics",
        objectives: ["Understand key metrics like reach, engagement and clicks", "Calculate engagement rate", "Turn numbers into insights and next steps"],
        overview: "Numbers tell you what happened. Your job is to figure out why — and what to do next. You don't need every metric, just the ones that connect to your goal.",
        sections: [
          ["Key metrics", "Reach: how many unique accounts saw your content. Engagement: reactions, comments, shares and saves. Engagement rate: engagements divided by reach (or followers — just be consistent about which). Clicks: how many people took the next step. Platforms sometimes rename or redefine metrics, so always check their own definitions."],
          ["Vanity vs. useful metrics", "A post with lots of likes but zero inquiries might not be helping a sales goal. Always ask: does this number connect to what the business wants?"],
        ],
        example: { title: "Comparing two posts", body: "Post A reached 1,200 people and got 40 reactions, 8 comments and 5 shares — 53 engagements, or about 4.4% engagement rate by reach. Post B reached 3,000 people with 66 engagements — about 2.2%. Post B reached more people, but Post A connected better with the people who saw it." },
        takeaways: ["Choose metrics based on your goal", "Rates help you compare fairly", "Every report should end with an insight and a next step"],
        assignment: "Using your Day 10 calendar, choose three metrics you'd track and explain why. Then compute engagement rate for the two example posts above and write one insight and one next step.",
        related: ["analytics-tracker", "social-media-audit"],
      },
      {
        day: 13, title: "Campaign Planning",
        objectives: ["Tell the difference between always-on content and campaigns", "Write a simple campaign brief", "Plan a campaign in phases"],
        overview: "Always-on content is your regular posting. A campaign is a focused push with a specific goal and timeframe — a launch, a sale, an event. Campaigns need more planning, and a brief keeps everyone aligned.",
        sections: [
          ["The campaign brief", "Objective, audience, key message, offer, timeline, channels, deliverables, budget and how success will be measured. If you can't fill these in, the campaign isn't ready yet."],
          ["Campaign phases", "Tease (build curiosity), launch (announce clearly), sustain (keep reminding with different angles), and wrap-up (thank people, share results or last calls)."],
        ],
        example: { title: "A back-to-school campaign", body: "A small school supplies shop runs a two-week campaign. Objective: increase in-store visits from parents. Offer: a bundle discount. Tease: “Ready na ba ang school list mo?” Launch: bundle reveal with prices. Sustain: checklists, parent FAQs, store hours. Wrap-up: last-call reminder before classes start." },
        takeaways: ["Campaigns have one clear objective", "The brief comes before the content", "Phases keep a campaign from fizzling out"],
        assignment: "Write a one-page campaign brief for your business, including all four phases and at least two content ideas per phase.",
        related: ["campaign-brief-template", "content-calendar"],
      },
      {
        day: 14, title: "Final Project & Next Steps",
        objectives: ["Complete the final project: a mini social media strategy", "Present your work clearly", "Plan your next steps in learning"],
        overview: "Today you bring everything together into one mini social media strategy — something you can actually show people. Then we talk about where to go from here.",
        sections: [
          ["Presenting your work", "Keep it short and visual. Start with the business and the problem, then show your thinking: audience, positioning, pillars, calendar, captions, metrics and campaign idea. Label it clearly as a practice project if it's not real client work."],
          ["What's next", "Keep practising with new practice briefs, turn your final project into a portfolio piece, explore the Journal and resource library, and follow By Rae on Facebook for new programmes and resources."],
        ],
        example: { title: "A strong final project in one sentence", body: "“A two-week social media strategy for a home bakery, focused on increasing Messenger inquiries from working moms through clear pricing, easy ordering content and consistent community replies.”" },
        takeaways: ["Your work is portfolio-worthy when it shows your thinking", "Honest labelling builds trust", "Learning doesn't stop at Day 14"],
        assignment: "Complete the final project (see the Final Project page) and write down three things you want to learn next.",
        related: ["portfolio-starter-kit", "campaign-brief-template"],
      },
    ],
    finalProject: {
      brief: "Create a mini social media strategy for a small local business — real or fictional. If you use a real business, use only publicly available information and label it clearly as a practice project unless you're actually working with them.",
      deliverables: ["Business summary and one clear goal", "One-page audience profile", "Positioning statement and three key messages", "Three to five content pillars", "A two-week content calendar (at least six posts)", "Three fully written captions", "The metrics you'd track and why", "One campaign idea with a short brief"],
      guidelines: ["Keep it to around 8–12 slides or pages", "Show your reasoning, not just the outputs", "Label concept or practice work honestly", "Don't claim results you didn't get"],
    },
  },
];

/* ---------------- THE JOURNAL ----------------
   date: null means not yet published — no date is displayed.
   body blocks: ["p", text] | ["h2", text] | ["ul", [items]] | ["quote", text] */

const JOURNAL_CATEGORIES = [
  { slug: "marketing-explained", label: "Marketing, Explained", blurb: "Concepts and jargon, explained the way a friend would." },
  { slug: "career-notes", label: "Career Notes", blurb: "On getting into — and growing in — the industry." },
  { slug: "behind-the-brief", label: "Behind the Brief", blurb: "How marketing work actually gets done: briefs, processes, deliverables." },
  { slug: "notes-from-rae", label: "Notes from Rae", blurb: "Shorter reflections from Rae on learning and working in marketing." },
  { slug: "strategy-edit", label: "The Strategy Edit", blurb: "Breaking down the thinking behind good marketing." },
];

const ARTICLES = [
  {
    slug: "canva-is-a-tool-not-a-strategy",
    title: "Canva Is a Tool, Not a Marketing Strategy",
    category: "marketing-explained",
    date: null,
    excerpt: "Knowing how to use Canva is useful. But “marunong ako mag-Canva” is not the same as “marunong ako mag-marketing.”",
    body: [
      ["p", "Let's get this out of the way: Canva is great. It's fast, it's accessible, and it lets people who aren't designers make decent-looking content. Walang problema doon. The problem starts when knowing Canva gets mistaken for knowing marketing."],
      ["h2", "What Canva actually solves"],
      ["p", "Canva solves a production problem. It helps you make visuals faster, keep things consistent with brand kits and templates, and resize content for different platforms. Those are real, useful things."],
      ["h2", "What Canva can't decide for you"],
      ["ul", ["Who the post is for", "What the post should say", "Why it should go out now and not next week", "What you want people to do after seeing it", "How you'll know if it worked"]],
      ["p", "Those are marketing decisions. A beautiful template can't make them for you — and a beautiful post built on the wrong decisions is still the wrong post."],
      ["h2", "Where beginners get stuck"],
      ["p", "The cycle usually goes like this: find a nice template, post it, get low engagement, conclude the design wasn't good enough, find a nicer template. Repeat. But most of the time, the design wasn't the issue. The message was unclear, the audience was too broad, or there was no reason for anyone to care."],
      ["h2", "A better order of operations"],
      ["ul", ["Start with the goal: what should this post help the business achieve?", "Define the audience: who exactly is this for?", "Write the message: what's the one thing they should take away?", "Choose the format: static, carousel, video, story?", "Then open Canva."]],
      ["quote", "Design makes a good message easier to notice. It doesn't make a weak message strong."],
      ["h2", "A quick example"],
      ["p", "A café posts a pretty template that says “Weekend vibes ☕”. Fine, pero ano'ng gagawin ko with that? Compare it with a simple graphic that says “Open until 10PM this Saturday — study tables, outlets, and free refills on brewed coffee.” Same tool. Very different usefulness for a student looking for a place to review."],
      ["p", "So yes — learn Canva. Just learn the thinking first. That's the part that makes you hireable."],
    ],
  },
  {
    slug: "start-learning-digital-marketing-without-experience",
    title: "How to Start Learning Digital Marketing Without Experience",
    category: "career-notes",
    date: null,
    excerpt: "No degree in marketing, no experience, no idea where to start? Here's a practical way in.",
    body: [
      ["p", "Digital marketing is one of those fields where a lot of people come from somewhere else — nursing, education, BPO, engineering, fine arts, you name it. Not having a marketing background isn't a dealbreaker. Not having a plan for learning is what slows people down."],
      ["h2", "1. Start with fundamentals, not tools"],
      ["p", "It's tempting to start with “How to use Meta Business Suite” or “Canva tutorial.” But tools change. Fundamentals — audience, positioning, messaging, strategy, measurement — stay useful no matter which platform is trending."],
      ["h2", "2. Pick one lane first"],
      ["p", "Digital marketing is huge: social media, SEO, email, ads, content, analytics. Pick one entry point and go deep before going wide. For many beginners, social media marketing is a practical start because you already use the platforms and can practise right away."],
      ["h2", "3. Learn by doing"],
      ["p", "Reading about content pillars is different from creating them. Make practice projects: plan content for a fictional business, or for a friend's small business with their permission. The goal is to practise the thinking, not to pretend you have clients."],
      ["h2", "4. Document everything"],
      ["p", "Every practice project is a potential portfolio piece. Save your work, write a short explanation of your thinking, and label practice work as practice. That honesty matters more than people expect."],
      ["h2", "5. Use free learning — strategically"],
      ["p", "There are free, credible resources out there, including the learning centres run by the platforms themselves, like Meta Blueprint and Google Skillshop, plus free courses from marketing software companies. Use them to fill specific gaps instead of collecting certificates for the sake of it."],
      ["h2", "6. Be consistent, not intense"],
      ["p", "One focused hour a day for a month will probably teach you more than one exhausting weekend. Small, steady practice builds real skill."],
      ["quote", "You don't need to know everything to start. You just need to start with the right things."],
      ["p", "If you want a structured place to begin, the Start Here page has a step-by-step roadmap, and The Social Media Starter programme covers the fundamentals over 14 days."],
    ],
  },
  {
    slug: "what-goes-into-a-social-media-strategy",
    title: "What Actually Goes Into a Social Media Strategy?",
    category: "strategy-edit",
    date: null,
    excerpt: "Hint: a content calendar is not a strategy. Here's what a real one includes.",
    body: [
      ["p", "“Can you make us a social media strategy?” is a common request — and a common source of confusion. Sometimes people mean a calendar. Sometimes they mean a few nice post designs. A strategy is neither. It's the thinking that tells you what to post, and why."],
      ["h2", "The building blocks"],
      ["ul", ["Goals: what the business wants social media to help with — awareness, inquiries, sales, community", "Audience: who you're trying to reach, described specifically", "Positioning and key messages: what makes the brand different, and what you want people to remember", "Content pillars: the recurring themes you'll post about", "Platforms and formats: where you'll show up and what kind of content you'll make, with a reason for each", "Cadence: how often you'll post, based on resources you actually have", "Community approach: how you'll reply, handle questions and manage complaints", "Measurement: which metrics connect to the goal, and how often you'll review them"]],
      ["h2", "What a strategy is not"],
      ["p", "A strategy is not a list of post ideas. It's not a set of templates. It's not “post daily on every platform.” Those might be outputs of a strategy, but without the reasoning underneath, they're just activity."],
      ["h2", "How long should it be?"],
      ["p", "For a small business, a strategy can fit on a few pages. Longer doesn't mean better. If the business owner can't understand it in a few minutes, it's probably too complicated to follow."],
      ["quote", "A good strategy makes the next hundred small decisions easier."],
      ["h2", "A simple test"],
      ["p", "Take any post idea and ask: which goal does this serve, who is it for, and which pillar does it belong to? If you can answer quickly, your strategy is doing its job. If you can't, the strategy needs work — not the post."],
    ],
  },
  {
    slug: "building-your-first-marketing-portfolio",
    title: "Building Your First Marketing Portfolio",
    category: "career-notes",
    date: null,
    excerpt: "You don't need clients to start a portfolio. You need practice work, clear thinking, and honest labels.",
    body: [
      ["p", "The classic beginner trap: you need experience to get work, but you need work to get experience. A portfolio is one way out — because it shows how you think, even before anyone has hired you."],
      ["h2", "You don't need clients to start"],
      ["p", "Practice projects are valid portfolio pieces. Create a strategy for a fictional brand, or audit a public page and write recommendations. Just label it clearly as a concept or practice project. Hiring managers generally respect honesty more than inflated claims."],
      ["h2", "What to include"],
      ["p", "Three to five strong pieces are better than fifteen random ones. For each piece, show:"],
      ["ul", ["Context: what the business or brand is", "Problem: what needed solving", "Approach: how you thought about it", "Output: what you actually made", "Measurement: what you would track, or what happened if it was real work"]],
      ["h2", "Choose a format that's easy to open"],
      ["p", "A PDF, a simple website, or a single shareable link all work. What matters is that it opens quickly — including on a phone — and doesn't need special access or downloads to view."],
      ["h2", "Common mistakes"],
      ["ul", ["Showing only visuals without explaining the thinking", "Claiming results that didn't happen", "Including work without permission when it's confidential", "Making it so long that no one finishes it"]],
      ["quote", "Your portfolio isn't proof that you know everything. It's proof that you know how to think."],
      ["p", "Start with one piece. Then improve it as you learn. The final project of The Social Media Starter is designed to become your first portfolio piece."],
    ],
  },
  {
    slug: "five-metrics-every-beginner-should-understand",
    title: "Five Metrics Every Beginner Marketer Should Understand",
    category: "marketing-explained",
    date: null,
    excerpt: "Reach, impressions, engagement rate, click-through rate and conversions — explained without the jargon.",
    body: [
      ["p", "Social media dashboards show a lot of numbers. You don't need to understand all of them on day one. Start with these five, and always remember: platforms sometimes rename or redefine metrics, so check their own definitions when in doubt."],
      ["h2", "1. Reach"],
      ["p", "The number of unique accounts that saw your content. If one person sees your post three times, that's still a reach of one. Reach tells you how far your content travelled."],
      ["h2", "2. Impressions (or views)"],
      ["p", "The total number of times your content was displayed, including repeat views. Impressions are usually higher than reach. A big gap between the two means people are seeing your content more than once."],
      ["h2", "3. Engagement rate"],
      ["p", "Engagements (reactions, comments, shares, saves) divided by reach or by followers, multiplied by 100. Example: 50 engagements from a reach of 1,000 is a 5% engagement rate by reach. Pick one method and use it consistently so your comparisons are fair."],
      ["h2", "4. Click-through rate (CTR)"],
      ["p", "Clicks divided by impressions, multiplied by 100. It tells you how many people who saw your content took the next step — visited the link, opened the shop page, tapped the button."],
      ["h2", "5. Conversions"],
      ["p", "The action the business actually wants: a purchase, an inquiry, a sign-up, a booking. Conversions are often the hardest to track on social media alone, but they're usually the metric business owners care about most."],
      ["quote", "Numbers tell you what happened. Your job is to figure out why — and what to do next."],
      ["h2", "How to use these"],
      ["p", "Match metrics to goals. Awareness goals lean on reach and impressions. Community goals lean on engagement. Sales goals lean on clicks and conversions. And always pair a number with an insight: “Engagement went up” is data. “Engagement went up on carousel tips, so let's make more of those” is a recommendation."],
    ],
  },
];

/* ==========================================================
   BY RAE — APP (components + router)
   Hash routes keep every page addressable without a server:
   #/resources/content-calendar, #/journal/<slug>, etc.
   ========================================================== */
(() => {
"use strict";

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pad = (n) => String(n).padStart(2, "0");
const ext = (href, text, cls = "btn btn-primary") => `<a class="${cls}" href="${href}" target="_blank" rel="noopener noreferrer">${text}<span class="sr-only"> (opens in a new tab)</span></a>`;
const resCat = (slug) => RESOURCE_CATEGORIES.find((c) => c.slug === slug);
const jCat = (slug) => JOURNAL_CATEGORIES.find((c) => c.slug === slug);
const getRes = (slug) => RESOURCES.find((r) => r.slug === slug);
const getProg = (slug) => PROGRAMMES.find((p) => p.slug === slug);
const getArt = (slug) => ARTICLES.find((a) => a.slug === slug);
const wordsOf = (a) => a.body.map(([t, v]) => (Array.isArray(v) ? v.join(" ") : v)).join(" ").split(/\s+/).length;
const readTime = (a) => `${Math.max(1, Math.round(wordsOf(a) / 200))} min read`;
const fmtDate = (d) => (d ? new Date(d).toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" }) : "");

/* ---------- icons ---------- */
const I = {
  arrow: `<span class="arrow" aria-hidden="true">→</span>`,
  back: `<span aria-hidden="true">←</span>`,
  chev: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  info: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
  doc: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>`,
  grid: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 4v5M16 4v5M8 14h2M14 14h2M8 17h2"/></svg>`,
  chart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>`,
  compass: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>`,
  brief: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></svg>`,
  menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10"/></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
};
const catIcon = { "social-templates": I.grid, strategy: I.compass, analytics: I.chart, career: I.brief };

const sprig = (cls = "") => `<svg class="sprig ${cls}" viewBox="0 0 120 220" aria-hidden="true" fill="currentColor">
  <path d="M62 218C58 160 66 100 58 6" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <ellipse cx="44" cy="176" rx="20" ry="7" transform="rotate(-32 44 176)" opacity=".75"/>
  <ellipse cx="80" cy="150" rx="20" ry="7" transform="rotate(30 80 150)" opacity=".6"/>
  <ellipse cx="42" cy="120" rx="18" ry="6.5" transform="rotate(-34 42 120)" opacity=".8"/>
  <ellipse cx="78" cy="94" rx="17" ry="6" transform="rotate(32 78 94)" opacity=".6"/>
  <ellipse cx="46" cy="64" rx="15" ry="5.5" transform="rotate(-36 46 64)" opacity=".8"/>
  <ellipse cx="72" cy="40" rx="13" ry="5" transform="rotate(34 72 40)" opacity=".6"/>
  <ellipse cx="58" cy="12" rx="5" ry="10" opacity=".85"/></svg>`;

/* ---------- navigation config ---------- */
const P = PROGRAMMES[0];
const NAV = [
  { label: "Home", href: "#/", match: /^\/$|^\/start-here/ },
  { label: "Free Resources", href: "#/resources", match: /^\/resources/, children: [
      ...RESOURCE_CATEGORIES.map((c) => ({ label: c.label, href: c.slug === "all" ? "#/resources" : `#/resources?cat=${c.slug}` })) ] },
  { label: "Free Programmes", href: "#/programmes", match: /^\/programmes/, children: [
      { label: "All Programmes", href: "#/programmes" },
      { label: P.title, href: `#/programmes/${P.slug}` },
      { label: "Curriculum", href: `#/programmes/${P.slug}/curriculum` },
      { label: "Registration", href: `#/programmes/${P.slug}/register` } ] },
  { label: "The Journal", href: "#/journal", match: /^\/journal/, children: [
      { label: "All Articles", href: "#/journal" },
      ...JOURNAL_CATEGORIES.map((c) => ({ label: c.label, href: `#/journal/category/${c.slug}` })) ] },
  { label: "About Rae", href: "#/about", match: /^\/about/, children: [
      { label: "Meet Rae", href: "#/about?s=meet" },
      { label: "The Story Behind By Rae", href: "#/about?s=story" },
      { label: "Mission & Vision", href: "#/about?s=mission" },
      { label: "Learning Philosophy", href: "#/about?s=philosophy" },
      { label: "Future: Rae Academy", href: "#/about?s=academy" },
      { label: "Future: Rae Studio", href: "#/about?s=studio" } ] },
  { label: "Let's Connect", href: "#/connect", match: /^\/connect/ },
];

/* ---------- components ---------- */
function Header() {
  const desk = NAV.map((n, i) => n.children
    ? `<li class="nav-item" data-dd>
        <a class="nav-link" href="${n.href}" data-nav="${i}">${n.label}</a>
        <button class="dd-toggle" type="button" aria-expanded="false" aria-controls="dd-${i}" aria-label="${n.label} submenu">${I.chev}</button>
        <ul class="dd" id="dd-${i}">${n.children.map((c) => `<li><a href="${c.href}">${c.label}</a></li>`).join("")}</ul>
      </li>`
    : `<li class="nav-item"><a class="nav-link" href="${n.href}" data-nav="${i}">${n.label}</a></li>`).join("");
  const mob = NAV.map((n) => n.children
    ? `<li><details><summary>${n.label}${I.chev}</summary><ul class="m-sub">${[{ label: `${n.label} — overview`, href: n.href }, ...n.children.filter((c) => c.href !== n.href)].map((c) => `<li><a href="${c.href}">${c.label}</a></li>`).join("")}</ul></details></li>`
    : `<li><a class="m-link" href="${n.href}">${n.label}</a></li>`).join("");
  return `<div class="wrap header-inner">
      <a class="wordmark" href="#/" aria-label="By Rae — home">by rae<span>.</span></a>
      <nav class="nav-desktop" aria-label="Main"><ul class="nav-list">${desk}</ul></nav>
      <a class="btn btn-primary header-cta" href="#/start-here">Start Here ${I.arrow}</a>
      <button class="hamburger" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">${I.menu}</button>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile"><div class="wrap"><ul>${mob}
      <li style="padding-top:20px"><a class="btn btn-primary" href="#/start-here" style="width:100%;justify-content:center">Start Here ${I.arrow}</a></li></ul></div></nav>`;
}

function Footer() {
  return `<div class="wrap">
    <div class="foot-grid">
      <div><a class="wordmark" href="#/">by rae<span>.</span></a><p class="foot-tag">${SITE.tagline}</p>
        <p style="font-size:.9rem;max-width:34ch">Free digital marketing resources, lessons and honest conversations for Filipinos.</p></div>
      <div><h4>Learn</h4><ul><li><a href="#/start-here">Start Here</a></li><li><a href="#/resources">Free Resources</a></li><li><a href="#/programmes">Free Programmes</a></li><li><a href="#/programmes/${P.slug}/curriculum">14-Day Curriculum</a></li></ul></div>
      <div><h4>Read</h4><ul><li><a href="#/journal">The Journal</a></li>${JOURNAL_CATEGORIES.slice(0, 4).map((c) => `<li><a href="#/journal/category/${c.slug}">${c.label}</a></li>`).join("")}</ul></div>
      <div><h4>By Rae</h4><ul><li><a href="#/about">About Rae</a></li><li><a href="#/connect">Let's Connect</a></li><li><a href="${SITE.facebook}" target="_blank" rel="noopener noreferrer">Facebook ↗</a></li></ul></div>
    </div>
    <div class="foot-bottom"><span>© ${SITE.year} By Rae. Made in the Philippines.</span><span>Rae Academy & Rae Studio are future initiatives.</span></div>
  </div>`;
}

const Breadcrumbs = (items) => `<nav class="crumbs" aria-label="Breadcrumb"><ol>${items.map((it, i) =>
  i === items.length - 1 ? `<li><span aria-current="page">${esc(it[0])}</span></li>` : `<li><a href="${it[1]}">${esc(it[0])}</a></li>`).join("")}</ol></nav>`;

const statusPill = (r) => r.status === "available" && r.file ? `<span class="pill ok">Available</span>` : `<span class="pill soon">Coming soon</span>`;

const ResourceCard = (r) => `<a class="card" href="#/resources/${r.slug}" data-cat="${r.category}" data-search="${esc((r.title + " " + r.summary + " " + resCat(r.category).label + " " + r.format).toLowerCase())}">
  <div class="card-top"><span class="res-icon">${catIcon[r.category] || I.doc}</span>${statusPill(r)}</div>
  <span class="label plain">${resCat(r.category).label}</span>
  <h3>${r.title}</h3><p>${r.summary}</p>
  <div class="card-foot"><span class="muted">${r.format.split(" (")[0]}</span><span>Details ${I.arrow}</span></div></a>`;

const ArticleCard = (a, i = 0) => `<a class="card article-card ${i % 2 ? "alt" : ""}" href="#/journal/${a.slug}" data-cat="${a.category}" data-search="${esc((a.title + " " + a.excerpt + " " + jCat(a.category).label).toLowerCase())}">
  <div class="stripe"></div><span class="label plain">${jCat(a.category).label}</span>
  <h3>${a.title}</h3><p>${a.excerpt}</p>
  <div class="card-foot"><span class="ac-meta">${a.date ? fmtDate(a.date) + " · " : ""}${readTime(a)}</span><span>Read ${I.arrow}</span></div></a>`;

const LessonCard = (p, l) => `<a class="card lesson-card" href="#/programmes/${p.slug}/day-${l.day}">
  <div class="day">Day ${pad(l.day)}</div><h3>${l.title}</h3>
  <div class="card-foot"><span class="pill draft">Draft notes</span><span>Open ${I.arrow}</span></div></a>`;

const ProgrammeCard = (p) => `<article class="card feature" style="padding:clamp(28px,4vw,48px)">
  <div class="card-top"><span class="label" style="color:var(--sage)">Free programme · ${p.lessons.length} days</span><span class="pill" style="color:var(--sand);border-color:rgba(245,240,230,.35)">${p.status}</span></div>
  <h3 class="h2" style="margin:.2em 0 .3em">${p.title}</h3>
  <p style="font-family:var(--serif);font-style:italic;font-size:1.3rem;color:var(--sage);margin-bottom:.8em">${p.tagline}</p>
  <p style="max-width:56ch">${p.description}</p>
  <div class="days-strip" aria-label="Lessons">${p.lessons.map((l) => `<a href="#/programmes/${p.slug}/day-${l.day}" title="Day ${l.day}: ${esc(l.title)}" aria-label="Day ${l.day}: ${esc(l.title)}">${l.day}</a>`).join("")}</div>
  <div class="btn-row" style="margin-top:28px"><a class="btn btn-light" href="#/programmes/${p.slug}">Programme overview ${I.arrow}</a><a class="btn btn-outline-light" href="#/programmes/${p.slug}/curriculum">See the curriculum</a></div>
</article>`;

const CTASection = ({ label = "Join the community", title, text, primary, secondary } = {}) => `<section class="section band-forest" style="position:relative;overflow:hidden">
  ${sprig("")}<div class="wrap" style="position:relative">
  <span class="label">${label}</span>
  <h2 class="h2" style="max-width:20ch">${title || "Learning is easier <em>with company.</em>"}</h2>
  <p class="lede" style="margin-bottom:28px">${text || "Follow By Rae on Facebook for new resources, lessons, Journal articles, and programme announcements. Questions are always welcome — walang tanong na too basic."}</p>
  <div class="btn-row">${primary || ext(SITE.facebook, `Follow By Rae on Facebook ${I.arrow}`, "btn btn-light")}${secondary || ""}</div></div></section>`;

const SearchBar = (id, placeholder) => `<div class="search"><label class="sr-only" for="${id}">${placeholder}</label>${I.search}<input id="${id}" type="search" placeholder="${placeholder}" autocomplete="off"></div>`;
const CategoryFilter = (cats, active, counts) => `<div class="chips" role="group" aria-label="Filter by category">${cats.map((c) =>
  `<button type="button" class="chip" data-filter="${c.slug}" aria-pressed="${c.slug === active}">${c.label}${counts ? `<span class="count">${counts[c.slug] ?? 0}</span>` : ""}</button>`).join("")}</div>`;

const PageHead = ({ crumbs, label, title, lede, extra = "" }) => `<header class="page-head"><div class="wrap">${sprig()}
  ${crumbs ? Breadcrumbs(crumbs) : ""}${label ? `<span class="label">${label}</span>` : ""}
  <h1 class="h1" style="max-width:18ch">${title}</h1>${lede ? `<p class="lede">${lede}</p>` : ""}${extra}</div></header>`;

const Notice = (html, cls = "") => `<div class="notice ${cls}">${I.info}<div>${html}</div></div>`;

/* ---------- filtering (resources + journal) ---------- */
function bindFilter({ gridSel, searchId, countSel, emptySel, initialCat, initialQ, basePath, noun }) {
  const grid = $(gridSel), input = $(`#${searchId}`), count = $(countSel), empty = $(emptySel);
  let cat = initialCat || "all";
  input.value = initialQ || "";
  const apply = () => {
    const q = input.value.trim().toLowerCase();
    let n = 0;
    $$("[data-cat]", grid).forEach((el) => {
      const show = (cat === "all" || el.dataset.cat === cat) && (!q || el.dataset.search.includes(q));
      el.hidden = !show; if (show) n++;
    });
    $$(".chip").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === cat)));
    count.textContent = `${n} ${noun}${n === 1 ? "" : "s"}`;
    empty.hidden = n > 0;
    const qs = new URLSearchParams();
    if (cat !== "all") qs.set("cat", cat);
    if (q) qs.set("q", q);
    history.replaceState(null, "", `#${basePath}${qs.toString() ? "?" + qs : ""}`);
  };
  $$(".chip").forEach((b) => b.addEventListener("click", () => { cat = b.dataset.filter; apply(); }));
  input.addEventListener("input", apply);
  const reset = $("[data-reset]", empty);
  if (reset) reset.addEventListener("click", () => { cat = "all"; input.value = ""; apply(); input.focus(); });
  apply();
}

/* ================= PAGES ================= */

function Home() {
  const featured = ["content-calendar", "target-audience-worksheet", "portfolio-starter-kit"].map(getRes);
  return {
    title: "By Rae — free digital marketing education for Filipinos",
    desc: "Free digital marketing resources, programmes and honest articles for Filipino students, career shifters, freelancers and aspiring social media managers.",
    html: `
<section class="hero"><div class="wrap hero-grid">${sprig()}
  <div class="fade-in">
    <span class="label">A little corner of the internet for Filipino marketers.</span>
    <h1 class="display">good marketing starts <em>somewhere.</em></h1>
    <p class="second">and so do you.</p>
    <p class="lede">Whether you're starting from zero or already figuring things out in the industry, By Rae is here to make digital marketing a little less confusing.</p>
    <p class="lede" style="margin-bottom:32px">Free resources, practical lessons, and honest conversations about marketing.</p>
    <div class="btn-row"><a class="btn btn-primary" href="#/resources">Explore Free Resources ${I.arrow}</a><a class="btn btn-ghost" href="#/start-here">Start Learning</a></div>
  </div>
  <div class="hero-art" aria-hidden="true"><div class="blob c"></div><div class="blob a"></div><div class="blob b"></div>${sprig("on-art")}
    <div class="hero-card"><span class="label">Inside by rae.</span><p class="h3">What you'll find here</p>
      <ol><li>A free resource library</li><li>A 14-day social media programme</li><li>The Journal — marketing, explained</li><li>A roadmap if you're starting from zero</li></ol></div></div>
</div></section>

<section class="section band-paper"><div class="wrap">
  <div class="section-head"><div><span class="label">So, what is By Rae?</span><h2 class="h2">A free place to learn marketing <em>properly.</em></h2></div>
  <p class="lede" style="max-width:44ch">Not hype, not “get rich as a VA in 30 days.” Just the fundamentals, explained clearly, in the way Filipinos actually talk.</p></div>
  <div class="pillars">
    <div><span class="num">01 — Resources</span><h3 class="h3">Templates & worksheets</h3><p class="muted">Practical tools for planning, creating and reporting — the kind you'd actually use at work.</p><a class="textlink" href="#/resources">Browse the library</a></div>
    <div><span class="num">02 — Programmes</span><h3 class="h3">Structured free learning</h3><p class="muted">Step-by-step programmes with lessons and assignments, starting with The Social Media Starter.</p><a class="textlink" href="#/programmes">See programmes</a></div>
    <div><span class="num">03 — Journal</span><h3 class="h3">Honest articles</h3><p class="muted">Concepts, career notes and strategy breakdowns written to make you think, not just scroll.</p><a class="textlink" href="#/journal">Read the Journal</a></div>
  </div>
</div></section>

<section class="section band-forest"><div class="wrap">
  <div class="section-head"><div><span class="label">Start here</span><h2 class="h2">Starting from zero? <em>Good.</em> That's where everyone starts.</h2></div>
  <a class="btn btn-light" href="#/start-here">See the full roadmap ${I.arrow}</a></div>
  <div class="roadmap-mini">
    <div><span class="mono" style="color:var(--sage)">Step 01</span><b>Understand the field</b><span class="muted">What digital marketing is, and where social media fits.</span></div>
    <div><span class="mono" style="color:var(--sage)">Step 02</span><b>Learn the fundamentals</b><span class="muted">Audience, positioning, strategy, content, measurement.</span></div>
    <div><span class="mono" style="color:var(--sage)">Step 03</span><b>Practise on real-ish briefs</b><span class="muted">Apply what you learn to practice projects.</span></div>
    <div><span class="mono" style="color:var(--sage)">Step 04</span><b>Build your portfolio</b><span class="muted">Turn practice into proof of how you think.</span></div>
  </div>
</div></section>

<section class="section"><div class="wrap">
  <div class="section-head"><div><span class="label">Featured free resources</span><h2 class="h2">Tools for the <em>actual</em> work.</h2></div><a class="textlink" href="#/resources">View all resources →</a></div>
  <div class="grid g3">${featured.map(ResourceCard).join("")}</div>
</div></section>

<section class="section band-sand"><div class="wrap">
  <span class="label">Featured free programme</span>
  ${ProgrammeCard(P)}
</div></section>

<section class="section"><div class="wrap">
  <div class="section-head"><div><span class="label">From the Journal</span><h2 class="h2">Latest <em>reads.</em></h2></div><a class="textlink" href="#/journal">All articles →</a></div>
  <div class="grid g3">${ARTICLES.slice(0, 3).map(ArticleCard).join("")}</div>
</div></section>

<section class="section band-sage"><div class="wrap">
  <span class="label">Why By Rae exists</span>
  <p class="big-quote">“You shouldn't need experience to be given the opportunity <em style="color:var(--olive)">to learn.</em>”</p>
  <div class="grid g2" style="max-width:900px"><p class="muted">A lot of Filipinos want to get into digital marketing, but the way in isn't obvious. Courses can be expensive. Job posts ask for experience you can't get without a job. And a lot of free content online is either too vague or too salesy.</p>
  <p class="muted">By Rae is an attempt to close that gap: free resources, structured lessons and honest writing — so that learning marketing doesn't depend on who you know or how much you can pay. <a class="textlink" href="#/about">More about Rae</a></p></div>
</div></section>

${CTASection()}`,
  };
}

function StartHere() {
  const steps = [
    ["Understand the field", "Before learning tools, understand what digital marketing is: getting the right message to the right people online so they take an action. Learn the main channels — social media, search, email, ads, content — and where they fit.", "Read: “How to Start Learning Digital Marketing Without Experience”", "#/journal/start-learning-digital-marketing-without-experience", "Suggested pace: a few days"],
    ["Pick one lane: social media", "Social media marketing is a practical entry point. You already use the platforms, you can practise right away, and many entry-level roles start here.", "Read: “Canva Is a Tool, Not a Marketing Strategy”", "#/journal/canva-is-a-tool-not-a-strategy", "Suggested pace: one day"],
    ["Learn the fundamentals", "Audience, positioning, competitor research, content pillars, strategy, copywriting, community management, analytics, campaigns. The Social Media Starter covers these over 14 days.", "Go to The Social Media Starter", `#/programmes/${P.slug}`, "Suggested pace: 14 days"],
    ["Practise on practice briefs", "Apply each concept to a small business — fictional, or a friend's with permission. Doing is where it clicks. Label everything honestly as practice.", "Use the lesson assignments", `#/programmes/${P.slug}/assignments`, "Suggested pace: ongoing"],
    ["Learn to read the numbers", "Understand reach, engagement rate, clicks and conversions so you can explain what worked and what to try next.", "Read: “Five Metrics Every Beginner Marketer Should Understand”", "#/journal/five-metrics-every-beginner-should-understand", "Suggested pace: a few days"],
    ["Build your first portfolio", "Pick your 3–5 best practice pieces, explain your thinking for each one, and put them somewhere easy to open.", "Read: “Building Your First Marketing Portfolio”", "#/journal/building-your-first-marketing-portfolio", "Suggested pace: one to two weeks"],
  ];
  return {
    title: "Start Here — By Rae",
    desc: "A practical roadmap for complete beginners who want to learn digital marketing.",
    html: `${PageHead({ crumbs: [["Home", "#/"], ["Start Here", ""]], label: "Start here", title: "New to marketing? <em>Start here.</em>", lede: "A practical roadmap for complete beginners. No prior experience needed, no tuition, no pressure to do everything at once. Follow it in order, at your own pace." })}
<section class="section band-forest"><div class="wrap">
  <span class="label">The roadmap</span><h2 class="h2" style="margin-bottom:24px">Six steps, <em>in order.</em></h2>
  <ol class="roadmap">${steps.map((s, i) => `<li><span class="step">${pad(i + 1)}</span><div><h3>${s[0]}</h3><p class="muted" style="max-width:62ch">${s[1]}</p>
    <a class="textlink" style="color:var(--cream);border-color:var(--terra)" href="${s[3]}">${s[2]} →</a><div class="meta">${s[4]}</div></div></li>`).join("")}</ol>
</div></section>
<section class="section"><div class="wrap grid g3">
  <div class="box"><span class="label">Tip 01</span><h3>Fundamentals first</h3><p class="muted">Tools change every year. Thinking skills don't. Learn the why before the how.</p></div>
  <div class="box"><span class="label">Tip 02</span><h3>Consistency over intensity</h3><p class="muted">One focused hour a day beats one exhausting weekend.</p></div>
  <div class="box"><span class="label">Tip 03</span><h3>Be honest about your level</h3><p class="muted">“I'm learning” is a perfectly respectable thing to say. Inflated claims catch up with you.</p></div>
</div></section>
${CTASection({ label: "Ready?", title: "Begin with <em>Day 1.</em>", text: "The first lesson of The Social Media Starter is a gentle introduction to what social media marketing really is.", primary: `<a class="btn btn-light" href="#/programmes/${P.slug}/day-1">Open Day 1 ${I.arrow}</a>`, secondary: `<a class="btn btn-outline-light" href="#/resources">Browse resources</a>` })}`,
  };
}

function Resources(params) {
  const counts = { all: RESOURCES.length };
  RESOURCES.forEach((r) => (counts[r.category] = (counts[r.category] || 0) + 1));
  const active = resCat(params.get("cat")) ? params.get("cat") : "all";
  return {
    title: "Free Resources — By Rae",
    desc: "Free social media templates, strategy worksheets, analytics tools and career resources for Filipino marketers.",
    html: `${PageHead({ crumbs: [["Home", "#/"], ["Free Resources", ""]], label: "Free resources", title: "The resource <em>library.</em>", lede: "Templates, worksheets and guides for the actual work of marketing. Everything here is free. Some resources are still being made — those are labelled honestly as Coming Soon." })}
<section class="section tight" style="padding-top:0"><div class="wrap">
  <div class="toolbar">${CategoryFilter(RESOURCE_CATEGORIES, active, counts)}${SearchBar("res-search", "Search resources")}</div>
  <p class="results-count" id="res-count" aria-live="polite"></p>
  <div class="grid g3" id="res-grid">${RESOURCES.map(ResourceCard).join("")}</div>
  <div class="empty" id="res-empty" hidden><h3>Walang tumugma.</h3><p>No resources match that search or category yet.</p><button class="btn btn-ghost" type="button" data-reset>Clear filters</button></div>
</div></section>
${CTASection({ label: "Got an idea?", title: "Suggest a <em>resource.</em>", text: "Is there a template or guide you wish existed? Send the suggestion through Facebook — it helps decide what gets made next.", secondary: `<a class="btn btn-outline-light" href="#/connect">Other ways to connect</a>` })}`,
    init: () => bindFilter({ gridSel: "#res-grid", searchId: "res-search", countSel: "#res-count", emptySel: "#res-empty", initialCat: active, initialQ: params.get("q"), basePath: "/resources", noun: "resource" }),
  };
}

function ResourceDetail(slug) {
  const r = getRes(slug); if (!r) return null;
  const cat = resCat(r.category);
  const ready = r.status === "available" && r.file;
  const soon = !ready;
  const download = ready
    ? `<a class="btn btn-primary" href="${r.file}" download>Download (${r.format.split(" (")[0]}) ${I.arrow}</a>`
    : `<span class="btn" aria-disabled="true" role="note">Download not available yet</span>
       <p class="muted" style="font-size:.88rem;margin:14px 0 0">This resource is still being made. Follow By Rae on Facebook to know when it's released.</p>
       <div style="margin-top:14px">${ext(SITE.facebook, "Follow for updates ↗", "textlink")}</div>`;
  return {
    title: `${r.title} — Free Resources — By Rae`,
    desc: r.summary,
    html: `${PageHead({ crumbs: [["Home", "#/"], ["Free Resources", "#/resources"], [cat.label, `#/resources?cat=${cat.slug}`], [r.title, ""]], label: cat.label, title: r.title, lede: r.summary, extra: `<div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap">${statusPill(r)}<span class="pill">${r.format}</span></div>` })}
<section class="section tight" style="padding-top:0"><div class="wrap detail">
  <div>
    <div class="block"><h2>About this resource</h2><p>${r.description}</p></div>
    <div class="block"><h2>${soon ? "What it will include" : "What's included"}</h2><ul class="ticks">${r.includes.map((x) => `<li>${x}</li>`).join("")}</ul></div>
    <div class="block"><h2>How to use it</h2><ol class="steps-ol">${r.howTo.map((x) => `<li>${x}</li>`).join("")}</ol></div>
    <div class="block"><h2>Related resources</h2><div class="grid g2">${r.related.map(getRes).filter(Boolean).slice(0, 2).map(ResourceCard).join("")}</div></div>
  </div>
  <aside class="aside" aria-label="Resource details">
    <div class="box"><span class="label">Download</span>${download}</div>
    <div class="box"><span class="label">At a glance</span><dl class="dl"><div><dt>Format</dt><dd>${r.format}</dd></div><div><dt>Category</dt><dd>${cat.label}</dd></div><div><dt>Cost</dt><dd>Free</dd></div><div><dt>Status</dt><dd>${soon ? "Coming soon" : "Available"}</dd></div></dl></div>
    <div class="box sand"><span class="label">Made for</span><ul class="ticks" style="margin:0">${r.audience.map((x) => `<li>${x}</li>`).join("")}</ul></div>
  </aside>
</div></section>`,
  };
}

function Programmes() {
  return {
    title: "Free Programmes — By Rae",
    desc: "Free, structured digital marketing programmes for Filipino beginners, starting with The Social Media Starter.",
    html: `${PageHead({ crumbs: [["Home", "#/"], ["Free Programmes", ""]], label: "Free programmes", title: "Structured learning, <em>zero tuition.</em>", lede: "Programmes are step-by-step learning paths with daily lessons and practical assignments. Start with the fundamentals, finish with something you can show." })}
<section class="section tight" style="padding-top:0"><div class="wrap">
  ${PROGRAMMES.map(ProgrammeCard).join("")}
  <div class="box dashed" style="margin-top:24px;text-align:center;padding:36px"><span class="label plain">More programmes</span><h3>In planning.</h3><p class="muted" style="max-width:52ch;margin:0 auto">Future programmes will be announced on Facebook once they're ready. Nothing is listed here until it actually exists.</p></div>
</div></section>`,
  };
}

const PTABS = [["", "Overview"], ["curriculum", "Curriculum"], ["materials", "Learning Materials"], ["assignments", "Assignments"], ["final-project", "Final Project"], ["register", "Registration"]];

function Programme(slug, tab = "") {
  const p = getProg(slug); if (!p) return null;
  const tabName = PTABS.find((t) => t[0] === tab)[1];
  const base = `#/programmes/${p.slug}`;
  const crumbs = [["Home", "#/"], ["Free Programmes", "#/programmes"], [p.title, tab ? base : ""]];
  if (tab) crumbs.push([tabName, ""]);
  const tabs = `<nav class="tabs" aria-label="Programme sections">${PTABS.map(([t, n]) => `<a href="${base}${t ? "/" + t : ""}" ${t === tab ? 'aria-current="page"' : ""}>${n}</a>`).join("")}</nav>`;
  const head = PageHead({ crumbs, label: `Free programme · ${p.lessons.length} days`, title: tab ? `${tabName}` : p.title, lede: tab ? `${p.title} — <em style="font-family:var(--serif)">${p.tagline}</em>` : `<em style="font-family:var(--serif);font-size:1.25em;color:var(--olive)">${p.tagline}</em>`, extra: tabs });
  let body = "";

  if (!tab) body = `<div class="detail">
    <div>
      <div class="block"><h2>About the programme</h2><p class="lede">${p.description}</p><p>Each day has one lesson and one practical assignment. By Day 14, your assignments add up to a mini social media strategy — your first portfolio piece.</p></div>
      <div class="block"><h2>Who it's for</h2><ul class="ticks">${p.forWho.map((x) => `<li>${x}</li>`).join("")}</ul></div>
      <div class="block"><h2>What you'll work on</h2><ul class="ticks">${p.outcomes.map((x) => `<li>${x}</li>`).join("")}</ul></div>
      <div class="block"><h2>How it's structured</h2><div class="grid g2">${p.phases.map((ph) => `<div class="box"><span class="label">Days ${ph.from}–${ph.to}</span><h3>${ph.name}</h3><p class="muted" style="margin:0">${ph.blurb}</p></div>`).join("")}</div></div>
    </div>
    <aside class="aside"><div class="box"><span class="label">At a glance</span><dl class="dl">${p.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl></div>
      <div class="box forest"><span class="label">Get started</span><h3>Read the lessons now.</h3><p style="opacity:.8;font-size:.93rem">Lesson notes are open to read while registration is being set up.</p><div class="btn-row"><a class="btn btn-light" href="${base}/day-1">Open Day 1 ${I.arrow}</a><a class="btn btn-outline-light" href="${base}/register">Registration info</a></div></div></aside>
  </div>`;

  if (tab === "curriculum") body = `${Notice("Lesson notes for all 14 days are available as <strong>draft v1</strong> and may be revised. Worksheets and other learning materials are still being made.")}
    <div style="margin-top:40px">${p.phases.map((ph) => `<div class="phase"><div class="phase-head"><span class="label" style="margin:0">Days ${ph.from}–${ph.to}</span><h2>${ph.name}</h2></div><p class="muted" style="max-width:60ch">${ph.blurb}</p>
      <div class="grid g4">${p.lessons.filter((l) => l.day >= ph.from && l.day <= ph.to).map((l) => LessonCard(p, l)).join("")}</div></div>`).join("")}</div>`;

  if (tab === "materials") body = `${Notice("Here's an honest status of every learning material. <strong>Lesson notes</strong> are readable now (draft). <strong>Worksheets</strong> are linked to resources in the library and are marked Coming Soon until the files exist.")}
    <div class="table-wrap" style="margin-top:32px"><table><thead><tr><th scope="col">Day</th><th scope="col">Lesson</th><th scope="col">Lesson notes</th><th scope="col">Worksheets & templates</th></tr></thead><tbody>
    ${p.lessons.map((l) => `<tr><td class="mono">${pad(l.day)}</td><td><a class="textlink" href="${base}/day-${l.day}">${l.title}</a></td><td><span class="pill draft">Draft — read online</span></td>
      <td>${l.related.map(getRes).filter(Boolean).map((r) => `<a href="#/resources/${r.slug}" class="textlink">${r.title}</a> <span class="pill soon" style="font-size:.6rem">Soon</span>`).join("<br>")}</td></tr>`).join("")}
    </tbody></table></div>`;

  if (tab === "assignments") body = `<p class="lede" style="margin-bottom:32px">One practical assignment per day. They build on each other — keep using the same business throughout so everything adds up to your final project.</p>
    <ol class="roadmap">${p.lessons.map((l) => `<li><span class="step">${pad(l.day)}</span><div><h3>${l.title}</h3><p class="muted" style="max-width:66ch">${l.assignment}</p><a class="textlink" href="${base}/day-${l.day}">Go to lesson →</a></div></li>`).join("")}</ol>
    <div style="margin-top:24px">${Notice("Assignment submission and feedback aren't set up yet. For now, do the assignments for your own practice and keep your files — they'll become your final project and portfolio.")}</div>`;

  if (tab === "final-project") body = `<div class="detail"><div>
      <div class="block"><h2>The brief</h2><p class="lede">${p.finalProject.brief}</p></div>
      <div class="block"><h2>What to include</h2><ol class="steps-ol">${p.finalProject.deliverables.map((x) => `<li>${x}</li>`).join("")}</ol></div>
      <div class="block"><h2>Guidelines</h2><ul class="ticks">${p.finalProject.guidelines.map((x) => `<li>${x}</li>`).join("")}</ul></div>
    </div><aside class="aside">
      <div class="box forest"><span class="label">Good to know</span><h3>Most of it is already done.</h3><p style="opacity:.82;font-size:.93rem">If you've completed the daily assignments, your final project is mostly compiling and polishing what you've made.</p><a class="btn btn-light" href="${base}/day-14">Go to Day 14 ${I.arrow}</a></div>
      <div class="box dashed"><span class="label">Submission</span><p class="muted" style="margin:0;font-size:.93rem">Submission and review details will be announced when the programme officially opens. There's no submission form yet.</p></div>
      <div class="box"><span class="label">Helpful resource</span><a class="textlink" href="#/resources/portfolio-starter-kit">Marketing Portfolio Starter Kit</a></div>
    </aside></div>`;

  if (tab === "register") body = `<div class="detail"><div>
    <div class="block"><h2>Registration isn't open yet.</h2><p class="lede">Registration for ${p.title} is being prepared. Below is a preview of what the form will ask. <strong>The fields are disabled and nothing is collected on this page.</strong></p>
    <p>In the meantime, the lesson notes are open to read, and announcements will be posted on Facebook.</p><div class="btn-row">${ext(SITE.facebook, `Get updates on Facebook ${I.arrow}`)}<a class="btn btn-ghost" href="${base}/day-1">Start reading Day 1</a></div></div>
    <div class="box" style="padding:clamp(22px,4vw,36px)"><span class="label">Form preview</span>
      <form class="form" aria-describedby="reg-note" onsubmit="return false">
        <div class="field"><label for="f-name">Preferred name</label><input id="f-name" type="text" placeholder="What should we call you?" disabled></div>
        <div class="field"><label for="f-email">Email address</label><input id="f-email" type="email" placeholder="you@example.com" disabled><small>Used only for programme updates.</small></div>
        <div class="field"><label for="f-level">Experience level</label><select id="f-level" disabled><option>Complete beginner</option><option>Some self-study</option><option>Some work experience</option><option>Working in marketing</option></select></div>
        <div class="field"><label for="f-reason">Reason for joining</label><textarea id="f-reason" rows="3" disabled placeholder="Bakit mo gustong sumali?"></textarea></div>
        <div class="field"><label for="f-goals">Learning goals</label><textarea id="f-goals" rows="3" disabled placeholder="What do you want to be able to do after 14 days?"></textarea></div>
        <button class="btn" type="button" disabled>Registration opens soon</button>
        <p id="reg-note" class="muted" style="font-size:.85rem;margin:0">Preview only — this form is not connected and does not send or store anything.</p>
      </form></div>
  </div><aside class="aside">
    <div class="box sand"><span class="label">Privacy notice</span><p style="font-size:.92rem">When registration opens, By Rae will collect only what's needed to run the programme: your preferred name, email, experience level and goals. This information will be used to send programme updates and improve the lessons. It will not be sold or shared for advertising. You'll be able to ask for your information to be deleted at any time.</p><p style="font-size:.85rem;margin:0" class="muted">Registration will be handled in line with the Philippine Data Privacy Act of 2012 (RA 10173).</p></div>
    <div class="box dashed"><span class="label">Before launch</span><p style="font-size:.88rem;margin:0" class="muted">To open registration, this form needs a secure form service or backend (for example a form tool with HTTPS and access controls), a confirmation email flow, and a published privacy policy.</p></div>
  </aside></div>`;

  return {
    title: `${tab ? tabName + " — " : ""}${p.title} — By Rae`,
    desc: tab ? `${tabName} for ${p.title}, a free 14-day social media marketing programme.` : `${p.tagline} ${p.description}`,
    html: `${head}<section class="section tight" style="padding-top:clamp(28px,4vw,48px)"><div class="wrap">${body}</div></section>`,
  };
}

function Lesson(slug, dayStr) {
  const p = getProg(slug); if (!p) return null;
  const day = parseInt(dayStr, 10);
  const l = p.lessons.find((x) => x.day === day); if (!l) return null;
  const prev = p.lessons.find((x) => x.day === day - 1), next = p.lessons.find((x) => x.day === day + 1);
  const ph = p.phases.find((f) => day >= f.from && day <= f.to);
  const base = `#/programmes/${p.slug}`;
  const rel = l.related.map(getRes).filter(Boolean);
  return {
    title: `Day ${day}: ${l.title} — ${p.title} — By Rae`,
    desc: l.overview.slice(0, 155),
    html: `<header class="page-head"><div class="wrap">${sprig()}
      ${Breadcrumbs([["Home", "#/"], ["Free Programmes", "#/programmes"], [p.title, base], ["Curriculum", `${base}/curriculum`], [`Day ${day}`, ""]])}
      <span class="label">Day ${pad(day)} of ${p.lessons.length} · ${ph.name}</span>
      <h1 class="h1" style="max-width:20ch">${l.title}</h1>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px"><span class="pill draft">Lesson notes · draft v1</span><span class="pill soon">Worksheets · coming soon</span></div></div></header>
    <section class="section tight" style="padding-top:0"><div class="wrap lesson-layout">
      <nav class="lesson-nav" aria-label="All lessons"><span class="label">Curriculum</span><ol>${p.lessons.map((x) => `<li><a href="${base}/day-${x.day}" ${x.day === day ? 'aria-current="page"' : ""}><span>${pad(x.day)}</span>${x.title}</a></li>`).join("")}</ol></nav>
      <article class="prose">
        <div class="box sand" style="margin-bottom:36px"><span class="label">Learning objectives</span><ul class="ticks" style="margin:0">${l.objectives.map((o) => `<li>${o}</li>`).join("")}</ul></div>
        <h2 style="margin-top:0">Lesson overview</h2><p>${l.overview}</p>
        ${l.sections.map(([h, t]) => `<h2>${h}</h2><p>${t}</p>`).join("")}
        <div class="box" style="margin:36px 0"><span class="label">Practical example</span><h3>${l.example.title}</h3><p style="margin:0">${l.example.body}</p></div>
        <h2>Key takeaways</h2><ul>${l.takeaways.map((t) => `<li>${t}</li>`).join("")}</ul>
        <div class="box forest" style="margin:36px 0"><span class="label">Assignment · Day ${pad(day)}</span><h3>Your task</h3><p style="margin:0">${l.assignment}</p></div>
        ${rel.length ? `<h2>Related resources</h2><div class="grid g2">${rel.map(ResourceCard).join("")}</div>` : ""}
        <div class="prev-next">${prev ? `<a class="prev" href="${base}/day-${prev.day}"><small>← Previous · Day ${pad(prev.day)}</small><strong>${prev.title}</strong></a>` : ""}
          ${next ? `<a class="next" href="${base}/day-${next.day}"><small>Next · Day ${pad(next.day)} →</small><strong>${next.title}</strong></a>` : `<a class="next" href="${base}/final-project"><small>Up next →</small><strong>The Final Project</strong></a>`}</div>
      </article>
    </div></section>`,
  };
}

function Journal(params, catSlug) {
  const isArchive = !!catSlug;
  const cat = catSlug ? jCat(catSlug) : null;
  if (isArchive && !cat) return null;
  if (isArchive) {
    const list = ARTICLES.filter((a) => a.category === catSlug);
    return {
      title: `${cat.label} — The Journal — By Rae`, desc: cat.blurb,
      html: `${PageHead({ crumbs: [["Home", "#/"], ["The Journal", "#/journal"], [cat.label, ""]], label: "Journal category", title: cat.label, lede: cat.blurb })}
      <section class="section tight" style="padding-top:0"><div class="wrap">
        ${list.length ? `<div class="grid g3">${list.map(ArticleCard).join("")}</div>` : `<div class="empty"><h3>Wala pa dito — for now.</h3><p>No articles in ${cat.label} yet. New pieces will be announced on Facebook.</p><a class="btn btn-ghost" href="#/journal">${I.back} Back to all articles</a></div>`}
        <div style="margin-top:48px"><span class="label">Other categories</span><div class="chips">${JOURNAL_CATEGORIES.filter((c) => c.slug !== catSlug).map((c) => `<a class="chip" style="text-decoration:none" href="#/journal/category/${c.slug}">${c.label}</a>`).join("")}</div></div>
      </div></section>`,
    };
  }
  const counts = { all: ARTICLES.length };
  ARTICLES.forEach((a) => (counts[a.category] = (counts[a.category] || 0) + 1));
  const cats = [{ slug: "all", label: "All" }, ...JOURNAL_CATEGORIES];
  const active = jCat(params.get("cat")) ? params.get("cat") : "all";
  return {
    title: "The Journal — By Rae", desc: "Practical, honest articles about digital marketing, careers and strategy — written for Filipino beginners.",
    html: `${PageHead({ crumbs: [["Home", "#/"], ["The Journal", ""]], label: "The Journal", title: "Marketing, <em>written down.</em>", lede: "Practical articles on marketing concepts, careers and strategy — written to help you think, not just to fill a feed." })}
    <section class="section tight" style="padding-top:0"><div class="wrap">
      <div class="toolbar">${CategoryFilter(cats, active, counts)}${SearchBar("j-search", "Search articles")}</div>
      <p class="results-count" id="j-count" aria-live="polite"></p>
      <div class="grid g3" id="j-grid">${ARTICLES.map(ArticleCard).join("")}</div>
      <div class="empty" id="j-empty" hidden><h3>Wala pang articles dito.</h3><p>Nothing matches yet — this category may still be empty.</p><button class="btn btn-ghost" type="button" data-reset>Show all articles</button></div>
    </div></section>
    <section class="section band-paper"><div class="wrap"><span class="label">Browse by category</span><h2 class="h2">Five ways <em>in.</em></h2>
      <div class="grid g3" style="margin-top:32px">${JOURNAL_CATEGORIES.map((c) => `<a class="card" href="#/journal/category/${c.slug}"><span class="label plain">${counts[c.slug] || 0} article${counts[c.slug] === 1 ? "" : "s"}</span><h3>${c.label}</h3><p>${c.blurb}</p><div class="card-foot"><span></span><span>Open archive ${I.arrow}</span></div></a>`).join("")}</div></div></section>`,
    init: () => bindFilter({ gridSel: "#j-grid", searchId: "j-search", countSel: "#j-count", emptySel: "#j-empty", initialCat: active, initialQ: params.get("q"), basePath: "/journal", noun: "article" }),
  };
}

function Article(slug) {
  const a = getArt(slug); if (!a) return null;
  const cat = jCat(a.category);
  const related = [...ARTICLES.filter((x) => x.slug !== slug && x.category === a.category), ...ARTICLES.filter((x) => x.slug !== slug && x.category !== a.category)].slice(0, 3);
  const body = a.body.map(([t, v]) => t === "p" ? `<p>${v}</p>` : t === "h2" ? `<h2>${v}</h2>` : t === "ul" ? `<ul>${v.map((x) => `<li>${x}</li>`).join("")}</ul>` : t === "quote" ? `<blockquote class="pull">${v}</blockquote>` : "").join("");
  return {
    title: `${a.title} — The Journal — By Rae`, desc: a.excerpt,
    html: `<header class="page-head"><div class="wrap article-head">
      ${Breadcrumbs([["Home", "#/"], ["The Journal", "#/journal"], [cat.label, `#/journal/category/${cat.slug}`], [a.title, ""]])}
      <a class="label plain" style="text-decoration:none;justify-content:center;display:flex" href="#/journal/category/${cat.slug}">${cat.label}</a>
      <h1 class="h1">${a.title}</h1><p class="lede" style="margin:0 auto 22px">${a.excerpt}</p>
      <div class="article-meta">${a.date ? `<span>${fmtDate(a.date)}</span>` : ""}<span>${readTime(a)}</span><span>By Rae</span></div></div></header>
    <section class="section tight" style="padding-top:0"><div class="wrap"><article class="prose article-body">${body}
      <div class="share" aria-label="Share this article"><span class="mono" style="margin-right:6px">Share</span>
        <a class="btn btn-ghost" data-share="facebook" href="#" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
        <a class="btn btn-ghost" data-share="x" href="#" target="_blank" rel="noopener noreferrer">X ↗</a>
        <button class="btn btn-ghost" type="button" data-copy>Copy link</button></div>
      <a class="textlink" href="#/journal">${I.back} Back to The Journal</a>
    </article></div></section>
    <section class="section band-paper"><div class="wrap"><span class="label">Keep reading</span><h2 class="h2" style="margin-bottom:32px">Related <em>articles.</em></h2><div class="grid g3">${related.map(ArticleCard).join("")}</div></div></section>`,
    init: () => {
      const url = location.href, text = a.title;
      $('[data-share="facebook"]').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      $('[data-share="x"]').href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
      $("[data-copy]").addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(url); toast("Link copied"); }
        catch { const t = document.createElement("textarea"); t.value = url; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); toast("Link copied"); } catch { toast("Couldn't copy — copy it from the address bar"); } t.remove(); }
      });
    },
  };
}

function About(params) {
  return {
    title: "About Rae — By Rae", desc: "Meet Rae, the faceless Filipino digital marketing professional behind By Rae — plus the mission, philosophy, and future plans for Rae Academy and Rae Studio.",
    html: `${PageHead({ crumbs: [["Home", "#/"], ["About Rae", ""]], label: "About Rae", title: "Less about the face, <em>more about the work.</em>", lede: "The person, the reason, and the long-term plan behind By Rae." })}
    <section class="section tight" id="meet" style="padding-top:0"><div class="wrap grid g2" style="align-items:center;gap:clamp(32px,6vw,80px)">
      <div class="hero-art" aria-hidden="true" style="justify-self:start;aspect-ratio:1/1;max-width:420px"><div class="blob c"></div><div class="blob a"></div><div class="blob b"></div>
        <div class="hero-card" style="top:34%;text-align:center"><p class="wordmark" style="font-size:3rem;margin:0">by rae<span>.</span></p><p class="mono muted" style="margin:6px 0 0">faceless, on purpose</p></div></div>
      <div><span class="label">Meet Rae</span><h2 class="h2">Hi, I'm Rae.</h2>
        <p class="lede">A Filipino digital marketing professional — and, by choice, a faceless one.</p>
        <p>You won't find a personal photoshoot here. That's intentional: By Rae is meant to be about what you learn, not who's teaching it. The focus stays on the work, the ideas, and the practical skills that help you get better at marketing.</p></div>
    </div></section>
    <section class="section band-paper" id="story"><div class="wrap narrow"><span class="label">The story behind By Rae</span><h2 class="h2">Built for the gap <em>between wanting to learn and knowing where to start.</em></h2>
      <p class="lede">A lot of Filipinos want to get into digital marketing — students, career shifters, aspiring freelancers and VAs. But the way in isn't obvious.</p>
      <p>Courses can be expensive. Entry-level job posts ask for experience you can only get from a job. And much of the free content online is either too vague to be useful or too busy selling something.</p>
      <p>By Rae exists to fill that gap: free resources, structured lessons and honest writing, explained in the way Filipinos actually talk. One resource, one lesson, one article at a time.</p></div></section>
    <section class="section band-forest" id="mission"><div class="wrap grid g2" style="gap:48px">
      <div><span class="label">Mission</span><h2 class="h2">Make digital marketing education <em style="color:var(--sage)">accessible.</em></h2><p class="muted">Practical, beginner-friendly marketing education for Filipinos — free, clear, and grounded in how the work is actually done.</p></div>
      <div><span class="label">Vision</span><h2 class="h2">An ecosystem for <em style="color:var(--sage)">learning and working.</em></h2><p class="muted">Over time, By Rae aims to grow into a connected path: free learning, a structured academy, and a studio where skills turn into real work.</p></div>
    </div></section>
    <section class="section" id="philosophy"><div class="wrap"><span class="label">Learning philosophy</span>
      <p class="big-quote" style="color:var(--forest)">“You shouldn't need experience to be given the opportunity <em style="color:var(--olive)">to learn.</em>”</p>
      <div class="grid g4">
        <div class="box"><span class="num">01</span><h3>Fundamentals before tools</h3><p class="muted" style="margin:0">Tools change. Thinking skills last.</p></div>
        <div class="box"><span class="num">02</span><h3>Learn by doing</h3><p class="muted" style="margin:0">Every lesson ends with something practical to make.</p></div>
        <div class="box"><span class="num">03</span><h3>Honest over hype</h3><p class="muted" style="margin:0">No inflated promises. No fake results. Just the work.</p></div>
        <div class="box"><span class="num">04</span><h3>Taglish is welcome</h3><p class="muted" style="margin:0">Learn in the language you actually think in.</p></div>
      </div></div></section>
    <section class="section band-sand"><div class="wrap"><span class="label">The long-term plan</span><h2 class="h2" style="margin-bottom:32px">One brand now. <em>Two more, someday.</em></h2>
      <div class="eco">
        <div class="now"><span class="pill" style="color:var(--sand);border-color:rgba(245,240,230,.35)">Now</span><h3 style="margin-top:16px">By Rae</h3><p>The public-facing educational brand: free resource library, free programmes, the Journal and the community.</p></div>
        <div id="academy"><span class="pill soon">Future · not yet open</span><h3 style="margin-top:16px">Rae Academy</h3><p class="muted">A planned digital marketing academy with structured learning programmes, practical assignments, portfolio development and career preparation.</p></div>
        <div id="studio"><span class="pill soon">Future · not yet operating</span><h3 style="margin-top:16px">Rae Studio</h3><p class="muted">A planned digital marketing agency offering services to businesses, with potential supervised opportunities for qualified academy graduates.</p></div>
      </div>
      <p class="muted" style="margin-top:20px;font-size:.92rem">Rae Academy and Rae Studio are future initiatives. They aren't accepting students or clients yet — announcements will come through By Rae's Facebook page.</p></div></section>
    ${CTASection({ label: "Say hi", title: "Questions, ideas, <em>collabs?</em>", primary: `<a class="btn btn-light" href="#/connect">Let's connect ${I.arrow}</a>`, secondary: ext(SITE.facebook, "Facebook ↗", "btn btn-outline-light") })}`,
    init: () => { const s = params.get("s"); if (s) { const el = document.getElementById(s); if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60); } },
  };
}

function Connect() {
  const topics = [
    ["General enquiries", "Questions about By Rae, the resources, or how anything on this site works."],
    ["Educational collaborations", "Schools, orgs and communities interested in working together on free marketing education."],
    ["Resource suggestions", "A template, worksheet or guide you wish existed. These help decide what gets made next."],
    ["Community questions", "Stuck on a concept or a lesson? Ask. Walang tanong na too basic."],
    ["Future partnerships", "Interested in what Rae Academy or Rae Studio might become? Reach out early — just know they're not open yet."],
  ];
  return {
    title: "Let's Connect — By Rae", desc: "Get in touch with By Rae for questions, collaborations, resource suggestions and community conversations.",
    html: `${PageHead({ crumbs: [["Home", "#/"], ["Let's Connect", ""]], label: "Let's connect", title: "Say hi. <em>Ask anything.</em>", lede: "The official way to reach By Rae right now is through the Facebook page. Send a message there — it's read by Rae." , extra: `<div class="btn-row" style="margin-top:28px">${ext(SITE.facebook, `Message By Rae on Facebook ${I.arrow}`)}</div>` })}
    <section class="section tight" style="padding-top:0"><div class="wrap">
      <div class="grid g3">${topics.map((t, i) => `<article class="card lift"><span class="num">${pad(i + 1)}</span><h3>${t[0]}</h3><p>${t[1]}</p>
        <div class="card-foot"><span class="muted">Via Facebook</span>${ext(SITE.facebook, `Send a message ${I.arrow}`, "textlink")}</div></article>`).join("")}
        <div class="box sand"><span class="label">Before you message</span><ul class="ticks" style="margin:0;font-size:.93rem"><li>Mention which topic your message is about</li><li>For collaborations, include your organisation and what you have in mind</li><li>Replies may take a little time — thanks for your patience</li></ul></div>
      </div>
      <div style="margin-top:32px">${Notice("There's no contact form or email address yet, so nothing on this page collects your information. Facebook messages are handled under Facebook's own privacy policy.", "proto")}</div>
    </div></section>`,
  };
}

function NotFound() {
  return { title: "Page not found — By Rae", desc: "This page doesn't exist.", html: `<section class="section"><div class="wrap narrow" style="text-align:center"><span class="label plain" style="justify-content:center;display:flex">404</span><h1 class="h1">Ligaw ka yata.</h1><p class="lede" style="margin:0 auto 28px">This page doesn't exist — or hasn't been made yet.</p><div class="btn-row" style="justify-content:center"><a class="btn btn-primary" href="#/">Back home ${I.arrow}</a><a class="btn btn-ghost" href="#/start-here">Start Here</a></div></div></section>` };
}

/* ================= ROUTER ================= */
const ROUTES = [
  [/^\/$/, (m, q) => Home(q)],
  [/^\/start-here$/, () => StartHere()],
  [/^\/resources$/, (m, q) => Resources(q)],
  [/^\/resources\/([\w-]+)$/, (m) => ResourceDetail(m[1])],
  [/^\/programmes$/, () => Programmes()],
  [/^\/programmes\/([\w-]+)$/, (m) => Programme(m[1], "")],
  [/^\/programmes\/([\w-]+)\/(curriculum|materials|assignments|final-project|register)$/, (m) => Programme(m[1], m[2])],
  [/^\/programmes\/([\w-]+)\/day-(\d+)$/, (m) => Lesson(m[1], m[2])],
  [/^\/journal$/, (m, q) => Journal(q)],
  [/^\/journal\/category\/([\w-]+)$/, (m, q) => Journal(q, m[1])],
  [/^\/journal\/([\w-]+)$/, (m) => Article(m[1])],
  [/^\/about$/, (m, q) => About(q)],
  [/^\/connect$/, () => Connect()],
];

let lastPath = null;
function render() {
  let raw = location.hash.slice(1);
  if (!raw.startsWith("/")) raw = "/";
  const [path, qs] = raw.split("?");
  const params = new URLSearchParams(qs || "");
  let page = null;
  for (const [re, fn] of ROUTES) { const m = path.match(re); if (m) { page = fn(m, params); break; } }
  if (!page) page = NotFound();

  const main = $("#main");
  main.innerHTML = `<div class="fade-in">${page.html}</div>`;
  document.title = page.title;
  $('meta[name="description"]').setAttribute("content", page.desc || "");
  $('meta[property="og:title"]').setAttribute("content", page.title);
  $('meta[property="og:description"]').setAttribute("content", page.desc || "");

  $$("[data-nav]").forEach((a) => {
    const n = NAV[+a.dataset.nav];
    n.match.test(path) ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
  });
  closeMenus();
  const nd = $(".nav-desktop"); if (nd && lastPath !== null) { nd.classList.add("nav-suppress"); nd.addEventListener("mouseleave", () => nd.classList.remove("nav-suppress"), { once: true }); }
  if (path !== lastPath || !params.get("s")) window.scrollTo(0, 0);
  if (lastPath !== null && path !== lastPath) { const h1 = $("h1", main); if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); } }
  lastPath = path;
  if (page.init) page.init();
}

/* ---------- menus ---------- */
function closeMenus(exceptItem) {
  $$("[data-dd]").forEach((li) => { if (li !== exceptItem) { li.classList.remove("open"); $(".dd-toggle", li).setAttribute("aria-expanded", "false"); } });
  const mob = $("#mobile-nav"), hb = $(".hamburger");
  if (mob && !exceptItem) { mob.classList.remove("open"); hb.setAttribute("aria-expanded", "false"); hb.setAttribute("aria-label", "Open menu"); hb.innerHTML = I.menu; }
}
function bindHeader() {
  $$("[data-dd]").forEach((li) => {
    const btn = $(".dd-toggle", li);
    btn.addEventListener("click", (e) => { e.stopPropagation(); const open = !li.classList.contains("open"); closeMenus(li); li.classList.toggle("open", open); btn.setAttribute("aria-expanded", String(open)); if (open) setTimeout(() => $(".dd a", li).focus(), 40); });
    li.addEventListener("keydown", (e) => {
      const links = $$(".dd a", li); const i = links.indexOf(document.activeElement);
      if (e.key === "Escape") { li.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.focus(); }
      if (e.key === "ArrowDown" && li.classList.contains("open")) { e.preventDefault(); links[(i + 1) % links.length].focus(); }
      if (e.key === "ArrowUp" && li.classList.contains("open")) { e.preventDefault(); links[(i - 1 + links.length) % links.length].focus(); }
    });
    li.addEventListener("focusout", (e) => { if (!li.contains(e.relatedTarget)) { li.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });
  });
  document.addEventListener("click", (e) => { if (!e.target.closest("[data-dd]")) $$("[data-dd]").forEach((li) => { li.classList.remove("open"); $(".dd-toggle", li).setAttribute("aria-expanded", "false"); }); });
  const hb = $(".hamburger"), mob = $("#mobile-nav");
  hb.addEventListener("click", () => {
    const open = !mob.classList.contains("open");
    mob.classList.toggle("open", open); hb.setAttribute("aria-expanded", String(open));
    hb.setAttribute("aria-label", open ? "Close menu" : "Open menu"); hb.innerHTML = open ? I.close : I.menu;
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && mob.classList.contains("open")) { closeMenus(); hb.focus(); } });
}

function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2200); }

/* ---------- boot ---------- */
$("#site-header").innerHTML = Header();
$("#site-footer").innerHTML = Footer();
bindHeader();
$(".skip").addEventListener("click", () => { const m = $("#main"); m.focus(); m.scrollIntoView(); });
window.addEventListener("hashchange", render);
render();
window.__BYRAE__ = { ROUTES, render };
})();
