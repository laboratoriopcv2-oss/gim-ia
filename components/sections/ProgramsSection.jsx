import { programs } from "@/data/programs";

export default function ProgramsSection() {
  return (
    <section
      id="programas"
      className="relative overflow-hidden bg-[#050505] py-24 text-white"
    >
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#00A3FF]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 xl:px-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#00A3FF]">
              Programas
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.05em] text-white md:text-6xl">
              Entrena con un objetivo. Progresa con intención.
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-white/60">
            Elige un estilo de entrenamiento según tu meta: músculo,
            resistencia, quema calórica o rendimiento funcional.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <article
              key={program.title}
              className="group relative min-h-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#00A3FF]/40"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff12,transparent_45%)] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/50">
                    {program.tag}
                  </span>

                  <span className="text-6xl font-black tracking-[-0.08em] text-white/10">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-20 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-white md:text-4xl">
                  {program.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  {program.description}
                </p>

                <a
                  href="#planes"
                  className="mt-10 inline-flex rounded-full border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition duration-300 hover:border-[#00A3FF] hover:text-[#00A3FF]"
                >
                  Elegir programa
                </a>
              </div>

              <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-10 translate-y-10 rounded-full bg-[#00A3FF]/15 blur-2xl" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}