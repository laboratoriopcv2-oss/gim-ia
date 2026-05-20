export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = {
    Diamant: ["Inicio", "Programas", "Planes", "Coaches"],
    Servicios: ["Entrenamiento personal", "Peso libre", "Cardio", "Nutrición"],
    Contacto: ["Instagram", "WhatsApp", "Ubicación", "Promociones"],
  };

  return (
    <footer
      id="contacto"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white"
    >
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D6B25E]/10 blur-[110px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#00A3FF]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 xl:px-0">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6B25E]/40 bg-[#D6B25E]/10">
                <span className="text-xl font-black text-[#D6B25E]">D</span>
              </div>

              <div className="leading-none">
                <p className="text-xl font-black uppercase tracking-[0.18em] text-white">
                  Diamant
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#D6B25E]">
                  Gym
                </p>
              </div>
            </div>

            <h2 className="mt-8 max-w-xl text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Entrena fuerte. Vive premium. Domina tu mejor versión.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-white/60">
              Una experiencia fitness diseñada para personas que buscan fuerza,
              disciplina, rendimiento y una comunidad que empuja al siguiente
              nivel.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#planes"
                className="rounded-full bg-[#D6B25E] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-black transition duration-300 hover:scale-[1.03] hover:bg-white"
              >
                Ver membresías
              </a>

              <a
                href="#inicio"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:border-[#D6B25E]/70 hover:text-[#D6B25E]"
              >
                Volver arriba
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
                  {title}
                </h3>

                <ul className="mt-5 space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm font-medium text-white/55 transition duration-300 hover:text-[#D6B25E]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/45">
            © {year} Diamant Gym. Proyecto conceptual de landing page.
          </p>

          <div className="flex flex-wrap gap-5 text-sm text-white/45">
            <a href="#" className="transition hover:text-white">
              Privacidad
            </a>
            <a href="#" className="transition hover:text-white">
              Términos
            </a>
            <a href="#" className="transition hover:text-white">
              Diseño conceptual
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}