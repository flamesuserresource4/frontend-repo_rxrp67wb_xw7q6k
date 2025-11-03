import { Rocket, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-blue-500/10 to-cyan-400/10" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs font-medium text-indigo-700 backdrop-blur">
              <TrendingUp className="h-4 w-4" />
              Live Meta Insights
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Clash Royale Coach: Master the Meta and Win More
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Learn current strategies, synergies, counters, and what’s coming next. Upload a
              screen recording and get AI-powered feedback on your gameplay.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#analyzer" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700">
                <Rocket className="h-4 w-4" />
                Analyze My Gameplay
              </a>
              <a href="#meta" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-indigo-700 ring-1 ring-indigo-200 hover:bg-indigo-50">
                View Meta Guide
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-xl ring-1 ring-black/10">
              <div className="h-full w-full bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400" />
            </div>
            <p className="mt-3 text-center text-sm text-gray-500">
              Tip: Record your battles and upload them below for personalized insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
