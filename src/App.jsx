import { useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Salvation from './pages/Salvation';
import Membership from './pages/Membership';
import Ministries from './pages/Ministries';
import Contact from './pages/Contact';
import ConnectModal from './components/Modals/ConnectModal'; // Fixed path: ./ instead of ../

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-tlc-light text-tlc-dark font-sans selection:bg-tlc-gold selection:text-tlc-dark">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenModal={() => setModalOpen(true)} 
      />

      <main className="flex-grow">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} onOpenModal={() => setModalOpen(true)} />}
        {activeTab === 'about' && <About />}
        {activeTab === 'salvation' && <Salvation onOpenModal={() => setModalOpen(true)} />}
        {activeTab === 'membership' && <Membership onOpenModal={() => setModalOpen(true)} />}
        {activeTab === 'ministries' && <Ministries />}
        {activeTab === 'contact' && <Contact />}
      </main>

      <Footer 
        setActiveTab={setActiveTab} 
        onOpenModal={() => setModalOpen(true)} 
      />

      <ConnectModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
}