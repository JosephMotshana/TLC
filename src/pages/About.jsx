import { churchInfo } from '../data/churchData'; // Fixed path (../) and lowercase filename (churchData)
import { statementOfFaith } from '../data/StatementOfFaith'; // Fixed lowercase filename (statementOfFaith)
import { BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-tlc-dark mb-4">Who We Are</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          True Light Church is a Bible-believing, Christ-focused, Holy Spirit-led, loving and word-practicing church of God, made to be the light of the world, to bring salvation to all nations.
        </p>
      </div>

      {/* Core Values */}
      <div>
        <h2 className="text-2xl font-bold text-tlc-blue mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {churchInfo.values.map((val, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-tlc-gold transition-all">
              <h3 className="text-xl font-bold text-tlc-dark mb-2 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-tlc-gold"></span>
                <span>{val.title}</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Statement of Faith */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100">
        <div className="flex items-center space-x-3 mb-8">
          <BookOpen className="w-8 h-8 text-tlc-gold" />
          <h2 className="text-2xl sm:text-3xl font-bold text-tlc-dark">Our Statement of Faith</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {statementOfFaith.map((item, idx) => (
            <div key={idx} className="bg-tlc-light p-5 rounded-xl border border-gray-200 hover:border-tlc-blue transition-all">
              <span className="inline-block bg-tlc-blue text-white text-xs font-bold px-2.5 py-1 rounded-md mb-2">
                {item.scripture}
              </span>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}