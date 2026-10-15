import { useState } from 'react';
import { churchInfo } from '../data/churchData'; // <-- Fixed relative path and lowercase filename
import { Phone, Mail, Clock, Send, CheckCircle2, Video } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info Side */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-tlc-dark mb-4">Get in Touch</h1>
            <p className="text-gray-600">We are here to walk with you. Reach out to us for prayers, queries, or service details.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <Phone className="w-6 h-6 text-tlc-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-tlc-dark">Phone / WhatsApp</h3>
                <p className="text-gray-600 text-sm">{churchInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <Mail className="w-6 h-6 text-tlc-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-tlc-dark">Email</h3>
                <p className="text-gray-600 text-sm">{churchInfo.email}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <Clock className="w-6 h-6 text-tlc-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-tlc-dark">Service Times</h3>
                <ul className="mt-1 space-y-1 text-gray-600 text-sm">
                  {churchInfo.serviceTimes.map((serviceTime) => (
                    <li key={serviceTime}>{serviceTime}</li>
                  ))}
                </ul>
                <a
                  href={churchInfo.onlinePrayerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-tlc-blue px-4 py-2 font-semibold text-white transition-colors hover:bg-tlc-dark"
                >
                  <Video className="h-4 w-4" />
                  Join Online Prayer
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
              <h3 className="text-2xl font-bold text-tlc-dark">Message Sent!</h3>
              <p className="text-gray-600 text-sm">Thank you for reaching out. The Connect Ministry will respond to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-tlc-dark mb-4">Send Us a Message</h3>
              
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-tlc-blue" placeholder="Your name" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone / WhatsApp</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-tlc-blue" placeholder="Your phone number" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message / Prayer Request</label>
                <textarea rows="4" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-tlc-blue" placeholder="How can we stand in agreement with you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-tlc-blue text-white font-bold py-4 rounded-xl hover:bg-tlc-dark transition-all flex items-center justify-center space-x-2 shadow-md">
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}