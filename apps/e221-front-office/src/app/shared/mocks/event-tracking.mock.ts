import { EventTracking } from '../models/interfaces/event-tracking.interface';
import { SchoolYearStatus } from '../models/enums/school-year.enum';

export const EVENT_TRACKING_MOCK: EventTracking[] = [
  {
    id: 1,
    level: { id: 1, label: 'Licence' },
    semester: { id: 1, label: 'Semestre 1' },
    eventName: 'Enseignements',
    startDate: '2024-10-07',
    endDate: '2024-10-10',
    status: SchoolYearStatus.PENDING,
  },
  {
    id: 2,
    level: { id: 1, label: 'Licence' },
    semester: { id: 2, label: 'Semestre 2' },
    eventName: 'Examens',
    startDate: '2024-12-01',
    endDate: '2024-12-10',
    status: SchoolYearStatus.CLOTURE,
  },
  {
    id: 3,
    level: { id: 2, label: 'Master' },
    semester: { id: 1, label: 'Semestre 1' },
    eventName: 'Soutenance',
    startDate: '2025-01-05',
    endDate: '2025-01-07',
    status: SchoolYearStatus.CLOTURE,
  },
];
