import React, { useState } from 'react';
import { AppView, SubmissionContext } from './types';
import Dashboard from './components/Dashboard';
import ViviendaForm from './components/ViviendaForm';
import DivorcioExpressOnLine from './components/DivorcioExpressOnLine';
import CorporateIdentity from './components/CorporateIdentity';
import BlindajePatrimonial from './components/BlindajePatrimonial';
import LegalChatbot from './components/LegalChatbot';
import SuccessScreen from './components/SuccessScreen';
import { LayoutDashboard, Gavel, Home, HeartOff, Building2, ShieldAlert, Bot, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<SubmissionContext | null>(null);

  const handleSuccess = (context: string | SubmissionContext) => {
    const ctx = typeof context === 'string' ? { serviceName: context } : context;
    setLastSubmission(ctx);
    setActiveView(AppView.SUCCESS);
  };

  const renderView = () => {
    switch (activeView) {
      case AppView.DASHBOARD: return <Dashboard onNavigate={(view) => setActiveView(view)} />;
      case AppView.SALES_CHATBOT: return <LegalChatbot onNavigate={(view) => setActiveView(view)} />;
      case AppView.CORPORATE: return <CorporateIdentity />;
      case AppView.HOUSING_ANALYSIS: return <ViviendaForm onSuccess={handleSuccess} />;
      case AppView.DIVORCE_ONLINE: return <DivorcioExpressOnLine onSuccess={handleSuccess} />;
      case AppView.ASSET_PROTECTION: return <BlindajePatrimonial />;
      case AppView.SUCCESS: return <SuccessScreen context={lastSubmission!} onReturn={() => setActiveView(AppView.DASHBOARD)} />;
      default: return <Dashboard onNavigate={(view) => setActiveView(view)} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center gap-3">
          <Gavel className="text-amber-500" />
          <h1 className="text-xl font-bold font-serif uppercase tracking-tight">Elith <span className="text-amber-500">Lex</span></h1>
        </div>
        <nav className="px-4 space-y-2">
          <button onClick={() => {setActiveView(AppView.DASHBOARD); setIsSidebarOpen(false);}} className="w-full flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-colors"><LayoutDashboard size={20}/> Inicio</button>
          <button onClick={() => {setActiveView(AppView.SALES_CHATBOT); setIsSidebarOpen(false);}} className="w-full flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-colors"><Bot size={20}/> Asistente IA</button>
          <button onClick={() => {setActiveView(AppView.HOUSING_ANALYSIS); setIsSidebarOpen(false);}} className="w-full flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-colors"><Home size={20}/> Vivienda</button>
          <button onClick={() => {setActiveView(AppView.DIVORCE_ONLINE); setIsSidebarOpen(false);}} className="w-full flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-colors"><HeartOff size={20}/> Divorcios</button>
        </nav>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center px-6 justify-between">
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-slate-600"><Menu /></button>
          <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold text-xs">EL</div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
