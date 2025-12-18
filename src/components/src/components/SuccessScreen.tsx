import React from 'react';
import { SubmissionContext } from '../types';
import { CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/contact';

interface SuccessScreenProps {
  context: SubmissionContext;
  onReturn: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ context, onReturn }) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-20 space-y-8 animate-in zoom-in duration-500">
      <div className="flex justify-center">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-inner">
          <CheckCircle2 size={60} />
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-3xl font-serif font-bold text-slate-900">Solicitud Recibida</h2>
        <p className="text-slate-600 italic">"Su caso de {context.serviceName} está siendo procesado por nuestro equipo de abogados especialistas."</p>
      </div>

      <div className="bg-amber-50 p-8 rounded-[2rem] border border-amber-200 space-y-4">
        <p className="font-bold text-amber-900 text-lg">¿Desea una respuesta prioritaria?</p>
        <p className="text-amber-800 text-sm">Haga clic abajo para validar su identidad y hablar directamente con el área encargada.</p>
        <button 
          onClick={() => handleWhatsAppClick(context.serviceName)}
          className="w-full py-4 bg-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-green-600 shadow-lg transition-all"
        >
          <MessageCircle /> Priorizar Trámite vía WhatsApp
        </button>
      </div>

      <button onClick={onReturn} className="text-slate-400 hover:text-slate-900 flex items-center gap-2 mx-auto transition-colors">
        <ArrowLeft size={16} /> Volver al Inicio
      </button>
    </div>
  );
};

export default SuccessScreen;
