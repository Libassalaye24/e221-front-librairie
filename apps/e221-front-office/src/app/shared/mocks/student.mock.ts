import { Student } from '../models/interfaces/student.interface';
import { defaultStatus } from '../models/enums/status.enum';

export const MOCK_STUDENTS: Student[] = [
  {
    id: 1,
    matriculate: 'MAT2025001',
    firstName: 'Fatou',
    lastName: 'Diop',
    email: 'fatou.diop@example.com',
    phoneNumber: '771234567',
    class: { id: 1, name: 'L1 Info', level: 'Licence 1' },
    status: defaultStatus.ACTIVE,
    pictureUrl: 'https://cdn.pixabay.com/photo/2017/11/10/05/46/user-2935522_1280.png',
    address: 'Dakar, Sénégal',
    registrationDate: '2025-10-01',
    createdAt: '2025-06-01',
    updatedAt: '2025-06-15',
  },
  {
    id: 2,
    matriculate: 'MAT2025002',
    firstName: 'Moussa',
    lastName: 'Ndiaye',
    email: 'moussa.ndiaye@example.com',
    phoneNumber: '780987654',
    class: { id: 2, name: 'L2 Info', level: 'Licence 2' },
    status: defaultStatus.INACTIVE,
    pictureUrl: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png',
    address: 'Thiès, Sénégal',
    registrationDate: '2024-09-15',
    createdAt: '2024-09-01',
    updatedAt: '2025-01-10',
  },
  {
    id: 3,
    matriculate: 'MAT2025003',
    firstName: 'Awa',
    lastName: 'Fall',
    email: 'awa.fall@example.com',
    phoneNumber: '765432109',
    class: { id: 3, name: 'L3 Info', level: 'Licence 3' },
    status: defaultStatus.ACTIVE,
    pictureUrl: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png',
    address: 'Saint-Louis, Sénégal',
    registrationDate: '2023-10-20',
    createdAt: '2023-10-01',
    updatedAt: '2024-12-10',
  },
];
