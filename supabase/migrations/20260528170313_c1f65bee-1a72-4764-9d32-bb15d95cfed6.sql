
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

-- Blog posts
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  category_key TEXT NOT NULL,
  category_en TEXT NOT NULL,
  category_es TEXT NOT NULL,
  title_en TEXT NOT NULL,
  title_es TEXT NOT NULL,
  excerpt_en TEXT NOT NULL,
  excerpt_es TEXT NOT NULL,
  content_en TEXT NOT NULL DEFAULT '',
  content_es TEXT NOT NULL DEFAULT '',
  cover_image_url TEXT,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  read_time INT NOT NULL DEFAULT 5,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.blog_posts TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.blog_posts TO authenticated;
GRANT ALL ON public.blog_posts TO service_role;

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read posts" ON public.blog_posts
  FOR SELECT USING (true);

CREATE POLICY "Admins insert posts" ON public.blog_posts
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update posts" ON public.blog_posts
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete posts" ON public.blog_posts
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE TRIGGER blog_posts_touch BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Seed posts
INSERT INTO public.blog_posts (slug, category_key, category_en, category_es, title_en, title_es, excerpt_en, excerpt_es, content_en, content_es, date, read_time, featured) VALUES
('5-signs-your-business-is-ready-for-ai', 'ai-strategy', 'AI Strategy', 'Estrategia de IA',
 '5 Signs Your Business Is Ready for AI (And What to Do First)',
 '5 Señales de Que Tu Negocio Está Listo para la IA (Y Qué Hacer Primero)',
 'Not sure if your business is ready for AI? Here are 5 clear signs it''s time — plus exactly where to start.',
 '¿No estás seguro si tu negocio está listo para la IA? Aquí hay 5 señales claras de que es hora — y exactamente por dónde empezar.',
 E'Every week I talk to small business owners who ask me the same question: ''Am I ready for AI?'' Here''s the honest answer: if you''re asking the question, you''re probably already behind. But the good news? Catching up is faster than you think.\n\nAI in 2026 isn''t what you think it is. It''s not robots. It''s not science fiction. It''s not a million-dollar investment. It''s software that does the boring stuff so you can focus on the work that actually matters.\n\nSign 1: You''re Spending Hours on Tasks That Feel Repetitive. If you catch yourself doing the same task more than three times a week — writing the same follow-up email, manually entering data, copying information between apps — that''s your first sign. The average small business owner spends 13 hours a week on tasks AI could handle. What to do: Pick the most repetitive task on your plate this week. Write down exactly what you do, step by step. That''s your first AI workflow waiting to happen.\n\nSign 2: You''re Losing Leads Because You Can''t Follow Up Fast Enough. If a lead has to wait more than 5 minutes for a response, you''ve already lost them to someone faster. AI agents can follow up instantly — personalized, professional, 24/7. What to do: Check your average response time to new leads. If it''s more than 30 minutes, an AI agent could transform your pipeline overnight.\n\nSign 3: You''ve Got More Ideas Than Hours. You know exactly what you''d do to grow your business — if you had the time. 57% of U.S. small businesses are now investing in AI, and the #1 reason? Getting time back for higher-value work. What to do: Write down the top 3 things you''d work on if you had 10 extra hours a week. That''s your AI ROI waiting to be unlocked.\n\nSign 4: You''re Worried AI Will Make Your Business Feel Impersonal. This one might surprise you — but this fear is actually a sign you''re READY. AI doesn''t replace the human touch. It gives you MORE time for it. What to do: Identify the tasks that DON''T require your personal touch. Those are the ones AI should handle.\n\nSign 5: Your Competitors Are Already Using AI. 68% of U.S. companies with 10-100 employees now use AI regularly. But catching up doesn''t mean doing everything at once. It means doing ONE thing well. What to do: Take the free AI Audit Checklist. It takes 5 minutes and shows you exactly where to start.\n\nYou don''t need a tech background to use AI. You don''t need a big budget. You need one thing: clarity on where AI fits in YOUR business. Now go — it''s time to reclaim yours.',
 E'Cada semana hablo con dueños de pequeños negocios que me hacen la misma pregunta: ''¿Estoy listo para la IA?'' La respuesta honesta: si estás haciendo la pregunta, probablemente ya estás atrasado. Pero la buena noticia es que ponerte al día es más rápido de lo que piensas.\n\nLa IA en 2026 no es lo que piensas. No son robots. No es ciencia ficción. No es una inversión de un millón de dólares. Es software que hace las tareas aburridas para que tú puedas enfocarte en el trabajo que realmente importa.\n\nSeñal 1: Pasas horas en tareas que se sienten repetitivas. Si te encuentras haciendo la misma tarea más de tres veces a la semana, esa es tu primera señal. El dueño promedio pasa 13 horas a la semana en tareas que la IA podría manejar. Qué hacer: Escoge la tarea más repetitiva y escribe exactamente qué haces, paso a paso.\n\nSeñal 2: Estás perdiendo leads porque no puedes dar seguimiento lo suficientemente rápido. Los agentes de IA pueden dar seguimiento al instante — personalizado, profesional, 24/7. Qué hacer: Revisa tu tiempo promedio de respuesta a nuevos leads.\n\nSeñal 3: Tienes más ideas que horas. El 57% de los pequeños negocios en EE.UU. ya están invirtiendo en IA. Qué hacer: Escribe las 3 cosas principales en las que trabajarías si tuvieras 10 horas extra a la semana.\n\nSeñal 4: Te preocupa que la IA haga tu negocio impersonal. La IA no reemplaza el toque humano. Te da MÁS tiempo para él. Qué hacer: Identifica las tareas que NO requieren tu toque personal.\n\nSeñal 5: Tus competidores ya están usando IA. El 68% de las empresas con 10-100 empleados ya usan IA regularmente. Qué hacer: Toma el Checklist gratuito de Auditoría de IA.\n\nNo necesitas un trasfondo técnico para usar IA. No necesitas un gran presupuesto. Necesitas claridad sobre dónde encaja la IA en TU negocio. Ahora ve — es hora de reclamarlo.',
 '2026-05-05', 7, true),

('ai-is-an-operations-conversation', 'ai-strategy', 'AI Strategy', 'Estrategia de IA',
 'Why AI Is an Operations Conversation, Not a Tool Conversation',
 'Por qué la IA es una conversación de operaciones, no de herramientas',
 'Most businesses do not need more tools. They need smarter systems that reduce overwhelm and improve execution.',
 'La mayoría de los negocios no necesitan más herramientas. Necesitan sistemas más inteligentes que reduzcan la sobrecarga y mejoren la ejecución.',
 E'When leaders ask about AI, they often start with the wrong question: "Which tool should we buy?" The right question is operational: where in our business are we losing time, attention, or revenue?\n\nAI delivers transformation when it is applied to systems, not stacked on top of them. A new tool inside a broken process simply accelerates the dysfunction.\n\nThe organizations that win with AI are the ones that audit their workflows first, identify the highest-leverage points, and then deploy AI to remove friction at those exact points.\n\nOperations is the conversation. Tools are the output.',
 E'Cuando los líderes preguntan sobre IA, suelen empezar con la pregunta equivocada: "¿Qué herramienta deberíamos comprar?". La pregunta correcta es operativa: ¿dónde estamos perdiendo tiempo, atención o ingresos?\n\nLa IA genera transformación cuando se aplica a los sistemas, no encima de ellos. Una nueva herramienta dentro de un proceso roto simplemente acelera la disfunción.\n\nLas organizaciones que ganan con IA son las que primero auditan sus flujos de trabajo, identifican los puntos de mayor apalancamiento y luego despliegan IA para eliminar la fricción en esos puntos exactos.\n\nLas operaciones son la conversación. Las herramientas son el resultado.',
 '2026-04-22', 5, true),

('how-businesses-lose-leads', 'automation-systems', 'Automation & Systems', 'Automatización y Sistemas',
 'How Businesses Lose Leads Without Realizing It',
 'Cómo las empresas pierden clientes potenciales sin darse cuenta',
 'Missed calls, slow follow-ups, and disconnected workflows quietly cost businesses revenue every single day.',
 'Llamadas perdidas, seguimientos lentos y flujos de trabajo desconectados cuestan ingresos a las empresas cada día.',
 E'Every business has a leak. Most leaders never see it because the lost revenue never shows up on a report — it simply never arrives.\n\nMissed calls during peak hours, follow-ups that take 24+ hours, lead forms that never reach a salesperson — these silent failures compound into six and seven figures of lost annual revenue.\n\nAutomation closes the leak. AI agents respond instantly, route inquiries to the right person, and ensure no opportunity sits idle.\n\nThe first step is visibility. Map every touchpoint where a lead enters your business and measure response time. The gaps will surprise you.',
 E'Toda empresa tiene una fuga. La mayoría de los líderes nunca la ven porque los ingresos perdidos nunca aparecen en un informe — simplemente nunca llegan.\n\nLlamadas perdidas en horas pico, seguimientos que toman más de 24 horas, formularios que nunca llegan a un vendedor — estos fallos silenciosos se acumulan en seis y siete cifras de ingresos anuales perdidos.\n\nLa automatización cierra la fuga. Los agentes de IA responden al instante, dirigen las consultas a la persona correcta y aseguran que ninguna oportunidad quede inactiva.\n\nEl primer paso es la visibilidad. Mapea cada punto de contacto donde entra un cliente potencial y mide el tiempo de respuesta. Los vacíos te sorprenderán.',
 '2026-04-15', 6, false),

('what-an-ai-agent-can-do', 'ai-agents', 'AI Agents', 'Agentes de IA',
 'What an AI Agent Can Actually Do for Your Business',
 'Lo que un agente de IA realmente puede hacer por tu negocio',
 'AI agents can help answer questions, qualify leads, schedule appointments, and support daily operations.',
 'Los agentes de IA pueden responder preguntas, calificar leads, agendar citas y apoyar las operaciones diarias.',
 E'An AI agent is not a chatbot. It is a digital team member that can hold context, take action, and operate inside your existing systems.\n\nIn practice, agents handle inbound questions 24/7, qualify leads against your criteria, book appointments directly into calendars, and trigger workflows in your CRM — all without human intervention.\n\nThe result is a business that moves faster, captures more opportunities, and frees your team to focus on the work only humans can do.\n\nAgents are not the future. They are the present operating advantage.',
 E'Un agente de IA no es un chatbot. Es un miembro digital del equipo que puede mantener el contexto, tomar acción y operar dentro de tus sistemas existentes.\n\nEn la práctica, los agentes manejan preguntas entrantes 24/7, califican leads según tus criterios, agendan citas directamente en los calendarios y activan flujos de trabajo en tu CRM — todo sin intervención humana.\n\nEl resultado es un negocio que se mueve más rápido, captura más oportunidades y libera a tu equipo para enfocarse en el trabajo que solo los humanos pueden hacer.\n\nLos agentes no son el futuro. Son la ventaja operativa del presente.',
 '2026-04-08', 5, false);

-- Storage bucket for cover images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-covers', 'blog-covers', true);

CREATE POLICY "Public read blog covers" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-covers');

CREATE POLICY "Admins upload blog covers" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'blog-covers' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update blog covers" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'blog-covers' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete blog covers" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'blog-covers' AND public.has_role(auth.uid(), 'admin'));
