import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const contactChannels = [
  {
    label: 'Email',
    value: 'manmadhansiva2005@gmail.com',
    href: 'mailto:manmadhansiva2005@gmail.com',
    icon: Mail
  },
  {
    label: 'Phone',
    value: '+91 93632 12045',
    href: 'tel:+919363212045',
    icon: Phone
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com',
    href: 'https://www.linkedin.com/in/manmathan-s-2282ab2a0/',
    icon: Linkedin
  },
  {
    label: 'GitHub',
    value: 'github.com',
    href: 'https://github.com/SMANMATHAN',
    icon: Github
  }
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-[#e5f0ff] via-[#cdd9ff] to-[#b5c4ff] dark:from-[#0e10a5] dark:via-[#352766] dark:to-[#311b7e]"
    >
      <div className="max-w-5xl mx-auto text-gray-900 dark:text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-white via-slate-50 to-white dark:from-[#071f82] dark:via-[#081237] dark:to-[#0a1749] rounded-[20px] border border-white/10 shadow-[0_20px_60px_rgba(2,6,23,0.7)] px-6 py-10 md:px-12">
          <p className="text-base sm:text-lg text-gray-700 dark:text-white/80 leading-relaxed max-w-3xl">
            Reach out through any channel below — email is the fastest way to hear back.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {contactChannels.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' || label === 'Phone' ? '_self' : '_blank'}
                rel="noreferrer"
                className="group w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-white/20 bg-white/80 dark:bg-white/5 px-5 py-5 hover:bg-white/90 dark:hover:bg-white/10 transition"
              >
                <div className="flex items-center space-x-4 w-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/60 dark:bg-white/10 flex items-center justify-center text-blue-700 dark:text-white/80 group-hover:text-blue-900 dark:group-hover:text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-white/50">
                      {label}
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white break-words">
                      {value}
                    </p>
                  </div>
                </div>
                {/* <span className="text-sm text-gray-500 dark:text-white/40 group-hover:text-gray-700 dark:group-hover:text-white/70 transition">
                  ↗
                </span> */}
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/20 bg-white/80 dark:bg-white/5 px-6 py-4 text-gray-700 dark:text-white/70 text-sm">
            Based in India · Typically replies within one business day. Let's build something impactful together.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;