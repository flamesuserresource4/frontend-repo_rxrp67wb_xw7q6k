import { Brain, Shield, Sword, Lightbulb, AlertTriangle } from "lucide-react";

const Card = ({ title, icon: Icon, children }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow">
    <div className="mb-3 flex items-center gap-2 text-gray-900">
      <Icon className="h-5 w-5 text-indigo-600" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="space-y-2 text-sm text-gray-600">{children}</div>
  </div>
);

export default function MetaDashboard() {
  return (
    <section id="meta" className="bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Meta & Strategy Hub</h2>
          <p className="mt-1 text-gray-600">Curated insights for the current ladder and tournament meta.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Meta Tech" icon={Brain}>
            <ul className="list-disc space-y-1 pl-5">
              <li>Control archetypes leveraging cheap cycle to out-tempo big spells.</li>
              <li>Hybrid beatdown + control using mini-tanks and surprise lane swaps.</li>
              <li>Spell-bait variants with strong punish on 4–5 elixir commitments.</li>
            </ul>
          </Card>

          <Card title="Core Synergies" icon={Sword}>
            <ul className="list-disc space-y-1 pl-5">
              <li>Tank + DPS + Reset (e.g., Knight + Musketeer + Electro Spirit).</li>
              <li>Air denial packages (Archers + Ice Spirit + Tesla) to stall pushes.</li>
              <li>Counter-push builders: Defend cheap, convert into dual-lane pressure.</li>
            </ul>
          </Card>

          <Card title="Win Conditions" icon={Lightbulb}>
            <ul className="list-disc space-y-1 pl-5">
              <li>Chip win cons excel with spell-cycle endgames—track tower HP.</li>
              <li>Bridge pressure wins when you’ve counted key counters from rotation.</li>
              <li>Beatdown thrives after successful elixir trades—stack support wisely.</li>
            </ul>
          </Card>

          <Card title="Counters & Watchouts" icon={AlertTriangle}>
            <ul className="list-disc space-y-1 pl-5">
              <li>Don’t overcommit into buildings; probe first with 2–3 elixir units.</li>
              <li>Track opponent’s small spells—protect squishy swarms accordingly.</li>
              <li>Beware mirrored counters; keep a secondary answer ready.</li>
            </ul>
          </Card>

          <Card title="What’s Coming" icon={Shield}>
            <ul className="list-disc space-y-1 pl-5">
              <li>More defensive cycle decks with reactive spells and cheap resets.</li>
              <li>Meta drift toward flexible dual-lane control as balance shifts.</li>
              <li>Increased value on stuns/resets to neutralize win-con snowballs.</li>
            </ul>
          </Card>

          <Card title="General Tips" icon={Lightbulb}>
            <ul className="list-disc space-y-1 pl-5">
              <li>Count elixir using interaction memory; punish +2 trades instantly.</li>
              <li>Play opposite lane when behind; same lane when up on tempo.</li>
              <li>Cycle spells when safe; avoid giving counter-push value.</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
