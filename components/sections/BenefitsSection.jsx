import { benefits } from "@/data/benefits";

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#08080B] py-24 text-white">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#D6B25E]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 xl:px-0">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#D6B25E]">
            Beneficios
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.05em] text-white md:text-6xl">
            No es solo entrenar. Es entrar en modo diamante.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
            Una experiencia fitness diseñada para personas que buscan más que
            máquinas: buscan ambiente, disciplina, progreso y motivación real.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#D6B25E]/40 hover:bg-white/[0.06]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D6B25E]/30 bg-[#D6B25E]/10">
                <span className="text-xl font-black text-[#D6B25E]">
                  {benefit.stat}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-black uppercase tracking-[-0.04em] text-white">
                {benefit.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {benefit.description}
              </p>

              <div className="mt-8 h-px w-full bg-white/10" />

              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-white/35 group-hover:text-[#D6B25E]">
                Diamant Experience
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}