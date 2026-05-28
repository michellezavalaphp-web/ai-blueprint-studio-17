
-- Fix function search_path
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY INVOKER SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

-- Drop overly permissive public read on storage.objects for blog-covers (public bucket serves files via CDN without listing rights)
DROP POLICY IF EXISTS "Public read blog covers" ON storage.objects;

-- Restrict has_role execute to definer; RLS will still work via SECURITY DEFINER context but no direct calls
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon, authenticated, public;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO postgres, service_role;
