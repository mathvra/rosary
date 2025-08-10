
import React from 'react';

interface RosaryVisualizerProps {
    decade?: number;
    beadInDecade?: number;
}

const Bead: React.FC<{ isActive: boolean; isOurFather?: boolean }> = ({ isActive, isOurFather = false }) => {
    const size = isOurFather ? 'w-8 h-8' : 'w-6 h-6';
    const baseClasses = 'rounded-full transition-all duration-300 ease-in-out border-2';
    const activeClasses = isActive ? 'bg-sky-500 border-sky-300 scale-125 shadow-lg' : 'bg-gray-300 dark:bg-gray-600 border-gray-400 dark:border-gray-500';

    return <div className={`${baseClasses} ${size} ${activeClasses}`}></div>;
};

const RosaryVisualizer: React.FC<RosaryVisualizerProps> = ({ beadInDecade }) => {
    if (beadInDecade === undefined || beadInDecade < 0) {
        return null; // Don't show for announcements or intro/outro prayers
    }

    return (
        <div className="w-full flex justify-center items-center gap-2 sm:gap-3 p-4">
            <Bead isOurFather isActive={beadInDecade === 0} />
            <div className="w-4 border-t-2 border-gray-300 dark:border-gray-600"></div>
            {Array.from({ length: 10 }).map((_, i) => (
                <Bead key={i} isActive={beadInDecade === i + 1} />
            ))}
        </div>
    );
};

export default RosaryVisualizer;
