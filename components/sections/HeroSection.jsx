export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#050505] pt-28 text-white"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D6B25E]/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#00A3FF]/20 blur-[150px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-12 px-5 pb-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] xl:px-0">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#D6B25E] shadow-[0_0_18px_rgba(214,178,94,0.9)]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              Fitness premium experience
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl xl:text-8xl">
            Transforma tu cuerpo.
            <span className="block bg-gradient-to-r from-[#D6B25E] via-white to-[#00A3FF] bg-clip-text text-transparent">
              Domina tu mente.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Entrena en un espacio diseñado para llevar tu fuerza, disciplina y
            rendimiento al siguiente nivel. Un gimnasio premium para personas
            que no vienen a intentarlo, vienen a lograrlo.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#planes"
              className="rounded-full bg-[#D6B25E] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_0_45px_rgba(214,178,94,0.25)] transition duration-300 hover:scale-[1.03] hover:bg-white"
            >
              Comenzar ahora
            </a>

            <a
              href="#programas"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:border-[#D6B25E]/70 hover:text-[#D6B25E]"
            >
              Ver programas
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { value: "+1200", label: "Miembros activos" },
              { value: "24/7", label: "Acceso premium" },
              { value: "+18", label: "Coaches expertos" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
              >
                <p className="text-3xl font-black text-white">{item.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-12 z-10 hidden rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl md:block">
            <p className="text-3xl font-black text-[#D6B25E]">98%</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              Disciplina
            </p>
          </div>

          <div className="absolute -right-4 bottom-10 z-10 hidden rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl md:block">
            <p className="text-3xl font-black text-[#00A3FF]">Elite</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              Performance
            </p>
          </div>

          <div className="relative mx-auto h-[520px] max-w-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] shadow-[0_0_80px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D6B25E33,transparent_45%),radial-gradient(circle_at_bottom,#00A3FF33,transparent_45%)]" />

            <div className="absolute inset-x-8 bottom-8 top-8 rounded-[1.5rem] border border-white/10 bg-black/40" />

            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D6B25E]/30" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

            <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
              <div>
                <p className="text-[110px] font-black leading-none tracking-[-0.12em] text-white/10 md:text-[140px]">
                  DG
                </p>
                <p className="-mt-6 text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-5xl">
                  Diamond
                  <span className="block text-[#D6B25E]">Mode</span>
                </p>
                <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-white/55">
                  Aquí puede ir una imagen generada de atleta, gimnasio premium
                  o render 3D para el post.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}