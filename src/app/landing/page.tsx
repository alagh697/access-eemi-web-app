import { DesktopLanding } from "@/components/Landing/DesktopLanding";
import { MobileLanding } from "@/components/Landing/MobileLanding";
import Link from "next/link";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">

      {/* Bouton retour */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-block px-5 py-2 bg-white border border-slate-300 
                     rounded-full shadow-sm text-slate-700 
                     hover:shadow-md hover:-translate-y-[2px] transition-all"
        >
          ← Retour à l’accueil
        </Link>
      </div>

      <div className="max-w-[1900px] mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-slate-800 mb-2">Landing Page – Non Accessible</h1>
        </div>
        
        <div className="flex gap-8 items-start justify-center flex-wrap">
          
          <div className="flex flex-col items-center">
            <div className="mb-3 text-slate-600">Desktop (1440×900)</div>
            <div className="shadow-2xl rounded-lg overflow-hidden bg-white">
              <DesktopLanding />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-3 text-slate-600">Mobile (375×812)</div>
            <div className="shadow-2xl rounded-2xl overflow-hidden bg-white">
              <MobileLanding />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
