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
  { key: "industry-insights", en: "Industry Blog", es: "Blog de la Industria" },
  { key: "case-studies", en: "Case Studies", es: "Casos de Estudio" },
  { key: "time-reclaimed", en: "Time Reclaimed™", es: "Tiempo Recuperado™" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "5-signs-your-business-is-ready-for-ai",
    categoryKey: "ai-strategy",
    category: { en: "AI Strategy", es: "Estrategia de IA" },
    title: {
      en: "5 Signs Your Business Is Ready for AI (And What to Do First)",
      es: "5 Señales de Que Tu Negocio Está Listo para la IA (Y Qué Hacer Primero)",
    },
    excerpt: {
      en: "Not sure if your business is ready for AI? Here are 5 clear signs it's time — plus exactly where to start.",
      es: "¿No estás seguro si tu negocio está listo para la IA? Aquí hay 5 señales claras de que es hora — y exactamente por dónde empezar.",
    },
    content: {
      en: [
        "Every week I talk to small business owners who ask me the same question: 'Am I ready for AI?' Here's the honest answer: if you're asking the question, you're probably already behind. But the good news? Catching up is faster than you think.",
        "AI in 2026 isn't what you think it is. It's not robots. It's not science fiction. It's not a million-dollar investment. It's software that does the boring stuff so you can focus on the work that actually matters.",
        "Sign 1: You're Spending Hours on Tasks That Feel Repetitive. If you catch yourself doing the same task more than three times a week — writing the same follow-up email, manually entering data, copying information between apps — that's your first sign. The average small business owner spends 13 hours a week on tasks AI could handle. What to do: Pick the most repetitive task on your plate this week. Write down exactly what you do, step by step. That's your first AI workflow waiting to happen.",
        "Sign 2: You're Losing Leads Because You Can't Follow Up Fast Enough. If a lead has to wait more than 5 minutes for a response, you've already lost them to someone faster. AI agents can follow up instantly — personalized, professional, 24/7. What to do: Check your average response time to new leads. If it's more than 30 minutes, an AI agent could transform your pipeline overnight.",
        "Sign 3: You've Got More Ideas Than Hours. You know exactly what you'd do to grow your business — if you had the time. 57% of U.S. small businesses are now investing in AI, and the #1 reason? Getting time back for higher-value work. What to do: Write down the top 3 things you'd work on if you had 10 extra hours a week. That's your AI ROI waiting to be unlocked.",
        "Sign 4: You're Worried AI Will Make Your Business Feel Impersonal. This one might surprise you — but this fear is actually a sign you're READY. AI doesn't replace the human touch. It gives you MORE time for it. What to do: Identify the tasks that DON'T require your personal touch. Those are the ones AI should handle.",
        "Sign 5: Your Competitors Are Already Using AI. 68% of U.S. companies with 10-100 employees now use AI regularly. But catching up doesn't mean doing everything at once. It means doing ONE thing well. What to do: Take the free AI Audit Checklist. It takes 5 minutes and shows you exactly where to start.",
        "You don't need a tech background to use AI. You don't need a big budget. You need one thing: clarity on where AI fits in YOUR business. Now go — it's time to reclaim yours.",
      ],
      es: [
        "Cada semana hablo con dueños de pequeños negocios que me hacen la misma pregunta: '¿Estoy listo para la IA?' La respuesta honesta: si estás haciendo la pregunta, probablemente ya estás atrasado. Pero la buena noticia es que ponerte al día es más rápido de lo que piensas.",
        "La IA en 2026 no es lo que piensas. No son robots. No es ciencia ficción. No es una inversión de un millón de dólares. Es software que hace las tareas aburridas para que tú puedas enfocarte en el trabajo que realmente importa.",
        "Señal 1: Pasas horas en tareas que se sienten repetitivas. Si te encuentras haciendo la misma tarea más de tres veces a la semana, esa es tu primera señal. El dueño promedio pasa 13 horas a la semana en tareas que la IA podría manejar. Qué hacer: Escoge la tarea más repetitiva y escribe exactamente qué haces, paso a paso.",
        "Señal 2: Estás perdiendo leads porque no puedes dar seguimiento lo suficientemente rápido. Los agentes de IA pueden dar seguimiento al instante — personalizado, profesional, 24/7. Qué hacer: Revisa tu tiempo promedio de respuesta a nuevos leads.",
        "Señal 3: Tienes más ideas que horas. El 57% de los pequeños negocios en EE.UU. ya están invirtiendo en IA. Qué hacer: Escribe las 3 cosas principales en las que trabajarías si tuvieras 10 horas extra a la semana.",
        "Señal 4: Te preocupa que la IA haga tu negocio impersonal. La IA no reemplaza el toque humano. Te da MÁS tiempo para él. Qué hacer: Identifica las tareas que NO requieren tu toque personal.",
        "Señal 5: Tus competidores ya están usando IA. El 68% de las empresas con 10-100 empleados ya usan IA regularmente. Qué hacer: Toma el Checklist gratuito de Auditoría de IA.",
        "No necesitas un trasfondo técnico para usar IA. No necesitas un gran presupuesto. Necesitas claridad sobre dónde encaja la IA en TU negocio. Ahora ve — es hora de reclamarlo.",
      ],
    },
    date: "2026-05-05",
    readTime: 7,
    featured: true,
  },
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
