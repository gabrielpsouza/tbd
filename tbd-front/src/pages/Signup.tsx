import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Campos obrigatórios
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [timezone, setTimezone] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  // Campos opcionais
  const [role, setRole] = useState("");
  const [source, setSource] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validações de campos obrigatórios
    if (!name || !email || !password || !company || !timezone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Senha muito curta",
        description: "A senha deve ter no mínimo 6 caracteres.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!acceptTerms) {
      toast({
        title: "Aceite necessário",
        description: "Você precisa aceitar os Termos de Uso e a Política de Privacidade.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulação de cadastro
    toast({
      title: "Conta criada com sucesso!",
      description: "Você já pode fazer login.",
    });
    setIsLoading(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12">
      <div className="w-full max-w-md px-6">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Activity className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold">TBD</span>
        </div>

        <h1 className="text-xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          Criar sua conta
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome completo */}
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              type="text"
              placeholder="João Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {/* E-mail de trabalho */}
          <div className="space-y-2">
            <Label htmlFor="email">E-mail de trabalho *</Label>
            <Input
              id="email"
              type="email"
              placeholder="joao@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {/* Senha */}
          <div className="space-y-2">
            <Label htmlFor="password">Senha *</Label>
            <Input
              id="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {/* Nome da empresa */}
          <div className="space-y-2">
            <Label htmlFor="company">Nome da empresa / organização *</Label>
            <Input
              id="company"
              type="text"
              placeholder="Acme Inc."
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {/* País ou fuso horário */}
          <div className="space-y-2">
            <Label htmlFor="timezone">País / Fuso horário *</Label>
            <Select value={timezone} onValueChange={setTimezone} disabled={isLoading}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione seu fuso horário" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="America/Sao_Paulo">Brasil (GMT-3)</SelectItem>
                <SelectItem value="America/New_York">EUA - Costa Leste (GMT-5)</SelectItem>
                <SelectItem value="America/Los_Angeles">EUA - Costa Oeste (GMT-8)</SelectItem>
                <SelectItem value="Europe/London">Reino Unido (GMT+0)</SelectItem>
                <SelectItem value="Europe/Paris">Europa Central (GMT+1)</SelectItem>
                <SelectItem value="Asia/Tokyo">Japão (GMT+9)</SelectItem>
                <SelectItem value="Australia/Sydney">Austrália (GMT+10)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Cargo / função (opcional) */}
          <div className="space-y-2">
            <Label htmlFor="role">Cargo / Função</Label>
            <Select value={role} onValueChange={setRole} disabled={isLoading}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione (opcional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dev">Desenvolvedor</SelectItem>
                <SelectItem value="dba">DBA</SelectItem>
                <SelectItem value="devops">DevOps</SelectItem>
                <SelectItem value="cto">CTO</SelectItem>
                <SelectItem value="tech_lead">Tech Lead</SelectItem>
                <SelectItem value="product_manager">Product Manager</SelectItem>
                <SelectItem value="data_analyst">Analista de Dados</SelectItem>
                <SelectItem value="other">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Como conheceu o produto (opcional) */}
          <div className="space-y-2">
            <Label htmlFor="source">Como conheceu o TBD?</Label>
            <Select value={source} onValueChange={setSource} disabled={isLoading}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione (opcional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="twitter">Twitter / X</SelectItem>
                <SelectItem value="github">GitHub</SelectItem>
                <SelectItem value="friend">Indicação de amigo</SelectItem>
                <SelectItem value="blog">Blog / Artigo</SelectItem>
                <SelectItem value="other">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Aceite de termos */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                disabled={isLoading}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm font-normal leading-relaxed cursor-pointer">
                Aceito os{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 underline"
                  onClick={() => window.open("/terms", "_blank")}
                >
                  Termos de Uso e Política de Privacidade
                </button>{" "}
                *
              </Label>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="newsletter"
                checked={newsletter}
                onCheckedChange={(checked) => setNewsletter(checked as boolean)}
                disabled={isLoading}
                className="mt-1"
              />
              <Label htmlFor="newsletter" className="text-sm font-normal leading-relaxed cursor-pointer">
                Quero receber novidades e atualizações por e-mail
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-11"
            disabled={isLoading}
          >
            {isLoading ? "Criando conta..." : "Criar conta"}
          </Button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Já tem uma conta? Faça login
          </button>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Voltar ao site
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

