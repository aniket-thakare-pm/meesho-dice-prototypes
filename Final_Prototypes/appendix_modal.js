/* Appendix Data Modal Handler */
const appendixData = {
    // LEVER 1 NUMBERS
    "upfront-friction": {
        title: "78.3% — Upfront Sourcing Friction (18 of 23 Creators)",
        source: "Deck Slide 2 & Appendix Page 14 (Primary Creator Interviews)",
        base: "23 In-depth Creator Interviews across BPC and Non-BPC cohorts",
        formula: "18 out of 23 creators cited: 'Paying upfront for non-returnable cosmetics is the primary entry barrier'",
        breakdown: [
            { label: "Total Creators Interviewed", val: "23 creators", note: "Active, churned, and control" },
            { label: "Face Sunk Cost Friction", val: "78.3% (18/23)", note: "'Pocket se paisa jaa raha tha'" },
            { label: "Non-Returnable Risk", val: "100% loss", note: "Opened cosmetics cannot be hauls or returned" },
            { label: "Orders to Recover ₹300 SKU", val: "~11 orders", note: "Out-of-pocket cash risk before earning ₹1" },
            { label: "Solution 1.2 Impact", val: "₹500 Welcome Token", note: "De-risks first review before creator makes a sale" }
        ]
    },
    "rice-11": {
        title: "RICE 30.0 — Solution 1.1 In-App Onboarding",
        source: "Deck Slide 10 & Appendix Page 23 (Prioritization Matrix)",
        base: "RICE Scoring Model: (Reach × Impact × Confidence) ÷ Effort (1–10 Scale)",
        formula: "(Reach 6 × Impact 3 × Confidence 5) ÷ Effort 3 = 30.0",
        breakdown: [
            { label: "Reach (R: 6/10)", val: "16.4 Mn Buyers", note: "Targets verified 5+ beauty order cohort" },
            { label: "Impact (I: 3/10)", val: "₹3,000/mo NMV", note: "Entry micro-volume per activated creator" },
            { label: "Confidence (C: 5/10)", val: "High Trust", note: "Grounded in verified delivery satisfaction" },
            { label: "Effort (E: 3/10)", val: "1.25 PMs (₹5 L)", note: "Rapid, low-cost engineering build" },
            { label: "Final Priority", val: "RICE = 30.0", note: "Ranked #7 in DICE 3.0; Months 0–3 foundation" }
        ]
    },
    "rice-12": {
        title: "RICE 106.7 — Solution 1.2 Creator Poaching",
        source: "Deck Slide 10 & Appendix Page 23 (Prioritization Matrix)",
        base: "RICE Scoring Model: (Reach × Impact × Confidence) ÷ Effort (1–10 Scale)",
        formula: "(Reach 8 × Impact 8 × Confidence 5) ÷ Effort 3 = 106.7",
        breakdown: [
            { label: "Reach (R: 8/10)", val: "90,000 Pool", note: "Qualified Instagram nano/micro creators" },
            { label: "Impact (I: 8/10)", val: "₹5,000/mo NMV", note: "High sales velocity with established followings" },
            { label: "Confidence (C: 5/10)", val: "API Gated", note: "Meta Graph API checks >5K followers & >2% ER" },
            { label: "Effort (E: 3/10)", val: "4 PMs (₹16 L)", note: "OAuth verification + welcome token workflow" },
            { label: "Final Priority", val: "RICE = 106.7", note: "Ranked #2 in DICE 3.0; #1 highest in Lever 1" }
        ]
    },
    "rice-21": {
        title: "RICE 12.0 · Solution 2.1 SplitPay Wallet",
        source: "Deck Slide 10 & Appendix Page 23 (Prioritization Matrix)",
        base: "RICE Scoring Model: (Reach × Impact × Confidence) ÷ Effort (1–10 Scale)",
        formula: "(Reach 2 × Impact 8 × Confidence 6) ÷ Effort 8 = 12.0",
        breakdown: [
            { label: "Reach (R: 2/10)", val: "2,380 Creators", note: "Addresses 42.5% of creators with unwithdrawn balance" },
            { label: "Impact (I: 8/10)", val: "+12 Videos/yr", note: "+1 video/month velocity by eliminating upfront cash risk" },
            { label: "Confidence (C: 6/10)", val: "Store-Credit Model", note: "Benchmarked against 35–45% store credit adoption" },
            { label: "Effort (E: 8/10)", val: "12 PMs (₹48 L)", note: "Higher build cost; ledger integration with Meesho escrow" },
            { label: "Final Priority", val: "RICE = 12.0", note: "Ranked #9 in DICE 3.0; Months 6–12 build sequence" }
        ]
    },
    "rice-22": {
        title: "RICE 46.7 · Solution 2.2 Sampling Credits",
        source: "Deck Slide 10 & Appendix Page 23 (Prioritization Matrix)",
        base: "RICE Scoring Model: (Reach × Impact × Confidence) ÷ Effort (1–10 Scale)",
        formula: "(Reach 5 × Impact 8 × Confidence 7) ÷ Effort 6 = 46.7",
        breakdown: [
            { label: "Reach (R: 5/10)", val: "8,000 Creators", note: "Full BPC creator pool eligible for Trial SKUs" },
            { label: "Impact (I: 8/10)", val: "₹51.0 Cr / yr", note: "26 samples/yr generating high-intent review videos" },
            { label: "Confidence (C: 7/10)", val: "8.62x RoAS Proof", note: "Suppliers exchange ₹40 ad credits for ₹120 samples" },
            { label: "Effort (E: 6/10)", val: "10 PMs (₹40 L)", note: "Supplier barter engine & Trial SKU logistics" },
            { label: "Final Priority", val: "RICE = 46.7", note: "Ranked #4 in DICE 3.0 (DEEP DIVE); Months 0–3 foundation" }
        ]
    },
    "rice-3": {
        title: "RICE 192 · Solution 3 Trust Stack: Creator UGC on PDP",
        source: "Deck Slide 10 & Appendix Page 23 (Prioritization Matrix)",
        base: "RICE Scoring Model: (Reach × Impact × Confidence) ÷ Effort (1–10 Scale)",
        formula: "(Reach 9 × Impact 8 × Confidence 8) ÷ Effort 3 = 192",
        breakdown: [
            { label: "Reach (R: 9/10)", val: "29.29 Mn Users", note: "Reaches all BPC product page viewers" },
            { label: "Impact (I: 8/10)", val: "+10% CVR Uplift", note: "Myntra reports +25–28%; model uses conservative +10%" },
            { label: "Confidence (C: 8/10)", val: "1.7 Mn Videos Exist", note: "Videos are already there—just need PDP surface" },
            { label: "Effort (E: 3/10)", val: "6 PMs (₹24 L)", note: "Low build: SKU-video mapping and moderation pipeline" },
            { label: "Final Priority", val: "RICE = 192", note: "Ranked #1 in DICE 3.0 — Build Now (Months 0–3)" }
        ]
    },
    "rice-41": {
        title: "RICE 36.0 · Solution 4.1 Creator Storefronts",
        source: "Deck Slide 10 & Appendix Page 23 (Prioritization Matrix)",
        base: "RICE Scoring Model: (Reach × Impact × Confidence) ÷ Effort (1–10 Scale)",
        formula: "(Reach 3 × Impact 9 × Confidence 8) ÷ Effort 6 = 36.0",
        breakdown: [
            { label: "Reach (R: 3/10)", val: "0.3 Mn Storefront Buyers", note: "Targets existing storefront shoppers on creator profiles" },
            { label: "Impact (I: 9/10)", val: "+15–20% Basket Uplift", note: "Bundle regimens convert ₹250 single-item to ₹599+ routine" },
            { label: "Confidence (C: 8/10)", val: "Shopify Benchmarks", note: "Validated by Shopify bundle studies and brand conversations" },
            { label: "Effort (E: 6/10)", val: "8 PMs (₹32 L)", note: "Auto-build storefront from top-linked SKUs" },
            { label: "Final Priority", val: "RICE = 36.0", note: "Ranked #5 in DICE 3.0 — Build Later (Months 6–12)" }
        ]
    },
    "rice-42": {
        title: "RICE 21.0 · Solution 4.2 Free Sample Threshold",
        source: "Deck Slide 10 & Appendix Page 23 (Prioritization Matrix)",
        base: "RICE Scoring Model: (Reach × Impact × Confidence) ÷ Effort (1–10 Scale)",
        formula: "(Reach 3 × Impact 6 × Confidence 7) ÷ Effort 6 = 21.0",
        breakdown: [
            { label: "Reach (R: 3/10)", val: "0.3 Mn Storefront Buyers", note: "Same storefront shopper cohort near checkout" },
            { label: "Impact (I: 6/10)", val: "₹200 Extra Cart Value", note: "35% of buyers add ₹200 to unlock a free ₹60–80 mini-SKU" },
            { label: "Confidence (C: 7/10)", val: "Seller-Funded Mechanics", note: "Seller budget existing; Meesho pays nothing. BIS/Cosmetics Act compliance needed" },
            { label: "Effort (E: 6/10)", val: "4 PMs (₹16 L)", note: "Threshold bar UI + seller mini-SKU logistics setup" },
            { label: "Final Priority", val: "RICE = 21.0", note: "Ranked #8 in DICE 3.0 — Build Later (Months 6–12)" }
        ]
    },
    "rice-51": {
        title: "RICE 10.0 · Solution 5.1 Positive-Only Milestones",
        source: "Deck Slide 10 & Appendix Page 23 (Prioritization Matrix)",
        base: "RICE Scoring Model: (Reach × Impact × Confidence) ÷ Effort (1–10 Scale)",
        formula: "(Reach 2 × Impact 3 × Confidence 5) ÷ Effort 3 = 10.0",
        breakdown: [
            { label: "Reach (R: 2/10)", val: "945 Creators Kept", note: "Targets new creators in first 90-day drop-off window" },
            { label: "Impact (I: 3/10)", val: "+1.5 pts Retention Lift", note: "Deliberately conservative assumption on incremental retention" },
            { label: "Confidence (C: 5/10)", val: "Behavioral Hypothesis", note: "Validated by Track360 first-sale-in-30-days predictor" },
            { label: "Effort (E: 3/10)", val: "3 PMs (₹12 L)", note: "Dashboard and rules engine only — no cash rewards involved" },
            { label: "Final Priority", val: "RICE = 10.0", note: "Ranked #10 in DICE 3.0 — Pilot Next (Months 3–6)" }
        ]
    },
    "rice-52": {
        title: "RICE 30.0 · Solution 5.2 Creator Insights (Beauty Layer)",
        source: "Deck Slide 10 & Appendix Page 23 (Prioritization Matrix)",
        base: "RICE Scoring Model: (Reach × Impact × Confidence) ÷ Effort (1–10 Scale)",
        formula: "(Reach 3 × Impact 5 × Confidence 6) ÷ Effort 3 = 30.0",
        breakdown: [
            { label: "Reach (R: 3/10)", val: "8,000 BPC Creators", note: "All programme creators on Meesho Creator Club" },
            { label: "Impact (I: 5/10)", val: "+10% NMV per Creator", note: "30% of creators using insights show +10% NMV lift" },
            { label: "Confidence (C: 6/10)", val: "86.9% SKU Blind", note: "Meesho toolkit already flags high-performing SKUs — just needs beauty layer" },
            { label: "Effort (E: 3/10)", val: "4 PMs (₹16 L)", note: "Extends existing toolkit — small data work for beauty signals" },
            { label: "Final Priority", val: "RICE = 30.0", note: "Ranked #6 in DICE 3.0 — Pilot Next (Months 3–6)" }
        ]
    },
    "bpc-creator-share": {
        title: "16.0% — Beauty Creator Share Deficit",
        source: "Deck Slide 1, Slide 3 & Appendix Page 21",
        base: "50,000+ Total Meesho Creators (Nov 2025) & 8,000 BPC Active Cohort",
        formula: "8,000 BPC Creators ÷ 50,000 Total Creators = 16.0% (vs #1 category on TikTok Shop)",
        breakdown: [
            { label: "Total Platform Creators", val: "50,000+", note: "Meesho CEO, IPO briefing (Nov 2025)" },
            { label: "Active BPC Creators", val: "8,000", note: "Target beauty cohort on Creator Club" },
            { label: "Beauty Creator Share", val: "16.0%", note: "Severely lags apparel & fashion hauls" },
            { label: "Global Benchmark", val: "#1 Category", note: "Beauty is TikTok Shop's top GMV driver worldwide" },
            { label: "Strategic Imperative", val: "Close Supply Gap", note: "Recruit 6,700+ new beauty creators across 3 routes" }
        ]
    },
    "peer-trust": {
        title: "83.5% — Tier-2/3 Buyers Trust Peer Creators",
        source: "Deck Slide 15 (Primary Buyer Research, n=118)",
        base: "Primary User Survey across Tier-2/3 Meesho BPC Shoppers",
        formula: "83.5% of respondents trust everyday micro-creators who share their skin tone and dialect",
        breakdown: [
            { label: "Total Survey Respondents", val: "118 buyers", note: "Tier-2/3 Meesho shoppers" },
            { label: "Trust Peer/Nano Creators", val: "83.5%", note: "Over polished metro mega-influencers" },
            { label: "Demand Authentic Match", val: "75.7%", note: "Want to see products on skin like theirs" },
            { label: "Metro Agency CAC", val: "₹5,000–₹7,000", note: "High-cost talent with poor Tier-2/3 resonance" },
            { label: "In-App Solution 1.1", val: "Zero-Distance Trust", note: "Converts verified local buyers into credible creators" }
        ]
    },
    "lever11-nmv": {
        title: "₹8.9 Cr / yr — In-App Buyer-to-Creator NMV",
        source: "Appendix Page 20 & Deck Slide 5 (Route A: In-App Supply)",
        base: "16.4 Million power beauty buyers (5+ orders/yr) in Meesho user base",
        formula: "3,288 Active Creators × ₹3,000/mo × 12 months × 75% incremental",
        breakdown: [
            { label: "Power Beauty Buyers", val: "16.4 Mn", note: "274M ATUs × 30% BPC × 20% power frequency" },
            { label: "Organic Sign-Up Rate", val: "0.10%", note: "16,440 sign-ups via peak delight banner" },
            { label: "Retained Active Creators", val: "20%", note: "3,288 active creators posting regularly" },
            { label: "Monthly NMV Velocity", val: "₹3,000 / mo", note: "Entry micro-creator volume" },
            { label: "Incremental Factor", val: "75%", note: "Accounting for organic cannibalization" },
            { label: "Total In-App Annual NMV", val: "= ₹8.9 Cr", note: "Base Case: ₹8.9 Cr | Conservative: ₹3.3 Cr" }
        ]
    },
    "inapp-cac": {
        title: "~₹150 / Creator — In-App Acquisition Cost (CAC)",
        source: "Appendix Page 20 & Deck Slide 5 (In-App Conversion Funnel)",
        base: "₹5.0 Lakh one-time engineering build cost ÷ 3,288 active creators acquired",
        formula: "One-Time Feature Build (₹5,00,000) ÷ Retained Active Creators (3,288) = ~₹150 / creator",
        breakdown: [
            { label: "Target Power Buyers", val: "16.4 Mn", note: "5+ orders/yr in BPC category" },
            { label: "Organic Sign-up (0.10%)", val: "16,440", note: "Delivery history invite at peak delight" },
            { label: "Active Cohort (20%)", val: "3,288", note: "Creators generating regular orders" },
            { label: "One-Time Build Cost", val: "₹5.0 Lakhs", note: "Zero cash subsidies, zero paid ads" },
            { label: "In-App CAC per Creator", val: "= ~₹150", note: "30x+ cheaper than agency retainers (₹5,000–₹7,000)" }
        ]
    },
    "power-buyers": {
        title: "16.4 Million — Power Beauty Buyers",
        source: "Appendix Page 19 (User Base Segmentation)",
        base: "Meesho Q1 FY27 Annual Transacting Users (274 Million ATUs)",
        formula: "274 Mn Users × 30% Beauty Shoppers (82 Mn) × 20% Power Buyers (5+ orders/yr)",
        breakdown: [
            { label: "Total Meesho ATUs", val: "274 Mn", note: "Reported FY27 baseline" },
            { label: "Beauty & Personal Care Buyers", val: "82 Mn", note: "~30% category penetration" },
            { label: "High-Frequency Power Buyers", val: "16.4 Mn", note: "Top 20% purchasing 5+ times a year" },
            { label: "Conversion to Creators", val: "~3,300 creators", note: "0.10% sign-up × 20% active = 3,288 active" }
        ]
    },
    "lever12-nmv": {
        title: "₹5.8 Cr / yr — Creator Poaching Pilot NMV",
        source: "Appendix Page 20 & Deck Slide 5 (Route C: External Poaching)",
        base: "Pilot outreach of 4,000 Instagram Nano/Micro Creators with ₹20 L budget",
        formula: "1,200 Successful Creators × ₹5,000/mo × 12 months × 80% incremental",
        breakdown: [
            { label: "Pilot Creator Outreach", val: "4,000", note: "Instagram Graph API check: >5K followers, >2% ER" },
            { label: "5-Sale Hit Rate (Success)", val: "30%", note: "1,200 creators activate successfully" },
            { label: "Gross Cost per Success", val: "₹1,667", note: "₹500 welcome credit ÷ 30% hit rate" },
            { label: "90-Day Gross Contribution", val: "₹690", note: "₹15,000 GMV × 4.6% contribution margin" },
            { label: "Net Cost per Creator", val: "= ₹977 net", note: "Fully pays back in month 5-6" },
            { label: "Pilot Annual NMV", val: "= ₹5.8 Cr", note: "Base Case: ₹5.8 Cr (Scaled across 90.5K = ₹65 Cr)" }
        ]
    },
    "poaching-net-cost": {
        title: "₹977 Net Cost / Creator — Poaching Economics",
        source: "Appendix Page 20 (Route C Unit Economics)",
        base: "₹500 welcome credit for Instagram creators with 5K+ followers and >2% ER",
        formula: "Gross Cost (₹500 ÷ 30% = ₹1,667) − 90-Day Contribution (₹15,000 × 4.6% = ₹690) = ₹977",
        breakdown: [
            { label: "Welcome Product Credit", val: "₹500", note: "Granted on IG OAuth verification" },
            { label: "Hit 5 Sales Target", val: "30%", note: "Unrecovered credits written off, never chased" },
            { label: "Gross Acquisition Cost", val: "₹1,667", note: "₹500 ÷ 30% conversion" },
            { label: "90-Day Platform Contribution", val: "₹690", note: "Meesho 4.6% CM on ₹15,000 GMV" },
            { label: "Net CAC per Creator", val: "= ₹977 net", note: "Stop guardrail if success drops below 16.7%" },
            { label: "Agency Comparison", val: "₹5,000–₹7,000", note: "3-4x cheaper than agency retainers" }
        ]
    },
    "poaching-pool": {
        title: "90,000 Creators — Addressable External Pool",
        source: "Appendix Page 20 & Deck Slide 5 (Nano/Micro Creator Filter)",
        base: "1.81 Million Indian Nano/Micro Influencers (Kofluence 2024 Report)",
        formula: "1.81 Mn Creators × 5% Category & Engagement Filter (>5K followers, >2% ER) = ~90,000",
        breakdown: [
            { label: "Total Nano/Micro Creators", val: "1.81 Million", note: "Kofluence national benchmark" },
            { label: "BPC & Engagement Filter", val: "5%", note: "Verified via Instagram Graph API" },
            { label: "Addressable Beauty Creators", val: "90,000", note: "Target pool for automated poaching" },
            { label: "Scaled Retained Supply", val: "13,575", note: "15% retained at scale = ₹65 Cr NMV" }
        ]
    },
    "acq-nmv": {
        title: "₹20.6 Cr / yr — Creator Acquisition NMV",
        source: "Appendix Page 20 (Three Acquisition Routes)",
        base: "Launch Budget: ₹39.5 L across 6,713 total new creators",
        formula: "In-App Funnel (₹8.9 Cr) + Creator Fest (₹6.0 Cr) + Poaching Pilot (₹5.8 Cr)",
        breakdown: [
            { label: "In-App Funnel (3,288 creators)", val: "₹8.9 Cr", note: "CAC: ~₹150 per creator" },
            { label: "Creator Fest (2,225 creators)", val: "₹6.0 Cr", note: "CAC: ₹650 per creator" },
            { label: "Poaching Pilot (1,200 creators)", val: "₹5.8 Cr", note: "CAC: ₹977 net per creator" },
            { label: "Combined Lever NMV", val: "= ₹20.7 Cr", note: "Conservative case: ₹11.8 Cr" }
        ]
    },
    "creator-fest": {
        title: "₹6.0 Cr / yr — Creator Fest NMV",
        source: "Appendix Page 20 & Deck Slide 5 (Route B: Creator Fest)",
        base: "₹14.5 L campaign budget across 3 city events and 30-day competition",
        formula: "2,225 Active Creators × ₹3,000/mo × 12 months × 75% incremental = ₹6.0 Cr",
        breakdown: [
            { label: "Target Campaign Reach", val: "5 Million", note: "Paid ads & organic buzz" },
            { label: "Contest Entrants (0.2%)", val: "10,000", note: "Judged on orders, not vanity views" },
            { label: "Retained Active Creators", val: "2,225", note: "20% stayed active + 225 offline event cohort" },
            { label: "Total Campaign Cost", val: "₹14.5 Lakhs", note: "Prizes ₹1.75L + Ads ₹5L + Ops ₹4L + Events ₹3.72L" },
            { label: "Cost per Active Creator", val: "= ₹650", note: "₹14.5 L ÷ 2,225 creators" },
            { label: "Annual Incremental NMV", val: "= ₹6.0 Cr", note: "Conservative case: ₹4.7 Cr" }
        ]
    },
    "mcn-markup": {
        title: "~₹31 / ₹100 — Middlemen Agency Markup",
        source: "Appendix Page 20 (Agency vs Direct Cost Model)",
        base: "Brand agency interview calls & rate cards (n=4 brands)",
        formula: "Brand Spend (₹100) ÷ (1.2 Markup × 1.2 Fee = 1.44) = ~₹69 reaches the creator",
        breakdown: [
            { label: "Agency Agency Markups", val: "15% - 25%", note: "Overhead fee" },
            { label: "Agency Management Fee", val: "15% - 25%", note: "Handling cost" },
            { label: "Middlemen Leakage", val: "~31%", note: "Lost to metro agency" },
            { label: "Agency CAC per Creator", val: "₹5,000 - ₹7,000", note: "30x+ higher than in-app CAC (₹150)" }
        ]
    },

    // LEVER 2 NUMBERS
    "lever2-nmv": {
        title: "₹66.5 Cr / yr — Sourcing Levers NMV",
        source: "Appendix Page 21 (Zero-Friction Sourcing)",
        base: "8,000 BPC Programme Creators on Meesho Creator Club",
        formula: "SplitPay Wallet (₹15.5 Cr) + Sampling Credits (₹51.0 Cr)",
        breakdown: [
            { label: "SplitPay Wallet NMV", val: "₹15.5 Cr", note: "2,380 adopters × 12 videos × ₹5,436" },
            { label: "Ad-Credit Sampling NMV", val: "₹51.0 Cr", note: "8,000 creators × 26 samples × 45% post × 60% sell" },
            { label: "Total Lever 2 Annual NMV", val: "= ₹66.5 Cr", note: "Conservative case: ₹14.5 Cr | Upside: ₹141 Cr" }
        ]
    },
    "lever21-nmv": {
        title: "₹15.5 Cr / yr — SplitPay Wallet NMV",
        source: "Appendix Page 21 (Split-Pay Wallet Economics)",
        base: "8,000 BPC Programme Creators on Meesho Creator Club",
        formula: "2,380 Adopters × 12 extra videos/yr × ₹5,436 NMV per video = ₹15.5 Cr",
        breakdown: [
            { label: "Programme Creators", val: "8,000", note: "Target BPC cohort" },
            { label: "With Pending Balance", val: "70%", note: "Creators with accrued unpaid commissions" },
            { label: "Wallet Adoption Rate", val: "42.5%", note: "2,380 active adopters" },
            { label: "Extra Video Output", val: "12 videos/yr", note: "+1 extra review video per month" },
            { label: "NMV Generated per Video", val: "₹5,436", note: "Proven affiliate conversion benchmark" },
            { label: "Annual SplitPay NMV", val: "= ₹15.5 Cr", note: "Conservative case: ₹4.5 Cr" }
        ]
    },
        "splitpay-adoption": {
        title: "42.5% Adopters (2,380 Creators) — SplitPay Wallet",
        source: "Appendix Page 21 (Split-Pay Funnel)",
        base: "8,000 BPC Creators & 70% Pending Balance Ratio",
        formula: "8,000 Creators × 70% with Pending Balance × 42.5% Adoption = 2,380 Adopters",
        breakdown: [
            { label: "BPC Programme Creators", val: "8,000", note: "Total active beauty creator pool" },
            { label: "Creators with Accrued Balance", val: "5,600 (70%)", note: "Have unwithdrawn commissions" },
            { label: "SplitPay Opt-in Share", val: "42.5%", note: "Choose wallet split-pay over waiting for cash cycle" },
            { label: "Active Wallet Adopters", val: "= 2,380 creators", note: "Generate 12 extra videos/year each" }
        ]
    },
    "empty-days": {
        title: "6 to 18 'Empty Days' · Dead Capital Gap Derivation",
        source: "Primary Research & Meesho Seller/Creator Settlement Policy",
        base: "Timeline Analysis from Customer Order Placement to Creator Bank Settlement",
        formula: "Empty Days = (21 Days Confirmation − [3–8d Delivery + 7d Return]) + [0–7d Weekly Payout]",
        breakdown: [
            { label: "1. Delivery Window", val: "3 to 8 Days", note: "Standard logistics transit time across Tier-2/3 pincodes" },
            { label: "2. Customer Return Window", val: "7 Days", note: "Strict return policy; return liability ends at Day 10–15" },
            { label: "3. Total Return Risk Window", val: "10 to 15 Days", note: "After Day 15, customer return risk is mathematically 0%" },
            { label: "4. Meesho Confirmation Policy", val: "21 Days Fixed", note: "Meesho holds order in pending state for 21 days regardless" },
            { label: "5. Policy Confirmation Gap", val: "6 to 11 Days", note: "21d − 15d = 6 days (min); 21d − 10d = 11 days (max)" },
            { label: "6. Weekly Payout Batching", val: "+0 to 7 Days", note: "Payouts run on fixed weekly batch dates (Day 0 to Day 7)" },
            { label: "7. Total Settlement Elapsed", val: "21 to 28 Days", note: "Total calendar time from customer order to bank transfer" },
            { label: "Final Empty Days Gap", val: "= 6 to 18 Days", note: "Commissions sit 100% risk-free yet completely inaccessible" },
            { label: "SplitPay Solution", val: "Day 10–15 Instant Unlock", note: "Redeems pending balance for new stock at checkout, eliminating the 6–18 day dead gap" }
        ]
    },
    "lever22-nmv": {
        title: "₹51.0 Cr / yr — Ad-Credit Sampling NMV",
        source: "Appendix Page 21 (Ad Credit Unit Economics & Sampling)",
        base: "8,000 BPC Creators × 26 samples/yr × 45% post × 60% sell",
        formula: "8,000 creators × 26 samples × 45% post × 60% sell × ₹12,080 NMV/video × 75% incremental",
        breakdown: [
            { label: "BPC Programme Creators", val: "8,000", note: "Active creator base" },
            { label: "Samples Redeemed per Year", val: "26 samples", note: "Funded via ₹40 ad credits each" },
            { label: "Post Compliance Rate", val: "45%", note: "Mandated within 14 days of delivery" },
            { label: "Order-Generating Videos", val: "60%", note: "Videos that convert to at least 1 sale" },
            { label: "NMV Generated per Video", val: "₹12,080", note: "Average basket volume per video" },
            { label: "Total Sampling NMV", val: "= ₹51.0 Cr", note: "2.8x return on ad credits (Conservative: ₹10 Cr)" }
        ]
    },
    "ad-credit-sample": {
        title: "₹40 Ad Credits Replaces ₹120 Sample",
        source: "Appendix Page 21 (Ad Credit Unit Economics)",
        base: "Meesho Seller RoAS FY25: 8.62x & Supplier 33.3% Gross Margin",
        formula: "Supplier Total Cost (₹115) ÷ RoAS Margin Factor (8.62 × 33.3% = ₹2.87) = ₹40",
        breakdown: [
            { label: "Product + Packaging + Shipping", val: "₹75 cash", note: "Supplier COGS" },
            { label: "Supplier Foregone Profit", val: "₹40", note: "₹120 retail × 33.3% margin" },
            { label: "Total Supplier Value to Recover", val: "₹115", note: "Required trade-off" },
            { label: "Meesho Ad Credits Granted", val: "= ₹40", note: "Supplier recovers ₹115 in gross profit via 8.62x RoAS ads" }
        ]
    },
    "breakeven-11": {
        title: "~11 Orders — Beauty Creator Break-Even",
        source: "Appendix Page 19 (Creator Economics)",
        base: "Meesho Creator Club 9% BPC Commission Rate & ₹300 SKU Price",
        formula: "SKU Cost (₹300) ÷ Commission per Order (₹300 × 9% = ₹27) = 11.1 Orders",
        breakdown: [
            { label: "Average BPC Product Cost", val: "₹300", note: "Out-of-pocket spend" },
            { label: "Commission per Order", val: "₹27", note: "9% affiliate cut" },
            { label: "Orders to Recover 1 SKU", val: "11.1 Orders", note: "1 ÷ commission rate (holds across all prices)" },
            { label: "SplitPay & Sampling Impact", val: "11 → 0 Orders", note: "Eliminates creator upfront cash risk" }
        ]
    },

    // LEVER 3 NUMBERS
    "pdp-nmv": {
        title: "₹29.7 Cr / yr — PDP Creator Video NMV",
        source: "Appendix Page 22 (Strategic Model)",
        base: "BPC Total NMV: ₹3,716 Cr (Derived from Meesho Q1 FY27: ₹11,614 Cr × 4 quarters = ₹46,456 Cr × 8% BPC share)",
        formula: "BPC NMV (₹3,716 Cr) × SKUs with video (40%) × Buyers who watch (20%) × Conversion uplift (10%)",
        breakdown: [
            { label: "Meesho Annual BPC NMV", val: "₹3,716 Cr", note: "Platform base" },
            { label: "Eligible Video Coverage", val: "40%", note: "Assumed for top 5,000 SKUs" },
            { label: "Buyer Video Watch Rate", val: "20%", note: "Organic PDP engagement" },
            { label: "Conversion Rate Uplift", val: "+10%", note: "Conservative vs Myntra reported +25-28%" },
            { label: "Total Annual NMV", val: "= ₹29.7 Cr", note: "Base Case (Conservative: ₹4.6 Cr | Upside: ₹100 Cr)" }
        ]
    },
    "fake-stat": {
        title: "40% — Cosmetic Trust Deficit & Authenticity Gap",
        source: "Appendix Page 15 (Primary Research n=118 & LocalCircles n=4,300)",
        base: "LocalCircles National Study & Primary User Research across Tier-2/3 Meesho Shoppers",
        formula: "Cross-Tabulation of Fake Product Experience & Cart Abandonment Triggers",
        breakdown: [
            { label: "Encountered Fake (Past 3 Yrs)", val: "40.0%", note: "LocalCircles study (n=4,300 online BPC buyers)" },
            { label: "Cart Abandonment (Fake Fear)", val: "35.7%", note: "Primary research (n=118): abandoned cart over fake concerns" },
            { label: "Compatibility Uncertainty", val: "42.9%", note: "Unsure if product will match skin tone or hair type" }
        ]
    },
    "video-inventory": {
        title: "1.7 Million — Order-Generating Videos",
        source: "Meesho Q1 FY27 Shareholder Letter & Press Release",
        base: "Reported company metric: Content Commerce pieces on Video Finds",
        formula: "1.7M active short-form videos uploaded by creators with linked affiliate tags",
        breakdown: [
            { label: "Active Content Pieces", val: "1.7 Million", note: "+143% YoY growth" },
            { label: "Content NMV Growth", val: "+141% YoY", note: "Meesho Q1 FY27 letter" },
            { label: "Implementation Implication", val: "Zero Cold-Start", note: "Existing reels are mapped to PDP without new creation cost" }
        ]
    },
    "cod-returns": {
        title: "20.9% vs 5.8% — COD vs Prepaid Return Rate",
        source: "Unicommerce India E-Commerce Index + Meesho Q1 FY27",
        base: "Unicommerce National Benchmark & Meesho ~63% COD Share",
        formula: "COD Return Rate (20.9%) ÷ Prepaid Return Rate (5.8%) = 3.6x higher return propensity",
        breakdown: [
            { label: "Meesho COD Share", val: "~63%", note: "100% − 37% prepaid share" },
            { label: "COD Return Rate", val: "20.9%", note: "High buyer impulse & regret" },
            { label: "Prepaid Return Rate", val: "5.8%", note: "Committed purchase" },
            { label: "Livestream NO-GO Rationale", val: "Reverse Logistics Leak", note: "Flash live sales on COD create negative contribution margin" }
        ]
    },

    // LEVER 4 NUMBERS
    "lever4-nmv": {
        title: "₹4.5 Cr / yr — Routines & AOV NMV",
        source: "Appendix Page 22 (Routines & AOV Gamification)",
        base: "300,000 Storefront Shoppers on Creator Profiles",
        formula: "Storefront Routine Bundles (₹2.4 Cr) + Free Sample Threshold (₹2.1 Cr)",
        breakdown: [
            { label: "Routine Storefronts NMV", val: "₹2.4 Cr", note: "0.3M buyers × ₹263 AOV × 15% basket uplift" },
            { label: "Free Sample Threshold NMV", val: "₹2.1 Cr", note: "0.3M buyers × 35% redeem × ₹200 extra cart" },
            { label: "Total Lever 4 Annual NMV", val: "= ₹4.5 Cr", note: "Upside: ₹10 Cr (at 40/40/20 multi-item split)" }
        ]
    },
    "lever41-nmv": {
        title: "₹2.4 Cr / yr — Routine Storefronts NMV",
        source: "Appendix Page 22 (Storefronts Economics)",
        base: "300,000 Storefront Buyers on Creator Profiles",
        formula: "0.3M buyers × checkouts × ₹263 AOV × 15% routine basket uplift = ₹2.4 Cr",
        breakdown: [
            { label: "Storefront Shoppers", val: "0.3 Million", note: "Traffic browsing creator storefronts" },
            { label: "Baseline AOV", val: "₹263", note: "Meesho beauty category average order value" },
            { label: "Routine Basket Size Uplift", val: "+15%", note: "Multi-item routine checkouts (cleanser+serum+sunscreen)" },
            { label: "Annual Storefront NMV", val: "= ₹2.4 Cr", note: "Base Case: ₹2.4 Cr | Upside: ₹10 Cr at 40/40/20 split" }
        ]
    },
    "basket-uplift": {
        title: "+15% to +20% — Routine Basket Size Uplift",
        source: "Appendix Page 8 & 22 (Shopify & E-Commerce Benchmarks)",
        base: "Single affiliate order (₹250) vs Multi-step regimen (₹599 - ₹748)",
        formula: "Incremental basket expansion when 3 linked items are checked out as a morning/evening routine",
        breakdown: [
            { label: "Single Product Link", val: "₹250", note: "Creator earns ₹23" },
            { label: "2-Item Routine Add", val: "₹599", note: "Creator earns ₹54" },
            { label: "Full Routine + Balm", val: "₹748+", note: "Creator earns ₹90" },
            { label: "Platform Basket Uplift", val: "+15-20%", note: "Proven multi-item routine behavior" }
        ]
    },
    "lever42-nmv": {
        title: "₹2.1 Cr / yr — Free Sample Threshold NMV",
        source: "Appendix Page 22 (Free Sample Threshold Economics)",
        base: "300,000 Storefront Shoppers with achievable cart threshold",
        formula: "0.3M buyers × 35% redemption rate × ₹200 extra cart value = ₹2.1 Cr",
        breakdown: [
            { label: "Storefront Shoppers", val: "0.3 Million", note: "Eligible cart visitors" },
            { label: "Threshold Redemption Rate", val: "35%", note: "Buyers adding items to reach threshold" },
            { label: "Incremental Cart Spend", val: "₹200", note: "'Add ₹150–250 more for a free mini serum'" },
            { label: "Funding Structure", val: "100% Seller CAC", note: "105,000 minis funded by brand sample budgets" },
            { label: "Annual Threshold NMV", val: "= ₹2.1 Cr", note: "Conservative: ₹1.5 Cr at 25% redemption" }
        ]
    },
    "threshold-gap": {
        title: "₹150–250 Extra — Cart Threshold Gap",
        source: "Appendix Page 22 (Threshold Mechanics)",
        base: "Cart abandonment drop via achievable micro-incentive",
        formula: "Mini serum unit cost (₹70) ÷ 30% seller gross margin = ₹233 target threshold (set at ₹150–250)",
        breakdown: [
            { label: "Target Free Gift", val: "Mini Serum (15ml)", note: "Brand sample unit cost ₹60–₹80" },
            { label: "Seller Margin Recovery", val: "30%", note: "Gross margin on extra items added" },
            { label: "Optimal Spending Gap", val: "₹150 – ₹250", note: "Achievable bite-sized bump for Tier-2/3 cart" },
            { label: "Platform Cash Outlay", val: "₹0 Cash", note: "100% brand-sponsored sampling CAC" }
        ]
    },

    // LEVER 5 NUMBERS
    "lever5-nmv": {
        title: "₹4.3 Cr / yr — Retention & Insights NMV",
        source: "Appendix Page 22 (Retention & Guidance Modeling)",
        base: "50,000 Total Creators on Meesho & 8,000 BPC Active Cohort",
        formula: "Positive Milestones Retention (₹2.6 Cr) + Creator Insights (₹1.7 Cr)",
        breakdown: [
            { label: "Retention Lift NMV", val: "₹2.6 Cr", note: "750 creators kept × ₹3,000/mo × 12 × 75%" },
            { label: "SKU Insights Guidance NMV", val: "₹1.7 Cr", note: "8,000 creators × 30% adopt × 10% lift × ₹6,000 × 12" },
            { label: "Total Lever 5 Annual NMV", val: "= ₹4.3 Cr", note: "Cost: ₹28 L engineering build only, zero cash subsidies" }
        ]
    },
    "lever51-nmv": {
        title: "₹2.6 Cr / yr — Positive Milestone Retention NMV",
        source: "Deck Slide 9 & Appendix Page 22 (Retention Economics)",
        base: "63,000 Total Creators on Meesho Creator Club",
        formula: "63,000 Creators × +1.5% Retention Lift (945 kept) × ₹3,000/mo NMV × 12 × 75% = ₹2.6 Cr",
        breakdown: [
            { label: "Total Platform Creators", val: "63,000", note: "Meesho Creator Club total pool" },
            { label: "Incremental Retention Lift", val: "+1.5 pts", note: "Zero-demotion milestone progression" },
            { label: "Creators Saved from Churn", val: "945 creators", note: "Maintained beyond Month 3 drop-off" },
            { label: "Monthly NMV per Creator", val: "₹3,000 / mo", note: "10-12 orders/mo at ₹250-300 AOV" },
            { label: "Attribution Haircut", val: "75% net share", note: "25% discount for deadweight & overlap" },
            { label: "Annual Retention NMV", val: "= ₹2.6 Cr", note: "Deck Slide 9 & Slide 22 (₹25.5 L/mo × 12)" }
        ]
    },
    "lever52-nmv": {
        title: "₹1.7 Cr / yr — SKU Demand Insights NMV",
        source: "Appendix Page 23 (SKU Guidance Uplift)",
        base: "8,000 BPC Creators & 86.9% SKU Uncertainty Bottleneck",
        formula: "8,000 Creators × 30% Feature Adoption × 10% Sales Velocity Lift = ₹1.7 Cr NMV",
        breakdown: [
            { label: "BPC Active Creators", val: "8,000", note: "Eligible creators" },
            { label: "Insights Card Adoption", val: "30%", note: "Creators picking recommended high-demand SKUs" },
            { label: "Sales Velocity Uplift", val: "+10%", note: "Faster conversion & <15% return rate" },
            { label: "Direct Dead-Stock Elimination", val: "Zero Risk", note: "Replaces 10% flat commission guessing" },
            { label: "Annual Guidance NMV", val: "= ₹1.7 Cr", note: "Deck Slide 10 & 23" }
        ]
    },
    "sku-struggle": {
        title: "86.9% — Creators Struggle with SKU Selection",
        source: "Appendix Page 14 (Primary Creator Interviews, n=23)",
        base: "23 In-depth Creator Interviews across Active and Churned Creators",
        formula: "20 out of 23 creators cited: 'I do not know which products sell or what my followers want'",
        breakdown: [
            { label: "Struggle with SKU Selection", val: "86.9%", note: "Named hardest part of affiliate creation" },
            { label: "Pre-buy Every SKU Out of Pocket", val: "77.7%", note: "Pocket se paisa jaa raha tha" },
            { label: "Want What Sells, Not Just %", val: "78.5%", note: "Units sold signal demanded over commission %" }
        ]
    }
};

/* Key Aliases for seamless modal lookups across prototypes */
const keyAliases = {
    "lever1-cac": "inapp-cac",
    "lever11-cac": "inapp-cac",
    "150-cac": "inapp-cac",
    "in-app-cac": "inapp-cac",
    "upfront-risk": "upfront-friction",
    "sunk-cost": "upfront-friction"
};

function openGuesstimate(key) {
    const lookupKey = keyAliases[key] || key;
    const data = appendixData[lookupKey];
    if (!data) {
        console.warn("Guesstimate key not found:", key);
        return;
    }

    const modal = document.getElementById("guesstimateModal");
    if (!modal) {
        console.error("guesstimateModal element not found in DOM");
        return;
    }

    const titleEl = document.getElementById("modalTitle");
    const sourceEl = document.getElementById("modalSource");
    const baseEl = document.getElementById("modalBase");
    const formulaEl = document.getElementById("modalFormula");
    const list = document.getElementById("modalBreakdown");

    if (titleEl) titleEl.innerText = data.title;
    if (sourceEl) sourceEl.innerText = data.source;
    if (baseEl) baseEl.innerText = data.base;
    if (formulaEl) formulaEl.innerText = data.formula;

    if (list) {
        list.innerHTML = "";
        data.breakdown.forEach(item => {
            const row = document.createElement("div");
            row.className = "flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-200 text-xs";
            row.innerHTML = `
                <div>
                    <span class="text-gray-900 font-bold">${item.label}</span>
                    <span class="text-gray-500 text-[11px] block">${item.note}</span>
                </div>
                <div class="font-mono font-black text-[#570054] text-sm">${item.val}</div>
            `;
            list.appendChild(row);
        });
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeGuesstimate() {
    const modal = document.getElementById("guesstimateModal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

/* Explicit window attachment for rock-solid global access */
window.openGuesstimate = openGuesstimate;
window.closeGuesstimate = closeGuesstimate;

// Close modal on Escape key press or clicking backdrop
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeGuesstimate();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('guesstimateModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeGuesstimate();
            }
        });
    }
});
