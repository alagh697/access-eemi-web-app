"use client"
import { Menu, Search, Plus, X } from "lucide-react";

const events = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NTc0NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Concert",
    date: "15 Décembre 2025"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMG11c2ljfGVufDF8fHx8MTc2NDU4NDU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Concert",
    date: "22 Décembre 2025"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1566735355835-bddb43dc3f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwcGVyZm9ybWFuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NjQ1ODQ1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Concert",
    date: "30 Décembre 2025"
  }
];

export function MobileMockup() {
  return (
    <div className="relative w-[375px] h-[812px] bg-[#FAFAFA] overflow-hidden">
   
      <div className="absolute top-0 left-0 right-0 bg-white shadow-sm">
        <div className="h-[60px] flex items-center px-4 gap-3">
         
          <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
            <Menu className="w-5 h-5 text-slate-600" />
          </div>
          
          
          <div className="w-8 h-8 rounded-lg bg-[#D5D5D5]"></div>
          
         
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher…"
              className="w-full h-9 pl-9 pr-3 bg-slate-50 rounded-lg border border-slate-200 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute top-[60px] left-0 right-0 bottom-0 overflow-auto px-4 py-5">
        
        <p className="mb-5">Mes évènements</p>

       
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              
              <img 
                src={event.image} 
                alt="" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
               
                <p className="mb-1">{event.title}</p>
               
                <p className="text-[#C8C8C8] mb-3 text-sm">{event.date}</p>
                
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer text-sm">
                  Voir
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg cursor-pointer flex items-center justify-center text-white">
        <Plus className="w-6 h-6" />
      </div>

      {/* Mobile modal - bottom-sheet style */}
      <div className="absolute inset-0 bg-black/30 flex items-end">
        <div className="bg-white rounded-t-3xl shadow-2xl w-full p-6 pb-8">
         
          <div className="mb-1">Ajouter un évènement</div>
          
          
          <div className="absolute top-5 right-5 w-6 h-6 flex items-center justify-center text-[#D5D5D5] cursor-pointer">
            <X className="w-3.5 h-3.5" />
          </div>

         
          <div className="space-y-3 mt-5 mb-5">
            <input 
              type="text"
              placeholder="Nom de l'évènement"
              className="w-full h-11 px-4 bg-slate-50 rounded-lg border border-slate-200 text-sm"
            />
            <input 
              type="text"
              placeholder="JJ/MM/AAAA"
              className="w-full h-11 px-4 bg-slate-50 rounded-lg border border-slate-200 text-sm"
            />
          </div>

          
          <div className="w-full h-11 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer flex items-center justify-center">
            Créer
          </div>
        </div>
      </div>
    </div>
  );
}
