import { Code, Bot, Database, Zap, Globe, MessageSquare, Terminal, Server, Layers } from "lucide-react";
import avatar from "@/assets/avatar.webp";

const Index = () => {
  const skills = [
    { icon: Bot, label: "Telegram Bots" },
    { icon: Server, label: "Backend Dev" },
    { icon: Database, label: "PostgreSQL" },
    { icon: Zap, label: "FastAPI" },
    { icon: Layers, label: "Docker" },
    { icon: Globe, label: "Web Apps" },
  ];

  const services = [
    { icon: Bot, title: "Telegram-боты", desc: "Информационные, административные, игровые и сервисные боты любой сложности" },
    { icon: Server, title: "Backend & API", desc: "RESTful API на FastAPI/Django с документацией, авторизацией и оптимизацией" },
    { icon: Globe, title: "Web-приложения", desc: "Full-stack решения: от лендингов до сложных веб-сервисов" },
    { icon: Terminal, title: "Автоматизация", desc: "Скрипты, парсеры, интеграции с внешними API и сервисами" },
  ];

  const botTypes = [
    "Информационные боты (новости, погода, курсы валют, агрегаторы)",
    "Админ-панели для каналов и групп с модерацией",
    "Интерактивные боты с inline-клавиатурами и callback-ами",
    "Игровые механики и развлекательные боты",
    "Productivity-боты: напоминания, заметки, task-менеджеры",
    "Системы сбора фидбека и аналитики",
  ];

  const techStack = [
    "Python 3.10+",
    "aiogram 3.x",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "SQLite",
    "Docker",
    "AsyncIO",
    "REST API",
    "Git",
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Avatar */}
            <div className="mb-8 animate-slide-up">
              <div className="relative inline-block">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/50 glow-primary animate-pulse-glow">
                  <img 
                    src={avatar} 
                    alt="xostapov avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-card border border-border rounded-full p-2">
                  <Code className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up stagger-1 opacity-0 font-mono">
              <span className="text-gradient">xostapov</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up stagger-2 opacity-0">
              Python Developer · Backend · Full-stack · Automation
            </p>

            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in-up stagger-3 opacity-0">
              Пишу аккуратный backend и full-stack на Python, делаю API и автоматизацию для реальных задач. Создаю Telegram-ботов любой сложности.
            </p>

            {/* Skills badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up stagger-4 opacity-0">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 hover:glow-accent transition-all duration-300 cursor-default"
                >
                  <skill.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{skill.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="animate-fade-in-up stagger-5 opacity-0">
              <a 
                href="https://t.me/xostapov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 glow-primary"
              >
                <MessageSquare className="w-5 h-5" />
                Написать в Telegram
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Что <span className="text-gradient">разрабатываю</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Полный цикл разработки: от идеи до деплоя
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:card-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bot Types Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="text-gradient">Telegram-боты</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Специализация на aiogram 3.x с асинхронной архитектурой
            </p>

            <div className="grid gap-4">
              {botTypes.map((type, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-mono text-sm">✓</span>
                  </div>
                  <span className="text-foreground/90">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Современный стек для production-ready решений
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-5 py-2.5 bg-card border border-border rounded-lg font-mono text-sm hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Готов обсудить ваш проект?
              </h2>
              <p className="text-muted-foreground mb-8">
                Собираю портфолио — готов взяться за интересные задачи
              </p>
              <a 
                href="https://t.me/xostapov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                @xostapov
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
            <p className="font-mono">© 2022-2025 xostapov · Python Developer</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
