"use client"
import { Menu, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDQ4ODI5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Optimisez votre flux de travail",
    description: "Découvrez comment améliorer votre productivité"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjQ1NjE4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Collaboration en temps réel",
    description: "Travaillez ensemble efficacement"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ0OTQ5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Analyses détaillées",
    description: "Suivez vos performances"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503418895522-46f9804cda40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1lZXRpbmclMjByb29tfGVufDF8fHx8MTc2NDU4NTM4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Réunions productives",
    description: "Organisez vos réunions facilement"
  }
];

export function MobileLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth / carouselItems.length;
      scrollContainerRef.current.scrollTo({
        left: scrollWidth * currentSlide,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  return (
    <div className="w-[375px] h-[812px] bg-white overflow-auto">
      <header className="sticky top-0 z-50 bg-white shadow-sm h-[60px] flex items-center justify-between px-4">
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
          <Menu className="w-5 h-5 text-slate-600" />
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#D5D5D5]"></div>
          <span className="text-[#D5D5D5] text-sm">Logo</span>
        </div>

        <div className="w-10"></div>
      </header>

      <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 px-5 py-12">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1737868131532-0efce8062b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbGFwdG9wfGVufDF8fHx8MTc2NDU2MjAxNHww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        <div className="relative z-10 text-center">
          <h4 className="mb-3 text-slate-800">Transformez votre façon de travailler</h4>
          
          <p className="text-[#C8C8C8] mb-6 text-sm">
            Une plateforme innovante qui révolutionne la gestion de vos projets
          </p>

          <div className="flex flex-col gap-3 items-center">
            <div className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full cursor-pointer text-sm">
              Commencer
            </div>
            
            <div className="text-[#D0D0D0] cursor-pointer text-xs underline">
              En savoir plus
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <h2 className="text-center mb-6 px-5 text-slate-800">Nos fonctionnalités</h2>

        <div 
          ref={scrollContainerRef}
          className="flex gap-4 px-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="min-w-[280px] snap-center">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src={item.image} 
                  alt=""
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="mb-1.5 text-sm">{item.title}</p>
                  <p className="text-[#C8C8C8] text-xs">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-5">
          {carouselItems.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                currentSlide === index ? 'bg-purple-500' : 'bg-slate-300'
              }`}
            ></div>
          ))}
        </div>
      </section>

      <section className="py-10 px-5 bg-gradient-to-br from-slate-50 to-slate-100">
        <h2 className="text-center mb-6 text-slate-800">Contactez-nous</h2>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Nom"
              className="w-full h-10 px-3 bg-slate-50 rounded-lg border border-slate-200 text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-10 px-3 bg-slate-50 rounded-lg border border-slate-200 text-sm"
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full px-3 py-2 bg-slate-50 rounded-lg border border-slate-200 resize-none text-sm"
            ></textarea>
            <div className="w-full h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer flex items-center justify-center text-sm">
              Envoyer
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 py-6 px-5">
        <div className="text-center mb-4">
          <p className="text-[#D0D0D0] text-xs mb-3">© 2025 Entreprise. Tous droits réservés.</p>
          
          <div className="flex gap-2 justify-center">
            <span className="text-[#D0D0D0] text-[10px] cursor-pointer">Confidentialité</span>
            <span className="text-[#D0D0D0] text-[10px]">•</span>
            <span className="text-[#D0D0D0] text-[10px] cursor-pointer">Conditions</span>
            <span className="text-[#D0D0D0] text-[10px]">•</span>
            <span className="text-[#D0D0D0] text-[10px] cursor-pointer">Cookies</span>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
            <Facebook className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
            <Twitter className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
            <Instagram className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
            <Linkedin className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
      </footer>
    </div>
  );
}
