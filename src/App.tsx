/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Truck, Waves, Trash2, Sun, Moon, Package, Heart, MapPin } from "lucide-react";

const scenes = [
  {
    id: "intro",
    title: "VERSE I: THE ALLEY",
    mission: "MISSION: READ THE ROOM",
    time: "12:00 PM",
    icon: <Sun className="w-6 h-6" />,
    text: "Noon light came down hard, no mercy in it, flattening everything into sharp edges and bright walls. An affluent back corridor, polished enough to pretend struggle didn’t exist, but struggle was parked right in the open with the hatch up.",
    subtext: "She was in a fitted tank top and tan cargo khakis, moving things around like she was negotiating with chaos. I watched the air shift, that moment where strangers decide whether they’re going to stay strangers.",
    commentary: "The lighting here is deliberate. High contrast. No shadows to hide in. Just the raw physics of a move in progress.",
    bg: "bg-[#d4c5a9]",
    textColor: "text-[#1a1a1a]",
    accent: "border-[#1a1a1a]",
    graffiti: "RYANREALAF",
    tag: "SHARP EDGES",
  },
  {
    id: "pre-chorus-1",
    title: "PRE-CHORUS: THE WEIGHT",
    mission: "MISSION: GRAVITY CHECK",
    time: "01:15 PM",
    icon: <Package className="w-6 h-6" />,
    text: "Everything we own is just a collection of things we haven't thrown away yet. Boxes stacked like a game of Tetris where the prize is just more heavy lifting.",
    subtext: "The sweat started to bead on her upper lip, but she didn't wipe it. She just kept pushing. I realized then that she wasn't just moving boxes; she was moving a whole life out of the way.",
    commentary: "The physical weight of the objects mirrors the emotional weight of the transition. Every box is a memory boxed up.",
    bg: "bg-[#b8a98f]",
    textColor: "text-black",
    accent: "border-black",
    graffiti: "HEAVY LIFTING",
    tag: "GRAVITY",
  },
  {
    id: "chorus-1",
    title: "CHORUS: THE PRODUCTION",
    mission: "MISSION: NEGOTIATE PHYSICS",
    time: "02:00 PM",
    icon: <Truck className="w-6 h-6" />,
    text: "The SUV was one decent pothole away from coughing up a chair leg and a nervous breakdown. Every time she saw another pile, she lit up. Jumped out. Started digging.",
    subtext: "She needed her hands full. Needed the little jolt of finding, grabbing, deciding, fitting. Talking shit to broken furniture like it owed her respect. I let the circus breathe.",
    commentary: "The Cherokee is the heart of the song. It's the vessel for the chaos. If it holds, we win. If it breaks, we're just two people with a broken chair.",
    bg: "bg-[#2a2b2e]",
    textColor: "text-white",
    accent: "border-white/30",
    graffiti: "STREET GRIT",
    tag: "FULL HOUSE",
  },
  {
    id: "verse2",
    title: "VERSE II: THE SIDE QUEST",
    mission: "MISSION: RELATIVE USEFULNESS",
    time: "02:30 PM",
    icon: <Package className="w-6 h-6" />,
    text: "We started hitting the curbside giveaway piles people leave out when they get tired of owning a version of themselves. Lamps with no shade. Bent little tables. Milk crates. Blankets.",
    subtext: "Random pieces of almost-useful bullshit that somehow become treasure when you’ve lived long enough to know usefulness is relative. I drove. She turned the whole thing into a production.",
    commentary: "Scavenging isn't about the object; it's about the potential. Every milk crate is a shelf in a future that hasn't happened yet.",
    bg: "bg-[#FF6321]",
    textColor: "text-black",
    accent: "border-black/40",
    graffiti: "CONCRETE GOSPEL",
    tag: "LIFE SCRAPS",
  },
  {
    id: "chorus-2",
    title: "CHORUS: THE PRODUCTION (REPRISE)",
    mission: "MISSION: SUSTAINED CHAOS",
    time: "04:15 PM",
    icon: <Truck className="w-6 h-6" />,
    text: "The roof rack was groaning now. Straps humming in the wind like a bass line. We were a rolling monument to 'maybe this will work.'",
    subtext: "She was laughing now, covered in dust and grease, looking at a cracked mirror like it was the Hope Diamond. I started to see what she saw: not junk, but a kit for a new world.",
    commentary: "The repetition of the chorus shows the building momentum. The chaos isn't scary anymore; it's the rhythm.",
    bg: "bg-[#1a1a1a]",
    textColor: "text-[#FF6321]",
    accent: "border-[#FF6321]",
    graffiti: "KIT FOR A NEW WORLD",
    tag: "MOMENTUM",
  },
  {
    id: "verse3",
    title: "VERSE III: THE DETOUR",
    mission: "MISSION: PRIVATE PROPERTY",
    time: "10:45 PM",
    icon: <Waves className="w-6 h-6" />,
    text: "A random swim in somebody else’s pool. Afterward she came back in a black dress. Damp hair. Wet skin. That dress hugging where it needed to hug, the slit doing exactly what a slit is built to do.",
    subtext: "She looked free in a place built on surveillance. The whole block was offended by how unbothered she was. Trouble had finally met somebody fluent in it.",
    commentary: "The shift from khakis to the black dress is the bridge between the work and the reward. The water is the baptism into the night.",
    bg: "bg-[#050505]",
    textColor: "text-[#f0f0f0]",
    accent: "border-[#ff4e00]/40",
    special: "atmosphere",
    graffiti: "UNBOTHERED",
    tag: "FLUENT IN TROUBLE",
  },
  {
    id: "verse4",
    title: "VERSE IV: THE DRIVE",
    mission: "MISSION: NAVIGATION",
    time: "12:30 AM",
    icon: <Moon className="w-6 h-6" />,
    text: "The city lights blurred into long streaks of neon and regret. We drove through the parts of town where the streetlights are just suggestions and the shadows have teeth.",
    subtext: "She had her feet on the dash, humming something I didn't recognize. The SUV felt like a fortress. Outside, the world was loud and hungry. Inside, it was just us and a trunk full of potential.",
    commentary: "The drive is the transition. The city is the audience, but they're not invited to the show.",
    bg: "bg-[#0a0a0a]",
    textColor: "text-white",
    accent: "border-white/10",
    graffiti: "FORTRESS ON WHEELS",
    tag: "NEON REGRET",
  },
  {
    id: "bridge",
    title: "BRIDGE: THE GUTTER",
    mission: "MISSION: MORAL POSTURE",
    time: "01:15 AM",
    icon: <Trash2 className="w-6 h-6" />,
    text: "She’s upside down in a dumpster looking for cans. That black dress riding up with gravity doing its filthy little job, and there I am trying to act like I’ve still got some kind of moral posture left.",
    subtext: "Sexy as hell and absolutely absurd at the same time. Fine in the chaos. Fine in the struggle. Making broke look cinematic and unhinged and alive.",
    commentary: "The dumpster is the lowest point, literally. But it's also the most honest. No pretension. Just gravity and survival.",
    bg: "bg-[#000000]",
    textColor: "text-white",
    accent: "border-white/20",
    graffiti: "DUMPSTER DIVING",
    tag: "CINEMATIC BROKE",
  },
  {
    id: "chorus-final",
    title: "CHORUS: THE PRODUCTION (FINALE)",
    mission: "MISSION: ARRIVAL",
    time: "03:30 AM",
    icon: <Truck className="w-6 h-6" />,
    text: "We finally parked. The SUV let out a long, metallic sigh. We were surrounded by the spoils of the day: the broken, the found, the stolen, and the saved.",
    subtext: "She leaned against the hood, looking at the pile like a conqueror. The production was over, but the story was just starting to get good. We were tired, dirty, and exactly where we needed to be.",
    commentary: "The final chorus is the exhale. The mission is accomplished, but the gospel is just beginning.",
    bg: "bg-[#111]",
    textColor: "text-[#FF6321]",
    accent: "border-[#FF6321]",
    graffiti: "THE EXHALE",
    tag: "CONQUEROR",
  },
  {
    id: "outro",
    title: "OUTRO: THE TRUTH",
    mission: "MISSION: THE CONCRETE GOSPEL",
    time: "04:00 AM",
    icon: <Heart className="w-6 h-6" />,
    text: "Romance ain’t roses or rooftop views. Sometimes it’s cold water, safe parking, a charger cord, snacks in the console, and one person not making your hard night any harder.",
    subtext: "Two people in the same rough weather, finding flashes of beauty in ridiculous places. Less talk. More help. Because concrete beats clever. Always.",
    commentary: "The resolution. It's not a happy ending; it's a functional one. The charger cord is the ultimate love language in this world.",
    bg: "bg-[#f5f2ed]",
    textColor: "text-[#1a1a1a]",
    accent: "border-[#1a1a1a]/30",
    graffiti: "GRIT & GRACE",
    tag: "CONCRETE GOSPEL",
  },
];

function Scene({ scene }: { scene: (typeof scenes)[number] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center p-4 md:p-12 ${scene.textColor} transition-colors duration-700 overflow-hidden brick-texture`}
    >
      <div className="absolute inset-0 vignette z-10 pointer-events-none" />

      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-4xl w-full relative z-20 flex flex-col items-center text-center"
      >
        <div className="flex flex-col items-center w-full">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="bg-black text-white px-3 py-1 font-mono text-[10px] tracking-tighter uppercase">
                {scene.mission}
              </span>
              <span className="font-mono text-[10px] opacity-60">
                {scene.time}
              </span>
            </div>
            <h2 className="text-6xl md:text-9xl font-display leading-none tracking-tighter text-shadow-mural mb-4">
              {scene.title}
            </h2>
            <div className="font-tag text-[#FF6321] text-3xl rotate-[-2deg] graffiti-glow">
              #{scene.tag}
            </div>
          </div>

          <div className="relative w-full">
            <div className="bg-white/5 backdrop-blur-sm p-10 md:p-16 comic-border relative z-10 w-full">
              <p className="text-2xl md:text-5xl font-bold leading-tight mb-8 uppercase italic tracking-tight">
                {scene.text}
              </p>
              <p className="text-xl md:text-2xl opacity-80 font-serif italic leading-relaxed border-t border-current/20 pt-8 max-w-2xl mx-auto">
                {scene.subtext}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    console.log("App component mounted successfully");
  }, []);

  return (
    <main className="bg-black relative min-h-screen">
      <div className="fixed top-4 left-4 z-[9999] bg-red-600 text-white px-2 py-1 text-xs font-mono">
        DEBUG: APP RENDERED
      </div>
      <div className="grain" />
      {scenes.map((scene) => (
        <div key={scene.id} className={`sticky top-0 ${scene.bg}`}>
          <Scene scene={scene} />
        </div>
      ))}
    </main>
  );
}
