import { MessageCircle } from "lucide-react";

export default function ContactPlaceholder({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex flex-col min-h-[70vh] items-center justify-center p-6 text-center">
      <div className="max-w-2xl mx-auto bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-navy/5 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-4">
            Coming Soon
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-navy mb-6">
            {title}
          </h1>
          <p className="text-navy/70 text-lg leading-relaxed mb-10">
            {description}
          </p>
          <a
            href="https://wa.me/201557469694"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity w-full sm:w-auto shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle size={22} />
            Contact us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
