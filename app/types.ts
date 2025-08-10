
export enum MysteryNameType {
    joyful = 'Mistérios Gozosos',
    luminous = 'Mistérios Luminosos',
    sorrowful = 'Mistérios Dolorosos',
    glorious = 'Mistérios Gloriosos',
}

export enum MysterySlugType {
    joyful = 'misterios-gozosos',
    luminous = 'misterios-luminosos',
    sorrowful = 'misterios-dolorosos',
    glorious = 'misterios-gloriosos',
}

export interface MysteryType {
    name: MysteryNameType;
    slug: MysterySlugType;
}

export interface Mystery {
    name: string;
    description: string;
}

export interface Prayer {
    title: string;
    text: string;
}

export interface PrayerStep {
    prayer: Prayer;
    mystery?: Mystery;
    isMysteryAnnouncement?: boolean;
    isFinalStep?: boolean;
    bead?: {
        decade: number;
        beadInDecade: number; // 0 for Our Father, 1-10 for Hail Marys
    };
}
