import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { HiSparkles, HiBeaker, HiHeart, HiStar, HiGlobeAlt, HiShieldCheck, HiTruck, HiArrowPath, HiQuestionMarkCircle, HiMapPin, HiBriefcase, HiNewspaper, HiEnvelope } from 'react-icons/hi2';
import { useLanguage } from '../i18n/LanguageContext';
import './About.css';

const BASE = import.meta.env.BASE_URL;

const copy = {
  en: {
    storyLabel: "Our Story", heroTitle: "Beauty Born From Nature & Science",
    heroText: "Lumière Beauty was born from the belief that everyone deserves to feel radiant. We combine the best of nature with the most advanced science to create products that transform your skin and your routine.",
    exploreProducts: "Explore Products",
    stats: [{ number: "1000K+", label: "Happy Customers" }, { number: "500+", label: "Premium Products" }, { number: "15+", label: "Countries" }, { number: "100%", label: "Cruelty Free & Vegan" }],
    missionLabel: "Our Mission", missionTitle: "Beauty That Transforms",
    missionText1: "We believe skincare goes beyond the surface. It's a self-care ritual, a moment of connection with yourself. Every Lumière product is formulated with carefully selected ingredients, without compromising on effectiveness or ethics.",
    missionText2: "We are 100% cruelty-free, vegan and committed to sustainability. Our packaging is recyclable and we work with suppliers who share our values.",
    valuesLabel: "What defines us", valuesTitle: "Our Values",
    values: [
      { icon: <HiSparkles size={28} color="var(--rose-500)" />, title: "Premium Ingredients", desc: "Every ingredient is chosen for its efficacy and sustainable origin. No fillers, no compromises.", id: "ingredients" },
      { icon: <HiBeaker size={28} color="var(--rose-500)" />, title: "Science-Backed", desc: "Developed in state-of-the-art labs with dermatologically tested formulas.", id: null },
      { icon: <HiGlobeAlt size={28} color="var(--rose-500)" />, title: "Sustainability", desc: "Eco-friendly packaging, responsible suppliers and a carbon footprint we reduce every year.", id: "sustainability" },
      { icon: <HiGlobeAlt size={28} color="var(--rose-500)" />, title: "Inclusivity", desc: "Products designed for every skin, tone and type. Beauty doesn't have just one face.", id: null },
      { icon: <HiShieldCheck size={28} color="var(--rose-500)" />, title: "Cruelty Free", desc: "We never test on animals. Certified by international animal-welfare organizations.", id: null },
      { icon: <HiStar size={28} color="var(--rose-500)" />, title: "Real Results", desc: "Our products are formulated to deliver visible results, not just promises.", id: null },
    ],
    ctaTitle: "Ready to transform your routine?", ctaText: "Discover our full collection and find the perfect products for your skin type.", goShop: "Go to Shop",
    contactTitle: "Contact Us", contactText: "Have a question? Our customer care team is happy to help.",
    contactEmail: "Email: hello@lumierebeauty.com", contactPhone: "Phone: +1 (800) 555-0192", contactHours: "Monday to Friday, 9am – 6pm",
    shippingTitle: "Shipping & Delivery", shippingText: "We offer free standard shipping on all orders over $50. Standard delivery takes 5-7 business days, while express delivery arrives in 2-3 business days. You'll receive a tracking link by email as soon as your order ships.",
    returnsTitle: "Returns & Exchanges", returnsText: "Not fully satisfied? You can return any unopened product within 30 days of delivery for a full refund. Opened products can be exchanged within 14 days if you experience a reaction. Reach out to our team to start the process.",
    faqsTitle: "FAQs",
    faqs: [
      { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days; express shipping takes 2-3 business days." },
      { q: "Are your products cruelty-free?", a: "Yes, 100% of our products are cruelty-free and certified vegan." },
      { q: "Can I change my order after placing it?", a: "You can modify your order within 2 hours of purchase by contacting our support team." },
    ],
    trackTitle: "Track Your Order", trackText: "Once your order ships, you'll receive an email with a tracking number and a direct link to follow your package in real time. You can also check your order status anytime from the confirmation email.",
    careersTitle: "Careers", careersText: "We're always looking for passionate people who want to help redefine the beauty industry. Check back soon for open positions, or send us your resume at careers@lumierebeauty.com.",
    pressTitle: "Press", pressText: "For press inquiries, interviews or media assets, please reach out to our communications team at press@lumierebeauty.com.",
  },
  es: {
    storyLabel: "Nuestra Historia", heroTitle: "Belleza Nacida de la Naturaleza y la Ciencia",
    heroText: "Lumière Beauty nació de la creencia de que cada persona merece sentirse radiante. Combinamos lo mejor de la naturaleza con la ciencia más avanzada para crear productos que transforman tu piel y tu rutina.",
    exploreProducts: "Explorar productos",
    stats: [{ number: "1000K+", label: "Clientas satisfechas" }, { number: "500+", label: "Productos premium" }, { number: "15+", label: "Países" }, { number: "100%", label: "Cruelty Free & Vegano" }],
    missionLabel: "Nuestra Misión", missionTitle: "Belleza que Transforma",
    missionText1: "Creemos que el skincare va más allá de la superficie. Se trata de un ritual de autocuidado, un momento de conexión con vos misma. Cada producto Lumière está formulado con ingredientes seleccionados, sin comprometer la eficacia ni la ética.",
    missionText2: "Somos 100% cruelty-free, veganas y comprometidas con la sostenibilidad. Nuestros envases son reciclables y trabajamos con proveedores que comparten nuestros valores.",
    valuesLabel: "Lo que nos define", valuesTitle: "Nuestros Valores",
    values: [
      { icon: <HiSparkles size={28} color="var(--rose-500)" />, title: "Ingredientes Premium", desc: "Cada ingrediente es seleccionado por su eficacia y origen sostenible. Sin rellenos, sin compromisos.", id: "ingredients" },
      { icon: <HiBeaker size={28} color="var(--rose-500)" />, title: "Respaldo Científico", desc: "Desarrolladas en laboratorios de última generación con formulaciones testeadas dermatológicamente.", id: null },
      { icon: <HiGlobeAlt size={28} color="var(--rose-500)" />, title: "Sostenibilidad", desc: "Empaque eco-friendly, proveedores responsables y una huella de carbono que reducimos año a año.", id: "sustainability" },
      { icon: <HiGlobeAlt size={28} color="var(--rose-500)" />, title: "Inclusividad", desc: "Productos pensados para todas las pieles, tonos y tipos. La belleza no tiene un solo rostro.", id: null },
      { icon: <HiShieldCheck size={28} color="var(--rose-500)" />, title: "Cruelty Free", desc: "Nunca probamos en animales. Certificadas por organizaciones internacionales de bienestar animal.", id: null },
      { icon: <HiStar size={28} color="var(--rose-500)" />, title: "Resultados Reales", desc: "Nuestros productos están formulados para dar resultados visibles, no solo promesas.", id: null },
    ],
    ctaTitle: "¿Lista para transformar tu rutina?", ctaText: "Descubrí nuestra colección completa y encontrá los productos perfectos para tu tipo de piel.", goShop: "Ir a la tienda",
    contactTitle: "Contacto", contactText: "¿Tenés alguna duda? Nuestro equipo de atención al cliente va a estar feliz de ayudarte.",
    contactEmail: "Email: hello@lumierebeauty.com", contactPhone: "Teléfono: +1 (800) 555-0192", contactHours: "Lunes a viernes, 9 a 18 hs",
    shippingTitle: "Envíos y Entregas", shippingText: "Ofrecemos envío estándar gratis en todos los pedidos mayores a $50. La entrega estándar demora entre 5 y 7 días hábiles, mientras que la entrega express llega en 2-3 días hábiles. Vas a recibir un link de seguimiento por email apenas se despache tu pedido.",
    returnsTitle: "Devoluciones y Cambios", returnsText: "¿No quedaste conforme? Podés devolver cualquier producto sin abrir dentro de los 30 días de la entrega para un reembolso completo. Los productos abiertos pueden cambiarse dentro de los 14 días si tuviste una reacción. Contactá a nuestro equipo para iniciar el proceso.",
    faqsTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Cuánto tarda el envío?", a: "El envío estándar tarda 5-7 días hábiles; el envío express, 2-3 días hábiles." },
      { q: "¿Sus productos son cruelty-free?", a: "Sí, el 100% de nuestros productos son cruelty-free y veganos certificados." },
      { q: "¿Puedo modificar mi pedido después de hacerlo?", a: "Podés modificar tu pedido dentro de las 2 horas de la compra contactando a nuestro equipo de soporte." },
    ],
    trackTitle: "Seguí tu Pedido", trackText: "Una vez despachado tu pedido, vas a recibir un email con un número de seguimiento y un link directo para seguir tu paquete en tiempo real. También podés revisar el estado de tu pedido en cualquier momento desde el email de confirmación.",
    careersTitle: "Trabajá con Nosotros", careersText: "Siempre estamos buscando personas apasionadas que quieran ayudar a redefinir la industria de la belleza. Volvé pronto para ver posiciones abiertas, o envianos tu CV a careers@lumierebeauty.com.",
    pressTitle: "Prensa", pressText: "Para consultas de prensa, entrevistas o material de comunicación, contactá a nuestro equipo en press@lumierebeauty.com.",
  },
};

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return null;
}

export default function About() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <main className="about-page">
      <ScrollToHash />

      {/* Hero / Our Story */}
      <section id="story" className="about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__text">
            <p className="section-label">{c.storyLabel}</p>
            <h1 className="section-title">{c.heroTitle}</h1>
            <p>{c.heroText}</p>
            <Link to="/shop" className="btn-primary">{c.exploreProducts} <FiArrowRight size={14} /></Link>
          </div>
          <div className="sobre-nosotros__img">
            <img src={`${BASE}images/sobre-nosotros.jpg`} alt="About Lumière" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container about-stats__inner">
          {c.stats.map(s => (
            <div key={s.label} className="about-stat">
              <strong>{s.number}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="container about-mission__inner">
          <div className="about-mission__img">
            <img src={`${BASE}images/mujer-espa.jpg`} alt="Mission" />
          </div>
          <div className="about-mission__text">
            <p className="section-label">{c.missionLabel}</p>
            <h2 className="section-title">{c.missionTitle}</h2>
            <p>{c.missionText1}</p>
            <p>{c.missionText2}</p>
          </div>
        </div>
      </section>

      {/* Values (incluye Ingredients y Sustainability) */}
      <section className="about-values">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>{c.valuesLabel}</p>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>{c.valuesTitle}</h2>
          <div className="about-values__grid">
            {c.values.map(v => (
              <div key={v.title} id={v.id || undefined} className="about-value-card">
                <span>{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Care: Contact / Shipping / Returns / FAQs / Track Order */}
      <section className="about-support">
        <div className="container about-support__grid">
          <div id="contact" className="about-support__card">
            <span className="about-support__icon"><HiEnvelope size={24} color="var(--rose-500)" /></span>
            <h3>{c.contactTitle}</h3>
            <p>{c.contactText}</p>
            <p>{c.contactEmail}<br />{c.contactPhone}<br />{c.contactHours}</p>
          </div>
          <div id="shipping" className="about-support__card">
            <span className="about-support__icon"><HiTruck size={24} color="var(--rose-500)" /></span>
            <h3>{c.shippingTitle}</h3>
            <p>{c.shippingText}</p>
          </div>
          <div id="returns" className="about-support__card">
            <span className="about-support__icon"><HiArrowPath size={24} color="var(--rose-500)" /></span>
            <h3>{c.returnsTitle}</h3>
            <p>{c.returnsText}</p>
          </div>
          <div id="track-order" className="about-support__card">
            <span className="about-support__icon"><HiMapPin size={24} color="var(--rose-500)" /></span>
            <h3>{c.trackTitle}</h3>
            <p>{c.trackText}</p>
          </div>
        </div>
        <div id="faqs" className="container about-faqs">
          <h3><HiQuestionMarkCircle size={22} color="var(--rose-500)" style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} />{c.faqsTitle}</h3>
          {c.faqs.map((f, i) => (
            <details key={i} className="about-faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Careers & Press */}
      <section className="about-support">
        <div className="container about-support__grid about-support__grid--two">
          <div id="careers" className="about-support__card">
            <span className="about-support__icon"><HiBriefcase size={24} color="var(--rose-500)" /></span>
            <h3>{c.careersTitle}</h3>
            <p>{c.careersText}</p>
          </div>
          <div id="press" className="about-support__card">
            <span className="about-support__icon"><HiNewspaper size={24} color="var(--rose-500)" /></span>
            <h3>{c.pressTitle}</h3>
            <p>{c.pressText}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2>{c.ctaTitle}</h2>
          <p>{c.ctaText}</p>
          <Link to="/shop" className="btn-rose">{c.goShop} <FiArrowRight size={14} /></Link>
        </div>
      </section>
    </main>
  );
}
