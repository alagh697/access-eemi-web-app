"use client"
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDQ4ODI5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Optimisez votre flux de travail",
    description: "Découvrez comment améliorer votre productivité avec nos outils"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjQ1NjE4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Collaboration en temps réel",
    description: "Travaillez ensemble de manière plus efficace"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ0OTQ5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Analyses détaillées",
    description: "Suivez vos performances avec des données précises"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503418895522-46f9804cda40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1lZXRpbmclMjByb29tfGVufDF8fHx8MTc2NDU4NTM4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Réunions productives",
    description: "Organisez et planifiez vos réunions facilement"
  }
];

export function DesktopLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-[1440px] h-[900px] bg-white overflow-auto">
      <header className="sticky top-0 z-50 bg-white shadow-sm h-[70px] flex items-center justify-between px-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#D5D5D5]"></div>
          <span className="text-[#D5D5D5]">Logo</span>
        </div>

        <nav className="flex gap-8">
          <div className="text-[#ABABAB] text-sm cursor-pointer">Accueil</div>
          <div className="text-[#ABABAB] text-sm cursor-pointer">Fonctionnalités</div>
          <div className="text-[#ABABAB] text-sm cursor-pointer">Contact</div>
        </nav>
      </header>

      <section className="relative h-[500px] bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1737868131532-0efce8062b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbGFwdG9wfGVufDF8fHx8MTc2NDU2MjAxNHww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        <div className="relative z-10 text-center max-w-3xl px-8">
          <h4 className="mb-4">Transformez votre façon de travailler</h4>
          
          <p className="text-[#C8C8C8] mb-8 text-lg">
            Découvrez une plateforme innovante qui révolutionne la gestion de vos projets et optimise votre productivité
          </p>

          <div className="flex gap-4 justify-center items-center">
            <div className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full cursor-pointer hover:shadow-lg transition-shadow">
              Commencer
            </div>
            <div className="text-[#D0D0D0] cursor-pointer text-sm underline">
              En savoir plus
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-12 bg-white">
        <h2 className="text-center mb-12 text-slate-800">Nos fonctionnalités</h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
            >
              {carouselItems.map((item) => (
                <div key={item.id} className="min-w-[25%] px-3">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img 
                      src={item.image} 
                      alt=""
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <p className="mb-2">{item.title}</p>
                      <p className="text-[#C8C8C8] text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
            onClick={() => scrollToSlide((currentSlide - 1 + carouselItems.length) % carouselItems.length)}
          >
            <ChevronLeft className="w-4 h-4 text-slate-400" />
          </div>
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
            onClick={() => scrollToSlide((currentSlide + 1) % carouselItems.length)}
          >
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {carouselItems.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                  currentSlide === index ? 'bg-purple-500' : 'bg-slate-300'
                }`}
                onClick={() => scrollToSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-12 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center mb-10 text-slate-800">Contactez-nous</h2>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nom"
                className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 resize-none"
              ></textarea>
              <div className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer hover:shadow-md transition-shadow flex items-center justify-center">
                Envoyer
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 py-8 px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <p className="text-[#D0D0D0] text-sm">© 2025 Entreprise. Tous droits réservés.</p>
            <div className="flex gap-3">
              <span className="text-[#D0D0D0] text-xs cursor-pointer">Confidentialité</span>
              <span className="text-[#D0D0D0] text-xs cursor-pointer">Conditions</span>
              <span className="text-[#D0D0D0] text-xs cursor-pointer">Cookies</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
              <Facebook className="w-4 h-4 text-slate-400" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
              <Twitter className="w-4 h-4 text-slate-400" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
              <Instagram className="w-4 h-4 text-slate-400" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
              <Linkedin className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
