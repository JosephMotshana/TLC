import { Phone, Mail, Clock, Heart, MessageSquare, Video, MapPin } from 'lucide-react';
import { churchInfo } from '../../data/churchData'; // Fixed path (../../) and lowercase filename (churchData)

export default function Footer({ setActiveTab, onOpenModal }) {
  return (
    <footer className="bg-tlc-blue text-white pt-16 pb-12 border-t-4 border-tlc-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Column 1: Info */}
          <div>
            <div className="mb-4">
              <img
                src="/logo.jpeg"
                alt="True Light Church"
                className="h-24 w-auto max-w-full object-contain sm:h-28"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {churchInfo.tagline}
            </p>
            <button
              onClick={onOpenModal}
              className="bg-tlc-gold text-tlc-dark font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-400 transition-all text-sm flex items-center space-x-2 shadow-md"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Ask for Prayer or Free Bible</span>
            </button>
          </div>

          {/* Column 2: Service Times & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-tlc-gold border-b border-gray-700 pb-2">Gathering & Location</h3>
            <div className="flex items-start space-x-3 text-gray-300">
              <Clock className="w-5 h-5 text-tlc-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">Service Times</p>
                <ul className="mt-1 space-y-1 text-sm">
                  {churchInfo.serviceTimes.map((serviceTime) => (
                    <li key={serviceTime}>{serviceTime}</li>
                  ))}
                </ul>
                <a
                  href={churchInfo.onlinePrayerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-lg bg-tlc-gold px-3 py-2 font-semibold text-tlc-dark transition-colors hover:bg-yellow-400"
                >
                  <Video className="h-4 w-4" />
                  Join Online Prayer
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-tlc-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">Address</p>
                <address className="text-sm not-italic">
                  Extens 0, 827 United States of America Ave, Cosmo City, Roodepoort, 2188
                </address>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-tlc-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">Phone / WhatsApp</p>
                <p className="text-sm">{churchInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-tlc-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">Email Address</p>
                <p className="text-sm">{churchInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-lg font-bold text-tlc-gold border-b border-gray-700 pb-2 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <button onClick={() => { setActiveTab('home'); window.scrollTo(0,0); }} className="text-left hover:text-tlc-gold py-1">Home</button>
              <button onClick={() => { setActiveTab('about'); window.scrollTo(0,0); }} className="text-left hover:text-tlc-gold py-1">About Us</button>
              <button onClick={() => { setActiveTab('salvation'); window.scrollTo(0,0); }} className="text-left hover:text-tlc-gold py-1">New Here?</button>
              <button onClick={() => { setActiveTab('membership'); window.scrollTo(0,0); }} className="text-left hover:text-tlc-gold py-1">Membership</button>
              <button onClick={() => { setActiveTab('ministries'); window.scrollTo(0,0); }} className="text-left hover:text-tlc-gold py-1">Ministries</button>
              <button onClick={() => { setActiveTab('contact'); window.scrollTo(0,0); }} className="text-left hover:text-tlc-gold py-1">Contact</button>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800">
              <a
                href={`https://wa.me/${churchInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/20 text-center text-xs text-gray-200">
          <p>© {new Date().getFullYear()} True Light Church. All Rights Reserved. Built with faith & purpose.</p>
        </div>
      </div>
    </footer>
  );
}