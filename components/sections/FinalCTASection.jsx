export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D6B25E22,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-16 text-center md:px-12 md:py-24">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D6B25E]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#00A3FF]/20 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#D6B25E]">
            Empieza hoy
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
            Tu siguiente versión no se construye mañana.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Entra a Diamant Gym y convierte la disciplina en una experiencia
            poderosa, visual y memorable.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#planes"
              className="rounded-full bg-[#D6B25E] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-black transition duration-300 hover:scale-[1.03] hover:bg-white"
            >
              Ver membresías
            </a>

            <a
              href="#inicio"
              className="rounded-full border border-white/15 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:border-[#D6B25E]/70 hover:text-[#D6B25E]"
            >
              Explorar de nuevo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}