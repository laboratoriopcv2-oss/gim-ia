import { plans } from "@/data/plans";

export default function PlansSection() {
  return (
    <section
      id="planes"
      className="relative overflow-hidden bg-[#08080B] py-24 text-white"
    >
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D6B25E]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 xl:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#D6B25E]">
            Membresías
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-[-0.05em] text-white md:text-6xl">
            Elige tu nivel. Nosotros ponemos el escenario.
          </h2>

          <p className="mt-5 text-base leading-8 text-white/60">
            Planes pensados para diferentes etapas de entrenamiento: desde
            comenzar con fuerza hasta tener acompañamiento personalizado.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? "border-[#D6B25E]/60 bg-[#D6B25E]/10 shadow-[0_0_70px_rgba(214,178,94,0.16)]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-[#D6B25E] px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-black">
                  Más popular
                </div>
              )}

              <h3 className="text-3xl font-black uppercase tracking-[-0.05em] text-white">
                {plan.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                {plan.description}
              </p>

              <div className="mt-8 flex items-end gap-2">
                <p className="text-5xl font-black tracking-[-0.06em] text-white">
                  {plan.price}
                </p>
                <p className="pb-2 text-sm font-semibold text-white/45">
                  / mes
                </p>
              </div>

              <div className="my-8 h-px bg-white/10" />

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-medium text-white/65"
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${
                        plan.highlighted
                          ? "bg-[#D6B25E] text-black"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-9 block rounded-full px-6 py-4 text-center text-sm font-black uppercase tracking-[0.14em] transition duration-300 ${
                  plan.highlighted
                    ? "bg-[#D6B25E] text-black hover:bg-white"
                    : "border border-white/15 text-white hover:border-[#D6B25E]/70 hover:text-[#D6B25E]"
                }`}
              >
                Elegir plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}