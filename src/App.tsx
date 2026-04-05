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
    subtext: "This alley looked too clean for the kind of truth parked in it. Walls bright like money thought that made it innocent. But there she was with the hatch up and life half-spilled out, making the whole polished block look fake by comparison. Some women arrive. Some women expose the set.",
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
    subtext: "Don’t come in loud. Don’t clown the moment. She had that field around her, that quiet pull. Not loud-girl energy. Not “look at me” energy. More dangerous than that. The kind that makes you want to move carefully because one wrong step and the whole thing folds shut.",
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
    subtext: "She wasn’t pretty in that disposable, internet-thirst way. She was real fine. Pressure fine. Surviving fine. The kind of fine that got fatigue in the face and still somehow makes the light look lucky to land on it. That shit hits harder than polished ever could.",
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
    subtext: "The block had money, but the air had nerves. Rich places love pretending tension is something poor people bring with them, like fear ain’t built into the architecture too. She wore that contradiction perfectly. Grace on the surface. Strain underneath. Like if elegance had to fistfight its way through the day.",
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
    subtext: "Soon as she said the neighbors were tripping, my chest split open into two jobs. One part of me still caught on how good she looked. The other part went straight into situational math. That’s how this kind of shit works. Desire don’t cancel danger. They just start sharing oxygen.",
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
    subtext: "I wasn’t trying to be captain-save-anything. That role usually just means a man found a flattering way to center himself. Nah. This was simpler. Too much of her world was outside the vehicle. Too many eyes were already licking their chops. If I was gonna be in this story at all, I needed to make myself useful before I made myself memorable.",
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
    subtext: "That was the first real intimate moment. Not the glance. Not the chemistry. The pivot. The second where I stopped being some random man in the scene and started being a steady hand inside it. That’s the shit that catches me. Not fantasy. Function with feeling in it.",
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
    subtext: "The curbside piles felt like suburban confessionals. Rich folks setting old selves on the curb and calling it decluttering. And there we were drifting through it like two broke little outlaws with chemistry and bad storage capacity. Nothing sexy about it on paper. Which is exactly why it got sexy in real life.",
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
    subtext: "She made a whole damn event out of roadside nonsense. Every bent lamp got treated like a divine appointment. Every weird little crate like it held state secrets. And I’m sitting there watching her light up over junk like it’s the prettiest kind of insanity I’ve seen all week. Maybe all year.",
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
    subtext: "This wasn’t about the stuff. I could see that plain. This was her keeping her mind one reach ahead of whatever was trying to drag it under. Busy hands. Fast choices. Tiny absurd victories. Sometimes healing don’t look holy. Sometimes it look like arguing with a broken side table like that bitch is coming home with us.",
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
    subtext: "That’s when she started getting under my skin for real. Not when she looked good. When she got animated. When she laughed. When she talked shit to the furniture. When the heaviness broke in flashes and I got to see what her face did when life loosened its grip for a second. That kind of glimpse will fuck a man up.",
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
    subtext: "The night took a hard left like it had something filthy and beautiful to prove. One minute we in regular chaos, next minute I’m being led somewhere I definitely wasn’t invited by the owners of anything. Some nights don’t unfold. They lunge.",
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
    subtext: "That black bikini was straight-up disrespectful to my self-control. She looked like temptation got tired of being metaphor and decided to show skin. And me, dry on the sidelines in a hoodie and jeans, looking like restraint in human form while my brain was absolutely not behaving like a gentleman behind the curtain.",
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
    subtext: "That song came out of me because it had to. Chlorine in the air, neighbors side-eyeing from the dark, her body moving through stolen water like she paid rent in that moonlight. I wasn’t writing about her later. I was writing because later had already arrived and it was standing there in a black bikini smiling at surveillance.",
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
    subtext: "That smile by the pool was nasty work. Not nasty like cheap. Nasty like effective. Like she knew every dirty look was bouncing off and landing nowhere. That kind of unbothered is erotic. Not because it asks for attention, but because it denies power to the people most addicted to holding it.",
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
    subtext: "Then the perimeter tightened. You could feel it. That little suburban panic hum. The ancient hymn of property owners sensing unlicensed freedom. So it was back to movement. Back to timing. Back to helping without fumbling. Romance in my world don’t always get violins. Sometimes it gets a towel and urgency.",
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
    subtext: "Helping her into that black dress should’ve been illegal under at least three moral codes. Wet skin, damp hair, fabric fighting to settle where it belonged, me close enough to catch the shape of everything and still trying to act like I had any spiritual commitment to behaving normal. That dress didn’t just fit. It testified.",
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
    subtext: "And then the universe, because it likes to keep lust humble, threw her upside down in a dumpster looking for cans. Black dress hiked up, slit showing more, whole moment raw as hell. And somehow the sexy didn’t die. It got dirtier. Better. More honest. That’s the lane right there. Not polished romance. Gutter desire with receipts.",
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
    subtext: "Yeah, I wanted her. Bad enough that the whole errand routine started feeling like interference. Wanted the trunk shut. Wanted the world to fall back. Wanted one little sealed pocket of night with her close enough to change my breathing. Wanted the kind of silence that don’t feel empty because the tension already filled it up.",
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
    subtext: "But that’s the line. Anybody can want. Hell, animals want. The real test is whether your wanting got manners. Whether it can burn without spilling. Whether you can look at a woman in a black dress climbing through a dumpster and still be the kind of man who lifts the box instead of adding weight to her shoulders.",
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
    subtext: "That’s gutter romance to me. Not flowers. Not rooftop champagne. Not all that expensive, overlit bullshit. I’m talking cold water in the cup holder, safe parking, charger cord, snacks, quiet, and a man who knows how to carry the moment without trying to own it. Dirty setting. Tender moves. Heat with discipline.",
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
    subtext: "That was the whole song before the song even knew its own name. Noon heat. Alley tension. Curbside treasure hunts. Stolen-pool temptation. Black dress chaos. Dumpster lust. Dashboard longing. Everything rough. Everything breathing. And the truth sat there simple as ever: the realest love ain’t always pretty, but it damn sure knows how to hold weight.",
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
