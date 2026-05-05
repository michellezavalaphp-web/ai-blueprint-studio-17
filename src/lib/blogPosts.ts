export type BlogPost = {
  slug: string;
  category: { en: string; es: string };
  categoryKey: string;
  title: { en: string; es: string };
  excerpt: { en: string; es: string };
  content: { en: string[]; es: string[] };
  date: string;
  readTime: number;
  featured?: boolean;
};

export const CATEGORIES = [
  { key: "ai-strategy", en: "AI Strategy", es: "Estrategia de IA" },
  { key: "automation-systems", en: "Automation & Systems", es: "Automatización y Sistemas" },
  { key: "ai-agents", en: "AI Agents", es: "Agentes de IA" },
  { key: "industry-insights", en: "Industry Insights", es: "Perspectivas de la Industria" },
  { key: "case-studies", en: "Case Studies", es: "Casos de Estudio" },
  { key: "time-reclaimed", en: "Time Reclaimed™", es: "Tiempo Recuperado™" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-is-an-operations-conversation",
    categoryKey: "ai-strategy",
    category: { en: "AI Strategy", es: "Estrategia de IA" },
    title: {
      en: "Why AI Is an Operations Conversation, Not a Tool Conversation",
      es: "Por qué la IA es una conversación de operaciones, no de herramientas",
    },
    excerpt: {
      en: "Most businesses do not need more tools. They need smarter systems that reduce overwhelm and improve execution.",
      es: "La mayoría de los negocios no necesitan más herramientas. Necesitan sistemas más inteligentes que reduzcan la sobrecarga y mejoren la ejecución.",
    },
    content: {
      en: [
        "When leaders ask about AI, they often start with the wrong question: \"Which tool should we buy?\" The right question is operational: where in our business are we losing time, attention, or revenue?",
        "AI delivers transformation when it is applied to systems, not stacked on top of them. A new tool inside a broken process simply accelerates the dysfunction.",
        "The organizations that win with AI are the ones that audit their workflows first, identify the highest-leverage points, and then deploy AI to remove friction at those exact points.",
        "Operations is the conversation. Tools are the output.",
      ],
      es: [
        "Cuando los líderes preguntan sobre IA, suelen empezar con la pregunta equivocada: \"¿Qué herramienta deberíamos comprar?\". La pregunta correcta es operativa: ¿dónde estamos perdiendo tiempo, atención o ingresos?",
        "La IA genera transformación cuando se aplica a los sistemas, no encima de ellos. Una nueva herramienta dentro de un proceso roto simplemente acelera la disfunción.",
        "Las organizaciones que ganan con IA son las que primero auditan sus flujos de trabajo, identifican los puntos de mayor apalancamiento y luego despliegan IA para eliminar la fricción en esos puntos exactos.",
        "Las operaciones son la conversación. Las herramientas son el resultado.",
      ],
    },
    date: "2026-04-22",
    readTime: 5,
    featured: true,
  },
  {
    slug: "how-businesses-lose-leads",
    categoryKey: "automation-systems",
    category: { en: "Automation & Systems", es: "Automatización y Sistemas" },
    title: {
      en: "How Businesses Lose Leads Without Realizing It",
      es: "Cómo las empresas pierden clientes potenciales sin darse cuenta",
    },
    excerpt: {
      en: "Missed calls, slow follow-ups, and disconnected workflows quietly cost businesses revenue every single day.",
      es: "Llamadas perdidas, seguimientos lentos y flujos de trabajo desconectados cuestan ingresos a las empresas cada día.",
    },
    content: {
      en: [
        "Every business has a leak. Most leaders never see it because the lost revenue never shows up on a report — it simply never arrives.",
        "Missed calls during peak hours, follow-ups that take 24+ hours, lead forms that never reach a salesperson — these silent failures compound into six and seven figures of lost annual revenue.",
        "Automation closes the leak. AI agents respond instantly, route inquiries to the right person, and ensure no opportunity sits idle.",
        "The first step is visibility. Map every touchpoint where a lead enters your business and measure response time. The gaps will surprise you.",
      ],
      es: [
        "Toda empresa tiene una fuga. La mayoría de los líderes nunca la ven porque los ingresos perdidos nunca aparecen en un informe — simplemente nunca llegan.",
        "Llamadas perdidas en horas pico, seguimientos que toman más de 24 horas, formularios que nunca llegan a un vendedor — estos fallos silenciosos se acumulan en seis y siete cifras de ingresos anuales perdidos.",
        "La automatización cierra la fuga. Los agentes de IA responden al instante, dirigen las consultas a la persona correcta y aseguran que ninguna oportunidad quede inactiva.",
        "El primer paso es la visibilidad. Mapea cada punto de contacto donde entra un cliente potencial y mide el tiempo de respuesta. Los vacíos te sorprenderán.",
      ],
    },
    date: "2026-04-15",
    readTime: 6,
  },
  {
    slug: "what-an-ai-agent-can-do",
    categoryKey: "ai-agents",
    category: { en: "AI Agents", es: "Agentes de IA" },
    title: {
      en: "What an AI Agent Can Actually Do for Your Business",
      es: "Lo que un agente de IA realmente puede hacer por tu negocio",
    },
    excerpt: {
      en: "AI agents can help answer questions, qualify leads, schedule appointments, and support daily operations.",
      es: "Los agentes de IA pueden responder preguntas, calificar leads, agendar citas y apoyar las operaciones diarias.",
    },
    content: {
      en: [
        "An AI agent is not a chatbot. It is a digital team member that can hold context, take action, and operate inside your existing systems.",
        "In practice, agents handle inbound questions 24/7, qualify leads against your criteria, book appointments directly into calendars, and trigger workflows in your CRM — all without human intervention.",
        "The result is a business that moves faster, captures more opportunities, and frees your team to focus on the work only humans can do.",
        "Agents are not the future. They are the present operating advantage.",
      ],
      es: [
        "Un agente de IA no es un chatbot. Es un miembro digital del equipo que puede mantener el contexto, tomar acción y operar dentro de tus sistemas existentes.",
        "En la práctica, los agentes manejan preguntas entrantes 24/7, califican leads según tus criterios, agendan citas directamente en los calendarios y activan flujos de trabajo en tu CRM — todo sin intervención humana.",
        "El resultado es un negocio que se mueve más rápido, captura más oportunidades y libera a tu equipo para enfocarse en el trabajo que solo los humanos pueden hacer.",
        "Los agentes no son el futuro. Son la ventaja operativa del presente.",
      ],
    },
    date: "2026-04-08",
    readTime: 5,
  },
];
