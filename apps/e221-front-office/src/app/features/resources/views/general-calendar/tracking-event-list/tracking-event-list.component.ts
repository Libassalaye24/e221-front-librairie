import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent, GenericTableComponent, TableConfig } from '@e221-front-office/shared-ui';
import SchoolYearHeaderPageComponent
  from '../../../components/general-calendar/school-year/shool-year-header-page/school-year-header-page.component';
import { SchoolYear } from '../../../../../shared/models/interfaces/shool-year.interface';
import { EventTracking } from '../../../../../shared/models/interfaces/event-tracking.interface';
import { SchoolYearStatus } from '../../../../../shared/models/enums/school-year.enum';
import { EVENT_TRACKING_MOCK } from '../../../../../shared/mocks/event-tracking.mock';


@Component({
  selector: 'app-tracking-event-list',
  imports: [
    CommonModule,
    SchoolYearHeaderPageComponent,
    GenericTableComponent,
    BadgeComponent,
  ],
  templateUrl: './tracking-event-list.component.html',
  styleUrl: './tracking-event-list.component.scss',
})
export default class TrackingEventListComponent {
  // methods
  @ViewChild('eventTrackingStatusTemplate', { static: true })
  eventTrackingStatusTemplate:
    | TemplateRef<{
        $implicit: EventTracking;
      }>
    | ((item: EventTracking) => string)
    | undefined;
  buildTableConfig(): TableConfig<EventTracking> {
    return {
      columns: [
        {
          header: 'Niveau',
          field: (item: EventTracking): string => item?.level?.label || 'N/A',
        },
        {
          header: 'Semestre',
          field: (item: EventTracking): string =>
            item?.semester?.label || 'N/A',
        },
        {
          header: 'Evénements',
          field: 'eventName',
        },
        {
          header: 'Date de début',
          field: 'startDate',
        },
        {
          header: 'Date de fin',
          field: 'endDate',
        },
        {
          header: 'Statut',
          field: 'status',
          template: this.eventTrackingStatusTemplate!,
        },
        {
          header: 'Actions',
          field: (item: EventTracking): string => '',
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
        content: EVENT_TRACKING_MOCK,
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
      trackBy: (item: EventTracking) => item?.id,
      emptyMessage: 'table.noData',
    };
  }

  getStatus(item: EventTracking): 'success' | 'danger' {
    return item.status === SchoolYearStatus.PENDING  ? 'success' : 'danger';
  }

  getStatusText(item: EventTracking): 'En cours' | 'Clôturé' {
    return item.status === SchoolYearStatus.PENDING  ? 'En cours' : 'Clôturé';
  }
}
