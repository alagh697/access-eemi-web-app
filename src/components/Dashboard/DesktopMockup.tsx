"use client"
import { Home, Calendar, BarChart3, Settings, Search, Plus, X } from "lucide-react";

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

export function DesktopMockup() {
  return (
    <div className="relative w-[1440px] h-[900px] bg-[#FAFAFA] overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-[70px] bg-white shadow-sm flex items-center px-6 gap-6">
       
        <div className="w-10 h-10 rounded-lg bg-[#D5D5D5]"></div>
        
       
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Rechercher…"
            className="w-full h-10 pl-10 pr-4 bg-slate-50 rounded-lg border border-slate-200"
          />
        </div>
      </div>

      
      <div className="absolute top-[70px] left-0 bottom-0 w-[70px] bg-[#F5F5F5] border-r border-slate-200">
        <div className="flex flex-col gap-2 p-3 pt-6">
          <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white cursor-pointer hover:shadow-md transition-shadow">
            <Home className="w-5 h-5" />
          </div>
          <div className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white cursor-pointer transition-colors">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white cursor-pointer transition-colors">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white cursor-pointer transition-colors">
            <Settings className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute top-[70px] left-[70px] right-0 bottom-0 p-8 overflow-auto">
       
        <h3 className="mb-6">Mes évènements</h3>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            
              <img 
                src={event.image} 
                alt="" 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
               
                <p className="mb-2">{event.title}</p>
              
                <p className="text-[#C8C8C8] mb-4">{event.date}</p>
                
                <div className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer hover:shadow-md transition-shadow">
                  Voir
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-center text-white">
        <Plus className="w-6 h-6" />
      </div>

     
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl w-[480px] p-8 relative">
          
          <div className="mb-6">Ajouter un évènement</div>
          
         
          <div className="absolute top-6 right-6 w-6 h-6 flex items-center justify-center text-[#D5D5D5] cursor-pointer">
            <X className="w-4 h-4" />
          </div>

         
          <div className="space-y-4 mb-6">
            <input 
              type="text"
              placeholder="Nom de l'évènement"
              className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200"
            />
            <input 
              type="text"
              placeholder="JJ/MM/AAAA"
              className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200"
            />
          </div>

          
          <div className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer hover:shadow-md transition-shadow flex items-center justify-center">
            Créer
          </div>
        </div>
      </div>
    </div>
  );
}
