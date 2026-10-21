/* Appendix Data Modal Handler */
const appendixData = {
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
        title: "40% — Cosmetic Trust Deficit & Fake Product Fear",
        source: "Appendix Page 15 (Primary User Research, n=118)",
        base: "Primary User Survey across Tier-2/3 Meesho Shoppers",
        formula: "Direct Survey Response to: 'Have you ever hesitated or received a fake/unsuitable beauty product online?'",
        breakdown: [
            { label: "Respondents with Fake Fears", val: "75.7%", note: "Cart abandonment driver" },
            { label: "Experienced Bad/Fake Cosmetic", val: "40.0%", note: "Have received sub-standard items online" },
            { label: "Core Demand", val: "Verified Original Badge", note: "Outweighed discounts in field responses" }
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

    // LEVER 1 NUMBERS
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

function openGuesstimate(key) {
    const data = appendixData[key];
    if (!data) return;

    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalSource").innerText = data.source;
    document.getElementById("modalBase").innerText = data.base;
    document.getElementById("modalFormula").innerText = data.formula;

    const list = document.getElementById("modalBreakdown");
    list.innerHTML = "";
    data.breakdown.forEach(item => {
        const row = document.createElement("div");
        row.className = "flex items-center justify-between p-2.5 rounded-lg bg-gray-800/60 border border-gray-700/50 text-xs";
        row.innerHTML = `
            <div>
                <span class="text-white font-bold">${item.label}</span>
                <span class="text-gray-400 text-[11px] block">${item.note}</span>
            </div>
            <div class="font-mono font-black text-pink-400 text-sm">${item.val}</div>
        `;
        list.appendChild(row);
    });

    const modal = document.getElementById("guesstimateModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeGuesstimate() {
    const modal = document.getElementById("guesstimateModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}
