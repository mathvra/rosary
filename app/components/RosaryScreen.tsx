'use client'

import React from 'react';
import { useRosary, getMysteryKeyBySlug } from '../hooks/useRosary';
import PrayerCard from './PrayerCard';
import RosaryVisualizer from './RosaryVisualizer';
import { ChevronLeftIcon, ChevronRightIcon, ResetIcon } from './icons';
import { MysteryNameType, MysterySlugType, MysteryType } from '../types';
import { useRouter } from 'next/navigation';

interface RosaryScreenProps {
    chosenMysterySlug: MysterySlugType;
}

const RosaryScreen: React.FC<RosaryScreenProps> = ({ chosenMysterySlug }) => {
    const router = useRouter();
    const mysteryKey = getMysteryKeyBySlug(chosenMysterySlug);

    const chosenMystery: MysteryType = { name: MysteryNameType[mysteryKey], slug: chosenMysterySlug };

    const {
        step,
        currentStepData,
        mysteriesType,
        nextStep,
        prevStep,
        reset,
        progress
    } = useRosary(chosenMystery);

    const isFinalScreen = currentStepData.isFinalStep && step > 0 && progress >= 100;

    return (
        <div className="flex flex-col min-h-screen p-4 sm:p-6 w-full">
            <header className="w-full max-w-3xl mx-auto mb-2 text-center relative flex items-center justify-center">
                <button
                    onClick={() => router.push('/')}
                    aria-label="Voltar ao início"
                    className="absolute left-0 p-2 rounded-full bg-white/50 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                    <ChevronLeftIcon className="w-7 h-7 text-gray-700 dark:text-gray-200" />
                </button>
                <div className="flex-grow">
                    <h1 className="text-3xl sm:text-4xl font-bold text-sky-800 dark:text-sky-300">Santo Terço Guiado</h1>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">{mysteriesType.name}</p>

                </div>
                <div className="absolute right-0 w-9 h-9"></div> {/* Spacer to balance the back button */}
            </header>
            <div className="w-full max-w-3xl mx-auto">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2 mb-4">
                    <div className="bg-sky-600 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
                </div>
            </div>

            <main className="flex-grow flex flex-col justify-center items-center w-full">
                <div className="relative w-full max-w-md">
                    <PrayerCard key={step} stepData={currentStepData} />
                </div>
            </main>

            <footer className="w-full max-w-3xl mx-auto mt-4">
                <div className="h-20">
                    {!isFinalScreen && (
                        <RosaryVisualizer beadInDecade={currentStepData.bead?.beadInDecade} />
                    )}
                </div>

                {isFinalScreen ? (
                    <div className="flex justify-center">
                        <button
                            onClick={() => router.push('/')}
                            className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800"
                        >
                            <ResetIcon className="w-6 h-6" />
                            Voltar ao Início
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between items-center">
                        <button
                            onClick={prevStep}
                            disabled={step === 0}
                            aria-label="Oração Anterior"
                            className="p-4 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeftIcon className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                        </button>

                        <button
                            onClick={nextStep}
                            aria-label="Próxima Oração"
                            className="flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800"
                        >
                            <span className="text-xl">Avançar</span>
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>

                        <button
                            onClick={reset}
                            aria-label="Reiniciar Terço"
                            className="p-4 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                        >
                            <ResetIcon className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                        </button>
                    </div>
                )}
            </footer>
        </div>
    );
};
export default RosaryScreen;
