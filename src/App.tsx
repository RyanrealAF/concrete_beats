/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Truck, Waves, Trash2, Sun, Moon, Package, Heart, MapPin } from "lucide-react";

const scenes = [
  {
    id: "chapter-1",
    title: "CHAPTER I: THE ALLEY",
    mission: "MISSION: READ THE ROOM",
    time: "12:00 PM",
    icon: <Sun className="w-6 h-6" />,
    text: "It started in the kind of alley that looked too clean to hold real life. Noon light came down hard, no mercy in it, flattening everything into sharp edges and bright walls.",
    subtext: "Affluent little back corridor, polished enough to pretend struggle didn’t exist there, but struggle was parked right in the open with the hatch up. She was by the SUV in a fitted tank top and tan cargo khakis.",
    bg: "bg-[#d4c5a9]",
    textColor: "text-[#1a1a1a]",
    accent: "border-[#1a1a1a]",
    tag: "SHARP EDGES",
  },
  {
    id: "chapter-2",
    title: "CHAPTER II: CHAOS",
    mission: "MISSION: NEGOTIATE",
    time: "12:10 PM",
    icon: <Package className="w-6 h-6" />,
    text: "She was moving things around like she was trying to negotiate with chaos instead of beat it. Little quick motions. Little acts of order.",
    subtext: "The kind people do when life won’t stay stacked unless they force it. I kept a step back at first. Not scared. Not shy. Just reading the room.",
    bg: "bg-[#b8a98f]",
    textColor: "text-black",
    accent: "border-black",
    tag: "NEGOTIATION",
  },
  {
    id: "chapter-3",
    title: "CHAPTER III: THE ORBIT",
    mission: "MISSION: ATMOSPHERE",
    time: "12:15 PM",
    icon: <MapPin className="w-6 h-6" />,
    text: "She had a whole orbit around her, and I wasn’t about to crash into it all loud and unnecessary. I watched her catch sight of me, watched the air shift.",
    subtext: "Watched that moment where strangers decide whether they’re going to stay strangers. Then she started talking, easy as if the silence had already been broken somewhere before I got there.",
    bg: "bg-[#a3957d]",
    textColor: "text-black",
    accent: "border-black",
    tag: "THE ORBIT",
  },
  {
    id: "chapter-4",
    title: "CHAPTER IV: THE RHYTHM",
    mission: "MISSION: ALIGNMENT",
    time: "12:20 PM",
    icon: <Heart className="w-6 h-6" />,
    text: "I leaned into her vibe instead of dragging my own into the scene. Let her set the rhythm. Met her there.",
    subtext: "That was the first thing I liked about her. She didn’t make the moment feel forced. And the second thing was how she looked in it. Not polished. Not posed. Just real.",
    bg: "bg-[#8e816b]",
    textColor: "text-white",
    accent: "border-white",
    tag: "THE RHYTHM",
  },
  {
    id: "chapter-5",
    title: "CHAPTER V: SURVIVAL",
    mission: "MISSION: REALITY CHECK",
    time: "12:30 PM",
    icon: <Sun className="w-6 h-6" />,
    text: "Sunlight on her shoulders, stress in the frame, beauty not in spite of the mess but braided right into it.",
    subtext: "That kind of fine hits harder because it ain’t asking to be admired. It’s too busy surviving. The neighborhood had money in the walls, but the energy under it still felt raw.",
    bg: "bg-[#796d59]",
    textColor: "text-white",
    accent: "border-white",
    tag: "SURVIVING",
  },
  {
    id: "chapter-6",
    title: "CHAPTER VI: CONTRADICTION",
    mission: "MISSION: MORAL POSTURE",
    time: "12:45 PM",
    icon: <MapPin className="w-6 h-6" />,
    text: "Pretty surfaces. Pressure underneath. That contradiction sat all over the alley. And it sat on her too.",
    subtext: "She looked like somebody holding it together with both hands and a little attitude. The kind of woman who could make burden look graceful and make exhaustion look expensive.",
    bg: "bg-[#645947]",
    textColor: "text-white",
    accent: "border-white",
    tag: "RAW ENERGY",
  },
  {
    id: "chapter-7",
    title: "CHAPTER VII: THE SIDE QUEST",
    mission: "MISSION: SIDE QUEST",
    time: "01:30 PM",
    icon: <Package className="w-6 h-6" />,
    text: "As the day rolled on, it stopped being just a conversation and turned into movement. One of those ragged little side quests life throws at you.",
    subtext: "We started hitting the curbside giveaway piles people leave out in decent neighborhoods when they get tired of owning a version of themselves. Lamps. Tables. Milk crates. Blankets.",
    bg: "bg-[#FF6321]",
    textColor: "text-black",
    accent: "border-black",
    tag: "SIDE QUEST",
  },
  {
    id: "chapter-8",
    title: "CHAPTER VIII: TREASURE",
    mission: "MISSION: RELATIVE USEFULNESS",
    time: "02:15 PM",
    icon: <Trash2 className="w-6 h-6" />,
    text: "Random pieces of almost-useful bullshit that somehow become treasure when you’ve lived long enough to know usefulness is relative.",
    subtext: "I drove. She turned the whole thing into a production. The SUV was already packed so full it looked like it was one decent pothole away from coughing up a chair leg.",
    bg: "bg-[#e5591e]",
    textColor: "text-black",
    accent: "border-black",
    tag: "TREASURE",
  },
  {
    id: "chapter-9",
    title: "CHAPTER IX: THE PRODUCTION",
    mission: "MISSION: NEGOTIATE PHYSICS",
    time: "03:00 PM",
    icon: <Truck className="w-6 h-6" />,
    text: "Every time she saw another pile, she lit up. Jumped out. Started digging. Negotiating with physics.",
    subtext: "Acting like one more weird-ass object absolutely had to come with us or the whole universe would be incomplete. From the sidewalk, we probably looked ridiculous.",
    bg: "bg-[#2a2b2e]",
    textColor: "text-white",
    accent: "border-white",
    tag: "PRODUCTION",
  },
  {
    id: "chapter-10",
    title: "CHAPTER X: THE CHASE",
    mission: "MISSION: FOCUS",
    time: "04:30 PM",
    icon: <Package className="w-6 h-6" />,
    text: "She needed something to chase that wasn’t whatever had been chasing her. She needed her hands full. Needed a task.",
    subtext: "Needed the little jolt of finding, grabbing, deciding, fitting. So I didn’t hit her with no irritated sigh. I waited. Helped load. Let the circus breathe.",
    bg: "bg-[#1f2022]",
    textColor: "text-white",
    accent: "border-white",
    tag: "THE CHASE",
  },
  {
    id: "chapter-11",
    title: "CHAPTER XI: THE WANT",
    mission: "MISSION: OBSERVATION",
    time: "06:00 PM",
    icon: <Heart className="w-6 h-6" />,
    text: "And that’s when I started wanting her more. She looked damn good in the middle of all that chaos, lit up by nonsense, animated.",
    subtext: "Talking shit to broken furniture like it owed her respect. But it was more than that. It was watching her come alive in the middle of a mess. Watching her laugh.",
    bg: "bg-[#1a1a1a]",
    textColor: "text-[#FF6321]",
    accent: "border-[#FF6321]",
    tag: "THE WANT",
  },
  {
    id: "chapter-12",
    title: "CHAPTER XII: THE DETOUR",
    mission: "MISSION: RECKLESS",
    time: "10:00 PM",
    icon: <Waves className="w-6 h-6" />,
    text: "By the time night came, the whole movie changed color. Somewhere in the dark there was that wild detour, the kind of reckless little moment that feels illegal.",
    subtext: "A random swim in somebody else’s pool. Not some planned glamorous scene. Just one of those hard-left turns the night takes when it decides it’s got its own agenda.",
    bg: "bg-[#050505]",
    textColor: "text-white",
    accent: "border-white",
    tag: "THE DETOUR",
  },
  {
    id: "chapter-13",
    title: "CHAPTER XIII: POOLSIDE",
    mission: "MISSION: SURVEILLANCE",
    time: "11:00 PM",
    icon: <Moon className="w-6 h-6" />,
    text: "Afterward she came back in a black dress. Damp hair. Wet skin. That dress hugging where it needed to hug, slit on the side doing exactly what a slit is built to do.",
    subtext: "She had that look on her face too, that calm, dangerous little smile like trouble had finally met somebody fluent in it. She looked free in a place built on surveillance.",
    bg: "bg-[#000000]",
    textColor: "text-white",
    accent: "border-white",
    tag: "POOLSIDE",
  },
  {
    id: "chapter-14",
    title: "CHAPTER XIV: THE GUTTER",
    mission: "MISSION: GRAVITY",
    time: "12:30 AM",
    icon: <Trash2 className="w-6 h-6" />,
    text: "Then life, because it loves irony, swung back around to the gutter. Fast forward, and I look over and she’s upside down in a dumpster looking for cans.",
    subtext: "That black dress riding up with gravity doing its filthy little job, the slit opening wider as she bends, and there I am trying to act like I’ve still got some kind of moral posture left.",
    bg: "bg-[#0a0a0a]",
    textColor: "text-white",
    accent: "border-white",
    tag: "THE GUTTER",
  },
  {
    id: "chapter-15",
    title: "CHAPTER XV: THE CONFESSION",
    mission: "MISSION: TRUTH",
    time: "01:30 AM",
    icon: <Heart className="w-6 h-6" />,
    text: "That’s the part I confess. Because by then I wanted one-on-one time bad. Wanted the errands dead. Wanted the curbside scavenger hunt over.",
    subtext: "Wanted the version of the night where the noise falls away and what’s left is just heat, breath, and whatever truth shows up when nobody’s performing anymore.",
    bg: "bg-[#111]",
    textColor: "text-[#FF6321]",
    accent: "border-[#FF6321]",
    tag: "CONFESSION",
  },
  {
    id: "chapter-16",
    title: "CHAPTER XVI: THE TEST",
    mission: "MISSION: DISCIPLINE",
    time: "02:30 AM",
    icon: <Package className="w-6 h-6" />,
    text: "But she was still moving. Still grabbing one more thing. Still feeding the trunk. Still staying in motion in the way some people do when stillness feels too close to the edge.",
    subtext: "And that was the test. Not whether I wanted her. Of course I wanted her. The real test was whether I could want her without turning that want into another burden she had to manage.",
    bg: "bg-[#1a1a1a]",
    textColor: "text-white",
    accent: "border-white",
    tag: "THE TEST",
  },
  {
    id: "chapter-17",
    title: "CHAPTER XVII: THE CHILL",
    mission: "MISSION: SUPPORT",
    time: "03:00 AM",
    icon: <Truck className="w-6 h-6" />,
    text: "So I chilled. Grabbed the box. Shifted the bags. Made room in the back. Helped load the cans, the junk, the random relics the day had coughed up.",
    subtext: "Kept the hunger in my mouth and the discipline in my hands. Let the night be what it needed to be instead of what I might’ve preferred it to become.",
    bg: "bg-[#222]",
    textColor: "text-white",
    accent: "border-white",
    tag: "THE CHILL",
  },
  {
    id: "chapter-18",
    title: "CHAPTER XVIII: ROMANCE",
    mission: "MISSION: DEFINITION",
    time: "03:30 AM",
    icon: <Heart className="w-6 h-6" />,
    text: "Because sometimes romance ain’t roses or rooftop views. Sometimes it’s a black dress in a dumpster. Sometimes it’s wet hair by a stolen pool.",
    subtext: "Sometimes it’s cold water, safe parking, a charger cord, snacks in the console, and one person not making your hard night any harder.",
    bg: "bg-[#f5f2ed]",
    textColor: "text-[#1a1a1a]",
    accent: "border-[#1a1a1a]",
    tag: "ROMANCE",
  },
  {
    id: "chapter-19",
    title: "CHAPTER XIX: THE TRUTH",
    mission: "MISSION: CONCRETE GOSPEL",
    time: "04:00 AM",
    icon: <MapPin className="w-6 h-6" />,
    text: "Not some fake-deep fairytale. Not a soft-focus lie. Just two people in the same rough weather, finding flashes of beauty in ridiculous places.",
    subtext: "And through all of it, the truth stayed simple. Less talk. More help. Because concrete beats clever. Always.",
    bg: "bg-[#000]",
    textColor: "text-[#FF6321]",
    accent: "border-[#FF6321]",
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
      className={`relative min-h-screen flex flex-col items-center justify-center p-4 md:p-12 ${scene.textColor} transition-colors duration-700 overflow-hidden brick-texture`}
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
  return (
    <main className="bg-[#0a0a0a] relative min-h-screen overflow-x-hidden">
      <div className="grain" />
      {scenes.map((scene) => (
        <div key={scene.id} className={`sticky top-0 ${scene.bg} relative min-h-screen`}>
          <Scene scene={scene} />
        </div>
      ))}
    </main>
  );
}
