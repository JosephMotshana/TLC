import { churchInfo } from '../data/churchData'; // Fixed path (../) and lowercase filename (churchData)

export default function Ministries() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-tlc-dark mb-3">Our Ministries</h1>
        <p className="text-gray-600">Every member equipped for life purpose, service and ministry impact.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {churchInfo.ministries.map((min, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-tlc-gold transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-tlc-gold uppercase tracking-wider block mb-1">LEADERSHIP: {min.leader}</span>
              <h3 className="text-xl font-bold text-tlc-dark mb-3">{min.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{min.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}