import { ArrowRight, Sun, Heart, Sparkles } from 'lucide-react';
import { churchInfo } from '../data/churchData'; // Fixed path (../) and lowercase filename (churchData)

export default function Home({ setActiveTab, onOpenModal }) {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative min-h-[550px] md:min-h-[620px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 hero-overlay z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center py-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-tlc-gold/20 backdrop-blur-md text-tlc-gold px-4 py-2 rounded-full border border-tlc-gold/40 mb-6 shadow-lg">
            <Sun className="w-4 h-4 animate-spin-slow" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">WELCOME TO TRUE LIGHT CHURCH</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Arise & Shine for the Light of the World
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            "{churchInfo.tagline}"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('salvation')}
              className="w-full sm:w-auto bg-tlc-gold text-tlc-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all text-base shadow-xl flex items-center justify-center space-x-2"
            >
              <span>I Made a Decision Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('membership')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 backdrop-blur-md transition-all text-base"
            >
              Become a Member
            </button>
          </div>
        </div>
      </section>

      {/* 5-Year Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-tlc-blue tracking-widest uppercase mb-2">LOOKING FORWARD</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-tlc-dark">Five Year Vision ({churchInfo.visionYears})</h3>
          <p className="mt-3 text-gray-600 italic font-medium">{churchInfo.visionScripture}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {churchInfo.visionGoals.map((goal, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-tlc-gold hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center space-y-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-tlc-blue/10 text-tlc-blue group-hover:bg-tlc-gold group-hover:text-tlc-dark flex items-center justify-center transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-tlc-dark text-lg leading-snug">{goal}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Soul Strategy */}
      <section className="bg-tlc-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-tlc-gold tracking-widest uppercase mb-2">OUR STRATEGY</h2>
            <h3 className="text-3xl font-extrabold">Soul-Centric Strategy</h3>
            <p className="mt-2 text-gray-200">How every member participates in the Great Commission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {churchInfo.soulStrategy.map((strat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-tlc-gold transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-tlc-gold font-bold text-xl">{strat.title}</span>
                  <span className="text-xs bg-tlc-gold/20 text-tlc-gold px-2.5 py-1 rounded-full font-semibold">{strat.freq}</span>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">{strat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-tlc-dark to-tlc-blue rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-tlc-gold/30">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold">Need Prayer or Guidance?</h3>
            <p className="text-gray-300 max-w-md">Our pastoral team and Connect Ministry are here to stand with you in faith.</p>
          </div>
          <button
            onClick={onOpenModal}
            className="bg-tlc-gold text-tlc-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all shadow-lg flex items-center space-x-2 whitespace-nowrap"
          >
            <Heart className="w-5 h-5 fill-current" />
            <span>Connect With Us</span>
          </button>
        </div>
      </section>
    </div>
  );
}