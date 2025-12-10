import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-cover">
      <div className="max-w-md p-8 text-center bg-white/10 backdrop-blur-sm rounded-xl">
        <h1 className="mb-4 text-6xl font-bold text-secondary">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-white">Página no encontrada</h2>
        <p className="mb-6 text-gray-300">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 font-semibold transition-all duration-300 border-2 rounded-xl border-secondary text-secondary hover:bg-secondary hover:text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
