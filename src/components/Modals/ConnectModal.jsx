import { useState } from 'react';
import { X, CheckCircle2, Heart } from 'lucide-react';

export default function ConnectModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-tlc-gold/30">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-2xl font-bold text-tlc-dark">Thank You!</h3>
            <p className="text-gray-600 text-sm">Your request has been received. Our team will contact and pray with you.</p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="bg-tlc-blue text-white font-bold px-6 py-2.5 rounded-xl hover:bg-tlc-dark transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2 text-tlc-gold mb-2">
              <Heart className="w-5 h-5 fill-current" />
              <span className="font-bold text-xs uppercase tracking-wider text-tlc-dark">Connect Ministry</span>
            </div>
            
            <h3 className="text-xl font-bold text-tlc-dark">Prayer Request & Free Bible</h3>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name</label>
              <input type="text" required className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-tlc-blue text-sm" placeholder="Your name" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Contact Number</label>
              <input type="tel" required className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-tlc-blue text-sm" placeholder="WhatsApp or Phone" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Request Type</label>
              <select className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-tlc-blue text-sm bg-white">
                <option>Request Prayer</option>
                <option>Request Free Bible</option>
                <option>Membership Class Info</option>
                <option>Request Baptism</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Details</label>
              <textarea rows="3" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-tlc-blue text-sm" placeholder="How can we support you?"></textarea>
            </div>

            <button type="submit" className="w-full bg-tlc-gold text-tlc-dark font-bold py-3.5 rounded-xl hover:bg-yellow-400 transition-all shadow-md">
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
