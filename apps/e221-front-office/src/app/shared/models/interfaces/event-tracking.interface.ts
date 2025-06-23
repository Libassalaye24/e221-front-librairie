import { SchoolYearStatus } from '../enums/school-year.enum';
import { Level } from './level.interface';
import { Semester } from './semester.interface';

export interface EventTracking {
  id: number;
  level: Level;
  semester: Semester;
  eventName: string;
  startDate: string;
  endDate: string;
  status: SchoolYearStatus
}
