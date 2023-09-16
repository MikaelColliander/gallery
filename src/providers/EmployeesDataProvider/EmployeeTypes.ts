export type OfficeType = "Stockholm" | "Lund" | "Ljubljana" | "Helsingborg" | "Borlänge";

export interface Employee {
    name: string;
    image?: string;
    office: OfficeType;
    twitter?: string;
    gitHub?: string;
    linkedIn: string;
 }