import { Shield, Clock, Wallet, Lock, Users, ClipboardList, Star, Headphones, BookOpen, MessageCircle, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

function randomAmount() {
  const num = Math.floor(Math.random() * 900) + 100; // 100-999
  return `+ ${num} ₽`;
}

function randomUID() {
  const a = Math.floor(Math.random() * 90) + 10;
  const b = Math.floor(Math.random() * 90) + 10;
  return `UID: ${a}...${b}`;
}

export default function Landing() {
  const [instructionOpen, setInstructionOpen] = useState(false);
  const [payment, setPayment] = useState({ amount: randomAmount(), uid: randomUID() });
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPayment({ amount: randomAmount(), uid: randomUID() });
      setAnimKey(prev => prev + 1);
    }, 2200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-black text-sm">Y</span>
          </div>
          <span className="font-extrabold text-lg tracking-tight">Yoclick</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition-colors">Как это работает</a>
          <a href="#benefits" className="hover:text-foreground transition-colors">Условия</a>
          <a href="#payouts" className="hover:text-foreground transition-colors">Выплаты</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 pt-12 pb-16 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
              <Shield size={14} />
              Открыт набор исполнителей
            </span>

            <h1 className="text-4xl md:text-5xl font-black leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Чистая репутация{' '}
              <span className="text-primary">ручной работы.</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
              Выполняй простые задания со своего смартфона. Оценивай компании, создавай поведенческие факторы и получай моментальные выплаты в криптовалюте каждый день.
            </p>

            <div className="bg-card border border-border rounded-2xl p-5 max-w-md">
              <p className="text-sm font-semibold text-foreground mb-2">🔒 Регистрация только через администратора</p>
              <p className="text-xs text-muted-foreground mb-3">
                Чтобы получить доступ к заданиям и начать зарабатывать, свяжитесь с администратором. Мы работаем только с проверенными исполнителями.
              </p>
              <a
                href="https://t.me/yoclick_admin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors"
              >
                <MessageCircle size={16} />
                Написать администратору
              </a>
            </div>
          </div>

          {/* Animated decorative card */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-3xl p-6 h-full flex flex-col justify-between shadow-lg overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-black text-sm">Y</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">YoClick</p>
                    <p className="text-xs text-muted-foreground">Verified Network</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div
                    key={`pay-${animKey}`}
                    className="bg-accent/10 rounded-xl p-3 flex items-center gap-3"
                    style={{
                      animation: 'slideInUp 0.4s ease-out',
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Wallet size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-accent">{payment.amount}</p>
                      <p className="text-xs text-muted-foreground">{payment.uid}</p>
                    </div>
                  </div>

                  <div className="bg-secondary rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Star size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Яндекс Еда</p>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Задания обновляются ежедневно</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '100%', label: 'Живые люди', icon: Users },
            { value: '0%', label: 'Ботов и ИИ', icon: Shield },
            { value: '27', label: 'Кейсов', icon: ClipboardList },
            { value: '24/7', label: 'Поддержка', icon: Headphones },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-2xl p-5 text-center">
              <stat.icon size={20} className="mx-auto mb-2 text-primary" />
              <p className="text-2xl font-black text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Твои выгоды с Yoclick
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Clock,
              title: 'Свободный график',
              desc: 'Работай когда тебе удобно. 15 минут в день по пути на учебу или полный рабочий день — решаешь только ты.',
            },
            {
              icon: Wallet,
              title: 'Быстрые выплаты',
              desc: 'Никаких задержек и скрытых комиссий. Моментальные переводы на твой крипто-кошелек Bybit сразу после проверки задания.',
            },
            {
              icon: Lock,
              title: 'Полная анонимность',
              desc: 'Твои данные надежно защищены. Мы не требуем сложной верификации с паспортом для того, чтобы начать зарабатывать.',
            },
          ].map((b) => (
            <div key={b.title} className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <b.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instruction */}
      <section id="how" className="px-6 py-16 max-w-5xl mx-auto">
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <button
            onClick={() => setInstructionOpen(!instructionOpen)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <BookOpen size={22} className="text-primary" />
              <span className="font-bold text-lg">Инструкция исполнителя</span>
            </div>
            <ChevronDown size={20} className={`text-muted-foreground transition-transform ${instructionOpen ? 'rotate-180' : ''}`} />
          </button>

          {instructionOpen && (
            <div className="px-6 pb-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
              <div className="space-y-2">
                <h4 className="font-bold text-foreground">1. Получите доступ</h4>
                <p>Свяжитесь с администратором через Telegram. После проверки вам выдадут логин и пароль для входа в систему.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-foreground">2. Войдите в кабинет</h4>
                <p>Используйте выданные данные для входа. В личном кабинете вы увидите список доступных заданий с подробным описанием.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-foreground">3. Примите задание</h4>
                <p>Выберите задание из списка и нажмите «Принять». У вас будет ограниченное время на его выполнение. Следуйте инструкциям в карточке задания.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-foreground">4. Выполните задание</h4>
                <p>Перейдите по ссылке в задании, выполните все указанные действия. Оставьте отзыв или оценку согласно требованиям. Будьте внимательны — задание должно выглядеть естественно.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-foreground">5. Подтвердите выполнение</h4>
                <p>После выполнения нажмите «Завершить» в карточке задания. Администратор проверит результат и подтвердит выполнение.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-foreground">6. Получите выплату</h4>
                <p>После подтверждения сумма будет зачислена на ваш баланс. Выплаты производятся на крипто-кошелек Bybit. Минимальная сумма вывода — 200 ₽.</p>
              </div>

              <div className="bg-destructive/10 rounded-xl p-4 space-y-1">
                <p className="font-bold text-destructive">⚠️ Важно</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Не используйте VPN при выполнении заданий</li>
                  <li>Один аккаунт — один человек</li>
                  <li>За накрутку или обман — блокировка без выплат</li>
                  <li>Выполняйте задания качественно и в срок</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Payouts */}
      <section id="payouts" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Выплаты
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-8 max-w-md mx-auto">
          Мы платим каждый день. Минимальная сумма вывода — 200 ₽. Переводы на крипто-кошелек Bybit.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="bg-card border border-border rounded-2xl p-5 text-center">
            <p className="text-2xl font-black text-accent">от 20 ₽</p>
            <p className="text-xs text-muted-foreground mt-1">за одно задание</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-5 text-center">
            <p className="text-2xl font-black text-primary">200 ₽</p>
            <p className="text-xs text-muted-foreground mt-1">мин. вывод</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-5 text-center">
            <p className="text-2xl font-black text-foreground">USDT</p>
            <p className="text-xs text-muted-foreground mt-1">Bybit кошелек</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <div className="bg-card border border-border rounded-3xl p-10">
          <h2 className="text-2xl font-black mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Готов начать зарабатывать?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
            Напиши администратору, получи доступ и выполняй задания уже сегодня.
          </p>
          <a
            href="https://t.me/yoclick_admin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
          >
            <MessageCircle size={18} />
            Написать администратору
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Yoclick. Human Intelligence Network.
        </p>
      </footer>

      <style>{`
        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}