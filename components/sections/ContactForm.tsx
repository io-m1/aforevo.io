'use client'; 

import { ContactPageContent } from '@/types/cms';

interface ContactFormProps {
  content: ContactPageContent;
}

export default function ContactForm({ content }: ContactFormProps) {
  const { form, info } = content;

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
        
        {/* Contact Information Side */}
        <div className="lg:w-1/3 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{info.heading}</h3>
            <div className="space-y-2 text-gray-400">
              {info.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase">Email Us</p>
              <a href={`mailto:${info.email}`} className="text-white hover:text-red-500 transition-colors">
                {info.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase">Call Us</p>
              <p className="text-white">{info.phone}</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:w-2/3 bg-gray-900 p-8 md:p-10 rounded-2xl border border-gray-800">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400">
                  {form.labels.name}
                </label>
                <input 
                  id="name" 
                  type="text" 
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400">
                  {form.labels.email}
                </label>
                <input 
                  id="email" 
                  type="email" 
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-400">
                {form.labels.subject}
              </label>
              <select 
                id="subject" 
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              >
                <option>General Inquiry</option>
                <option>Content Licensing (Aforevo)</option>
                <option>Music Distribution</option>
                <option>Tech Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400">
                {form.labels.message}
              </label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                placeholder="Tell us about your project..."
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors duration-200"
            >
              {form.labels.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
