'use client'

import { useState, useMemo, useCallback } from 'react';
import { MysteryType, PrayerStep, MysterySlugType, MysteryNameType } from '../types';
import { PRAYERS, MYSTERIES } from '../constants/prayers';

const INTRO_STEPS = 6;
const STEPS_PER_DECADE = 12; // Announce, Our Father, 10 Hail Marys
const TOTAL_DECADES = 5;
const CONCLUDING_STEPS = 2;

const TOTAL_STEPS = INTRO_STEPS + (STEPS_PER_DECADE * TOTAL_DECADES) + CONCLUDING_STEPS;

export const getMysteriesForDay = (): MysteryType => {

    const day = new Date().getDay(); // Sunday = 0, Monday = 1, etc.
    switch (day) {
        case 1: // Monday
        case 6: // Saturday
            return {
                name: MysteryNameType.joyful,
                slug: MysterySlugType.joyful,
            };
        case 2: // Tuesday
        case 5: // Friday
            return {
                name: MysteryNameType.sorrowful,
                slug: MysterySlugType.sorrowful,
            };
        case 4: // Thursday
            return {
                name: MysteryNameType.luminous,
                slug: MysterySlugType.luminous,
            };
        case 0: // Sunday
        case 3: // Wednesday
            return {
                name: MysteryNameType.glorious,
                slug: MysterySlugType.glorious,
            };
        default:
            return {
                name: MysteryNameType.glorious,
                slug: MysterySlugType.glorious,
            };
    }
};

export const getMysteryKeyBySlug = (slug: string): keyof typeof MysterySlugType => {
    const key = Object.keys(MysterySlugType).find(key =>
        MysterySlugType[key as keyof typeof MysterySlugType] === slug
    );

    return key as keyof typeof MysterySlugType;
};

export const useRosary = (initialMystery?: MysteryType) => {
    const [step, setStep] = useState(0);
    const [mysteriesType, setMysteriesType] = useState<MysteryType>(() => initialMystery || getMysteriesForDay());

    const mysteries = useMemo(() => MYSTERIES[mysteriesType.name], [mysteriesType]);

    const prayerSequence: PrayerStep[] = useMemo(() => {
        const sequence: PrayerStep[] = [];

        // Introduction
        sequence.push({ prayer: { ...PRAYERS.SIGN_OF_THE_CROSS, title: 'Início', text: `${PRAYERS.SIGN_OF_THE_CROSS.text}\n\n${PRAYERS.APOSTLES_CREED.text}` } });
        sequence.push({ prayer: { ...PRAYERS.OUR_FATHER, title: "Pelas intenções do Papa" } });
        sequence.push({ prayer: { ...PRAYERS.HAIL_MARY, title: "Pela Fé" } });
        sequence.push({ prayer: { ...PRAYERS.HAIL_MARY, title: "Pela Esperança" } });
        sequence.push({ prayer: { ...PRAYERS.HAIL_MARY, title: "Pela Caridade" } });
        sequence.push({ prayer: { ...PRAYERS.GLORY_BE, text: `${PRAYERS.GLORY_BE.text}\n\n${PRAYERS.FATIMA_PRAYER.text}` } });

        // Decades
        for (let i = 0; i < TOTAL_DECADES; i++) {
            const mystery = mysteries[i];
            sequence.push({ prayer: { title: mystery.name, text: mystery.description }, mystery, isMysteryAnnouncement: true, bead: { decade: i + 1, beadInDecade: -1 } });
            sequence.push({ prayer: PRAYERS.OUR_FATHER, mystery, bead: { decade: i + 1, beadInDecade: 0 } });
            for (let j = 1; j <= 10; j++) {
                sequence.push({ prayer: { ...PRAYERS.HAIL_MARY, title: `${j}ª Ave Maria` }, mystery, bead: { decade: i + 1, beadInDecade: j } });
            }
            sequence.push({ prayer: { ...PRAYERS.GLORY_BE, text: `${PRAYERS.GLORY_BE.text}\n\n${PRAYERS.FATIMA_PRAYER.text}` }, mystery, bead: { decade: i + 1, beadInDecade: 11 } });
        }

        // Conclusion
        sequence.push({ prayer: PRAYERS.HAIL_HOLY_QUEEN });
        sequence.push({ prayer: PRAYERS.FINAL_PRAYER, isFinalStep: true });

        return sequence;
    }, [mysteries]);

    const currentStepData = useMemo(() => {
        if (step >= prayerSequence.length) {
            return {
                prayer: { title: "Terço Concluído", text: "Você concluiu a oração do Santo Terço. Que a paz de Cristo esteja com você." },
                isFinalStep: true
            };
        }
        return prayerSequence[step];
    }, [step, prayerSequence]);

    const nextStep = useCallback(() => {
        setStep(s => (s < prayerSequence.length ? s + 1 : s));
    }, [prayerSequence.length]);

    const prevStep = useCallback(() => {
        setStep(s => (s > 0 ? s - 1 : 0));
    }, []);

    const reset = useCallback(() => {
        setStep(0);
    }, []);

    const progress = useMemo(() => {
        if (prayerSequence.length <= 1) return 0;
        return Math.round((step / (prayerSequence.length - 1)) * 100)
    }, [step, prayerSequence.length]);

    return {
        step,
        totalSteps: prayerSequence.length,
        currentStepData,
        mysteriesType,
        nextStep,
        prevStep,
        reset,
        progress,
    };
};