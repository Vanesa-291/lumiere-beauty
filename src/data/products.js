const BASE = import.meta.env.BASE_URL;

export const products = [
  { id: 1, name: "Radiance Daily Moisturizer", price: 48, originalPrice: null, category: "Skincare", subcategory: "Moisturizers", rating: 4.9, reviews: 312, badge: "Best Seller", description: "An ultra-lightweight daily moisturizer with hyaluronic acid and peptides that leaves skin radiant and nourished for 24 hours.", benefits: ["24h hydration", "Instant radiance", "Suitable for all skin types"], image: `${BASE}images/hidratantes.jpg`, featured: true, bestseller: true },
  { id: 2, name: "Vitamin C Brightening Serum", price: 67, originalPrice: null, category: "Skincare", subcategory: "Serums", rating: 4.8, reviews: 289, badge: "Best Seller", description: "Concentrated serum with 15% vitamin C, niacinamide and ferulic acid. Evens skin tone, reduces dark spots and delivers an extraordinary glow.", benefits: ["15% Vitamin C", "Evens skin tone", "Powerful antioxidant"], image: `${BASE}images/sueros.jpg`, featured: true, bestseller: true },
  { id: 3, name: "Hydra Glow Night Cream", price: 55, originalPrice: 72, category: "Skincare", subcategory: "Moisturizers", rating: 4.7, reviews: 198, badge: "Sale", description: "Repairing night cream with encapsulated retinol, argan oil and ceramides. It works while you sleep.", benefits: ["Encapsulated retinol", "Overnight repair", "Anti-aging"], image: `${BASE}images/night-cream.jpg`, featured: true, bestseller: true },
  { id: 4, name: "Rose Quartz Face Roller", price: 28, originalPrice: null, category: "Skincare", subcategory: "Tools", rating: 4.6, reviews: 456, badge: null, description: "100% authentic rose quartz roller. Reduces puffiness, improves circulation and boosts serum absorption.", benefits: ["Natural rose quartz", "Reduces puffiness", "Facial massage"], image: `${BASE}images/face-roller.jpg`, featured: true, bestseller: true },
  { id: 5, name: "Midnight Rose Parfum", price: 95, originalPrice: null, category: "Fragrance", subcategory: "Parfum", rating: 4.9, reviews: 142, badge: "New", description: "A floral-woody fragrance with notes of Damask rose, patchouli and white musk.", benefits: ["Floral & woody notes", "Long-lasting 8-10h", "Luxury bottle"], image: `${BASE}images/fragrance.jpg`, featured: false, bestseller: false },
  { id: 6, name: "Velvet Glow Makeup Set", price: 42, originalPrice: null, category: "Makeup", subcategory: "Face", rating: 4.7, reviews: 201, badge: "New", description: "Makeup set with a velvety finish and light-reflecting particles. Mattifies and sets makeup for up to 12 hours.", benefits: ["12h setting power", "Light-reflecting particles", "Universal translucent shade"], image: `${BASE}images/set-maquillaje.jpg`, featured: false, bestseller: false },
  { id: 7, name: "Jasmine Body Butter", price: 38, originalPrice: null, category: "Body Care", subcategory: "Moisturizers", rating: 4.9, reviews: 388, badge: null, description: "Body butter with shea butter, jasmine oil and vitamin E.", benefits: ["Shea butter", "Jasmine scent", "Deep hydration"], image: `${BASE}images/crema-jazmin.jpg`, featured: false, bestseller: false },
  { id: 8, name: "Luxury Skincare Collection", price: 120, originalPrice: null, category: "Skincare", subcategory: "Sets", rating: 4.9, reviews: 445, badge: "Best Seller", description: "A complete premium skincare collection with the finest natural ingredients.", benefits: ["Complete set", "Results in 4 weeks", "All skin types"], image: `${BASE}images/coleccion-lujo.jpg`, featured: false, bestseller: false },
];

export const categories = [
  { id: 1, name: "Cleansers",    image: `${BASE}images/limpiadores.jpg` },
  { id: 2, name: "Toners",       image: `${BASE}images/tonicos.jpg` },
  { id: 3, name: "Serums",       image: `${BASE}images/serum.jpg` },
  { id: 4, name: "Moisturizers", image: `${BASE}images/hidratante-2.jpg` },
  { id: 5, name: "Masks",        image: `${BASE}images/mascaras.jpg` },
  { id: 6, name: "Eye Care",     image: `${BASE}images/cuidado-ojos2.jpg` },
  { id: 7, name: "Lips",         image: `${BASE}images/labios2.jpg` },
  { id: 8, name: "Sun Care",     image: `${BASE}images/cuidado-solar2.jpg` },
];

export const collections = [
  { id: 1, name: "Skincare",  subtitle: "Youthful & Glowing Skin", image: `${BASE}images/proteccion-piel.jpg` },
  { id: 2, name: "Makeup",    subtitle: "Enhance Your Beauty",    image: `${BASE}images/makeup.jpg` },
  { id: 3, name: "body-care", subtitle: "Nourish Your Body",      image: `${BASE}images/cuidado-corporal.jpg` },
  { id: 4, name: "Fragrance", subtitle: "Irresistible Scents",    image: `${BASE}images/fragrance2.jpg` },
];

export const testimonials = [
  { id: 1, name: "Jessica M.", location: "Buenos Aires", rating: 5, text: "Lumière Beauty has completely transformed my skincare routine. My skin has never looked this good. The vitamin C serum is absolutely magical.", product: "Vitamin C Brightening Serum", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { id: 2, name: "Valentina R.", location: "Mendoza", rating: 5, text: "The moisturizer is my new morning ritual. It feels like a hug for your skin. The ingredients are premium quality and you can feel it from the first use.", product: "Radiance Daily Moisturizer", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80" },
  { id: 3, name: "Camila F.", location: "Córdoba", rating: 5, text: "I fell in love with the Midnight Rose fragrance. It's sophisticated, long-lasting, and I get compliments all day. Definitely my favorite purchase of the year.", product: "Midnight Rose Parfum", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80" },
];

export const guides = [
  {
    id: 1,
    title: "10 Steps Korean Skincare Routine",
    category: "Skincare",
    date: "May 10, 2024",
    readTime: "6 min read",
    author: "Lumière Team",
    image: `${BASE}images/rutina-coreana.jpg`,
    excerpt: "Discover the secret of Korean glass skin with this complete 10-step routine.",
    content: [
      { heading: "What is the Korean skincare routine?", text: "The famous Korean skincare routine is built on layering: instead of one highly concentrated product, several lightweight products are added one on top of the other to achieve luminous, elastic skin with the famous \"glass skin\" effect." },
      { heading: "1-3. Double cleanse and exfoliation", text: "It all starts with an oil cleanser to dissolve makeup and sunscreen, followed by a water-based cleanser to remove impurities. Two or three times a week, add a gentle exfoliant to renew the skin without irritating it." },
      { heading: "4-6. Toner, essence and serum", text: "Toner rebalances the skin's pH and preps it for what's next. Essence adds a first, ultra-light layer of hydration, and serum targets specific needs — brightness, dark spots or firmness — depending on what your skin needs." },
      { heading: "7-8. Eye cream and moisturizer", text: "The skin around the eyes is thinner and needs its own product. Finish with a moisturizer that seals in all the previous layers and keeps skin nourished for hours." },
      { heading: "9-10. Sunscreen and night care", text: "During the day, sunscreen is the non-negotiable step to prevent photoaging. At night, swap it for a repairing treatment — like our Hydra Glow Night Cream — so your skin regenerates while you sleep." },
      { heading: "Our tip", text: "You don't need all 10 steps every single day: start with the basics (cleansing, hydration and sun protection) and add the rest gradually, based on what your skin asks for." },
    ],
  },
  {
    id: 2,
    title: "How to Choose the Right Moisturizer",
    category: "Skincare",
    date: "May 10, 2024",
    readTime: "5 min read",
    author: "Lumière Team",
    image: `${BASE}images/elegir-cremaHidratante.jpg`,
    excerpt: "Choosing the right moisturizer can transform your skin. We'll show you how.",
    content: [
      { heading: "Why the right hydration changes everything", text: "A poorly chosen moisturizer can leave skin oily, dull or tight. Picking the right formula for your skin type is one of the steps with the biggest impact on how your face looks and feels." },
      { heading: "Dry skin", text: "Look for richer textures, like balms or cream formulas, with ingredients such as shea butter, hyaluronic acid and ceramides that lock in moisture all day long." },
      { heading: "Oily or combination skin", text: "Choose gel textures or oil-free moisturizers with niacinamide or a low concentration of hyaluronic acid: they hydrate without adding shine or clogging pores." },
      { heading: "Sensitive skin", text: "Pick fragrance-free formulas with few active ingredients and soothing compounds like centella asiatica or colloidal oatmeal, which strengthen the skin barrier instead of irritating it." },
      { heading: "How to apply it for maximum benefit", text: "Apply the cream while the skin is still damp, right after your serum, with gentle upward motions. This helps seal in the hydration from previous steps instead of losing it." },
      { heading: "Our recommendation", text: "Our Radiance Daily Moisturizer is formulated to suit most skin types thanks to its ultra-light texture with hyaluronic acid and peptides." },
    ],
  },
  {
    id: 3,
    title: "Makeup Tips for Beginners",
    category: "Makeup",
    date: "May 10, 2024",
    readTime: "5 min read",
    author: "Lumière Team",
    image: `${BASE}images/mujer-maquillandose.jpg`,
    excerpt: "From base to the perfect lip color: a complete guide for makeup beginners.",
    content: [
      { heading: "Always start with prepped skin", text: "Great makeup starts before foundation: clean, moisturized skin with sunscreen. This helps makeup last longer and look more natural." },
      { heading: "Foundation: less is more", text: "Apply foundation gradually, with a sponge or brush, working from the center of the face outward. It's always easier to build up than to remove excess product." },
      { heading: "Concealer and highlight", text: "Use concealer only where you need it — under-eye circles, imperfections — and set it with a bit of translucent powder so it doesn't crease throughout the day." },
      { heading: "Cheeks and subtle contour", text: "Smile and apply blush to the highest point of your cheeks, blending toward the temples. For beginners, a very subtle contour usually looks more natural than a heavy one." },
      { heading: "Eyes and lips", text: "For everyday looks, a neutral eyeshadow and a bit of mascara are enough. For lips, try versatile shades that work with different looks, from nude to bold pink." },
      { heading: "Set the look", text: "Finish with a setting spray so your makeup stays flawless for 12 hours, like the one featured in our Velvet Glow Makeup Set." },
    ],
  },
  {
    id: 4,
    title: "The Ultimate Guide to Glowing Skin",
    category: "Skincare",
    date: "May 10, 2024",
    readTime: "7 min read",
    author: "Lumière Team",
    image: `${BASE}images/mujer-pielRadiante.jpg`,
    excerpt: "The ultimate guide to achieving glowing, healthy-looking skin year-round.",
    content: [
      { heading: "Healthy glow starts from within", text: "Radiant skin doesn't only depend on the products you use: sleep, hydration and a balanced diet play a huge role in how your skin looks day to day." },
      { heading: "Exfoliate in moderation", text: "Renewing the skin is key to removing dead cells that dull its appearance, but over-exfoliating can damage the skin barrier. Two or three times a week is usually enough for most skin types." },
      { heading: "Vitamin C, your best ally", text: "A vitamin C serum helps even out skin tone, fight free radicals and deliver that signature glow almost instantly. Our Vitamin C Brightening Serum was designed exactly for that." },
      { heading: "Never skip sunscreen", text: "Accumulated sun damage is one of the main causes of dull skin and dark spots. Wearing sunscreen every day, even when it's cloudy, is the single habit with the biggest long-term impact." },
      { heading: "Layered hydration", text: "Combining a hydrating serum with a moisturizer that seals in moisture helps keep skin looking \"juicy\" and healthy throughout the day." },
      { heading: "The power of facial massage", text: "Using a rose quartz roller, like our Rose Quartz Face Roller, stimulates circulation, reduces puffiness and helps products absorb better." },
      { heading: "Consistency over perfection", text: "A healthy glow is the result of habits sustained over time, not a single miracle product. Choose a simple routine and stay consistent: the results follow." },
    ],
  },
];
