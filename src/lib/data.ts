import { CheckCircle, ShieldCheck, Users, Zap, type LucideIcon } from 'lucide-react';

export const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '(562) 317-7925';
export const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');
export const domain = 'novaroofsolutions.com';

export const locations = [
  {
    slug: 'houston-tx',
    city: 'Houston',
    state: 'TX',
  },
];

export const services = [
  {
    slug: 'roof-repair',
    image: "https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg",
    imageHint: "roof repair"
  },
  {
    slug: 'roof-replacement',
    image: "https://collinsandsonroofing.com/wp-content/uploads/2023/10/collins-blog-88-1080x675.jpg",
    imageHint: "new roof installation"
  },
  {
    slug: 'storm-damage-repair',
    image: "https://ahouseinthehills.com/wp-content/uploads/2026/02/Close-up-of-asphalt-roof-shingles-lifted-by-wind-showing-torn-edges-and-debris-under-a-cloudy-sky-with-dramatic-storm-damage-detail.png.webp",
    imageHint: "storm damaged roof"
  },
  {
    slug: 'commercial-roofing',
    image: "https://www.stahlroofing.ca/wp-content/uploads/2020/08/Reasons-To-Work-With-A-Professional-Commercial-Roofing-Company-2.jpg.webp",
    imageHint: "commercial building roof"
  },
];

export const whyChooseUsPoints: {slug: string, icon: LucideIcon}[] = [
  { slug: "certified", icon: CheckCircle },
  { slug: "insured", icon: ShieldCheck },
  { slug: "local", icon: Users },
  { slug: "responsive", icon: Zap },
];

export const i18n = {
  en: {
    header: {
      call: 'Call Now',
    },
    footer: {
      copyright: 'All Rights Reserved.',
      privacy: 'Privacy Policy'
    },
    hero: {
      subtitle: 'Unbeatable Quality and Trust for Your Texas Home. From Storm Repairs to Full Replacements, We\'ve Got You Covered.',
      ctaCall: 'Call for your FREE Estimate',
      ctaOnline: 'Request an Online Quote'
    },
    logoCloud: {
      title: 'We Work With The Most Trusted Brands in The Industry'
    },
    servicesSection: {
      title: 'Our Roofing Services',
      description: (city: string) => `We offer a full range of roofing services tailored to the unique needs of homeowners and businesses in ${city}.`
    },
    whyChooseUs: {
      title: (city: string) => `Why Choose Novaroof Solutions in ${city}?`,
      description: 'When you choose us, you partner with a team that values integrity, quality, and your complete satisfaction. We are committed to providing the best roofing experience in Texas, with the assurance and expertise only a local, certified contractor can offer.',
    },
    testimonialsSection: {
      title: 'What Our Clients Say',
      description: (city: string) => `We're proud to have earned the trust of homeowners and businesses throughout the ${city} area.`
    },
    faq: {
      title: (city: string) => `Frequently Asked Questions About Roofing in ${city}`,
      description: 'Clear answers to your most common questions. We\'re here to help you make the best decision for your home.'
    },
    ctaBanner: {
      title: (city: string) => `Ready to Protect Your Home in ${city}?`,
      description: 'Don\'t wait for a small problem to become a catastrophe. Our team is ready to provide you with a fast, free, and honest assessment of your Texas roofing needs.',
      buttonText: 'Get Your Free Quote Now'
    },
    contactForm: {
      title: 'Request a Free Quote',
      description: 'Prefer to write? Fill out the form and one of our roofing specialists will contact you shortly.',
      nameLabel: 'Full Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'Phone Number (Optional)',
      serviceLabel: 'What service do you need?',
      servicePlaceholder: 'Select a service',
      otherOption: 'Other / Not Sure',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your project...',
      submit: 'Send Message',
      submitting: 'Sending...',
      toast: {
        successTitle: 'Message Sent!',
        errorTitle: 'Error'
      },
      validation: {
        name: 'Name must be at least 2 characters.',
        email: 'Invalid email address.',
        service: 'Please select a service.',
        message: 'Message must be at least 10 characters.',
        formError: 'Please correct the errors below.',
        success: "Thank you for your message! We'll be in touch shortly.",
        unexpectedError: 'An unexpected error occurred. Please try again later.'
      }
    },
    services: [
      { slug: 'roof-repair', title: "Roof Repair", description: "From minor leaks to major issues, we provide reliable roof repairs to protect your Texas home from harsh weather." },
      { slug: 'roof-replacement', title: "Roof Replacement", description: "Full roof replacements using premium materials for long-lasting protection and enhanced curb appeal for your Texas property." },
      { slug: 'storm-damage-repair', title: "Storm Damage Repair", description: "Rapid response and expert repair for damage caused by Texas hurricanes, hail, and high winds." },
      { slug: 'commercial-roofing', title: "Commercial Roofing", description: "Scalable and robust roofing systems for businesses, warehouses, and commercial properties across Texas." },
    ],
    whyChooseUsPoints: [
      { slug: "certified", title: "GAF Certified Contractor", description: "Our GAF certification places us in the top 3% of roofing contractors. This ensures we use the best materials and installation techniques, backed by the industry's strongest warranties." },
      { slug: "insured", title: "Fully Insured for Your Protection", description: "Your peace of mind is our priority. We carry a comprehensive $2 million liability insurance policy, protecting your property and our team throughout the project." },
      { slug: "local", title: "Local Houston Experts", description: "We know the Texas climate. Our team of local professionals understands the unique challenges of Houston's heat, humidity, and storms, ensuring a long-lasting solution." },
      { slug: "responsive", title: "Fast Response & Free Quotes", description: "Time is critical with a damaged roof. We offer a rapid response to inspect your property and provide a free, detailed, and no-obligation quote so you can make an informed decision." },
    ],
    testimonials: [
      { quote: "Nova Roof Solutions transformed our home. The team was professional, efficient, and the quality of their work is outstanding. They handled everything after the storm, making a stressful situation easy.", name: "Sarah L.", location: "The Woodlands, TX" },
      { quote: "As a business owner, I needed a reliable team for our new facility. Nova delivered on time and on budget. Their communication and attention to detail were second to none. Highly recommend.", name: "David Chen", location: "Katy, TX" },
      { quote: "After seeing water stains on our ceiling, we called Nova for an estimate. They were honest, transparent, and didn't try to upsell us. The repair was done quickly and we haven't had an issue since.", name: "Maria Rodriguez", location: "Sugar Land, TX" },
    ],
    faqContent: [
      { slug: "cost-roof-repair-houston", question: "How much does a roof repair cost in Houston, TX?", answer: "The cost of a roof repair in Houston can vary significantly depending on the extent of the damage, the materials used, and the complexity of the roof. Minor repairs, like replacing a few shingles, can cost between $300 and $700. More extensive repairs, like fixing a leak or replacing a storm-damaged section, can range from $700 to $2,500. For major structural damage, the cost can be higher. At Novaroof Solutions, we offer a FREE, no-obligation inspection and estimate to give you an exact, transparent price tailored to your Houston home's specific needs." },
      { slug: "repair-vs-replace-roof", question: "When should I repair versus replace my roof?", answer: "The decision to repair or replace a roof in Texas depends on three key factors: the roof's age, the extent of the damage, and your future plans. Generally, if your roof is less than 15 years old and the damage is localized to a small area (e.g., a few wind-blown shingles), a professional repair is sufficient. However, if your roof is nearing the end of its lifespan (20-25 years for asphalt shingles), has multiple leaks, or more than 30% of the surface is damaged by hail or a storm, a full replacement is often the most cost-effective and safest long-term option." },
      { slug: "after-storm-houston", question: "What should I do immediately after a storm in Houston?", answer: "Safety first. After a severe storm in Houston, do not get on your roof. From the ground, visually inspect for obvious damage like fallen shingles in your yard. Inside, look for signs of leaks or water stains on ceilings. Document any damage you see with photographs for your insurance claim. Then, call a professional immediately. Novaroof Solutions offers emergency inspections to assess the damage, perform temporary repairs to prevent further water damage, and guide you through every step of the insurance claim process." },
      { slug: "certified-insured-texas", question: "Are you certified and insured to work in Texas?", answer: "Absolutely. Novaroof Solutions is a GAF Certified contractor, meaning we meet the industry's highest standards for installation and professionalism. Furthermore, we are fully insured with a $2 million general liability policy for the total protection of your property and peace of mind. We operate with in-house teams of local Texas experts, not subcontractors, to ensure consistent quality on every project we undertake." }
    ],
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated:",
      sections: [
        { title: "1. Introduction", content: "Welcome to Novaroof Solutions. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website." },
        { title: "2. Information We Collect", content: "We may collect personal information that you voluntarily provide to us when you fill out our contact form, such as your name, email address, phone number, and any other information you choose to provide." },
        { title: "3. Use of Your Information", content: "Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:", list: ["Respond to your service requests and inquiries.", "Send you emails or contact you regarding your project.", "Improve our website and service offerings."] },
        { title: "4. Security of Your Information", content: "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable." },
        { title: "5. Contact Us", content: "If you have questions or comments about this Privacy Policy, please contact us through the form on our website or call us at our main number." }
      ]
    },
  },
  es: {
    header: {
      call: 'Llamar Ahora',
    },
    footer: {
      copyright: 'Todos los Derechos Reservados.',
      privacy: 'Política de Privacidad'
    },
    hero: {
      subtitle: 'Calidad y Confianza Insuperables para tu Hogar en Texas. Desde Reparaciones por Tormenta hasta Reemplazos Completos, te Cubrimos.',
      ctaCall: 'Llama para tu Estimado GRATIS',
      ctaOnline: 'Solicita un Presupuesto Online'
    },
    logoCloud: {
      title: 'Trabajamos con las Marcas Más Confiables de la Industria'
    },
    servicesSection: {
      title: 'Nuestros Servicios de Techos',
      description: (city: string) => `Ofrecemos una gama completa de servicios de techado adaptados a las necesidades únicas de los propietarios de viviendas y negocios en ${city}.`
    },
    whyChooseUs: {
      title: (city: string) => `¿Por Qué Elegir a Novaroof Solutions en ${city}?`,
      description: 'Cuando nos eliges, te asocias con un equipo que valora la integridad, la calidad y tu completa satisfacción. Estamos comprometidos a brindar la mejor experiencia de techado en Texas, con la garantía y la experiencia que solo un contratista local y certificado puede ofrecer.',
    },
    testimonialsSection: {
      title: 'Lo Que Dicen Nuestros Clientes',
      description: (city: string) => `Estamos orgullosos de habernos ganado la confianza de propietarios y empresas en toda el área de ${city}.`
    },
    faq: {
      title: (city: string) => `Preguntas Frecuentes Sobre Techos en ${city}`,
      description: 'Respuestas claras a tus dudas más comunes. Estamos aquí para ayudarte a tomar la mejor decisión para tu hogar.'
    },
    ctaBanner: {
      title: (city: string) => `¿Listo para Proteger tu Hogar en ${city}?`,
      description: 'No esperes a que un pequeño problema se convierta en una catástrofe. Nuestro equipo está listo para brindarte una evaluación rápida, gratuita y honesta de tus necesidades de techado en Texas.',
      buttonText: 'Obtén tu Presupuesto Gratis Ahora'
    },
    contactForm: {
      title: 'Solicita un Presupuesto Gratuito',
      description: '¿Prefieres escribir? Completa el formulario y uno de nuestros especialistas en techos se pondrá en contacto contigo a la brevedad.',
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'John Doe',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'tu@ejemplo.com',
      phoneLabel: 'Número de Teléfono (Opcional)',
      serviceLabel: '¿Qué servicio necesitas?',
      servicePlaceholder: 'Selecciona un servicio',
      otherOption: 'Otro / No estoy seguro',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto...',
      submit: 'Enviar Mensaje',
      submitting: 'Enviando...',
      toast: {
        successTitle: '¡Mensaje Enviado!',
        errorTitle: 'Error'
      },
      validation: {
        name: 'El nombre debe tener al menos 2 caracteres.',
        email: 'Dirección de correo electrónico inválida.',
        service: 'Por favor, selecciona un servicio.',
        message: 'El mensaje debe tener al menos 10 caracteres.',
        formError: 'Por favor, corrige los errores a continuación.',
        success: '¡Gracias por tu mensaje! Nos pondremos en contacto en breve.',
        unexpectedError: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.'
      }
    },
    services: [
      { slug: 'roof-repair', title: "Reparación de Techos", description: "Desde goteras menores hasta problemas mayores, brindamos reparaciones confiables para proteger tu hogar en Texas del clima adverso." },
      { slug: 'roof-replacement', title: "Reemplazo de Techos", description: "Reemplazos completos de techos utilizando materiales de primera calidad para una protección duradera y una mejor estética para tu propiedad en Texas." },
      { slug: 'storm-damage-repair', title: "Reparación de Daños por Tormenta", description: "Respuesta rápida y reparación experta para daños causados por huracanes, granizo y vientos fuertes en Texas." },
      { slug: 'commercial-roofing', title: "Techos Comerciales", description: "Sistemas de techado escalables y robustos para empresas, almacenes y propiedades comerciales en todo Texas." },
    ],
    whyChooseUsPoints: [
      { slug: "certified", title: "Contratista Certificado por GAF", description: "Nuestra certificación GAF nos coloca en el 3% superior de los contratistas de techos. Esto garantiza que utilizamos los mejores materiales y técnicas de instalación, respaldados por las garantías más sólidas de la industria." },
      { slug: "insured", title: "Totalmente Asegurados para tu Protección", description: "Tu tranquilidad es nuestra prioridad. Contamos con un seguro de responsabilidad civil completo de $2 millones, protegiendo tu propiedad y a nuestro equipo durante todo el proyecto." },
      { slug: "local", title: "Expertos Locales de Houston", description: "Conocemos el clima de Texas. Nuestro equipo de profesionales locales entiende los desafíos únicos del calor, la humedad y las tormentas de Houston, asegurando una solución duradera." },
      { slug: "responsive", title: "Respuesta Rápida y Presupuestos Gratis", description: "El tiempo es crucial con un techo dañado. Ofrecemos una respuesta rápida para inspeccionar tu propiedad y proporcionar un presupuesto gratuito, detallado y sin compromiso para que tomes una decisión informada." },
    ],
    testimonials: [
      { quote: "Nova Roof Solutions transformó nuestra casa. El equipo fue profesional, eficiente y la calidad de su trabajo es sobresaliente. Se encargaron de todo después de la tormenta, haciendo que una situación estresante fuera fácil.", name: "Sarah L.", location: "The Woodlands, TX" },
      { quote: "Como dueño de un negocio, necesitaba un equipo confiable para nuestra nueva instalación. Nova cumplió a tiempo y dentro del presupuesto. Su comunicación y atención al detalle fueron insuperables. Los recomiendo ampliamente.", name: "David Chen", location: "Katy, TX" },
      { quote: "Después de ver manchas de agua en nuestro techo, llamamos a Nova para un presupuesto. Fueron honestos, transparentes y no intentaron vendernos más de lo necesario. La reparación se hizo rápidamente y no hemos tenido ningún problema desde entonces.", name: "Maria Rodriguez", location: "Sugar Land, TX" },
    ],
    faqContent: [
      { slug: "costo-reparacion-techo-houston", question: "¿Cuánto cuesta la reparación de un techo en Houston, TX?", answer: "El costo de una reparación de techo en Houston puede variar significativamente dependiendo de la magnitud del daño, los materiales utilizados y la complejidad del techo. Las reparaciones menores, como reemplazar algunas tejas, pueden costar entre $300 y $700. Reparaciones más extensas, como arreglar una fuga o reemplazar una sección dañada por una tormenta, pueden oscilar entre $700 y $2,500. Para daños estructurales importantes, el costo puede ser mayor. En Novaroof Solutions, ofrecemos una inspección y un presupuesto GRATUITO y sin compromiso para darte un precio exacto y transparente." },
      { slug: "reparar-vs-reemplazar-techo", question: "¿Cuándo debería reparar en lugar de reemplazar mi techo?", answer: "La decisión de reparar o reemplazar un techo en Texas depende de la edad del techo, la extensión del daño y tus planes a futuro. Generalmente, si tu techo tiene menos de 15 años y el daño está localizado, una reparación es suficiente. Sin embargo, si tu techo se acerca al final de su vida útil (20-25 años), tiene múltiples fugas o más del 30% está dañado, el reemplazo completo suele ser la opción más rentable a largo plazo." },
      { slug: "danos-por-tormenta-houston", question: "¿Qué debo hacer inmediatamente después de una tormenta en Houston?", answer: "La seguridad es lo primero. Después de una tormenta severa, no te subas al techo. Desde el suelo, inspecciona si hay daños evidentes. En el interior, busca signos de goteras. Documenta cualquier daño con fotografías para tu reclamación de seguro. Luego, llama a un profesional de inmediato. En Novaroof Solutions, ofrecemos inspecciones de emergencia para evaluar los daños, realizar reparaciones temporales y guiarte en el proceso de reclamación al seguro." },
      { slug: "certificacion-seguro-texas", question: "¿Están certificados y asegurados para trabajar en Texas?", answer: "Absolutamente. Novaroof Solutions es un contratista certificado por GAF y estamos completamente asegurados con una póliza de responsabilidad civil de $2 millones para la protección total de tu propiedad. Operamos con equipos internos de expertos locales de Texas, no con subcontratistas, para garantizar una calidad constante." }
    ],
    privacyPolicy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización:",
      sections: [
        { title: "1. Introducción", content: "Bienvenido a Novaroof Solutions. Estamos comprometidos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web." },
        { title: "2. Información que Recopilamos", content: "Podemos recopilar información personal que usted nos proporciona voluntariamente cuando completa nuestro formulario de contacto, como su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que decida proporcionar." },
        { title: "3. Uso de su Información", content: "Tener información precisa nos permite brindarle una experiencia fluida, eficiente y personalizada. Específicamente, podemos usar la información recopilada sobre usted a través del sitio para:", list: ["Responder a sus solicitudes de servicio y consultas.", "Enviarle correos electrónicos o contactarlo con respecto a su proyecto.", "Mejorar nuestro sitio web y nuestras ofertas de servicios."] },
        { title: "4. Seguridad de su Información", content: "Utilizamos medidas de seguridad administrativas, técnicas y físicas para ayudar a proteger su información personal. Si bien hemos tomado medidas razonables para proteger la información personal que nos proporciona, tenga en cuenta que, a pesar de nuestros esfuerzos, ninguna medida de seguridad es perfecta o impenetrable." },
        { title: "5. Contáctenos", content: "Si tiene preguntas o comentarios sobre esta Política de Privacidad, contáctenos a través del formulario en nuestro sitio web o llámenos a nuestro número principal." }
      ]
    },
  }
}
