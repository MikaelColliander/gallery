export type OfficeType =
  | "Stockholm"
  | "Lund"
  | "Ljubljana"
  | "Helsingborg"
  | "Borlänge";
export type OrgUnitType = "/Incoming" | "/Admins" | "/Employees";

export interface Employee {
  name: string;
  email: string;
  phoneNumber: string;
  office: OfficeType;
  manager: string;
  orgUnit: OrgUnitType;
  mainText?: string;
  gitHub: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string | null;
  imagePortraitUrl: string | null;
  imageWallOfLeetUrl: string | null;
  highlighted: boolean;
  published: boolean;
  primaryRole: string | null;
  secondaryRole: string | null;
  area: string | null;
}
