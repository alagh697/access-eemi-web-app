import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4 py-10">

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-10 text-zinc-800 dark:text-zinc-100 text-center">
        Projet Accessibilité Numérique – EEMI
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Landing Card */}
        <Link
          href="/landing"
          className="
            w-64 h-40 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
            border border-zinc-200 dark:border-zinc-800
            flex items-center justify-center
            text-lg font-medium text-zinc-700 dark:text-zinc-200
            hover:shadow-xl hover:-translate-y-1 transition-all
          "
        >
          Landing
        </Link>

        {/* Dashboard Card */}
        <Link
          href="/dashboard"
          className="
            w-64 h-40 bg-white dark:bg-zinc-900 rounded-2xl shadow-md 
            border border-zinc-200 dark:border-zinc-800
            flex items-center justify-center
            text-lg font-medium text-zinc-700 dark:text-zinc-200
            hover:shadow-xl hover:-translate-y-1 transition-all
          "
        >
          Dashboard
        </Link>

      </div>
    </div>
  );
}
