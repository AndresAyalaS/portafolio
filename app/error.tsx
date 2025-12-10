'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error de aplicación:', error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-cover">
      <div className="max-w-md p-8 text-center bg-white/10 backdrop-blur-sm rounded-xl">
        <h2 className="mb-4 text-3xl font-bold text-white">¡Algo salió mal!</h2>
        <p className="mb-6 text-gray-300">
          Ha ocurrido un error inesperado. Por favor, intenta de nuevo.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 font-semibold transition-all duration-300 border-2 rounded-xl border-secondary text-secondary hover:bg-secondary hover:text-white"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
