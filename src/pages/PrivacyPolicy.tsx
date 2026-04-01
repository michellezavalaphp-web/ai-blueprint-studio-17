import SectionHeading from "@/components/SectionHeading";
import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-header">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="badge-tag mb-4">
              <ShieldCheck className="h-3 w-3" />
              {t("Legal", "Legal")}
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              {t("Privacy Policy", "Política de privacidad")}
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
            <h2>{t("1. Introduction", "1. Introducción")}</h2>
            <p>
              {t(
                'Agape Advisory Group LLC DBA Go AI Innovation ("Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
                'Agape Advisory Group LLC DBA Go AI Innovation ("Empresa," "nosotros," o "nuestro") respeta su privacidad y está comprometida a proteger su información personal. Esta Política de privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios.'
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
            <h2>{t("3. Information We Collect", "3. Información que recopilamos")}</h2>
            <p>{t("We may collect the following types of information:", "Podemos recopilar los siguientes tipos de información:")}</p>
            <h3>{t("Personal Information", "Información personal")}</h3>
            <ul>
              <li>{t("Name, email address, phone number", "Nombre, dirección de correo electrónico, número de teléfono")}</li>
              <li>{t("Company name and job title", "Nombre de la empresa y cargo")}</li>
              <li>{t("Information provided through contact forms and strategy session bookings", "Información proporcionada a través de formularios de contacto y reservas de sesiones estratégicas")}</li>
              <li>{t("Communication records when you contact us", "Registros de comunicación cuando nos contacta")}</li>
            </ul>
            <h3>{t("Automatically Collected Information", "Información recopilada automáticamente")}</h3>
            <ul>
              <li>{t("IP address and browser type", "Dirección IP y tipo de navegador")}</li>
              <li>{t("Device information and operating system", "Información del dispositivo y sistema operativo")}</li>
              <li>{t("Pages visited, time spent, and referring URLs", "Páginas visitadas, tiempo de permanencia y URLs de referencia")}</li>
              <li>{t("Cookies and similar tracking technologies", "Cookies y tecnologías de seguimiento similares")}</li>
            </ul>
          </div>

          <div className="prose-section">
            <h2>{t("4. How We Use Your Information", "4. Cómo usamos su información")}</h2>
            <p>{t("We use the information we collect to:", "Usamos la información que recopilamos para:")}</p>
            <ul>
              <li>{t("Provide, maintain, and improve our services", "Proporcionar, mantener y mejorar nuestros servicios")}</li>
              <li>{t("Respond to your inquiries and schedule consultations", "Responder a sus consultas y programar consultorías")}</li>
              <li>{t("Send relevant communications about our services (with your consent)", "Enviar comunicaciones relevantes sobre nuestros servicios (con su consentimiento)")}</li>
              <li>{t("Analyze website usage to improve user experience", "Analizar el uso del sitio web para mejorar la experiencia del usuario")}</li>
              <li>{t("Comply with legal obligations", "Cumplir con obligaciones legales")}</li>
              <li>{t("Protect against fraudulent or unauthorized activity", "Proteger contra actividad fraudulenta o no autorizada")}</li>
            </ul>
          </div>

          <div className="prose-section">
            <h2>{t("5. Information Sharing & Disclosure", "5. Compartir y divulgar información")}</h2>
            <p>{t("We do not sell, rent, or trade your personal information. We may share your information with:", "No vendemos, alquilamos ni intercambiamos su información personal. Podemos compartir su información con:")}</p>
            <ul>
              <li><strong>{t("Service Providers:", "Proveedores de servicios:")}</strong> {t("Third-party vendors who assist in operating our website and delivering services (e.g., hosting, analytics, CRM platforms)", "Proveedores externos que asisten en la operación de nuestro sitio web y la prestación de servicios (por ejemplo, alojamiento, análisis, plataformas CRM)")}</li>
              <li><strong>{t("Legal Requirements:", "Requisitos legales:")}</strong> {t("When required by law, regulation, or legal process", "Cuando sea requerido por ley, regulación o proceso legal")}</li>
              <li><strong>{t("Business Transfers:", "Transferencias comerciales:")}</strong> {t("In connection with a merger, acquisition, or sale of assets", "En conexión con una fusión, adquisición o venta de activos")}</li>
            </ul>
          </div>

          <div className="prose-section">
            <h2>{t("6. Cookies & Tracking Technologies", "6. Cookies y tecnologías de seguimiento")}</h2>
            <p>
              {t(
                "Our website uses cookies and similar technologies to enhance your browsing experience, analyze traffic, and personalize content. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.",
                "Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el tráfico y personalizar el contenido. Puede controlar las preferencias de cookies a través de la configuración de su navegador. Deshabilitar las cookies puede afectar ciertas funciones de nuestro sitio web."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("7. Third-Party Services", "7. Servicios de terceros")}</h2>
            <p>
              {t(
                "Our website may contain links to third-party websites or integrate third-party services (such as chat widgets, booking tools, and analytics). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.",
                "Nuestro sitio web puede contener enlaces a sitios web de terceros o integrar servicios de terceros (como widgets de chat, herramientas de reserva y análisis). No somos responsables de las prácticas de privacidad de estos terceros. Le recomendamos revisar sus políticas de privacidad."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("8. Data Security", "8. Seguridad de datos")}</h2>
            <p>
              {t(
                "We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
                "Implementamos medidas de seguridad administrativas, técnicas y físicas razonables para proteger su información personal. Sin embargo, ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro, y no podemos garantizar seguridad absoluta."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("9. Data Retention", "9. Retención de datos")}</h2>
            <p>
              {t(
                "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
                "Retenemos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta Política de privacidad, a menos que un período de retención más largo sea requerido o permitido por la ley."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("10. Your Rights", "10. Sus derechos")}</h2>
            <p>{t("Depending on your location, you may have the right to:", "Dependiendo de su ubicación, usted puede tener derecho a:")}</p>
            <ul>
              <li>{t("Access, correct, or delete your personal information", "Acceder, corregir o eliminar su información personal")}</li>
              <li>{t("Opt out of marketing communications", "Optar por no recibir comunicaciones de marketing")}</li>
              <li>{t("Request a copy of the data we hold about you", "Solicitar una copia de los datos que tenemos sobre usted")}</li>
              <li>{t("Withdraw consent where processing is based on consent", "Retirar el consentimiento cuando el procesamiento se base en el consentimiento")}</li>
            </ul>
            <p>
              {t("To exercise any of these rights, please contact us at", "Para ejercer cualquiera de estos derechos, contáctenos en")} <a href="mailto:contact@goaiinnovation.com" className="text-primary hover:underline">contact@goaiinnovation.com</a>.
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("11. Children's Privacy", "11. Privacidad de menores")}</h2>
            <p>
              {t(
                "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.",
                "Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos intencionalmente información personal de menores. Si cree que hemos recopilado información de un menor, contáctenos inmediatamente."
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("12. Changes to This Policy", "12. Cambios a esta política")}</h2>
            <p>
              {t(
                'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the revised policy.',
                'Podemos actualizar esta Política de privacidad de vez en cuando. Los cambios se publicarán en esta página con una fecha de "Última actualización" actualizada. Su uso continuado de nuestros servicios después de cualquier cambio constituye aceptación de la política revisada.'
              )}
            </p>
          </div>

          <div className="prose-section">
            <h2>{t("13. Contact Us", "13. Contáctenos")}</h2>
            <p>
              {t("If you have questions about this Privacy Policy, please contact us at:", "Si tiene preguntas sobre esta Política de privacidad, contáctenos en:")}<br />
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

export default PrivacyPolicy;
