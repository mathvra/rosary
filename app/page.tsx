'use client'

import { getMysteriesForDay } from './hooks/useRosary';
import { MysteryNameType, MysterySlugType } from './types';
import { useRouter } from 'next/navigation';

export default function App() {
  const mysteryOfTheDay = getMysteriesForDay();
  const router = useRouter();

  const handleStartRosary = (mysteryType: MysterySlugType) => {
    router.push(`/terco/${mysteryType}`);
  };

  const MysteryButton = ({ name, onClick }: { name: string, onClick: () => void }) => (
    <button
      onClick={onClick}
      className="w-full text-left p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-sky-100 dark:hover:bg-sky-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
    >
      <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">{name}</span>
    </button>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <div className="flex flex-col justify-center items-center min-h-screen p-4 text-center">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-sky-800 dark:text-sky-300">Santo Terço Guiado</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Seu guia diário de oração</p>
        </header>

        <main className="w-full max-w-sm mx-auto space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400">Mistério de Hoje</h2>
            <p className="text-2xl font-bold text-sky-700 dark:text-sky-400 mt-1">{mysteryOfTheDay.name}</p>
          </div>

          <button
            onClick={() => handleStartRosary(mysteryOfTheDay.slug)}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800 text-xl"
          >
            Rezar o Terço do Dia
          </button>

          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400">ou escolha um mistério</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          <div className="space-y-3">
            <MysteryButton name={MysteryNameType.joyful} onClick={() => handleStartRosary(MysterySlugType.joyful)} />
            <MysteryButton name={MysteryNameType.luminous} onClick={() => handleStartRosary(MysterySlugType.luminous)} />
            <MysteryButton name={MysteryNameType.sorrowful} onClick={() => handleStartRosary(MysterySlugType.sorrowful)} />
            <MysteryButton name={MysteryNameType.glorious} onClick={() => handleStartRosary(MysterySlugType.glorious)} />
          </div>
        </main>
      </div>
    </div>
  );
};
