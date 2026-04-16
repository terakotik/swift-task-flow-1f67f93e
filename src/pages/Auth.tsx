import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Play, Shield } from 'lucide-react';

interface AuthProps {
  onDemo?: () => void;
}

export default function Auth({ onDemo }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        toast({ title: 'Регистрация успешна', description: 'Проверьте почту для подтверждения' });
      }
    } catch (err: any) {
      toast({ title: 'Ошибка', description: err.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const loginAsAdmin = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: 'igor@admin.com',
        password: 'igor123',
      });
      if (error) throw error;
    } catch (err: any) {
      toast({ title: 'Ошибка', description: 'Сначала зарегистрируйте админа: igor@admin.com / igor123', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-4">
        <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
          <h1 className="text-2xl font-black text-foreground mb-1">
            {isLogin ? 'Вход' : 'Регистрация'}
          </h1>
          <p className="text-muted-foreground text-sm mb-6">Система управления заказами</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <Button type="submit" className="w-full font-bold" disabled={loading}>
              {loading ? 'Загрузка...' : isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </form>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-center text-sm text-primary mt-4 font-semibold"
          >
            {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Есть аккаунт? Войти'}
          </button>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={onDemo}
            variant="outline"
            className="flex-1 font-bold gap-2 rounded-2xl h-14"
          >
            <Play size={18} />
            Демо
          </Button>
          <Button
            onClick={loginAsAdmin}
            variant="outline"
            className="flex-1 font-bold gap-2 rounded-2xl h-14"
            disabled={loading}
          >
            <Shield size={18} />
            Войти как админ
          </Button>
        </div>
      </div>
    </div>
  );
}
