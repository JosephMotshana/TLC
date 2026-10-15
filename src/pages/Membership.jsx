import { churchInfo } from '../data/churchData'; // Fixed path (../) and lowercase filename (churchData)
import { Check } from 'lucide-react';

export default function Membership({ onOpenModal }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-tlc-dark">How Do I Become a Member?</h1>
        <p className="text-gray-600">The Bible describes the church as the body of Christ, and Christians as members of that body (1 Cor 12:12).</p>
      </div>

      {/* 5 Step Pathway */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {churchInfo.membershipSteps.map((step) => (
          <div key={step.step} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:border-tlc-gold transition-all">
            <div>
              <span className="text-3xl font-extrabold text-tlc-gold block mb-2">0{step.step}</span>
              <h3 className="font-bold text-tlc-dark text-lg mb-2">{step.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-tlc-blue text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-tlc-gold">Benefits of Membership</h2>
        <div className="space-y-4">
          {churchInfo.membershipBenefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-tlc-gold flex-shrink-0 mt-1" />
              <p className="text-gray-100 text-sm sm:text-base">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <button
            onClick={onOpenModal}
            className="bg-tlc-gold text-tlc-dark font-bold px-8 py-3.5 rounded-xl hover:bg-yellow-400 transition-all shadow-lg"
          >
            Start Membership Pathway
          </button>
        </div>
      </div>
    </div>
  );
}