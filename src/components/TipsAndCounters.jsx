import { Lightbulb, Shield, Target } from "lucide-react";

export default function TipsAndCounters() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Practical Tips & Counters</h2>
          <p className="mt-1 text-gray-600">Quick, actionable advice you can apply in your next match.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-gray-900">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <h3 className="font-semibold">Micro Fundamentals</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
              <li>Place buildings 4–5 tiles from river for optimal kite paths.</li>
              <li>Stagger support units to dodge splash and avoid spell value.</li>
              <li>Save cycle cards to fix rotations—don’t waste them on defense.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-gray-900">
              <Shield className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold">Defense to Offense</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
              <li>Defend for neutral trades; convert survivors into counter-pushes.</li>
              <li>Force out core counters, then swap lanes to snowball advantage.</li>
              <li>Hold hard counters for their win condition—cycle the rest.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-gray-900">
              <Target className="h-5 w-5 text-rose-600" />
              <h3 className="font-semibold">Reading Rotations</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
              <li>Track 4-card cycle; note when key counters are two cards away.</li>
              <li>Recognize mirrored tech—expect double answers in double elixir.</li>
              <li>When ahead, reset tempo with safe cycles and delayed bridges.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
