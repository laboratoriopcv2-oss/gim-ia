export default function FloatingWhatsAppButton() {
  const phoneNumber = "524491815518";

  const message =
    "Hola, vi la página de Diamant Gym y quiero más información sobre las membresías.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-5 right-5 z-[999]
        flex h-16 w-16 items-center justify-center
        rounded-full bg-[#25D366]
        shadow-[0_0_35px_rgba(37,211,102,0.45)]
        transition duration-300
        hover:scale-110 hover:shadow-[0_0_45px_rgba(37,211,102,0.65)]
        active:scale-95
        md:bottom-8 md:right-8
      "
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />

      <svg
        className="relative z-10 h-8 w-8 text-white"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.004 3.2C8.94 3.2 3.2 8.94 3.2 16.004c0 2.258.59 4.46 1.71 6.4L3.2 28.8l6.56-1.672a12.734 12.734 0 0 0 6.244 1.592c7.064 0 12.804-5.74 12.804-12.804S23.068 3.2 16.004 3.2Zm0 23.36c-2.012 0-3.972-.54-5.688-1.56l-.408-.244-3.892.992 1.036-3.788-.268-.436a10.489 10.489 0 0 1-1.424-5.52c0-5.872 4.772-10.644 10.644-10.644s10.644 4.772 10.644 10.644S21.876 26.56 16.004 26.56Zm5.832-7.956c-.32-.16-1.892-.936-2.184-1.04-.292-.108-.504-.16-.716.16-.212.32-.824 1.04-1.012 1.252-.184.212-.372.24-.692.08-.32-.16-1.352-.5-2.576-1.592-.952-.848-1.596-1.896-1.784-2.216-.184-.32-.02-.492.14-.652.144-.144.32-.372.48-.56.16-.184.212-.32.32-.532.108-.212.052-.4-.028-.56-.08-.16-.716-1.724-.98-2.36-.256-.616-.516-.532-.716-.54h-.612c-.212 0-.56.08-.852.4-.292.32-1.116 1.092-1.116 2.664s1.144 3.088 1.304 3.3c.16.212 2.252 3.436 5.456 4.816.764.328 1.36.524 1.824.672.768.244 1.468.208 2.02.128.616-.092 1.892-.772 2.16-1.516.268-.744.268-1.384.188-1.516-.08-.132-.292-.212-.612-.372Z" />
      </svg>
    </a>
  );
}