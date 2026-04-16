import { Shield, Clock, Wallet, Lock, Users, ClipboardList, Star, Headphones, BookOpen, MessageCircle, ChevronDown, ClipboardCheck, CircleAlert, Bitcoin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

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
  const [agreeChecked, setAgreeChecked] = useState(false);
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
              <button
                onClick={() => {
                  setInstructionOpen(true);
                  setTimeout(() => document.getElementById('instruction-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors"
              >
                <MessageCircle size={16} />
                Написать администратору
              </button>
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
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

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
      <section id="how" className="px-6 py-16 max-w-5xl mx-auto" ref={undefined}>
        <div id="instruction-section" />
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <button
            onClick={() => setInstructionOpen(!instructionOpen)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <BookOpen size={22} className="text-primary" />
              <span className="font-bold text-lg">Инструкция исполнителя</span>
            </div>
            <ChevronDown size={20} className={`text-muted-foreground transition-transform duration-300 ${instructionOpen ? 'rotate-180' : ''}`} />
          </button>

          {instructionOpen && (
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Левая колонка */}
                <div className="lg:col-span-5 flex flex-col gap-5">
                  {/* Обязательные условия */}
                  <div className="bg-[#FFF9E5] border border-[#FFE066] rounded-2xl p-5 shadow-sm">
                    <h4 className="text-[#1a1a1a] font-black text-sm mb-4 flex items-center gap-2 uppercase tracking-wide">
                      <ClipboardCheck size={20} className="text-[#FFCC00] drop-shadow-sm" />
                      Обязательные условия
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white/60 rounded-xl p-3.5 border border-[#FFE066]/50">
                        <p className="text-[#1e293b] text-sm leading-snug font-medium mb-2 flex items-start gap-2.5">
                          <span className="text-[#FFCC00] text-lg mt-0.5">🛂</span>
                          <span>Только <span className="font-bold border-b border-[#FFCC00]">граждане РФ</span>. Аккаунт должен быть русским.</span>
                        </p>
                        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 text-[10px] font-bold px-2.5 py-1.5 rounded-lg uppercase tracking-wide w-full">
                          🚫 Отзывы из других стран не засчитываются!
                        </div>
                      </div>
                      <div className="bg-white/60 rounded-xl p-3.5 border border-[#FFE066]/50">
                        <p className="text-[#1e293b] text-sm leading-snug font-medium mb-2 flex items-start gap-2.5">
                          <span className="text-[#FFCC00] text-lg mt-0.5">🚕</span>
                          <span>Рабочий аккаунт <span className="font-bold border-b border-[#FFCC00]">Яндекс Go</span>.</span>
                        </p>
                        <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 text-[10px] font-bold px-2.5 py-1.5 rounded-lg uppercase tracking-wide w-full">
                          🚫 С новых аккаунтов отзывы не идут!
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Важное пояснение */}
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-5 shadow-sm">
                    <h4 className="text-red-600 font-black text-sm mb-3 flex items-center gap-2 uppercase tracking-wide">
                      <CircleAlert size={18} />
                      ВАЖНОЕ ПОЯСНЕНИЕ
                    </h4>
                    <p className="text-red-900/90 text-sm leading-relaxed font-medium">
                      После нажатия кнопки «Согласен» менеджер переходит в режим <span className="font-bold underline">ONLINE</span>. Не тратьте впустую время команды — приступайте только при полной готовности.
                    </p>
                  </div>
                </div>

                {/* Правая колонка — Порядок действий */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-3">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">Порядок действий:</h3>

                  <div className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center font-black text-foreground text-sm shrink-0">1</div>
                    <p className="text-sm md:text-base text-foreground font-medium leading-snug">Найти ресторан по названию от менеджера.</p>
                  </div>

                  <div className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center font-black text-foreground text-sm shrink-0">2</div>
                    <p className="text-sm md:text-base text-foreground font-medium leading-snug">Сделать симуляцию заказа.</p>
                  </div>

                  <div className="flex items-center gap-4 bg-primary/5 border border-primary/20 p-4 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center font-black text-primary text-sm shrink-0">3</div>
                    <p className="text-sm md:text-base text-foreground font-medium leading-snug">Поставить 5 звезд <span className="font-bold text-foreground border-b border-foreground/30 bg-yellow-100 px-1 rounded">(без текста!)</span>.</p>
                  </div>

                  <div className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center font-black text-green-600 text-sm shrink-0">
                      <Wallet size={16} />
                    </div>
                    <p className="text-sm md:text-base text-foreground font-medium leading-snug">Получить выплату на <span className="font-bold text-green-600">Bybit UID</span>.</p>
                  </div>
                </div>
              </div>

              {/* Нижний блок */}
              <div className="mt-8 pt-6 border-t border-border">
                {/* Bybit блок */}
                <div className="bg-[#171717] rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#333] mb-6 shadow-xl relative overflow-hidden">
                  <div className="text-center md:text-left">
                    <h4 className="text-white font-bold text-base mb-1.5 flex items-center justify-center md:justify-start gap-2">
                      <Bitcoin size={20} className="text-[#F7A600]" />
                      Куда выводить деньги?
                    </h4>
                    <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xl">
                      Рекомендуем Bybit для быстрых выплат. Если не получается, используйте Telegram кошелек.
                    </p>
                  </div>
                  <div className="shrink-0 w-full md:w-auto">
                    <a
                      href="https://www.bybit.com/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto bg-[#F7A600] text-black font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-[#FFC033] transition-all text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(247,166,0,0.3)]"
                    >
                      ＋ Создать Bybit
                    </a>
                  </div>
                </div>

                {/* Чекбокс и кнопка */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 bg-secondary p-4 rounded-2xl border border-border">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <Checkbox
                      checked={agreeChecked}
                      onCheckedChange={(checked) => setAgreeChecked(checked === true)}
                    />
                    <span className="text-sm md:text-base font-bold text-foreground group-hover:text-foreground/80 transition-colors select-none uppercase tracking-wide">
                      Правила прочитаны, РФ-аккаунт Яндекс активен
                    </span>
                  </label>
                  <a
                    href={agreeChecked ? "https://t.me/brusnika_s" : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => { if (!agreeChecked) e.preventDefault(); }}
                    className={`w-full md:w-auto px-12 py-4 rounded-xl font-black text-sm md:text-base uppercase tracking-widest transition-all duration-200 flex items-center justify-center ${agreeChecked ? 'bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
                  >
                    СОГЛАСЕН
                  </a>
                  <p className="w-full text-center text-xs text-muted-foreground mt-3 md:mt-0 md:w-auto">
                    💬 Вступительное сообщение: <span className="font-bold text-foreground">"правила прочитаны"</span>
                  </p>
                </div>
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
          <button
            onClick={() => {
              setInstructionOpen(true);
              setTimeout(() => document.getElementById('instruction-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
          >
            <MessageCircle size={18} />
            Написать администратору
          </button>
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