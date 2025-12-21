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
      className="py-20 px-4 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto text-gray-900 dark:text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Get in touch with me
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg px-6 py-10 md:px-12">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6">
            Reach out through any channel below — email is the fastest way to hear back.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {contactChannels.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' || label === 'Phone' ? '_self' : '_blank'}
                rel="noreferrer"
                className="group w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-5 py-5 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <div className="flex items-center space-x-4 w-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
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

          <div className="mt-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-6 py-4 text-gray-600 dark:text-gray-400 text-sm">
            Based in India · Typically replies within one business day. Let's build something impactful together.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;