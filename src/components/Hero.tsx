import React, { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Mail, Phone } from 'lucide-react';
import DirectEyeContact from '../assests/images/EyeContactOnLap.png';


const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = ['Software Engineer', 'Full Stack Developer', 'Problem Solver', ''];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(typeWriter, 100);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 2000);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        charIndex--;
        timeout = setTimeout(typeWriter, 50);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        timeout = setTimeout(typeWriter, 500);
      }
    };

    timeout = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handleViewResume = () => {
    if (typeof window !== 'undefined') {
      window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 text-gray-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-32 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl"></div>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)' }}></div>
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse gap-14 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full space-y-10 lg:w-[56%]">
          <div className="space-y-5">
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">
              Hi, I'm <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">MANMATHAN S</span>
            </h1>
            <div className="flex items-center gap-2 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl">
              <span>{displayText}</span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400"></span>
            </div>
            <p className="max-w-xl text-base text-slate-700 dark:text-slate-300 sm:text-lg">
              A multidisciplinary full stack developer and ML enthusiast blending clean engineering with meaningful design. I build production-grade AI
              products, lead teams with empathy, and turn complex ideas into beautiful, usable software.
            </p>
          </div>

          <div className="grid gap-2 text-sm sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-3 backdrop-blur">
              <Mail className="h-5 w-5 text-sky-500"/>
              <div>
                <span className="block text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Email
                </span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  manmadhansiva2005@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-6 py-4 backdrop-blur">
              <Phone className="h-5 w-5 text-sky-500" />
              <div>
                <span className="block text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Mobile
                </span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  +91 9363212045
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleViewResume}
              className="group inline-flex items-center gap-3 rounded-full border border-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 px-10 py-3 font-semibold shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40"
            >
              <span className="flex items-center gap-3">
                <FileText className="h-5 w-5" />
                <span>Click to View Resume</span>
              </span>
            </button>

            <div className="flex items-center gap-3 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-5 py-3 backdrop-blur">
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Connect with me
              </span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/SMANMATHAN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-800/90 p-3 text-white transition-all duration-300 hover:bg-slate-700/90 hover:shadow-lg hover:shadow-slate-900/40"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/manmathan-s-2282ab2a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-sky-500 p-3 text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/40"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-[50%] mt-7">
          <div className="absolute inset-4 rounded-[3rem] border border-white/20"></div>
          <div className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-r from-sky-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_30px_120px_-45px_rgba(56,189,248,0.55)]">
            <div className="relative p-6 sm:p-4">
              <div className="relative overflow-hidden rounded-[2.4rem] border border-white/20 bg-slate-900/60">
                {/* soft light at top and bottom of the image */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/35 via-transparent to-transparent dark:from-sky-500/20" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/35 via-transparent to-transparent dark:from-purple-500/25" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/15"></div>
                <img
                  src={DirectEyeContact}
                  alt="Portrait of Manmathan"
                  className="relative h-[500px] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-[1.3fr_1fr]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;