/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Truck, Waves, Trash2, Sun, Moon, Package, Heart, MapPin, Volume2, VolumeX } from "lucide-react";

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
    title: "CHAPTER II: THE ORBIT",
    mission: "MISSION: ATMOSPHERE",
    time: "12:15 PM",
    icon: <MapPin className="w-6 h-6" />,
    text: "I kept a step back at first. Not scared. Not shy. Just reading the room. She had a whole orbit around her, and I wasn’t about to crash into it all loud and unnecessary.",
    subtext: "I watched her catch sight of me, watched the air shift, watched that moment where strangers decide whether they’re going to stay strangers. Then she started talking, easy as if the silence had already been broken somewhere before I got there.",
    bg: "bg-[#b8a98f]",
    textColor: "text-black",
    accent: "border-black",
    tag: "THE ORBIT",
  },
  {
    id: "chapter-3",
    title: "CHAPTER III: REAL",
    mission: "MISSION: OBSERVATION",
    time: "12:30 PM",
    icon: <Heart className="w-6 h-6" />,
    text: "That was the first thing I liked about her. She didn’t make the moment feel forced. And the second thing was how she looked in it. Not polished. Not posed. Just real.",
    subtext: "Sunlight on her shoulders, stress in the frame, beauty not in spite of the mess but braided right into it. That kind of fine hits harder because it ain’t asking to be admired. It’s too busy surviving.",
    bg: "bg-[#a3957d]",
    textColor: "text-black",
    accent: "border-black",
    tag: "JUST REAL",
  },
  {
    id: "chapter-4",
    title: "CHAPTER IV: RAW ENERGY",
    mission: "MISSION: REALITY CHECK",
    time: "12:45 PM",
    icon: <Sun className="w-6 h-6" />,
    text: "The neighborhood had money in the walls, but the energy under it still felt raw. Pretty surfaces. Pressure underneath. That contradiction sat all over the alley.",
    subtext: "She looked like somebody holding it together with both hands and a little attitude. The kind of woman who could make burden look graceful and make exhaustion look expensive.",
    bg: "bg-[#8e816b]",
    textColor: "text-white",
    accent: "border-white",
    tag: "RAW ENERGY",
  },
  {
    id: "chapter-5",
    title: "CHAPTER V: THE CLICK",
    mission: "MISSION: TACTICAL PIVOT",
    time: "01:00 PM",
    icon: <MapPin className="w-6 h-6" />,
    text: "Then she told me the neighbors were tripping. And that was the click.",
    subtext: "Soon as she said that, my brain didn’t go romantic first. It went tactical. Oh shit. They’re already vocalizing it. They already see you. They already got opinions. And you got all this shit spread out like a yard sale with witnesses.",
    bg: "bg-[#796d59]",
    textColor: "text-white",
    accent: "border-white",
    tag: "THE CLICK",
  },
  {
    id: "chapter-6",
    title: "CHAPTER VI: PRACTICAL MATH",
    mission: "MISSION: EXTRACTION",
    time: "01:15 PM",
    icon: <Package className="w-6 h-6" />,
    text: "That changed the whole temperature for me. In my head I was like, this might be the only reason we’re even spending time together right now, because the clock just got loud.",
    subtext: "I told her straight: “Look, I’m not trying to take over your life, but we gotta get this shit in the SUV and get you outta here.” Not as some hero speech. Just practical math.",
    bg: "bg-[#645947]",
    textColor: "text-white",
    accent: "border-white",
    tag: "PRACTICAL MATH",
  },
  {
    id: "chapter-7",
    title: "CHAPTER VII: THE PIVOT",
    mission: "MISSION: LOGISTICS",
    time: "01:30 PM",
    icon: <Heart className="w-6 h-6" />,
    text: "Maybe that’s the real beginning, if I’m honest. Not the eye contact. Not the sunlight. Not the chemistry.",
    subtext: "The beginning might’ve been that pivot, that moment where attraction had to share the room with logistics. Where the vibe was there, yeah, but survival stepped in and said, cool, now move smart.",
    bg: "bg-[#FF6321]",
    textColor: "text-black",
    accent: "border-black",
    tag: "THE PIVOT",
  },
  {
    id: "chapter-8",
    title: "CHAPTER VIII: SIDE QUEST",
    mission: "MISSION: SIDE QUEST",
    time: "02:00 PM",
    icon: <Package className="w-6 h-6" />,
    text: "As the day rolled on, it stopped being just a conversation and turned into movement. One of those ragged little side quests life throws at you.",
    subtext: "We started hitting the curbside giveaway piles people leave out in decent neighborhoods when they get tired of owning a version of themselves. Lamps. Tables. Milk crates. Blankets. Treasure.",
    bg: "bg-[#e5591e]",
    textColor: "text-black",
    accent: "border-black",
    tag: "SIDE QUEST",
  },
  {
    id: "chapter-9",
    title: "CHAPTER IX: THE PRODUCTION",
    mission: "MISSION: NEGOTIATE PHYSICS",
    time: "03:00 PM",
    icon: <Truck className="w-6 h-6" />,
    text: "I drove. She turned the whole thing into a production. The SUV was already packed so full it looked like it was one pothole away from coughing up a chair leg.",
    subtext: "Every time she saw another pile, she lit up. Jumped out. Started digging. Negotiating with physics. Acting like one more weird-ass object absolutely had to come with us or the whole universe would be incomplete.",
    bg: "bg-[#2a2b2e]",
    textColor: "text-white",
    accent: "border-white",
    tag: "PRODUCTION",
  },
  {
    id: "chapter-10",
    title: "CHAPTER X: THE TASK",
    mission: "MISSION: FOCUS",
    time: "04:30 PM",
    icon: <Package className="w-6 h-6" />,
    text: "But I could see what was really happening. She needed something to chase that wasn’t whatever had been chasing her. She needed her hands full. Needed a task.",
    subtext: "Needed the little jolt of finding, grabbing, deciding, fitting. So I didn’t hit her with no irritated sigh. I waited. Helped load. Rearranged the trunk. Let the circus breathe.",
    bg: "bg-[#1f2022]",
    textColor: "text-white",
    accent: "border-white",
    tag: "THE TASK",
  },
  {
    id: "chapter-11",
    title: "CHAPTER XI: ANIMATED",
    mission: "MISSION: ADMIRATION",
    time: "06:00 PM",
    icon: <Heart className="w-6 h-6" />,
    text: "And that’s when I started wanting her more. She looked damn good in the middle of all that chaos, lit up by nonsense, animated.",
    subtext: "Talking shit to broken furniture like it owed her respect. But it was more than that. It was watching her come alive in the middle of a mess. Watching her laugh. Watching the weight slip off in flashes.",
    bg: "bg-[#1a1a1a]",
    textColor: "text-[#FF6321]",
    accent: "border-[#FF6321]",
    tag: "ANIMATED",
  },
  {
    id: "chapter-12",
    title: "CHAPTER XII: THE DETOUR",
    mission: "MISSION: RECKLESS",
    time: "10:00 PM",
    icon: <Waves className="w-6 h-6" />,
    text: "By the time night came, the whole movie changed color. Then there was that wild detour the night pulled out of nowhere, the kind of move that feels halfway illegal.",
    subtext: "Earlier she’d asked me to park the vehicle in a certain spot. Maybe half an hour later, here she comes ushering me toward the pool area of some random condo like this was all perfectly normal.",
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
    text: "I walk over, and there she is in a black bikini looking crazy good, the kind of good that makes a man immediately aware of every moral principle available to him.",
    subtext: "Now, me? I didn’t get in the pool. Only clothes I had were the hoodie and jeans on my back. But the whole double-standard circus is real. Her in a black bikini reads wild and beautiful. Me? Sir, what the fuck are you doing?",
    bg: "bg-[#000000]",
    textColor: "text-white",
    accent: "border-white",
    tag: "POOLSIDE",
  },
  {
    id: "chapter-14",
    title: "CHAPTER XIV: CONCRETE BEATS CLEVER",
    mission: "MISSION: CREATION",
    time: "11:30 PM",
    icon: <Heart className="w-6 h-6" />,
    text: "And while she swam, I sat there by the pool and started writing. That was where the first draft of “Concrete Beats Clever” got born.",
    subtext: "Right there in real time with chlorine in the air, neighbors judging, and her moving through that water like she didn’t owe the world one ounce of explanation. I played the first edition for her while she was still swimming.",
    bg: "bg-[#0a0a0a]",
    textColor: "text-white",
    accent: "border-white",
    tag: "THE DRAFT",
  },
  {
    id: "chapter-15",
    title: "CHAPTER XV: UNBOTHERED",
    mission: "MISSION: FREEDOM",
    time: "12:00 AM",
    icon: <Moon className="w-6 h-6" />,
    text: "She looked free in a place built on surveillance. Like the whole block was offended by how unbothered she was.",
    subtext: "I’m standing there in a black hoodie, watching her by that water, thinking she looked too good to be real and too real to belong in a fantasy. A random swim in somebody else’s pool. A hard-left turn.",
    bg: "bg-[#111]",
    textColor: "text-[#FF6321]",
    accent: "border-[#FF6321]",
    tag: "UNBOTHERED",
  },
  {
    id: "chapter-16",
    title: "CHAPTER XVI: TACTICAL AGAIN",
    mission: "MISSION: SUPPORT",
    time: "12:30 AM",
    icon: <Package className="w-6 h-6" />,
    text: "And when it was time to go, reality came back in fast. I met her at the pool stairs with a towel and wrapped it around her.",
    subtext: "The neighbors were starting to get uneasy, that nervous little rich-people tension rising in the air. So we hurried. She was trying to get dressed fast, and I stepped in to help because the moment had turned tactical again.",
    bg: "bg-[#1a1a1a]",
    textColor: "text-white",
    accent: "border-white",
    tag: "TACTICAL",
  },
  {
    id: "chapter-17",
    title: "CHAPTER XVII: THE BLACK DRESS",
    mission: "MISSION: GRAVITY",
    time: "01:00 AM",
    icon: <Heart className="w-6 h-6" />,
    text: "That’s when I really saw the black dress. Damp hair. Wet skin. That dress hugging where it needed to hug, slit on the side doing exactly what a slit is built to do.",
    subtext: "And there she was in the middle of all that pressure, still wearing that calm, dangerous little smile like trouble had finally met somebody fluent in it. Then life swung back around to the gutter.",
    bg: "bg-[#222]",
    textColor: "text-white",
    accent: "border-white",
    tag: "THE DRESS",
  },
  {
    id: "chapter-18",
    title: "CHAPTER XVIII: THE GUTTER",
    mission: "MISSION: IRONY",
    time: "01:30 AM",
    icon: <Trash2 className="w-6 h-6" />,
    text: "Fast forward, and I look over and she’s upside down in a dumpster looking for cans. That black dress riding up with gravity doing its filthy little job.",
    subtext: "She was sexy as hell and absolutely absurd at the same time. Fine in the chaos. Fine in the struggle. Dumpster-diving in a dress, making broke look cinematic and unhinged and alive.",
    bg: "bg-[#f5f2ed]",
    textColor: "text-[#1a1a1a]",
    accent: "border-[#1a1a1a]",
    tag: "THE GUTTER",
  },
  {
    id: "chapter-19",
    title: "CHAPTER XIX: THE CONFESSION",
    mission: "MISSION: TRUTH",
    time: "02:00 AM",
    icon: <Heart className="w-6 h-6" />,
    text: "That’s the part I confess. Because by then I wanted one-on-one time bad. Wanted the errands dead. Wanted the curbside scavenger hunt over.",
    subtext: "Wanted the SUV parked somewhere quiet with the dashboard glow low. Wanted fries in the front seat. Wanted her laugh closer. Wanted her thigh near mine. Wanted the version of the night where the noise falls away.",
    bg: "bg-[#000]",
    textColor: "text-[#FF6321]",
    accent: "border-[#FF6321]",
    tag: "CONFESSION",
  },
  {
    id: "chapter-20",
    title: "CHAPTER XX: THE TEST",
    mission: "MISSION: DISCIPLINE",
    time: "02:30 AM",
    icon: <Package className="w-6 h-6" />,
    text: "But she was still moving. Still grabbing one more thing. Still feeding the trunk. Still staying in motion in the way some people do when stillness feels too close to the edge.",
    subtext: "The real test was whether I could want her without turning that want into another burden she had to manage. So I chilled. Grabbed the box. Shifted the bags. Kept the hunger in my mouth and the discipline in my hands.",
    bg: "bg-[#1a1a1a]",
    textColor: "text-white",
    accent: "border-white",
    tag: "THE TEST",
  },
  {
    id: "chapter-21",
    title: "CHAPTER XXI: ROMANCE",
    mission: "MISSION: DEFINITION",
    time: "03:30 AM",
    icon: <Heart className="w-6 h-6" />,
    text: "Because sometimes romance ain’t roses or rooftop views. Sometimes it’s a black dress in a dumpster. Sometimes it’s wet hair by a stolen pool.",
    subtext: "Sometimes it’s cold water, safe parking, a charger cord, snacks in the console, and one person not making your hard night any harder. Not some fake-deep fairytale. Just two people in the same rough weather.",
    bg: "bg-[#222]",
    textColor: "text-white",
    accent: "border-white",
    tag: "ROMANCE",
  },
  {
    id: "chapter-22",
    title: "CHAPTER XXII: THE TRUTH",
    mission: "MISSION: CONCRETE GOSPEL",
    time: "04:00 AM",
    icon: <MapPin className="w-6 h-6" />,
    text: "Noon in the alley. Afternoon in the free piles. Night by the pool. Night in the dumpster. Night in the parked SUV with too much stuff in the back and too much tension in the front.",
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
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const audio = document.getElementById("background-audio") as HTMLAudioElement;
    if (audio) {
      if (audio.paused) {
        audio.play().catch(e => console.error("Audio play failed:", e));
      }
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  return (
    <main className="bg-[#0a0a0a] relative min-h-screen overflow-x-hidden">
      <div className="grain" />
      <div className="fixed top-4 right-4 z-50">
        <button onClick={toggleMute} className="p-2 bg-black rounded-full text-white">
          {isMuted ? <VolumeX /> : <Volume2 />}
        </button>
      </div>
      {scenes.map((scene) => (
        <div key={scene.id} className={`sticky top-0 ${scene.bg} relative min-h-screen`}>
          <Scene scene={scene} />
        </div>
      ))}
    </main>
  );
}
