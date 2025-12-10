import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Servicio',
  description: 'Lea los términos y condiciones de uso del sitio web de NovaRoof Solutions LLC.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container py-16 md:py-24">
      <article className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Términos de Servicio</h1>
        <p className="text-muted-foreground">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2 className="font-headline">1. Acuerdo de los Términos</h2>
        <p>
          Estos Términos de Servicio constituyen un acuerdo legalmente vinculante hecho entre usted, ya sea personalmente o en nombre de una entidad ("usted") y NovaRoof Solutions LLC ("Compañía", "nosotros", "nos" o "nuestro"), con respecto a su acceso y uso del sitio web [www.novaroof.com], así como cualquier otro medio, canal de medios, sitio web móvil o aplicación móvil relacionada, vinculada o conectada de otra manera al mismo (colectivamente, el "Sitio").
        </p>
        <p>
          Usted acepta que al acceder al Sitio, ha leído, entendido y aceptado estar sujeto a todos estos Términos de Servicio. SI NO ESTÁ DE ACUERDO CON TODOS ESTOS TÉRMINOS DE SERVICIO, ENTONCES SE LE PROHÍBE EXPRESAMENTE UTILIZAR EL SITIO Y DEBE DEJAR DE USARLO INMEDIATAMENTE.
        </p>

        <h2 className="font-headline">2. Propiedad Intelectual</h2>
        <p>
          A menos que se indique lo contrario, el Sitio es nuestra propiedad y todo el código fuente, bases de datos, funcionalidad, software, diseños de sitios web, audio, video, texto, fotografías y gráficos en el Sitio (colectivamente, el "Contenido") y las marcas comerciales, marcas de servicio y logotipos contenidos en él (las "Marcas") son de nuestra propiedad o están controlados por nosotros o se nos han licenciado, y están protegidos por las leyes de derechos de autor y marcas registradas.
        </p>

        <h2 className="font-headline">3. Representaciones del Usuario</h2>
        <p>
          Al usar el Sitio, usted declara y garantiza que: (1) toda la información de registro que envíe será verdadera, precisa, actual и completa; (2) mantendrá la exactitud de dicha información y la actualizará rápidamente según sea necesario; (3) tiene la capacidad legal y acepta cumplir con estos Términos de Servicio; (4) no accederá al Sitio a través de medios automatizados o no humanos, ya sea a través de un bot, script o de otra manera; (5) no utilizará el Sitio para ningún propósito ilegal o no autorizado.
        </p>

        <h2 className="font-headline">4. Ley Aplicable</h2>
        <p>
          Estos Términos se regirán e interpretarán de acuerdo con las leyes del estado en el que opera NovaRoof Solutions LLC, sin tener en cuenta sus disposiciones sobre conflicto de leyes.
        </p>
        
        <h2 className="font-headline">5. Contáctenos</h2>
        <p>
          Para resolver una queja sobre el Sitio o para recibir más información sobre el uso del Sitio, contáctenos en:
        </p>
        <ul>
          <li>Por correo electrónico: contacto@novaroof.com</li>
          <li>Visitando esta página en nuestro sitio web: /#contact</li>
        </ul>
      </article>
    </div>
  );
}
