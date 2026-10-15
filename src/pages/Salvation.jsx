import { churchInfo } from '../data/churchData'; // Fixed path (../) and lowercase filename (churchData)
import { Droplet } from 'lucide-react';

export default function Salvation({ onOpenModal }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12 animate-fade-in">
      {/* Banner */}
      <div className="bg-tlc-blue text-white p-8 sm:p-12 rounded-3xl shadow-xl text-center space-y-4">
        <span className="bg-tlc-gold text-tlc-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">WELCOME TO GOD'S FAMILY</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold">Today is the Greatest Day</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
          "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" — 2 Corinthians 5:17
        </p>
      </div>

      {/* What Just Happened? */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-6">
        <h2 className="text-2xl font-bold text-tlc-dark border-b pb-3">What Just Happened?</h2>
        <p className="text-gray-600">By confessing your faith in Jesus today, you have received God’s greatest gift: Salvation.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-tlc-light p-5 rounded-xl">
            <h3 className="font-bold text-tlc-blue mb-1">1. You Are Forgiven</h3>
            <p className="text-sm text-gray-600">Jesus paid the price for your past, present, and future mistakes on the cross (Colossians 1:14).</p>
          </div>
          <div className="bg-tlc-light p-5 rounded-xl">
            <h3 className="font-bold text-tlc-blue mb-1">2. You Are God's Child</h3>
            <p className="text-sm text-gray-600">You have been adopted into God’s global, eternal family (John 1:12).</p>
          </div>
          <div className="bg-tlc-light p-5 rounded-xl">
            <h3 className="font-bold text-tlc-blue mb-1">3. You Have Purpose</h3>
            <p className="text-sm text-gray-600">God has an amazing plan for your life, and He will guide you step by step (Jeremiah 29:11).</p>
          </div>
        </div>
      </div>

      {/* 4 Growth Habits */}
      <div>
        <h2 className="text-2xl font-bold text-tlc-dark text-center mb-8">4 Habits to Grow Your Faith</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {churchInfo.growthHabits.map((habit) => (
            <div key={habit.number} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start space-x-4">
              <span className="w-10 h-10 rounded-full bg-tlc-gold text-tlc-dark font-extrabold flex items-center justify-center flex-shrink-0">
                {habit.number}
              </span>
              <div>
                <h3 className="font-bold text-tlc-dark text-lg mb-1">{habit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{habit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Water Baptism Prompt */}
      <div className="bg-amber-50 border border-tlc-gold p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-tlc-dark flex items-center space-x-2">
            <Droplet className="w-6 h-6 text-tlc-blue" />
            <span>Ready for Water Baptism?</span>
          </h3>
          <p className="text-sm text-gray-700 max-w-xl">
            Baptism is a public declaration of your decision to follow Jesus, symbolizing burying the old life and rising into a brand-new life with Him.
          </p>
        </div>
        <button
          onClick={onOpenModal}
          className="bg-tlc-blue text-white font-bold px-6 py-3 rounded-xl hover:bg-tlc-dark transition-all whitespace-nowrap shadow-md"
        >
          Request Baptism Info
        </button>
      </div>
    </div>
  );
}