import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Conozca cómo NovaRoof Solutions LLC recopila, usa y protege su información personal.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-16 md:py-24">
      <article className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Política de Privacidad</h1>
        <p className="text-muted-foreground">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>
          NovaRoof Solutions LLC ("nosotros", "nuestro" o "la Compañía") se compromete a proteger la privacidad de sus usuarios. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web [www.novaroof.com], incluyendo cualquier otro formato de medios, canal de medios, sitio web móvil o aplicación móvil relacionada o conectada al mismo (colectivamente, el "Sitio").
        </p>
        <p>
          Le rogamos que lea atentamente esta política de privacidad. Si no está de acuerdo con los términos de esta política de privacidad, por favor no acceda al sitio.
        </p>

        <h2 className="font-headline">Recopilación de su Información</h2>
        <p>
          Podemos recopilar información sobre usted de varias maneras. La información que podemos recopilar en el Sitio incluye:
        </p>
        <h3 className="font-headline">Datos Personales</h3>
        <p>
          Información de identificación personal, como su nombre, dirección de correo electrónico y número de teléfono, que usted nos proporciona voluntariamente cuando se registra en el Sitio o cuando elige participar en diversas actividades relacionadas con el Sitio, como formularios de contacto y boletines informativos.
        </p>

        <h2 className="font-headline">Uso de su Información</h2>
        <p>
          Tener información precisa sobre usted nos permite ofrecerle una experiencia fluida, eficiente y personalizada. Específicamente, podemos usar la información recopilada sobre usted a través del Sitio para:
        </p>
        <ul>
          <li>Crear y gestionar su cuenta.</li>
          <li>Enviarle un correo electrónico con respecto a su cuenta o pedido.</li>
          <li>Responder a sus solicitudes de servicio y soporte.</li>
          <li>Solicitar comentarios y contactarlo sobre su uso del Sitio.</li>
          <li>Enviarle un boletín informativo.</li>
        </ul>

        <h2 className="font-headline">Seguridad de su Información</h2>
        <p>
          Utilizamos medidas de seguridad administrativas, técnicas y físicas para ayudar a proteger su información personal. Si bien hemos tomado medidas razonables para proteger la información personal que nos proporciona, tenga en cuenta que a pesar de nuestros esfuerzos, ninguna medida de seguridad es perfecta o impenetrable, y no se puede garantizar ningún método de transmisión de datos contra cualquier intercepción u otro tipo de uso indebido.
        </p>
        <h2 className="font-headline">Contáctenos</h2>
        <p>
          Si tiene alguna pregunta o comentario sobre esta Política de Privacidad, por favor contáctenos en:
        </p>
        <ul>
          <li>Por correo electrónico: contacto@novaroof.com</li>
          <li>Visitando esta página en nuestro sitio web: /#contact</li>
        </ul>
      </article>
    </div>
  );
}
