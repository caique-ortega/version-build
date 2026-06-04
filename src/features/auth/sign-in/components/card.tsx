import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SignInBanner from './banner';
import { SignInForm } from './form';

export default function SignInCard() {
  return (
    <Card className="border-border/50 flex w-full max-w-5xl flex-col gap-0 overflow-hidden rounded-3xl p-0 shadow-2xl md:flex-row">
      <SignInBanner />
      <section className="bg-card flex w-full flex-col justify-center gap-12 px-6 py-12 md:w-1/2 lg:px-10 lg:py-20">
        <CardHeader className="gap-2">
          <CardTitle className="text-foreground text-xl font-bold tracking-tight md:text-3xl">
            Acesse sua conta
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            Entre com seu e-mail e senha abaixo para acessar o painel de controle de releases do Vbuild.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <SignInForm />
        </CardContent>
      </section>
    </Card>
  );
}
