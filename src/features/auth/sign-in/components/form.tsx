import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';

export function SignInForm() {
  return (
    <form className="flex flex-col gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-foreground font-medium">
          E-mail
        </Label>
        <InputGroup className="bg-muted/40 border-input h-13 overflow-hidden rounded-xl border transition-transform focus-within:scale-102">
          <InputGroupAddon align="inline-start">
            <Mail className="text-muted-foreground h-5 w-5" />
          </InputGroupAddon>
          <InputGroupInput
            id="email"
            type="email"
            placeholder="voce@exemplo.com"
            required
            className="h-full text-base"
          />
        </InputGroup>
      </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-foreground font-medium">
            Senha
          </Label>
          <a href="#" className="text-primary text-sm font-medium hover:underline">
            Esqueceu a senha?
          </a>
        </div>

        <InputGroup className="bg-muted/40 border-input h-13 overflow-hidden rounded-xl border transition-transform focus-within:scale-102">
          <InputGroupAddon align="inline-start">
            <Lock className="text-muted-foreground h-5 w-5" />
          </InputGroupAddon>
          <InputGroupInput id="password" type="password" placeholder="••••••••" required className="h-full text-base" />
        </InputGroup>
      </div>

      <Button
        type="submit"
        className="bg-gradient-brand text-primary-foreground mt-6 h-13 w-full rounded-xl border-0 text-base font-semibold transition-all hover:scale-102 hover:opacity-90"
      >
        Entrar
      </Button>
    </form>
  );
}
