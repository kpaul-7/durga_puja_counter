"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Projected 2026 Date for Maha Sashti (October 17, 2026)
  const pujoDate = new Date("2026-10-17T00:00:00").getTime();

  // Array of background images
  const images = [
    "/img/1.jpeg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
  ];

  // Countdown Logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = pujoDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [pujoDate]);

  // Slideshow Logic - Cinematic slow crossfade
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(slider);
  }, [images.length]);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current!.pause();
    } else {
      audioRef.current!.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950 font-['Hind_Siliguri'] text-white">
      {/* Custom Animations Injected */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.8;
          }
        }
        .particle {
          animation: float 6s ease-in-out infinite;
        }
        .particle-delayed {
          animation: float 8s ease-in-out infinite 2s;
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>

      {/* Cinematic Background */}
      <div className="fixed inset-0 -z-20 bg-black">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Durga Puja Background"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-in-out ${
              idx === currentImgIdx
                ? "opacity-30 scale-110"
                : "opacity-0 scale-100"
            }`}
          />
        ))}
        {/* Radial Vignette to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(2,6,23,1)_90%)]"></div>
        {/* Top to Bottom gradient for red cinematic lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-transparent to-slate-950"></div>
      </div>

      {/* Floating Light Particles (Sparks/Diyas) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="particle absolute top-1/4 left-1/4 w-3 h-3 bg-amber-400 rounded-full blur-[2px] shadow-[0_0_15px_#fbbf24]"></div>
        <div className="particle-delayed absolute top-1/2 right-1/3 w-4 h-4 bg-orange-500 rounded-full blur-[3px] shadow-[0_0_20px_#f97316]"></div>
        <div className="particle absolute bottom-1/4 left-1/2 w-2 h-2 bg-yellow-300 rounded-full blur-[1px] shadow-[0_0_10px_#fde047]"></div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/audio/dhak.mp3" loop />

      {/* Navbar Area */}
      <nav className="fixed top-0 w-full flex justify-between items-center p-6 lg:px-12 backdrop-blur-md bg-slate-950/50 z-50 border-b border-white/5 shadow-lg">
        <h1 className="text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
          Pujo<span className="text-white"> '26</span>
        </h1>
        <button
          onClick={toggleAudio}
          className="group relative px-6 py-2.5 bg-white/5 border border-amber-500/50 hover:bg-amber-500/10 text-amber-400 font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] flex items-center gap-3 overflow-hidden backdrop-blur-lg"
        >
          {isPlaying ? (
            <span className="relative z-10 flex items-center gap-2">
              <span className="animate-pulse w-2 h-2 bg-red-500 rounded-full"></span>
              Pause Dhak
            </span>
          ) : (
            <span className="relative z-10 flex items-center gap-2">
              <span>🥁</span> Play Dhak
            </span>
          )}
        </button>
      </nav>

      {/* Hero Countdown Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 relative">
        <div className="mb-10 transform hover:scale-105 transition duration-500 cursor-default">
          <h2 className="text-7xl md:text-[9rem] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-500 to-orange-600 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)] pb-2">
            মা আসছেন
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4 opacity-80">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
            <p className="text-xl md:text-2xl text-amber-100 font-light tracking-[0.4em] uppercase">
              The Grand Wait
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
        </div>

        {/* Hyper-Modern Glassmorphism Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto w-full mt-4 z-10">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 group-hover:border-amber-500/30 rounded-3xl p-8 text-center shadow-2xl transform transition hover:-translate-y-2 duration-300">
                <span className="block text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] mb-2 tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-amber-400/80 uppercase text-xs md:text-sm tracking-[0.4em] font-semibold">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scrolling Mantra Banner */}
      <div className="w-full bg-amber-500/10 border-y border-amber-500/20 py-4 overflow-hidden backdrop-blur-md relative z-10">
        <div className="whitespace-nowrap animate-scroll text-amber-200/60 text-xl font-semibold tracking-widest">
          যা দেবী সর্বভূতেষু শক্তিরূপেণ সংস্থিতা, নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ
          নমো নমঃ • YA DEVI SARVABHUTESHU SHAKTI RUPENA SANSTHITA, NAMASTASYAI
          NAMASTASYAI NAMASTASYAI NAMO NAMAH •
        </div>
      </div>

      {/* Content Section: The Essence */}
      <section className="bg-slate-950 text-white py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative">
            <div className="absolute -left-10 -top-10 text-9xl text-white/5 font-serif">
              "
            </div>
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500 leading-tight">
              An Emotion, <br /> Not Just a Festival
            </h2>
            <p className="text-xl leading-relaxed text-slate-300 font-light">
              It begins with the crisp autumn air and the scent of{" "}
              <span className="text-amber-400 font-medium">Shiuli</span>. The
              resonant beats of the Dhak ripple through the city, turning
              strangers into family.
            </p>
            <p className="text-xl leading-relaxed text-slate-300 font-light">
              For five golden days, Kolkata doesn't sleep. It becomes a
              breathing canvas of art, devotion, and sheer euphoria. Get ready
              for <span className="text-amber-400 font-medium">2026</span>.
            </p>
          </div>

          <div className="relative group rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10">
            <img
              src="/img/1.jpeg"
              alt="Durga Idol"
              className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <p className="text-amber-400 tracking-widest text-sm font-bold uppercase mb-2">
                The Mother Returns
              </p>
              <h3 className="text-5xl font-bold text-white drop-shadow-lg">
                শুভ শারদীয়া
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Schedule Section */}
      <section className="py-32 relative z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/20 via-slate-950 to-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white tracking-wide">
              Panjika <span className="text-amber-500">2026</span>
            </h2>
            <p className="text-slate-400 mt-4 text-lg font-light tracking-widest uppercase">
              Mark the days of joy
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                day: "Mahalaya",
                date: "11 Oct",
                desc: "The Awakening of the Goddess",
              },
              {
                day: "Maha Panchami",
                date: "16 Oct",
                desc: "Pandal Hopping Begins",
              },
              {
                day: "Maha Sashti",
                date: "17 Oct",
                desc: "Bodhon - Unveiling the Idol",
              },
              { day: "Maha Saptami", date: "18 Oct", desc: "Kola Bou Snan" },
              {
                day: "Maha Ashtami",
                date: "19 Oct",
                desc: "Pushpanjali & Sandhi Puja",
              },
              {
                day: "Maha Navami",
                date: "20 Oct",
                desc: "The Grand Aarti & Navami Bhog",
              },
              {
                day: "Vijaya Dashami",
                date: "21 Oct",
                desc: "Sindoor Khela & Visarjan",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/5 hover:border-amber-500/50 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  <h4 className="text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.day}
                  </h4>
                  <p className="text-slate-400 text-sm font-light tracking-widest uppercase">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 md:mt-0 relative z-10 flex items-center gap-4">
                  <span className="text-amber-500/50 text-sm font-bold tracking-widest">
                    2026
                  </span>
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all">
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDESIGNED COOL FOOTER with Creator Credits */}
      <footer className="bg-black py-20 text-center border-t border-white/5 relative z-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 text-slate-400">
          <p className="text-sm tracking-[0.3em] uppercase opacity-80 order-2 md:order-1">
            &copy; {new Date().getFullYear()} • Created for the love of Pujo
          </p>

          {/* DYNAMIC & STYLISH CREATOR BADGE */}
          <div className="relative inline-flex items-center gap-3 p-1.5 border border-white/10 rounded-full bg-slate-900/40 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.02)] group order-1 md:order-2">
            {/* The link to your portfolio from original HTML */}
            <a
              href="https://kpaul-7.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 pr-4 text-sm hover:text-amber-400 transition"
            >
              {/* Initials Circle with Glow on Hover */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-orange-600 flex items-center justify-center font-extrabold text-slate-950 text-xl border border-white/10 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-300">
                KP
              </div>
              <div className="text-left">
                <p className="text-white font-medium group-hover:text-amber-300 transition-colors">
                  Crafted by Koushik Paul
                </p>
                <p className="text-amber-500/70 text-xs font-light">
                  View Portfolio &raquo;
                </p>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
