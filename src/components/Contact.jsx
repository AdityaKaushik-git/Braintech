import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, MessageSquare } from 'lucide-react';
import { academy, courses } from '../data/academyData';
import ScrollReveal from './ScrollReveal';

const INITIAL = { name: '', phone: '', email: '', course: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number';
  }
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address';
  }
  return errors;
}

function Field({ label, id, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}{required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-500 flex items-center gap-1" role="alert">
          <AlertCircle size={12} />{error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: undefined }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // NOTE: Replace this dummy key with your actual Web3Forms Access Key
      // You can get one for free at https://web3forms.com/
      const access_key = "30577049-89a7-4ffa-b74a-823ee35eab3c";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: access_key,
          subject: "New Website Enquiry - Braintech Academy",
          from_name: form.name,
          name: form.name,
          phone: form.phone,
          email: form.email || "Not provided",
          course: form.course || "Not specified",
          message: form.message || "No additional message"
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setForm(INITIAL);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Failed to send enquiry. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    ...(!academy.phone.includes('XXXXXXXXXX') ? [{
      href: `tel:${academy.phone}`, icon: Phone, label: 'Call Us', value: academy.phone,
      hoverClass: 'group-hover:text-[#0F7B10]', waBg: false,
    }] : []),
    ...(!academy.whatsapp.includes('XXXXXXXXXX') ? [{
      href: `https://wa.me/${academy.whatsapp.replace(/[^0-9]/g, '')}`,
      icon: null, label: 'WhatsApp', value: academy.whatsapp,
      hoverClass: 'group-hover:text-[#25D366]', waBg: true,
    }] : []),
    {
      href: null, icon: MessageSquare, label: 'Visit Us',
      value: 'Budh Vihar Phase I, New Delhi – 110086',
      hoverClass: '', waBg: false,
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0F7B10]/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#A6D52C]/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left info */}
          <ScrollReveal animation="fade-right" duration={700}>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0F7B10] mb-3">Get In Touch</p>
              <h2 id="contact-heading" className="section-title mb-5">Enquire About Admission</h2>
              <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-md">
                Fill the form and we'll get back to you, or reach us directly via phone or WhatsApp.
              </p>

              <div className="space-y-5">
                {contactItems.map((item, i) => {
                  const El = item.href ? 'a' : 'div';
                  const props = item.href ? { href: item.href, target: item.waBg ? '_blank' : undefined, rel: item.waBg ? 'noopener noreferrer' : undefined } : {};
                  const Icon = item.icon;
                  return (
                    <El key={i} {...props} className="flex items-center gap-4 group">
                      <div className={`w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center flex-shrink-0 transition-colors ${item.waBg ? 'bg-white shadow-sm group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/30' : 'bg-white shadow-sm group-hover:bg-gray-50'}`}>
                        {item.waBg ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        ) : Icon ? <Icon size={20} className="text-[#0F7B10]" /> : null}
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                        <div className={`text-slate-900 font-semibold text-sm transition-colors whitespace-pre-line ${item.hoverClass}`}>
                          {item.value}
                        </div>
                      </div>
                    </El>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Right form */}
          <ScrollReveal animation="fade-left" delay={100} duration={700}>
            <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 sm:p-8">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-xl mb-2">Enquiry Sent!</h3>
                  <p className="text-slate-600 text-sm mb-6">Thank you for reaching out. We'll get back to you very soon.</p>
                  <button onClick={() => setStatus('idle')} className="btn-primary w-full justify-center">
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Course enquiry form">
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-6">Send an Enquiry</h3>
                  <div className="space-y-4">
                    <Field label="Your Name" id="name" error={errors.name} required>
                      <input type="text" id="name" name="name" value={form.name} onChange={handleChange}
                        placeholder="Enter your full name" className={`form-input ${errors.name ? 'error' : ''}`}
                        autoComplete="name" aria-required="true" />
                    </Field>
                    <Field label="Phone Number" id="phone" error={errors.phone} required>
                      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="10-digit mobile number" className={`form-input ${errors.phone ? 'error' : ''}`}
                        maxLength={10} inputMode="numeric" aria-required="true" />
                    </Field>
                    <Field label="Email Address" id="email" error={errors.email}>
                      <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com (optional)" className={`form-input ${errors.email ? 'error' : ''}`} />
                    </Field>
                    <Field label="Course Interested In" id="course">
                      <select id="course" name="course" value={form.course} onChange={handleChange} className="form-input">
                        <option value="">Select a course (optional)</option>
                        {courses.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                        <option value="Other / Not Sure">Other / Not Sure</option>
                      </select>
                    </Field>
                    <Field label="Message" id="message">
                      <textarea id="message" name="message" value={form.message} onChange={handleChange}
                        placeholder="Any questions or additional information..." rows={4} className="form-input resize-none" />
                    </Field>
                    {submitError && (
                      <p className="text-red-500 text-sm mt-2 flex items-center justify-center gap-1.5" role="alert">
                        <AlertCircle size={14} /> {submitError}
                      </p>
                    )}
                    <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center mt-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          Send Enquiry
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    Your enquiry will be sent directly to our admission desk.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
