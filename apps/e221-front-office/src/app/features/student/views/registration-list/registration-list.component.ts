import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import SemesterLayoutComponent from 'apps/e221-front-office/src/app/shared/components/layouts/semester-layout/semester-layout.component';
import { BadgeComponent, ButtonComponent, GenericTableComponent, TableConfig } from '@e221-front-office/shared-ui';
import HeaderFilterComponent from '../../components/header-filter/header-filter.component';
import { Student } from 'apps/e221-front-office/src/app/shared/models/interfaces/student.interface';
import { MOCK_STUDENTS } from 'apps/e221-front-office/src/app/shared/mocks/student.mock';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Logger } from '../../../../shared/services/logger/logger.service';
import { FilterStudentValues } from '../../forms-interfaces/student.form.filter';

@Component({
  selector: 'app-registration-list',
  imports: [
    CommonModule,
    SemesterLayoutComponent,
    ButtonComponent,
    HeaderFilterComponent,
    GenericTableComponent,
    BadgeComponent,
  ],
  standalone: true,
  templateUrl: './registration-list.component.html',
  styleUrl: './registration-list.component.scss',
})
export default class RegistrationListComponent {
  // injections
  private readonly router: Router = inject(Router);
  private readonly logger: Logger = inject(Logger);
  protected readonly MOCK_STUDENTS = MOCK_STUDENTS;
  protected readonly String = String;

  // properties
  @ViewChild('studentStatusTemplate', { static: false })
  studentStatusTemplate!: TemplateRef<any>;

  // methods
  buildTableConfig(): TableConfig<Student> {
    return {
      columns: [
        {
          header: 'Photo',
          field: 'pictureUrl',
          isImage: true,
        },
        {
          header: 'Marticule',
          field: 'matriculate',
        },
        {
          header: 'Nom Complet',
          field: (item: Student): string =>
            `${item.firstName} ${item.lastName}`,
        },
        {
          header: 'Téléphone',
          field: 'phoneNumber',
        },
        {
          header: 'Classe',
          field: (item: Student): string => item.class?.name || 'N/A',
        },
        {
          header: 'Statut',
          field: 'status',
          template: this.studentStatusTemplate!
        },
        {
          header: 'Actions',
          field: (item: Student): string => '',
          showThreeDotsAction: true,
        },
      ],
      pagination: {
        pageable: null,
        totalPages: 10,
        totalElements: 5,
        last: false,
        size: 5,
        number: 0,
        sort: null,
        numberOfElements: 4,
        first: false,
        empty: false,
        content: MOCK_STUDENTS,
      },
      disablePagination: false,
      loading: false,
      withCheckBox: false,
      sortColumn: 'name',
      actions: [
        {
          label: 'Modifier',
          icon: 'pi pi-pencil',
        },
        {
          label: 'Supprimer',
          icon: 'pi pi-trash',
        },
      ],
      sortDirection: 'asc',
      trackBy: (item: Student) => item?.id,
      emptyMessage: 'table.noData',
    };
  }

  onFilter($event: FilterStudentValues): void {
    this.logger.log("Data {}", $event)
  }


}
