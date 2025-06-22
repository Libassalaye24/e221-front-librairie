import { SchoolYearStatus } from '../enums/school-year.enum';

export interface SchoolYear {
  id: number;
  label: string;             // e.g. "2024–2025"
  startDate: string;         // ISO format: "2024-10-07"
  endDate: string;           // ISO format: "2025-07-31"
  status: SchoolYearStatus
}
