import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User } from '@supabase/supabase-js';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const checkRole = async (u: User | null) => {
    if (u) {
      const { data } = await supabase.from('user_roles').select('role').eq('user_id', u.id);
      setIsAdmin(data?.some(r => r.role === 'admin') ?? false);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    // Set up listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_, session) => {
      if (!mounted) return;
      const u = session?.user ?? null;
      setUser(u);
      await checkRole(u);
      setLoading(false);
    });

    // Then get initial session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!mounted) return;
      const u = session?.user ?? null;
      setUser(u);
      await checkRole(u);
      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signOut = () => supabase.auth.signOut();

  return { user, loading, isAdmin, signOut };
}
