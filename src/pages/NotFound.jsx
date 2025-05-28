import { Cog } from 'lucide-react'; // Ícone de engrenagem

export default function PageNotFound() {
  return (
    <div className="flex w-full min-h-[60vh] md:min-h-[70vh] items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Ops! Página em Progresso
        </p>
        <div className="flex justify-center items-center text-gray-800">
          <Cog className="w-12 h-12 md:w-16 md:h-16 animate-spin rotate-90" />
          <Cog className="w-12 h-12 md:w-16 md:h-16 -ml-3 mt-12 animate-spin -rotate-90" />
        </div>
        <p className="mt-8 text-gray-600">
          Estamos trabalhando duro para finalizar esta página. Volte em breve!
        </p>
      </div>
    </div>
  );
}