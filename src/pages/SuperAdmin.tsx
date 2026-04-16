import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LogOut, Trash2, Users, Wallet } from 'lucide-react';

const SUPER_ADMIN_EMAIL = 'vt@admin.com';

interface UserProfile {
  user_id: string;
  display_name: string | null;
  balance: number;
  created_at: string;
}

export default function SuperAdmin() {
  const { user, loading, signOut } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [taskCount, setTaskCount] = useState(0);

  const isSuperAdmin = user?.email === SUPER_ADMIN_EMAIL;

  useEffect(() => {
    if (isSuperAdmin) {
      loadData();
    }
  }, [isSuperAdmin]);

  const loadData = async () => {
    const [{ data: profilesData }, { count }] = await Promise.all([
      supabase.from('profiles').select('user_id, display_name, balance, created_at').order('created_at', { ascending: false }),
      supabase.from('tasks').select('*', { count: 'exact', head: true }),
    ]);
    setProfiles(profilesData ?? []);
    setTaskCount(count ?? 0);
  };

  const deleteAllTasks = async () => {
    if (!confirm('Удалить ВСЕ задания? Это действие необратимо.')) return;
    await supabase.from('tasks').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    loadData();
    toast({ title: 'Все задания удалены' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (err: any) {
      toast({ title: 'Ошибка', description: err.message, variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user || !isSuperAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
            <h1 className="text-2xl font-black text-foreground mb-1">Супер-Админ</h1>
            <p className="text-muted-foreground text-sm mb-6">Полный контроль системы</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
              <Input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
              <Button type="submit" className="w-full font-bold" disabled={submitting}>
                {submitting ? 'Загрузка...' : 'Войти'}
              </Button>
            </form>
            {user && !isSuperAdmin && (
              <div className="mt-4 text-center">
                <p className="text-destructive text-sm font-semibold mb-2">Нет доступа</p>
                <button onClick={signOut} className="text-sm text-primary font-semibold underline">Выйти</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const totalBalance = profiles.reduce((sum, p) => sum + p.balance, 0);

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col">
      <header className="bg-card border-b border-border p-5 sticky top-0 z-30 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h1 className="text-xl font-black text-foreground">Супер-Админ</h1>
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Полный контроль</p>
          </div>
          <button onClick={signOut} className="p-2 bg-destructive/10 text-destructive rounded-full">
            <LogOut size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-primary/10 rounded-2xl p-3 text-center">
            <Users size={18} className="text-primary mx-auto mb-1" />
            <p className="text-lg font-black text-primary">{profiles.length}</p>
            <p className="text-[8px] font-black text-muted-foreground uppercase">Людей</p>
          </div>
          <div className="bg-accent/10 rounded-2xl p-3 text-center">
            <Wallet size={18} className="text-accent mx-auto mb-1" />
            <p className="text-lg font-black text-accent">{totalBalance}₽</p>
            <p className="text-[8px] font-black text-muted-foreground uppercase">Общий баланс</p>
          </div>
          <div className="bg-warning/10 rounded-2xl p-3 text-center">
            <p className="text-lg font-black text-warning">{taskCount}</p>
            <p className="text-[8px] font-black text-muted-foreground uppercase">Заданий</p>
          </div>
        </div>
      </header>

      <main className="p-4 space-y-3">
        {/* Delete all tasks */}
        <Button onClick={deleteAllTasks} variant="destructive" className="w-full font-black uppercase gap-2 rounded-2xl h-12">
          <Trash2 size={18} /> Удалить все задания ({taskCount})
        </Button>

        {/* User list */}
        <h2 className="text-sm font-black text-foreground uppercase tracking-widest pt-2">Все пользователи</h2>
        {profiles.map(p => (
          <div key={p.user_id} className="bg-card p-4 rounded-2xl border border-border shadow-sm flex justify-between items-center">
            <div>
              <p className="font-black text-foreground text-sm">{p.display_name || 'Без имени'}</p>
              <p className="text-[9px] text-muted-foreground font-bold">
                Регистрация: {new Date(p.created_at).toLocaleDateString('ru-RU')}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-black text-accent">{p.balance}₽</p>
              <p className="text-[8px] font-black text-muted-foreground uppercase">Баланс</p>
            </div>
          </div>
        ))}
        {profiles.length === 0 && (
          <p className="text-center text-muted-foreground py-12">Нет зарегистрированных пользователей</p>
        )}
      </main>
    </div>
  );
}
