export default function WebBusinessCTASection() {
  const phoneNumber = "524491815518";

  const message =
    "Hola, vi tu diseño de Diamant Gym y quiero una página web para mi negocio.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="web-negocio"
      className="relative overflow-hidden bg-[#08080B] px-5 py-24 text-white md:px-8"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D6B25E]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#00A3FF]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#D6B25E]">
              ¿Quieres algo así?
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
              Tu negocio también puede tener una web que venda.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              ¿Tienes un consultorio, gimnasio, tienda, barbería, estudio,
              restaurante o emprendimiento? Una página web bien diseñada puede
              ayudarte a verte más profesional, generar confianza y convertir
              visitas en clientes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Consultorios", "Gimnasios", "Tiendas"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5"
                >
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-white">
                    {item}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Landing page, contacto, servicios y presencia profesional.
                  </p>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex rounded-full bg-[#25D366] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_0_40px_rgba(37,211,102,0.25)] transition duration-300 hover:scale-[1.03] hover:bg-white hover:text-black"
            >
              Pícale al WhatsApp
            </a>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-[0_0_80px_rgba(0,0,0,0.35)]">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#050505] p-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="mt-8 space-y-4">
                  <div className="h-6 w-2/3 rounded-full bg-white/15" />
                  <div className="h-4 w-full rounded-full bg-white/10" />
                  <div className="h-4 w-5/6 rounded-full bg-white/10" />

                  <div className="grid grid-cols-2 gap-3 pt-5">
                    <div className="h-24 rounded-2xl bg-[#D6B25E]/20" />
                    <div className="h-24 rounded-2xl bg-[#00A3FF]/20" />
                  </div>

                  <div className="h-12 w-full rounded-full bg-[#25D366]/80" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl">
              <p className="text-2xl font-black text-[#D6B25E]">Web</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                Para tu negocio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}