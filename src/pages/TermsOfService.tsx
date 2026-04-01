import SectionHeading from "@/components/SectionHeading";
import { FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-header">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="badge-tag mb-4">
              <FileText className="h-3 w-3" />
              {t("Legal", "Legal")}
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              {t("Terms of Service", "Términos de servicio")}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              {t("Last updated: March 11, 2026", "Última actualización: 11 de marzo de 2026")}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl px-4 space-y-8">
          <div className="prose-section">
            <h2>{t("1. Agreement to Terms", "1. Aceptación de los términos")}</h2>
            <p>
              {t(
                'By accessing or using the website and services provided by Agape Advisory Group LLC DBA Go AI Innovation ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our services.',
                'Al acceder o utilizar el sitio web y los servicios proporcionados por Agape Advisory Group LLC DBA Go AI Innovation ("Empresa," "nosotros," o "nuestro"), usted acepta estar sujeto a estos Términos de servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a nuestros servicios.'
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("2. Company Information", "2. Información de la empresa")}</h2>
            <p>
              Agape Advisory Group LLC DBA Go AI Innovation<br />
              1110 Brickell Avenue #400K-105<br />
              Miami, FL 33131<br />
              {t("Email", "Correo")}: <a href="mailto:contact@goaiinnovation.com" className="text-primary hover:underline">contact@goaiinnovation.com</a><br />
              {t("Phone", "Teléfono")}: (786) 936-6937
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("3. Services", "3. Servicios")}</h2>
            <p>
              {t(
                "Go AI Innovation provides AI strategy consulting, workflow automation, AI implementation and integration services, and related digital tools. Our services are designed for organizations seeking to implement intelligent systems to improve operational efficiency.",
                "Go AI Innovation ofrece consultoría de estrategia de IA, automatización de flujos de trabajo, servicios de implementación e integración de IA y herramientas digitales relacionadas. Nuestros servicios están diseñados para organizaciones que buscan implementar sistemas inteligentes para mejorar la eficiencia operativa."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("4. Use of Our Services", "4. Uso de nuestros servicios")}</h2>
            <p>{t("You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:", "Usted acepta usar nuestros servicios solo para fines lícitos y de acuerdo con estos Términos. Acepta no:")}</p>
            <ul>
              <li>{t("Use our services in any way that violates applicable laws or regulations", "Usar nuestros servicios de cualquier manera que viole las leyes o regulaciones aplicables")}</li>
              <li>{t("Attempt to gain unauthorized access to any part of our services or systems", "Intentar obtener acceso no autorizado a cualquier parte de nuestros servicios o sistemas")}</li>
              <li>{t("Use our services to transmit harmful, offensive, or unlawful content", "Usar nuestros servicios para transmitir contenido dañino, ofensivo o ilegal")}</li>
              <li>{t("Reproduce, duplicate, or exploit any portion of our services without express written permission", "Reproducir, duplicar o explotar cualquier parte de nuestros servicios sin permiso expreso por escrito")}</li>
            </ul>
          </div>

          <div className="prose-section">
            <h2>{t("5. Intellectual Property", "5. Propiedad intelectual")}</h2>
            <p>
              {t(
                "All content, features, and functionality on our website — including but not limited to the Time Reclaimed™ Framework, text, graphics, logos, and software — are the exclusive property of Agape Advisory Group LLC DBA Go AI Innovation and are protected by copyright, trademark, and other intellectual property laws.",
                "Todo el contenido, características y funcionalidad de nuestro sitio web — incluyendo pero no limitado al marco Time Reclaimed™, texto, gráficos, logotipos y software — son propiedad exclusiva de Agape Advisory Group LLC DBA Go AI Innovation y están protegidos por leyes de derechos de autor, marcas registradas y otras leyes de propiedad intelectual."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("6. Consultations & Strategy Sessions", "6. Consultas y sesiones estratégicas")}</h2>
            <p>
              {t(
                "Free AI Strategy Sessions are offered at the Company's discretion. Scheduling a session does not constitute a binding agreement for ongoing services. Any paid engagements will be governed by separate service agreements.",
                "Las sesiones estratégicas de IA gratuitas se ofrecen a discreción de la Empresa. Programar una sesión no constituye un acuerdo vinculante para servicios continuos. Cualquier compromiso pagado será regido por acuerdos de servicio separados."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("7. Disclaimer of Warranties", "7. Descargo de garantías")}</h2>
            <p>
              {t(
                'Our services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or that results from our consulting services will achieve specific outcomes.',
                'Nuestros servicios se proporcionan "tal cual" y "según disponibilidad" sin garantías de ningún tipo, ya sean expresas o implícitas. No garantizamos que nuestros servicios serán ininterrumpidos, libres de errores o que los resultados de nuestros servicios de consultoría lograrán resultados específicos.'
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("8. Limitation of Liability", "8. Limitación de responsabilidad")}</h2>
            <p>
              {t(
                "To the fullest extent permitted by law, Agape Advisory Group LLC DBA Go AI Innovation shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities arising from your use of our services.",
                "En la máxima medida permitida por la ley, Agape Advisory Group LLC DBA Go AI Innovation no será responsable por ningún daño indirecto, incidental, especial, consecuente o punitivo, incluyendo pero no limitado a pérdida de beneficios, datos u oportunidades de negocio que surjan del uso de nuestros servicios."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("9. Indemnification", "9. Indemnización")}</h2>
            <p>
              {t(
                "You agree to indemnify and hold harmless Agape Advisory Group LLC DBA Go AI Innovation, its officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising from your use of our services or violation of these Terms.",
                "Usted acepta indemnizar y mantener indemne a Agape Advisory Group LLC DBA Go AI Innovation, sus funcionarios, directores, empleados y agentes de cualquier reclamo, responsabilidad, daño o gasto que surja de su uso de nuestros servicios o violación de estos Términos."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("10. Governing Law", "10. Ley aplicable")}</h2>
            <p>
              {t(
                "These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts located in Broward County, Florida.",
                "Estos Términos se regirán e interpretarán de acuerdo con las leyes del Estado de Florida, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa se resolverá en los tribunales ubicados en el condado de Miami-Dade, Florida."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("11. Changes to These Terms", "11. Cambios a estos términos")}</h2>
            <p>
              {t(
                "We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new Terms.",
                "Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en nuestro sitio web. Su uso continuado de nuestros servicios después de cualquier cambio constituye aceptación de los nuevos Términos."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("12. Contact Us", "12. Contáctenos")}</h2>
            <p>
              {t("If you have questions about these Terms, please contact us at:", "Si tiene preguntas sobre estos Términos, contáctenos en:")}<br />
              {t("Email", "Correo")}: <a href="mailto:contact@goaiinnovation.com" className="text-primary hover:underline">contact@goaiinnovation.com</a><br />
              {t("Phone", "Teléfono")}: (786) 936-6937<br />
              {t("Address", "Dirección")}: 1110 Brickell Avenue #400K-105, Miami, FL 33131
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
