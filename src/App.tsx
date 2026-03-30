/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Truck, Waves, Trash2, Sun, Moon, Package, Heart, MapPin, Camera } from "lucide-react";

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
    image: "https://picsum.photos/seed/alley-urban-gta/1200/800",
    character: "https://picsum.photos/seed/woman-khakis/600/800",
    tag: "SHARP EDGES",
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
    image: "https://picsum.photos/seed/scavenge-gta/1200/800",
    character: "https://picsum.photos/seed/man-hoodie/600/800",
    tag: "LIFE SCRAPS",
  },
  {
    id: "chorus",
    title: "CHORUS: THE PRODUCTION",
    mission: "MISSION: NEGOTIATE PHYSICS",
    time: "04:15 PM",
    icon: <Truck className="w-6 h-6" />,
    text: "The SUV was one decent pothole away from coughing up a chair leg and a nervous breakdown. Every time she saw another pile, she lit up. Jumped out. Started digging.",
    subtext: "She needed her hands full. Needed the little jolt of finding, grabbing, deciding, fitting. Talking shit to broken furniture like it owed her respect. I let the circus breathe.",
    commentary: "The Cherokee is the heart of the song. It's the vessel for the chaos. If it holds, we win. If it breaks, we're just two people with a broken chair.",
    bg: "bg-[#2a2b2e]",
    textColor: "text-white",
    accent: "border-white/30",
    graffiti: "STREET GRIT",
    image: "https://picsum.photos/seed/suv-packed-gta/1200/800",
    character: "https://picsum.photos/seed/woman-active/600/800",
    tag: "FULL HOUSE",
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
    image: "https://picsum.photos/seed/pool-night-gta/1200/800",
    character: "https://picsum.photos/seed/woman-dress/600/800",
    tag: "FLUENT IN TROUBLE",
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
    image: "https://picsum.photos/seed/alley-night-gta/1200/800",
    character: "https://picsum.photos/seed/woman-bending/600/800",
    tag: "CINEMATIC BROKE",
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
    image: "https://picsum.photos/seed/urban-dawn-gta/1200/800",
    character: "https://picsum.photos/seed/couple-urban/600/800",
    tag: "CONCRETE GOSPEL",
  },
];

function Scene({ scene, index }: { scene: (typeof scenes)[number]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  const charX = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const muralY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center p-4 md:p-12 sticky top-0 ${scene.bg} ${scene.textColor} transition-colors duration-700 overflow-hidden brick-texture`}
    >
      <div className="absolute inset-0 vignette z-10 pointer-events-none" />

      {/* Mural Background Layer */}
      <motion.div 
        style={{ y: muralY }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <img 
          src={scene.image} 
          alt="" 
          className="w-full h-full object-cover gta-style"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 ${scene.bg} opacity-40 mix-blend-multiply`} />
      </motion.div>

      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-6xl w-full relative z-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
      >
        {/* Text Content */}
        <div className="md:col-span-7 flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-black text-white px-3 py-1 font-mono text-[10px] tracking-tighter uppercase">
                {scene.mission}
              </span>
              <span className="font-mono text-[10px] opacity-60">
                {scene.time}
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display leading-none tracking-tighter text-shadow-mural mb-2">
              {scene.title}
            </h2>
            <div className="font-tag text-[#FF6321] text-2xl rotate-[-3deg] ml-4 graffiti-glow">
              #{scene.tag}
            </div>
          </div>

          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              className="absolute -top-16 -left-8 text-8xl md:text-[12rem] font-graffiti pointer-events-none select-none whitespace-nowrap text-[#FF6321] opacity-10"
            >
              {scene.graffiti}
            </motion.div>
            
            <div className="bg-white/5 backdrop-blur-md p-8 comic-border relative z-10">
              <p className="text-xl md:text-3xl font-bold leading-tight mb-6 uppercase italic">
                {scene.text}
              </p>
              <p className="text-lg md:text-xl opacity-80 font-serif italic leading-relaxed border-t border-current/20 pt-4">
                {scene.subtext}
              </p>
              
              {/* Granular Commentary / Liner Notes */}
              <motion.div 
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: -2 }}
                className="absolute -bottom-12 -right-4 md:-right-12 bg-yellow-100/90 p-4 shadow-xl max-w-[200px] comic-border transform -rotate-2 hidden md:block"
              >
                <span className="text-[10px] font-mono uppercase block mb-1 opacity-50 text-black">Liner Notes:</span>
                <p className="font-tag text-xs text-black leading-tight">
                  {scene.commentary}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Character Portrait */}
        <motion.div 
          style={{ x: charX }}
          className="md:col-span-5 relative hidden md:block"
        >
          <div className="comic-border overflow-hidden rotate-[2deg] bg-black">
            <img 
              src={scene.character} 
              alt="Character" 
              className="w-full h-auto gta-style grayscale-[0.2] contrast-[1.1] saturate-[1.2]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-[#FF6321] text-black px-4 py-2 font-display text-xl rotate-[-5deg] comic-border">
            {scene.graffiti}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  
  return (
    <main className="bg-black relative">
      <div className="grain" />
      
      <div className="fixed top-0 left-0 w-full h-2 z-50 bg-black">
        <motion.div
          className="h-full bg-[#FF6321] origin-left"
          style={{
            scaleX: scrollYProgress,
          }}
        />
      </div>

      <header className="fixed top-0 left-0 w-full p-6 z-40 flex justify-between items-start mix-blend-difference text-white">
        <div className="flex flex-col">
          <div className="font-display text-2xl tracking-tighter uppercase leading-none">
            CONCRETE<br />RHYTHM
          </div>
          <div className="font-mono text-[8px] tracking-[0.4em] uppercase opacity-60 mt-2">
            A PURARECOVERY PRODUCTION
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 font-tag text-lg text-[#FF6321]">
            <MapPin className="w-4 h-4" />
            L.A. GUTTER
          </div>
          <div className="font-mono text-[10px] opacity-50">
            EST. 2026
          </div>
        </div>
      </header>

      {scenes.map((scene, index) => (
        <div key={scene.id}>
          <Scene scene={scene} index={index} />
        </div>
      ))}

      <footer className="h-screen bg-[#000] text-white flex flex-col items-center justify-center p-12 text-center relative overflow-hidden brick-texture">
        <div className="absolute inset-0 vignette z-10" />
        <div className="absolute inset-0 opacity-40 grayscale-[0.5] contrast-[1.2]">
          <img 
            src="https://picsum.photos/seed/urban-night-gta/1920/1080" 
            alt="" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl relative z-20"
        >
          <div className="font-display text-6xl md:text-9xl mb-4 opacity-10 text-shadow-mural">
            RYANREALAF
          </div>
          <h2 className="text-6xl md:text-[10rem] font-display leading-none mb-8 tracking-tighter text-shadow-mural">
            LESS TALK.<br />
            <span className="text-[#FF6321]">MORE HELP.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <div className="h-1 w-32 bg-[#FF6321] comic-border" />
            <p className="text-sm font-mono tracking-[0.8em] uppercase opacity-60">
              PURARECOVERY RYAN — 2026
            </p>
            <div className="flex gap-4 mt-8">
              <div className="graffiti-accent text-5xl -rotate-6 graffiti-glow">CONCRETE GOSPEL</div>
              <div className="graffiti-accent text-5xl rotate-6 text-white opacity-50">STAY REAL</div>
            </div>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
