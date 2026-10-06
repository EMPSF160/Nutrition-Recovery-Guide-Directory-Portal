// NOURISHMAP Global Data Store & Comprehensive Database

const NOURISH_DATA = {
  categories: [
    { id: 'gut-health', name: 'Gut Health & SIBO', count: 54, icon: '🌱', image: 'images/image-14.png', description: 'Microbiome restoration, IBS, refractory SIBO, leaky gut, & inflammatory bowel protocols.' },
    { id: 'post-bariatric', name: 'Post-Bariatric Recovery', count: 38, icon: '⚖️', image: 'images/image-15.png', description: 'Metabolic adaptation, gastric sleeve/bypass re-feeding, reactive hypoglycemia & nutrient absorption.' },
    { id: 'ed-recovery', name: 'Eating Disorder Nutrition', count: 46, icon: '🤍', image: 'images/image-16.png', description: 'Trauma-informed mechanical eating, weight restoration, somatic safety & food fear neutralization.' },
    { id: 'sports-injury', name: 'Athletic Injury & Tissue Repair', count: 35, icon: '⚡', image: 'images/image-17.png', description: 'Collagen synthesis, tendon/ligament healing, post-op athletic rehab, & bone mineral density.' },
    { id: 'autoimmune-chronic', name: 'Autoimmune & Fatigue (AIP)', count: 42, icon: '🛡️', image: 'images/image-18.png', description: 'Anti-inflammatory diets, Hashimoto’s, rheumatoid, long-covid recovery, & mitochondrial fuel.' },
    { id: 'oncology-rehab', name: 'Oncology Recovery', count: 28, icon: '🎗️', image: 'images/image-19.png', description: 'Post-chemotherapy cellular support, appetite rebuilding, dysgeusia mitigation, & immune strengthening.' }
  ],

  locations: [
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Austin, TX',
    'Seattle, WA',
    'San Francisco, CA',
    'Boston, MA',
    'Miami, FL',
    'Denver, CO',
    'Atlanta, GA',
    'Dallas, TX',
    'Virtual / Telehealth'
  ],

  listings: [
    {
      id: 'dr-elena-vance',
      name: 'Dr. Elena Vance, MS, RD, CNS',
      headline: 'Lead Clinical Gut & SIBO Recovery Dietitian',
      category: 'gut-health',
      categoryName: 'Gut Health & SIBO',
      image: 'images/image-2.png',
      gallery: ['images/image-23.png', 'images/image-24.png', 'images/image-25.png'],
      rating: 4.96,
      reviewsCount: 124,
      location: 'New York, NY',
      distance: '1.2 miles away',
      price: 185,
      priceLabel: 'From $185 / session',
      isVerified: true,
      isFeatured: true,
      acceptsInsurance: true,
      telehealth: true,
      inPerson: true,
      experience: '14+ Years',
      education: 'Columbia University Dept. of Nutritional Science',
      bio: 'Dr. Elena Vance is a board-certified clinical dietitian specializing in chronic digestive failure, refractory SIBO, Crohn’s remission protocols, and microbiome sequencing. She integrates mucosal barrier restoration with customized low-fermentation diets to rebuild resilient digestive integrity.',
      specialties: ['Refractory SIBO Eradication', 'Microbiome Profiling', 'Low-FODMAP Re-introduction', 'Histamine Intolerance', 'Post-Antibiotic Gut Reset'],
      services: [
        { name: 'Initial Clinical Gut Assessment (90 min)', price: '$260', desc: 'Comprehensive GI map review, nutritional timeline, and personalized 8-week restoration roadmap.' },
        { name: 'SIBO Phase 2 Re-inoculation Protocol', price: '$185', desc: '45-minute follow-up targeting mucosal repair and high-diversity probiotic re-introduction.' },
        { name: 'Full 12-Week Guided Microbiome Rehab Package', price: '$850', desc: '4 bi-weekly visits, 24/7 asynchronous clinical messaging, and stool test interpretation.' }
      ],
      roadmap: [
        { title: 'Phase 1: Anti-Inflammatory Dampening', desc: 'Eliminate trigger fermentable carbs and initiate gut lining soothing mucilage herbs.' },
        { title: 'Phase 2: Target Eradication & Motility Phase', desc: 'Support migrating motor complex (MMC) and targeted herbal/antimicrobial support.' },
        { title: 'Phase 3: Systematic Diversity Re-challenge', desc: 'Structured re-introduction of resistant starches and polyphenol-dense foods.' },
        { title: 'Phase 4: Sustainable Maintenance & Autonomy', desc: 'Finalized long-term eating architecture to prevent future bacterial overgrowth.' }
      ],
      badges: ['Board Certified CNS', 'Monash FODMAP Certified', 'Top Rated 2026', 'Verified Credentials'],
      phone: '+1 (212) 555-0194',
      email: 'dr.vance@nourishmap.clinic',
      clinicAddress: '450 Lexington Ave, Suite 1400, New York, NY 10017'
    },
    {
      id: 'marcus-reid',
      name: 'Marcus Reid, MS, CSCS, CISSN',
      headline: 'Orthopedic Injury & Post-Op Athletic Nutritionist',
      category: 'sports-injury',
      categoryName: 'Athletic Injury & Tissue Repair',
      image: 'images/image-1.png',
      gallery: ['images/image-26.png', 'images/image-27.png', 'images/image-28.png'],
      rating: 4.92,
      reviewsCount: 89,
      location: 'Los Angeles, CA',
      distance: '3.4 miles away',
      price: 160,
      priceLabel: 'From $160 / session',
      isVerified: true,
      isFeatured: true,
      acceptsInsurance: false,
      telehealth: true,
      inPerson: true,
      experience: '11 Years',
      education: 'UCLA Sports Medicine & Human Performance',
      bio: 'Marcus consults elite athletes through ACL reconstructions, tendon tears, stress fractures, and post-operative tissue synthesis. He designs hyper-targeted amino acid and micronutrient protocols to halve recovery downtime and preserve lean mass.',
      specialties: ['ACL & Ligament Collagen Synthesis', 'Hypertrophy Retention during Immobilization', 'Bone Mineral Density Protocol', 'Post-Op Lymphatic Drainage Foods'],
      services: [
        { name: 'Acute Surgical Rehab Nutrition Blueprint', price: '$220', desc: 'Nutrient loading protocols for pre-op immune boosting and post-op tissue remodeling.' },
        { name: 'Return-to-Play Metabolic Retraining', price: '$160', desc: 'Graduated caloric and electrolyte titration matching increasing physical rehab load.' }
      ],
      roadmap: [
        { title: 'Phase 1: Anti-Catabolic Immobilization', desc: 'High-leucine pulsing, anti-inflammatory whole foods, and creatine preservation.' },
        { title: 'Phase 2: Collagen Cross-Linking & Tendon Load', desc: 'Vitamin C + Gelatin timed 45 minutes prior to isometric physical therapy.' },
        { title: 'Phase 3: Peak Performance Re-integration', desc: 'Refueled glycogen reserves and return to high-intensity training without tendon flare.' }
      ],
      badges: ['Olympic Team Advisor', 'CISSN Master', 'Verified Credentials'],
      phone: '+1 (310) 555-0283',
      email: 'marcus@reidperformance.com',
      clinicAddress: '9201 Wilshire Blvd, Beverly Hills, CA 90210'
    },
    {
      id: 'sarah-jenkins',
      name: 'Sarah Jenkins, RDN, LDN, CEDRD-S',
      headline: 'Senior Eating Disorder & Somatic Body Recovery Specialist',
      category: 'ed-recovery',
      categoryName: 'Eating Disorder Nutrition',
      image: 'images/image-3.png',
      gallery: ['images/image-29.png', 'images/image-30.png', 'images/image-20.png'],
      rating: 4.98,
      reviewsCount: 167,
      location: 'Chicago, IL',
      distance: '0.8 miles away',
      price: 190,
      priceLabel: 'From $190 / session',
      isVerified: true,
      isFeatured: true,
      acceptsInsurance: true,
      telehealth: true,
      inPerson: true,
      experience: '16 Years',
      education: 'Northwestern University Feinberg School',
      bio: 'Sarah provides gentle, non-diet, HAES-aligned nutritional rehabilitation for individuals healing from Anorexia, Bulimia, Orthorexia, and ARFID. She combines somatic nervous system regulation with structured recovery meal plans to safely rebuild intuitive eating.',
      specialties: ['Anorexia & ARFID Refeeding', 'Orthorexia & Food Fear Neutralization', 'Metabolic Rate Normalization', 'Family-Based Treatment (FBT)'],
      services: [
        { name: 'Safe Space Compassionate Intake (90m)', price: '$275', desc: 'Gentle narrative nutritional intake, nervous system assessment, and zero-shame safety baseline.' },
        { name: 'Somatic Meal Support & Exposure Session', price: '$190', desc: 'Real-time guided challenge food exposure with nervous system grounding.' }
      ],
      roadmap: [
        { title: 'Stage 1: Safety & Nutritional Stability', desc: 'Establish predictable meal rhythms and restore cellular hydration and blood sugars.' },
        { title: 'Stage 2: Food Rule Deconstruction', desc: 'Systematic challenge of fear hierarchies in a supportive, trauma-informed setting.' },
        { title: 'Stage 3: Intuitive & Somatic Connection', desc: 'Cultivate authentic hunger/fullness interoception and joyful nourishment.' }
      ],
      badges: ['IAEDP Certified Supervisor', 'HAES Expert', 'Verified Credentials'],
      phone: '+1 (312) 555-0371',
      email: 'sjenkins@mindfulnourish.org',
      clinicAddress: '233 N Michigan Ave, Suite 1900, Chicago, IL 60601'
    },
    {
      id: 'dr-kavita-sharma',
      name: 'Dr. Kavita Sharma, MD, CNS, IFMCP',
      headline: 'Integrative Autoimmune & Chronic Fatigue Physician',
      category: 'autoimmune-chronic',
      categoryName: 'Autoimmune & Fatigue (AIP)',
      image: 'images/image-4.png',
      gallery: ['images/image-21.png', 'images/image-22.png', 'images/image-23.png'],
      rating: 4.95,
      reviewsCount: 142,
      location: 'Austin, TX',
      distance: '2.5 miles away',
      price: 240,
      priceLabel: 'From $240 / session',
      isVerified: true,
      isFeatured: false,
      acceptsInsurance: true,
      telehealth: true,
      inPerson: true,
      experience: '18 Years',
      education: 'Johns Hopkins School of Medicine',
      bio: 'Triple-boarded in Internal Medicine, Integrative Health, and Clinical Nutrition, Dr. Sharma reverse-engineers autoimmune flare-ups, Hashimoto’s thyroiditis, and post-viral chronic fatigue through mitochondrial resuscitation and targeted cellular nutrition.',
      specialties: ['Hashimoto’s AIP Protocol', 'Mitochondrial ATP Restoration', 'Lupus & Rheumatoid Diets', 'Mast Cell Activation (MCAS)'],
      services: [
        { name: 'Comprehensive Functional Health Audit', price: '$350', desc: 'Full blood panel analysis, organic acid tests, and customized anti-inflammatory nutrition plan.' },
        { name: 'Autoimmune Flare Mitigation Consultation', price: '$240', desc: 'Targeted triage session to dampen active systemic immune cascades.' }
      ],
      roadmap: [
        { title: 'Step 1: Quench Systemic Fire', desc: 'AIP-elimination phase removing immunogenic lectins, nightshades, and refined sugars.' },
        { title: 'Step 2: Cellular Mitochondria Recharging', desc: 'High-density CoQ10, alpha-lipoic acid, and deep polyphenol intake.' },
        { title: 'Step 3: Long-term Immune Tolerance', desc: 'Precision re-challenge and maintenance of immunoregulatory gut balance.' }
      ],
      badges: ['IFM Certified', 'MD & CNS Dual License', 'Verified Credentials'],
      phone: '+1 (512) 555-0455',
      email: 'kavita@austinintegrative.org',
      clinicAddress: '500 W 2nd St, Floor 19, Austin, TX 78701'
    },
    {
      id: 'claire-montgomery',
      name: 'Claire Montgomery, MS, RD, CSOWM',
      headline: 'Post-Bariatric Metabolic & Nutrient Re-absorption Dietitian',
      category: 'post-bariatric',
      categoryName: 'Post-Bariatric Recovery',
      image: 'images/image-5.png',
      gallery: ['images/image-24.png', 'images/image-25.png', 'images/image-26.png'],
      rating: 4.91,
      reviewsCount: 78,
      location: 'Seattle, WA',
      distance: '4.1 miles away',
      price: 155,
      priceLabel: 'From $155 / session',
      isVerified: true,
      isFeatured: false,
      acceptsInsurance: true,
      telehealth: true,
      inPerson: false,
      experience: '9 Years',
      education: 'University of Washington Clinical Nutrition',
      bio: 'Claire specializes exclusively in post-gastric sleeve, bypass, and duodenal switch patients navigating dumping syndrome, hair thinning, reactive hypoglycemia, and long-term micronutrient maintenance.',
      specialties: ['Bariatric Vitamin Deficiencies', 'Dumping Syndrome Management', 'Sleeve Progression Phases', 'Lean Muscle Preservation'],
      services: [
        { name: 'Post-Bariatric Vitamin & Mineral Audit', price: '$195', desc: 'In-depth laboratory analysis of ferritin, B12, copper, zinc, and bio-available supplementation.' },
        { name: 'Texture Progression & Portion Coaching', price: '$155', desc: 'Safe transitional guidance from pureed to soft to solid nutrient-dense meals.' }
      ],
      roadmap: [
        { title: 'Stage 1: Hydration & Protein Integrity', desc: 'Prevent dehydration and achieve 70-90g daily bioavailable protein.' },
        { title: 'Stage 2: Prevention of Reactive Hypoglycemia', desc: 'Strategic pairing of complex fiber with lean protein to stabilize post-prandial insulin.' },
        { title: 'Stage 3: Lifetime Micronutrient Defense', desc: 'Annual preventative monitoring of fat-soluble vitamins and iron stores.' }
      ],
      badges: ['CSOWM Certified', 'ASMBS Allied Health Member', 'Verified Credentials'],
      phone: '+1 (206) 555-0829',
      email: 'claire@bariatricrecovery.com',
      clinicAddress: '1201 3rd Ave, Seattle, WA 98101'
    },
    {
      id: 'dr-jonathan-cross',
      name: 'Dr. Jonathan Cross, PhD, RD, CSO',
      headline: 'Board Certified Specialist in Oncology Recovery Nutrition',
      category: 'oncology-rehab',
      categoryName: 'Oncology Recovery',
      image: 'images/image-6.png',
      gallery: ['images/image-27.png', 'images/image-28.png', 'images/image-29.png'],
      rating: 4.97,
      reviewsCount: 110,
      location: 'Boston, MA',
      distance: '1.9 miles away',
      price: 210,
      priceLabel: 'From $210 / session',
      isVerified: true,
      isFeatured: true,
      acceptsInsurance: true,
      telehealth: true,
      inPerson: true,
      experience: '20 Years',
      education: 'Harvard Medical School & Dana-Farber Nutrition Fellow',
      bio: 'Dr. Cross works alongside oncologists to guide patients through active chemotherapy re-nourishment, radiation recovery, metallic taste management, cancer cachexia mitigation, and remission nutrition.',
      specialties: ['Chemo-Induced Dysgeusia (Taste changes)', 'Radiation Enteritis Relief', 'Cancer Cachexia Reversal', 'Survivorship Immunity Protocols'],
      services: [
        { name: 'Oncology Recovery Consultation', price: '$290', desc: 'Individualized medical nutrition therapy supporting cellular repair and appetite revitalization.' },
        { name: 'Post-Treatment Remission Planning', price: '$210', desc: 'Long-term evidence-based lifestyle and nutrition blueprint to minimize recurrence markers.' }
      ],
      roadmap: [
        { title: 'Phase 1: Appetite & Mucositis Care', desc: 'Soothing alkaline smoothies, gentle cooling foods, and zinc supplementation.' },
        { title: 'Phase 2: Cellular Cleanse & Rebuilding', desc: 'Cruciferous sulforaphane, omega-3 fatty acids, and lean clean peptides.' },
        { title: 'Phase 3: Robust Survivorship Baseline', desc: 'Metabolic glycemic stability and lifelong cellular longevity diets.' }
      ],
      badges: ['Board Certified CSO', 'Harvard Fellow', 'Verified Credentials'],
      phone: '+1 (617) 555-0912',
      email: 'jcross@bostononcologynutrition.com',
      clinicAddress: '75 Francis St, Boston, MA 02115'
    },
    {
      id: 'dr-miriam-chen',
      name: 'Dr. Miriam Chen, ND, MS, CNS',
      headline: 'Functional Neuro-Gastroenterology & Vagus Nerve Specialist',
      category: 'gut-health',
      categoryName: 'Gut Health & SIBO',
      image: 'images/q (1).png',
      gallery: ['images/q (11).png', 'images/q (12).png', 'images/q (13).png'],
      rating: 4.94,
      reviewsCount: 96,
      location: 'San Francisco, CA',
      distance: '2.1 miles away',
      price: 195,
      priceLabel: 'From $195 / session',
      isVerified: true,
      isFeatured: true,
      acceptsInsurance: false,
      telehealth: true,
      inPerson: true,
      experience: '13 Years',
      education: 'Bastyr University & Stanford Integrative Medicine',
      bio: 'Dr. Miriam Chen combines functional stool microbiology with autonomic vagus nerve stimulation to treat stubborn gastroparesis, post-infectious IBS, and intestinal dysbiosis.',
      specialties: ['Vagus Nerve Activation', 'Post-Infectious IBS', 'Gastroparesis Refeeding', 'Visceral Hypersensitivity'],
      services: [
        { name: 'Neuro-Gut Assessment Protocol', price: '$275', desc: 'Heart rate variability analysis, enteric nervous system evaluation, and gut motility plan.' },
        { name: 'Follow-up Biofeedback Consultation', price: '$195', desc: 'Parasympathetic breathwork training and prebiotic titration.' }
      ],
      roadmap: [
        { title: 'Phase 1: Motility & Parasympathetic Tone', desc: 'Restore gastric acid production and migrating motor complex rhythm.' },
        { title: 'Phase 2: Microbiome Expansion', desc: 'Cultivate butyrate-producing Roseburia and Faecalibacterium species.' }
      ],
      badges: ['Bastyr Alum', 'Neuro-Gastro Fellow', 'Verified Credentials'],
      phone: '+1 (415) 555-0941',
      email: 'dr.chen@neurogutrehab.com',
      clinicAddress: '500 Howard St, Suite 800, San Francisco, CA 94105'
    },
    {
      id: 'julian-alvarez',
      name: 'Julian Alvarez, MS, RD, CSSD',
      headline: 'Elite Tendon & Cartilage Recovery Dietitian',
      category: 'sports-injury',
      categoryName: 'Athletic Injury & Tissue Repair',
      image: 'images/q (2).png',
      gallery: ['images/q (14).png', 'images/q (15).png', 'images/q (16).png'],
      rating: 4.89,
      reviewsCount: 64,
      location: 'Denver, CO',
      distance: '3.0 miles away',
      price: 150,
      priceLabel: 'From $150 / session',
      isVerified: true,
      isFeatured: false,
      acceptsInsurance: true,
      telehealth: true,
      inPerson: true,
      experience: '8 Years',
      education: 'University of Colorado Sports Science',
      bio: 'Julian works with high-altitude endurance runners, climbers, and team athletes recovering from patellar tendinopathy, rotator cuff surgeries, and meniscus repairs.',
      specialties: ['Tendinopathy Gelatin Protocols', 'Altitude Hypoxia Nutrition', 'Collagen Peptides Timing', 'Cartilage Synovial Health'],
      services: [
        { name: 'Tendon Regeneration Nutrition Plan', price: '$200', desc: 'Timed amino acid dosing with mechanical loading physical therapy.' }
      ],
      roadmap: [
        { title: 'Phase 1: Acute Inflammation Control', desc: 'Curcumin phytosome and high-DHA omega-3 suppression of excess cytokines.' },
        { title: 'Phase 2: Synovial Remodeling', desc: 'Hyaluronic acid and collagen peptide loading.' }
      ],
      badges: ['Board Certified CSSD', 'Verified Credentials'],
      phone: '+1 (303) 555-0199',
      email: 'julian@alvarezathletics.com',
      clinicAddress: '1700 Lincoln St, Denver, CO 80203'
    },
    {
      id: 'zoe-kaufman',
      name: 'Zoe Kaufman, MS, RDN, CDN',
      headline: 'Post-Viral Fatigue & Long-Haul Recovery Nutritionist',
      category: 'autoimmune-chronic',
      categoryName: 'Autoimmune & Fatigue (AIP)',
      image: 'images/q (3).png',
      gallery: ['images/q (17).png', 'images/q (18).png', 'images/q (19).png'],
      rating: 4.93,
      reviewsCount: 82,
      location: 'Miami, FL',
      distance: '1.5 miles away',
      price: 175,
      priceLabel: 'From $175 / session',
      isVerified: true,
      isFeatured: true,
      acceptsInsurance: true,
      telehealth: true,
      inPerson: true,
      experience: '10 Years',
      education: 'University of Miami Miller School of Medicine',
      bio: 'Zoe focuses on post-viral dysautonomia, POTS hydration electrolytes, microclot nutritional support, and mitochondrial energy revitalization.',
      specialties: ['POTS High-Sodium Hydration Protocols', 'Endothelial Anti-Inflammatory Diet', 'Mitochondrial Co-Factors', 'Low Histamine AIP'],
      services: [
        { name: 'Dysautonomia & Fatigue Assessment', price: '$240', desc: 'Fluid-electrolyte balance, micronutrient deficiencies, and autonomic recovery plan.' }
      ],
      roadmap: [
        { title: 'Phase 1: Blood Volume & Electrolytes', desc: 'Precision sodium:potassium:magnesium ratios and cellular hydration.' },
        { title: 'Phase 2: Cellular Mitochondria Defense', desc: 'NADH, ubiquinol, and alpha-lipoic acid support.' }
      ],
      badges: ['Dysautonomia Certified', 'Verified Credentials'],
      phone: '+1 (305) 555-0814',
      email: 'zoe@nourishvitality.com',
      clinicAddress: '1101 Brickell Ave, Miami, FL 33131'
    }
  ],

  guides: [
    {
      id: 'gut-healing-protocol',
      title: 'The 4-Phase Clinical Gut Healing Protocol: From Dysbiosis to Diversity',
      category: 'Gut Health & SIBO',
      readTime: '8 min read',
      date: 'Updated Oct 2026',
      author: 'Dr. Elena Vance, MS, RD',
      authorImg: 'images/image-2.png',
      image: 'images/image-7.png',
      summary: 'A step-by-step clinical framework to eliminate pathogens, soothe mucosal linings, rebuild digestive enzymes, and re-inoculate key Keystone bacterial strains.',
      tags: ['SIBO', 'Microbiome', 'FODMAP', 'Leaky Gut']
    },
    {
      id: 'post-op-collagen-synthesis',
      title: 'Nutritional Biomarkers in Orthopedic Surgery & Ligament Regeneration',
      category: 'Athletic Injury',
      readTime: '6 min read',
      date: 'Updated Oct 2026',
      author: 'Marcus Reid, MS, CSCS',
      authorImg: 'images/image-1.png',
      image: 'images/image-8.png',
      summary: 'How leucine pulsing, hydrolyzed collagen type I & III, and vitamin C timing dramatically accelerate tensile strength recovery in ACL and tendon repairs.',
      tags: ['ACL Rehab', 'Collagen', 'Muscle Retention', 'Sports Medicine']
    },
    {
      id: 'autoimmune-aip-transition',
      title: 'Calming the Storm: Navigating the Autoimmune Protocol (AIP) Without Malnutrition',
      category: 'Autoimmune & Fatigue',
      readTime: '10 min read',
      date: 'Updated Oct 2026',
      author: 'Dr. Kavita Sharma, MD',
      authorImg: 'images/image-4.png',
      image: 'images/image-9.png',
      summary: 'Why extreme elimination can cause micronutrient starvation and how to safely navigate the re-introduction phase while tracking inflammatory cytokines.',
      tags: ['Autoimmune', 'Hashimoto’s', 'AIP', 'Inflammation']
    },
    {
      id: 'eating-disorder-metabolic-rebuild',
      title: 'Metabolic Re-adaptation: The Science of Restoring Basal Metabolism After Chronic Restriction',
      category: 'ED Recovery',
      readTime: '7 min read',
      date: 'Updated Sep 2026',
      author: 'Sarah Jenkins, RDN',
      authorImg: 'images/image-3.png',
      image: 'images/image-10.png',
      summary: 'Understanding the thermic effect of refeeding, resolving gastrointestinal slowdown, and creating cognitive peace around intuitive nourishment.',
      tags: ['Metabolism', 'ED Recovery', 'HAES', 'Intuitive Eating']
    },
    {
      id: 'bariatric-nutrient-malabsorption',
      title: 'Preventing the Micronutrient Cliff After Gastric Bypass & Sleeve Surgery',
      category: 'Post-Bariatric',
      readTime: '9 min read',
      date: 'Updated Oct 2026',
      author: 'Claire Montgomery, MS, RD',
      authorImg: 'images/image-5.png',
      image: 'images/image-20.png',
      summary: 'The clinical pharmacology of sublingual B12, chelated iron, copper-zinc balancing, and fat-soluble vitamin ADEK absorption in altered GI anatomies.',
      tags: ['Bariatric', 'Malabsorption', 'Ferritin', 'Post-Op Nutrition']
    },
    {
      id: 'oncology-taste-appetite',
      title: 'Overcoming Dysgeusia & Mucositis: Eating Well Through Chemotherapy Cycles',
      category: 'Oncology Recovery',
      readTime: '8 min read',
      date: 'Updated Oct 2026',
      author: 'Dr. Jonathan Cross, PhD, RD',
      authorImg: 'images/image-6.png',
      image: 'images/image-21.png',
      summary: 'Evidence-based culinary strategies to neutralize metallic taste, soothe mouth sores, and maintain lean muscle mass during cancer treatments.',
      tags: ['Chemo Recovery', 'Taste Changes', 'Appetite', 'Oncology']
    }
  ],

  reviews: [
    {
      id: 1,
      specialistId: 'dr-elena-vance',
      author: 'Rachel Campbell',
      avatar: 'images/q (4).png',
      verifiedPatient: true,
      rating: 5,
      date: '2 weeks ago',
      title: 'Finally symptom-free after 3 years of agonizing SIBO',
      comment: 'Dr. Elena was the first professional who didn’t just throw rifaximin at me and tell me to eat low FODMAP forever. Her 4-phase protocol gave me my life back. I can finally eat garlic and sourdough again without fear!'
    },
    {
      id: 2,
      specialistId: 'marcus-reid',
      author: 'Liam Henderson (Collegiate Runner)',
      avatar: 'images/q (5).png',
      verifiedPatient: true,
      rating: 5,
      date: '1 month ago',
      title: 'Cut my stress fracture healing time by 4 weeks',
      comment: 'Marcus looked at my bone density scans and restructured my protein timing and mineral ratios. My orthopedic surgeon was stunned by my 8-week DEXA scan progress.'
    },
    {
      id: 3,
      specialistId: 'sarah-jenkins',
      author: 'Maya S.',
      avatar: 'images/q (6).png',
      verifiedPatient: true,
      rating: 5,
      date: '3 weeks ago',
      title: 'Compassionate, evidence-based, and genuinely life-saving',
      comment: 'Sarah helped me escape 6 years of orthorexic rules and compulsive tracking. Her nervous system approach during meal challenges makes all the difference.'
    },
    {
      id: 4,
      specialistId: 'dr-kavita-sharma',
      author: 'David Chen',
      avatar: 'images/q (7).png',
      verifiedPatient: true,
      rating: 5,
      date: '1 week ago',
      title: 'Thyroid antibodies dropped by 65% in 90 days',
      comment: 'Dr. Sharma identified hidden cross-reactivities in my diet that my standard endocrinologist never tested for. My brain fog and joint pain are completely gone.'
    }
  ],

  leads: [
    { id: 'LD-1092', specialist: 'Dr. Elena Vance', client: 'Samantha Ortiz', avatar: 'images/q (8).png', email: 'samantha.o@example.com', phone: '(555) 234-9812', service: 'Initial Clinical Gut Assessment', status: 'Pending Review', date: 'Today, 10:14 AM' },
    { id: 'LD-1091', specialist: 'Marcus Reid', client: 'David Zhao', avatar: 'images/q (9).png', email: 'david.zhao@example.com', phone: '(555) 876-1123', service: 'Acute Surgical Rehab Blueprint', status: 'Booked & Confirmed', date: 'Yesterday, 3:45 PM' },
    { id: 'LD-1090', specialist: 'Dr. Kavita Sharma', client: 'Hannah Becker', avatar: 'images/q (10).png', email: 'h.becker@example.com', phone: '(555) 678-4432', service: 'Functional Health Audit', status: 'Awaiting Intake Form', date: 'Oct 04, 2026' }
  ]
};

// State Store for Local Storage Interaction
const NOURISH_STORE = {
  getSavedListings() {
    const saved = localStorage.getItem('nourish_saved_listings');
    return saved ? JSON.parse(saved) : ['dr-elena-vance', 'marcus-reid', 'dr-miriam-chen'];
  },
  toggleSaveListing(id) {
    let saved = this.getSavedListings();
    if (saved.includes(id)) {
      saved = saved.filter(item => item !== id);
    } else {
      saved.push(id);
    }
    localStorage.setItem('nourish_saved_listings', JSON.stringify(saved));
    return saved.includes(id);
  },
  getCompareList() {
    const comp = localStorage.getItem('nourish_compare_list');
    return comp ? JSON.parse(comp) : [];
  },
  toggleCompare(id) {
    let comp = this.getCompareList();
    if (comp.includes(id)) {
      comp = comp.filter(item => item !== id);
    } else {
      if (comp.length >= 3) {
        return { success: false, message: 'You can compare maximum 3 specialists at a time.' };
      }
      comp.push(id);
    }
    localStorage.setItem('nourish_compare_list', JSON.stringify(comp));
    return { success: true, count: comp.length, inList: comp.includes(id) };
  }
};
