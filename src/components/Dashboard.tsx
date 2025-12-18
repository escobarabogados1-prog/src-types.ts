import React from 'react';
import { AppView } from '../types';
import { Home, HeartOff, ShieldAlert, Stamp, Building2, MessageSquare } from 'lucide-react';

interface DashboardProps {
  onNavigate: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const services = [
    { id: AppView.HOUSING_ANALYSIS, title: 'Reducción de Crédito Hipotecario', sub: 'Ley 546 y Leasing Habitacional', icon: Home, color: 'bg-blue-500' },
    { id: AppView.ASSET_PROTECTION, title: 'Blindaje Patrimonial', sub: 'Fideicomiso Civil Inembargable', icon: ShieldAlert, color: 'bg-amber-600' },
    { id: AppView.DIVORCE_ONLINE, title: 'Divorcio On-line', sub: 'Mutuo Acuerdo o Contencioso', icon: HeartOff, color: 'bg-rose-500' },
    { id: AppView.INTELLECTUAL_PROPERTY, title: 'Marcas y Patentes', sub: 'Registro ante la SIC y Niza', icon: Stamp, color: 'bg-indigo-500' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">ELITH LEX GROUP</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Experticia jurídica en Derecho Civil, Familia y Comercial para colombianos en todo el mundo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((s) => (
          <button 
            key={s.id}
            onClick={() => onNavigate(s.id)}
            className="group p-8 bg-white border border-slate-200 rounded-[2rem] text-left hover:border-amber-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
              <s.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
            <p className="text-slate-500 text-sm">{s.sub}</p>
            <div className="absolute top-8 right-8 text-slate-200 group-hover:text-amber-500 transition-colors">
              <Building2 size={40} opacity={0.1} />
            </div>
          </button>
        ))}
      </div>
      
      <button 
        onClick={() => onNavigate(AppView.SALES_CHATBOT)}
        className="w-full p-6 bg-slate-900 rounded-[2rem] flex items-center justify-center gap-4 text-amber-500 font-bold hover:bg-slate-800 transition-all"
      >
        <MessageSquare /> ¿No sabe por dónde empezar? Hable con nuestro Asistente IA
      </button>
    </div>
  );
};

export default Dashboard;
