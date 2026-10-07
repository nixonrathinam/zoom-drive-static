import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Zoom Drive! I have a question.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
    window.open(
      `https://wa.me/917538822706?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0D0D0D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#FF0033] text-xs font-bold uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-[#FF0033]">Zoom Drive</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Have questions about fleet availability, long-term rentals, or custom tours? Reach out to our 24/7 team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details & Google Maps Frame */}
          <div className="space-y-6">
            <div className="bg-[#171717] border border-[#FF0033]/30 p-6 rounded-2xl space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white border-b border-gray-800 pb-3">
                Headquarters & Reach
              </h3>

              <div className="space-y-4 text-sm text-gray-300">
                <a 
                  href="tel:+917538822706" 
                  className="flex items-center gap-4 p-3 bg-[#0D0D0D] border border-gray-800 rounded-xl hover:border-[#FF0033] transition-all group"
                >
                  <div className="w-10 h-10 bg-[#FF0033]/20 rounded-lg flex items-center justify-center text-[#FF0033] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Direct Hotline (Phone Dialer)</span>
                    <strong className="text-white text-base group-hover:text-[#FF0033] transition-colors">+91 75388 22706</strong>
                  </div>
                </a>

                <a 
                  href={`https://wa.me/917538822706?text=${encodeURIComponent("Hi Zoom Drive, I am interested to book a car. Please share details and availability!")}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 bg-[#0D0D0D] border border-gray-800 rounded-xl hover:border-emerald-500 transition-all group"
                >
                  <div className="w-10 h-10 bg-emerald-950/60 rounded-lg flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">WhatsApp Support (Instant Chat)</span>
                    <strong className="text-emerald-400 text-base">+91 75388 22706</strong>
                  </div>
                </a>

                <a 
                  href="mailto:support@zoomdrive.com" 
                  className="flex items-center gap-4 p-3 bg-[#0D0D0D] border border-gray-800 rounded-xl hover:border-[#FF0033] transition-all group"
                >
                  <div className="w-10 h-10 bg-[#FF0033]/20 rounded-lg flex items-center justify-center text-[#FF0033] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Email Enquiry</span>
                    <strong className="text-white text-base group-hover:text-[#FF0033] transition-colors">support@zoomdrive.com</strong>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/zoomdrive_?utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-3 bg-[#0D0D0D] border border-gray-800 rounded-xl hover:border-pink-500 transition-all group"
                >
                  <div className="w-10 h-10 bg-gradient-to-tr from-rose-600 via-rose-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Instagram Official Page</span>
                    <strong className="text-pink-400 text-base group-hover:underline">@zoomdrive_</strong>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/e9GHdn6TZ7T4HeJz7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 bg-[#0D0D0D] border border-gray-800 rounded-xl hover:border-[#FF0033] transition-all group"
                >
                  <div className="w-10 h-10 bg-[#FF0033]/20 rounded-lg flex items-center justify-center text-[#FF0033] group-hover:scale-110 transition-transform shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 block font-medium">Main Hub Location</span>
                      <span className="text-[11px] text-[#FF0033] font-semibold group-hover:underline flex items-center gap-1">Open in Maps &rarr;</span>
                    </div>
                    <span className="text-white font-medium text-sm">Zoom Drive Hub, Chennai - Trichy Road (Old NH45), Tiruchirappalli, Tamil Nadu 620002</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Frame */}
            <div className="bg-[#171717] border border-[#FF0033]/30 rounded-2xl overflow-hidden shadow-xl h-64 relative group">
              <iframe
                title="Zoom Drive Location Map - Tiruchirappalli Hub"
                src="https://maps.google.com/maps?q=Zoom%20Drive%20Hub%2C%20Chennai%20-%20Trichy%20Road%20(Old%20NH45)%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620002&hl=en&z=16&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
              <a
                href="https://maps.app.goo.gl/e9GHdn6TZ7T4HeJz7"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/85 hover:bg-[#FF0033] text-white text-xs font-bold rounded-lg border border-gray-700 transition-colors shadow-lg flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FF0033]" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#171717] border border-[#FF0033]/30 p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">Send Us a Message</h3>
            <p className="text-gray-400 text-xs mb-6">Fill out the form below and our rental team will get back to you within 15 minutes.</p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#FF0033]/20 border-2 border-[#FF0033] rounded-full flex items-center justify-center mx-auto text-[#FF0033]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-gray-300 text-sm max-w-sm mx-auto">
                  Your message is ready in WhatsApp. Review it and tap Send to contact our team.
                </p>
                <a
                  href={`https://wa.me/917538822706?text=${encodeURIComponent(`Hi Zoom Drive! I have a question.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs"
                >
                  Open WhatsApp
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-[#FF0033] hover:bg-[#CC0029] text-white font-bold rounded-xl text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-[#FF0033] text-white text-sm rounded-xl p-3 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-[#FF0033] text-white text-sm rounded-xl p-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-[#FF0033] text-white text-sm rounded-xl p-3 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                    Message / Special Request *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your rental requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-[#FF0033] text-white text-sm rounded-xl p-3 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF0033] via-[#E11D48] to-[#CC0029] hover:from-[#E11D48] hover:to-[#B91C1C] text-white font-extrabold py-3.5 rounded-xl transition-all shadow-xl shadow-[#FF0033]/20 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Contact Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
