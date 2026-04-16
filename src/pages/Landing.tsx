import { Shield, Clock, Wallet, Lock, Users, ClipboardList, Star, Headphones } from 'lucide-react';

export default function Landing() {
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
          <a href="#footer" className="hover:text-foreground transition-colors">Выплаты</a>
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
              <p className="text-sm font-semibold text-foreground mb-1">🔒 Регистрация только через администратора</p>
              <p className="text-xs text-muted-foreground">
                Чтобы получить доступ к заданиям, свяжитесь с администратором. Мы работаем только с проверенными исполнителями.
              </p>
            </div>
          </div>

          {/* Decorative card */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-3xl p-6 h-full flex flex-col justify-between shadow-lg">
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
                  <div className="bg-accent/10 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Wallet size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-accent">+ 2 450 ₽</p>
                      <p className="text-xs text-muted-foreground">UID: 48...91</p>
                    </div>
                  </div>

                  <div className="bg-secondary rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Star size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Yandex Go</p>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} size={10} className="text-warning fill-warning" />
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

      {/* Footer */}
      <footer id="footer" className="px-6 py-8 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Yoclick. Human Intelligence Network.
        </p>
      </footer>
    </div>
  );
}
