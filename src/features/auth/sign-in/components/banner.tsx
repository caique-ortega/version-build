import { LogoWordmark } from '@/components/logo/logo-wordmark';

export default function SignInBanner() {
  return (
    <section className="bg-gradient-brand relative flex w-full items-center justify-center overflow-hidden p-10 md:w-1/2">
      <div className="bg-primary-foreground/5 absolute -top-20 -left-20 h-72 w-72 rounded-full" />
      <div className="bg-primary-foreground/5 absolute -right-16 -bottom-16 h-96 w-96 rounded-full" />
      <div className="bg-primary-foreground/3 absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="md:border-primary-foreground/20 md:bg-primary-foreground/10 flex h-full w-full max-w-sm flex-col items-center justify-between rounded-3xl p-12 md:gap-4 md:rounded-2xl md:border md:shadow-xl md:backdrop-blur-sm">
        <div className="hidden sm:block" />

        <LogoWordmark className="text-primary-foreground w-52 shrink-0" />

        <div className="hidden w-full items-center gap-3 md:flex md:flex-col">
          <div className="bg-primary-foreground/30 h-px w-16" />
          <div className="space-y-1 text-center">
            <p className="text-primary-foreground/90 text-base font-semibold tracking-wide lg:text-lg">Version Build</p>
            <p className="text-primary-foreground/50 text-xs tracking-widest uppercase lg:text-sm">
              controle de releases
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
