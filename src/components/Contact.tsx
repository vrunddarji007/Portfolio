import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Let's Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Together
          </span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Currently open for new opportunities. Whether you have a question or
          just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-2">
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                  <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon!</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4" 
                  onSubmit={handleSubmit}
                >
                  <input
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-purple-500 text-white placeholder-gray-500 outline-none transition-colors"
                    id="contact-name"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-purple-500 text-white placeholder-gray-500 outline-none transition-colors"
                    id="contact-email"
                  />
                  <textarea
                    required
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-purple-500 text-white placeholder-gray-500 outline-none transition-colors resize-none"
                    id="contact-message"
                  />
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    id="contact-submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Contact info & socials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-400 flex items-center gap-3">
              <Mail className="text-purple-400" size={20} />
              vrunddarji2005@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <SocialLink icon={FaGithub}   href="https://github.com/vrunddarji007" id="social-github" />
              <SocialLink icon={FaLinkedin} href="https://www.linkedin.com/in/vrund-darji-0179742b7/" id="social-linkedin" />
              <SocialLink icon={Mail}       href="mailto:vrunddarji2005@gmail.com" id="social-email" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ icon: Icon, href, id }: { icon: any; href: string; id: string }) {
  return (
    <a
      href={href}
      id={id}
      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
    >
      <Icon size={24} />
    </a>
  );
}
