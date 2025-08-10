
import React from 'react';
import type { PrayerStep } from '../types';

interface PrayerCardProps {
    stepData: PrayerStep;
}

const PrayerCard: React.FC<PrayerCardProps> = ({ stepData }) => {
    const { prayer, mystery, isMysteryAnnouncement } = stepData;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto transition-all duration-500 transform hover:scale-[1.02]">
            {mystery && !isMysteryAnnouncement && (
                <div className="mb-4 text-center">
                    <h3 className="text-lg font-bold text-sky-600 dark:text-sky-400">{mystery.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{mystery.description}</p>
                </div>
            )}
            <h2 className={`text-2xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100 ${isMysteryAnnouncement ? 'text-sky-700 dark:text-sky-300' : ''}`}>
                {prayer.title}
            </h2>
            <div className="text-gray-600 dark:text-gray-300 text-center whitespace-pre-line leading-relaxed text-base sm:text-lg">

                {prayer.text}
            </div>
        </div>
    );
};

export default PrayerCard;
