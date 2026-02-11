import { CheckCircle, ShieldCheck, Users, Zap } from 'lucide-react';

// Centralized Phone Number
export const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '(562) 317-7925';
export const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');
export const domain = 'novaroofsolutions.com';

// Locations
export const locations = [
  {
    slug: 'houston-tx',
    city: 'Houston',
    state: 'TX',
  },
  // We can add more Texas cities here later, e.g.:
  // {
  //   slug: 'dallas-tx',
  //   city: 'Dallas',
  //   state: 'TX',
  // },
];

// Services
export const services = [
  {
    slug: 'roof-repair',
    title: "Roof Repair",
    description: "From minor leaks to major issues, we provide reliable roof repairs to protect your Texas home from harsh weather.",
    image: "https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg",
    imageHint: "roof repair"
  },
  {
    slug: 'roof-replacement',
    title: "Roof Replacement",
    description: "Full roof replacements using premium materials for long-lasting protection and enhanced curb appeal for your Texas property.",
    image: "https://collinsandsonroofing.com/wp-content/uploads/2023/10/collins-blog-88-1080x675.jpg",
    imageHint: "new roof installation"
  },
  {
    slug: 'storm-damage-repair',
    title: "Storm Damage Repair",
    description: "Rapid response and expert repair for damage caused by Texas hurricanes, hail, and high winds.",
    image: "https://ahouseinthehills.com/wp-content/uploads/2026/02/Close-up-of-asphalt-roof-shingles-lifted-by-wind-showing-torn-edges-and-debris-under-a-cloudy-sky-with-dramatic-storm-damage-detail.png.webp",
    imageHint: "storm damaged roof"
  },
  {
    slug: 'commercial-roofing',
    title: "Commercial Roofing",
    description: "Scalable and robust roofing systems for businesses, warehouses, and commercial properties across Texas.",
    image: "https://www.stahlroofing.ca/wp-content/uploads/2020/08/Reasons-To-Work-With-A-Professional-Commercial-Roofing-Company-2.jpg.webp",
    imageHint: "commercial building roof"
  },
];

// Why Choose Us
export const whyChooseUsPoints = [
  {
    icon: CheckCircle,
    title: "Contratista Certificado por GAF",
    description: "Nuestra certificación GAF nos coloca en el 3% superior de los contratistas de techos. Esto garantiza que utilizamos los mejores materiales y técnicas de instalación, respaldados por las garantías más sólidas de la industria.",
  },
  {
    icon: ShieldCheck,
    title: "Totalmente Asegurados para tu Protección",
    description: "Tu tranquilidad es nuestra prioridad. Contamos con un seguro de responsabilidad civil completo de $2 millones, protegiendo tu propiedad y a nuestro equipo durante todo el proyecto.",
  },
  {
    icon: Users,
    title: "Expertos Locales de Houston",
    description: "Conocemos el clima de Texas. Nuestro equipo de profesionales locales entiende los desafíos únicos del calor, la humedad y las tormentas de Houston, asegurando una solución duradera.",
  },
  {
    icon: Zap,
    title: "Respuesta Rápida y Presupuestos Gratis",
    description: "El tiempo es crucial con un techo dañado. Ofrecemos una respuesta rápida para inspeccionar tu propiedad y proporcionar un presupuesto gratuito, detallado y sin compromiso para que tomes una decisión informada.",
  },
];

// Testimonials
export const testimonials = [
  {
    quote: "Nova Roof Solutions transformed our home. The team was professional, efficient, and the quality of their work is outstanding. They handled everything after the storm, making a stressful situation easy.",
    name: "Sarah L.",
    location: "The Woodlands, TX",
  },
  {
    quote: "As a business owner, I needed a reliable team for our new facility. Nova delivered on time and on budget. Their communication and attention to detail were second to none. Highly recommend.",
    name: "David Chen",
    location: "Katy, TX",
  },
  {
    quote: "After seeing water stains on our ceiling, we called Nova for an estimate. They were honest, transparent, and didn't try to upsell us. The repair was done quickly and we haven't had an issue since.",
    name: "Maria Rodriguez",
    location: "Sugar Land, TX",
  },
];

// FAQ Content
export const faqContent = [
  {
    question: "Cuánto cuesta la reparación de un techo en Houston, TX?",
    answer: "El costo de una reparación de techo en Houston puede variar significativamente dependiendo de la magnitud del daño, los materiales utilizados y la complejidad del techo. Las reparaciones menores, como reemplazar algunas tejas, pueden costar entre $300 y $700. Reparaciones más extensas, como arreglar una fuga o reemplazar una sección dañada por una tormenta, pueden oscilar entre $700 y $2,500. Para daños estructurales importantes, el costo puede ser mayor. En Novaroof Solutions, entendemos que cada techo es único. Por eso, ofrecemos una inspección y un presupuesto GRATUITO y sin compromiso para darte un precio exacto y transparente adaptado a las necesidades específicas de tu hogar en Houston.",
    slug: "costo-reparacion-techo-houston"
  },
  {
    question: "Cuándo debería reparar en lugar de reemplazar mi techo?",
    answer: "La decisión de reparar o reemplazar un techo en Texas depende de tres factores clave: la edad del techo, la extensión del daño y tus planes a futuro. Generalmente, si tu techo tiene menos de 15 años y el daño está localizado en un área pequeña (por ejemplo, algunas tejas faltantes por el viento), una reparación profesional es suficiente. Sin embargo, si tu techo se acerca al final de su vida útil (20-25 años para tejas de asfalto), tiene múltiples fugas, o más del 30% de la superficie está dañada por granizo o una tormenta, el reemplazo completo suele ser la opción más rentable y segura a largo plazo. Un reemplazo también es una excelente inversión si planeas vender tu casa pronto.",
    slug: "reparar-vs-reemplazar-techo"
  },
  {
    question: "Qué debo hacer inmediatamente después de una tormenta en Houston?",
    answer: "La seguridad es lo primero. Después de una tormenta severa en Houston, no te subas al techo. Desde el suelo, inspecciona visualmente si hay daños evidentes como tejas caídas en el jardín. En el interior, busca signos de goteras o manchas de agua en los techos. Documenta cualquier daño que veas con fotografías para tu reclamación de seguro. Si es seguro hacerlo y tienes una fuga activa, puedes colocar un balde para recoger el agua. Luego, llama a un profesional de inmediato. En Novaroof Solutions, ofrecemos inspecciones de emergencia para evaluar los daños, realizar reparaciones temporales para prevenir más daños por agua y guiarte en cada paso del proceso de reclamación al seguro.",
    slug: "danos-por-tormenta-houston"
  },
  {
    question: "Están certificados y asegurados para trabajar en Texas?",
    answer: "Absolutamente. Novaroof Solutions es un contratista certificado por GAF, lo que significa que cumplimos con los más altos estándares de instalación y profesionalismo de la industria. Además, estamos completamente asegurados y tenemos una póliza de responsabilidad civil de $2 millones para la protección total de tu propiedad y tu tranquilidad. Operamos con equipos internos de expertos locales de Texas, no con subcontratistas, para garantizar una calidad constante en cada proyecto que realizamos.",
    slug: "certificacion-seguro-texas"
  }
];
