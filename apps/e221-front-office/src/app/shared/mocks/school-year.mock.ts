import { SchoolYear } from '../models/interfaces/shool-year.interface';
import { SchoolYearStatus } from '../models/enums/school-year.enum';

export const SCHOOL_YEARS_MOCK: SchoolYear[] = [
  {
    id: 1,
    label: '2024–2025',
    startDate: '2024-10-07',
    endDate: '2025-07-31',
    status: SchoolYearStatus.PENDING
  },
  {
    id: 2,
    label: '2023–2024',
    startDate: '2023-10-07',
    endDate: '2024-07-31',
    status: SchoolYearStatus.CLOTURE
  },
  {
    id: 3,
    label: '2022–2023',
    startDate: '2022-10-07',
    endDate: '2023-07-31',
    status: SchoolYearStatus.CLOTURE
  }
];
