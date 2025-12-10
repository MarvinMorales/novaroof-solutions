import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre cómo NovaRoof Solutions LLC utiliza cookies en nuestro sitio web.',
};

export default function CookiePolicyPage() {
  return (
    <div className="container py-16 md:py-24">
      <article className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Política de Cookies</h1>
        <p className="text-muted-foreground">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>
          Esta Política de Cookies explica qué son las cookies y cómo las usamos. Debe leer esta política para comprender qué tipo de cookies utilizamos, o la información que recopilamos mediante cookies y cómo se utiliza esa información.
        </p>

        <h2 className="font-headline">¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita un sitio web. Permiten que el sitio web recuerde sus acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente y otras preferencias de visualización) durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que regrese al sitio o navegue de una página a otra.
        </p>

        <h2 className="font-headline">Cómo utilizamos las cookies</h2>
        <p>
          Utilizamos cookies para varios propósitos, que incluyen:
        </p>
        <ul>
          <li><strong>Cookies Esenciales:</strong> Algunas cookies son esenciales para que pueda experimentar la funcionalidad completa de nuestro sitio. Nos permiten mantener las sesiones de los usuarios y prevenir cualquier amenaza de seguridad. No recopilan ni almacenan ninguna información personal.</li>
          <li><strong>Cookies de Análisis:</strong> Estas cookies almacenan información como el número de visitantes del sitio web, el número de visitantes únicos, qué páginas del sitio web han sido visitadas, la fuente de la visita, etc. Estos datos nos ayudan a comprender y analizar qué tan bien funciona el sitio web y dónde necesita mejorar.</li>
          <li><strong>Cookies de Funcionalidad:</strong> Estas son las cookies que ayudan a ciertas funcionalidades no esenciales en nuestro sitio web. Estas funcionalidades incluyen incrustar contenido como videos o compartir contenido del sitio web en plataformas de redes sociales.</li>
        </ul>

        <h2 className="font-headline">Sus opciones con respecto a las cookies</h2>
        <p>
          Si prefiere evitar las cookies en nuestro sitio web, primero debe deshabilitar el uso de cookies en su navegador y luego eliminar las cookies guardadas en su navegador asociadas con este sitio web. Puede usar esta opción para evitar el uso de cookies en cualquier momento.
        </p>
        <p>
          Si no acepta nuestras cookies, puede experimentar algunos inconvenientes en su uso del sitio web y algunas funciones pueden no funcionar correctamente.
        </p>
        <h2 className="font-headline">Contáctenos</h2>
        <p>
          Si tiene alguna pregunta sobre esta Política de Cookies, puede contactarnos:
        </p>
        <ul>
          <li>Por correo electrónico: contacto@novaroof.com</li>
          <li>Visitando esta página en nuestro sitio web: /#contact</li>
        </ul>
      </article>
    </div>
  );
}
