import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Bell, Activity, Shield, Zap, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Database,
      title: "Conexões Seguras",
      description: "Conecte bases SQL Server, Postgres, MySQL em modo somente leitura com criptografia completa."
    },
    {
      icon: Bell,
      title: "Alertas Inteligentes",
      description: "Configure notificações automáticas via Email, Slack, Teams ou Webhook quando métricas críticas mudarem."
    },
    {
      icon: Activity,
      title: "Monitoramento em Tempo Real",
      description: "Acompanhe suas métricas 24/7 com execução assíncrona e verificações programadas."
    },
    {
      icon: BarChart3,
      title: "Dashboards Visuais",
      description: "Visualize tendências, históricos e análises com gráficos interativos e personalizáveis."
    },
    {
      icon: Zap,
      title: "Templates de Queries",
      description: "Use templates prontos ou crie queries customizadas para monitorar o que importa."
    },
    {
      icon: Shield,
      title: "Seguro por Design",
      description: "Logs auditáveis, criptografia ponta-a-ponta e controle granular de permissões."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Beacon</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </a>
            <Button variant="outline" size="sm" onClick={() => navigate('/auth')}>
              Entrar
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            Seu farol de dados sempre ativo
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Monitore métricas críticas antes que virem problemas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conecte suas bases de dados, crie queries customizadas e receba alertas inteligentes.
            Simples, seguro e plug-and-play.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gradient-primary text-lg" onClick={() => navigate('/auth')}>
              Começar Gratuitamente
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={() => navigate('/dashboard')}>
              Ver Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Sem cartão de crédito • Setup em minutos • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Tudo que você precisa para monitorar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa de monitoramento com foco em simplicidade e resultados.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Configure em 3 passos simples</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "1",
              title: "Conecte sua base",
              description: "Adicione credenciais de leitura da sua base SQL Server, Postgres ou MySQL"
            },
            {
              step: "2",
              title: "Crie suas queries",
              description: "Use templates prontos ou escreva queries customizadas para suas métricas"
            },
            {
              step: "3",
              title: "Configure alertas",
              description: "Defina condições, frequência e canais para receber notificações automáticas"
            }
          ].map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="gradient-primary text-white border-0 max-w-4xl mx-auto">
          <CardHeader className="text-center space-y-4 p-12">
            <CardTitle className="text-3xl md:text-4xl">
              Pronto para ter controle total das suas métricas?
            </CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Comece hoje mesmo com nosso plano gratuito e monitore suas primeiras métricas em minutos.
            </CardDescription>
            <div className="pt-4">
              <Button size="lg" variant="secondary" className="text-lg" onClick={() => navigate('/auth')}>
                Começar Agora
              </Button>
            </div>
          </CardHeader>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
                <Activity className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">Beacon</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Beacon. Seu farol de dados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
