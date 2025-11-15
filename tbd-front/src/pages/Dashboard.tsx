import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Activity, Database, Bell, FileText, Settings, BarChart3, AlertCircle, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");

  const metrics = [
    { title: "Queries Ativas", value: "12", change: "+2", trend: "up", icon: FileText },
    { title: "Alertas Configurados", value: "8", change: "+1", trend: "up", icon: Bell },
    { title: "Conexões Ativas", value: "3", change: "0", trend: "stable", icon: Database },
    { title: "Alertas Disparados (24h)", value: "5", change: "-3", trend: "down", icon: AlertCircle }
  ];

  const recentAlerts = [
    { id: 1, query: "Pedidos com Valores Negativos", status: "critical", time: "há 5 min", result: "3 registros encontrados" },
    { id: 2, query: "Usuários Inativos (7 dias)", status: "warning", time: "há 2 horas", result: "45 usuários" },
    { id: 3, query: "Transações Pendentes", status: "resolved", time: "há 4 horas", result: "Resolvido - 0 pendências" }
  ];

  const connections = [
    { name: "Produção - SQL Server", status: "healthy", queries: 8, lastCheck: "há 2 min" },
    { name: "Staging - Postgres", status: "healthy", queries: 3, lastCheck: "há 5 min" },
    { name: "Analytics - MySQL", status: "warning", queries: 1, lastCheck: "há 15 min" }
  ];

  const menuItems = [
    { icon: BarChart3, label: "Dashboard", id: "dashboard" },
    { icon: Database, label: "Conexões", id: "connections" },
    { icon: FileText, label: "Queries", id: "queries" },
    { icon: Bell, label: "Alertas", id: "alerts" },
    { icon: Settings, label: "Configurações", id: "settings" }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader className="p-6 border-b border-sidebar-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
                <Activity className="w-5 h-5 text-sidebar-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-sidebar-foreground">Beacon</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activeSection === item.id}
                    onClick={() => setActiveSection(item.id)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-6 border-t border-sidebar-border">
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/auth')}>
                Sair
              </Button>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground" onClick={() => navigate('/')}>
                Voltar ao Site
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold">Dashboard</h1>
              </div>
              <Button>+ Nova Query</Button>
            </div>
          </div>

          <div className="container mx-auto p-6 space-y-6">
            {/* Metrics Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    <metric.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      {metric.trend === "up" && <TrendingUp className="h-3 w-3 text-success" />}
                      {metric.change} desde última semana
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alertas Recentes</CardTitle>
                <CardDescription>Últimas notificações disparadas pelo sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-start gap-3">
                        {alert.status === "critical" && (
                          <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                        )}
                        {alert.status === "warning" && (
                          <Clock className="h-5 w-5 text-warning mt-0.5" />
                        )}
                        {alert.status === "resolved" && (
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                        )}
                        <div className="space-y-1">
                          <p className="font-medium">{alert.query}</p>
                          <p className="text-sm text-muted-foreground">{alert.result}</p>
                          <p className="text-xs text-muted-foreground">{alert.time}</p>
                        </div>
                      </div>
                      <Badge variant={
                        alert.status === "critical" ? "destructive" :
                        alert.status === "warning" ? "outline" :
                        "default"
                      }>
                        {alert.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Connections Health */}
            <Card>
              <CardHeader>
                <CardTitle>Status das Conexões</CardTitle>
                <CardDescription>Monitoramento de saúde das bases conectadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {connections.map((conn, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Database className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">{conn.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {conn.queries} queries • Última verificação: {conn.lastCheck}
                          </p>
                        </div>
                      </div>
                      <Badge variant={conn.status === "healthy" ? "default" : "outline"}>
                        {conn.status === "healthy" ? "Saudável" : "Atenção"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
