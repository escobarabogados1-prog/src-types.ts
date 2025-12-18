import React, { useState } from 'react';

interface ViviendaFormProps {
  onSuccess: (service: string) => void;
}

const ViviendaForm: React.FC<ViviendaFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess("Reducción de Crédito Hipotecario / Leasing");
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Estudio de Viabilidad - Ley 546</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nombre Completo</label>
          <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Saldo de Deuda</label>
            <input required type="number" placeholder="$" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Cuota Mensual</label>
            <input required type="number" placeholder="$" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" />
          </div>
        </div>
        <button 
          disabled={loading}
          type="submit" 
          className="w-full py-5 bg-slate-900 text-amber-500 font-bold rounded-xl hover:bg-slate-800 transition-all"
        >
          {loading ? 'Procesando...' : 'Enviar para Estudio Gratuito'}
        </button>
      </form>
    </div>
  );
};

export default ViviendaForm;
