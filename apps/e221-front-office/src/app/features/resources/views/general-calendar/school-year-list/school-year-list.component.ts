import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import SchoolYearHeaderPageComponent
  from '../../../components/general-calendar/school-year/shool-year-header-page/school-year-header-page.component';
import { BadgeComponent, GenericTableComponent, TableConfig } from '@e221-front-office/shared-ui';
import { SchoolYear } from '../../../../../shared/models/interfaces/shool-year.interface';
import { Student } from '../../../../../shared/models/interfaces/student.interface';
import { SCHOOL_YEARS_MOCK } from '../../../../../shared/mocks/school-year.mock';
import { SchoolYearStatus } from '../../../../../shared/models/enums/school-year.enum';



@Component({
  selector: 'app-school-year-list',
  imports: [
    CommonModule,
    SchoolYearHeaderPageComponent,
    GenericTableComponent,
    BadgeComponent,
  ],
  templateUrl: './school-year-list.component.html',
  styleUrl: './school-year-list.component.scss',
})
export default class SchoolYearListComponent {
  // properties
  @ViewChild('schoolStatusTemplate', { static: false })
  schoolStatusTemplate:
    | TemplateRef<{ $implicit: SchoolYear }>
    | ((item: SchoolYear) => string)
    | undefined;

  // methods
  buildTableConfig(): TableConfig<SchoolYear> {
    return {
      columns: [
        {
          header: 'Année scolaire',
          field: 'label',
        },
        {
          header: 'Ouverture',
          field: 'startDate',
        },
        {
          header: 'Ouverture',
          field: 'endDate',
        },
        {
          header: 'Statut',
          field: 'status',
          template: this.schoolStatusTemplate!,
        },
        {
          header: 'Actions',
          field: (item: SchoolYear): string => '',
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
        content: SCHOOL_YEARS_MOCK,
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
      trackBy: (item: SchoolYear) => item?.id,
      emptyMessage: 'table.noData',
    };
  }

  getStatus(item: SchoolYear): 'success' | 'danger' {
    return item.status === SchoolYearStatus.PENDING  ? 'success' : 'danger';
  }

  getStatusText(item: SchoolYear): 'En cours' | 'Clôturé' {
    return item.status === SchoolYearStatus.PENDING  ? 'En cours' : 'Clôturé';
  }
}
