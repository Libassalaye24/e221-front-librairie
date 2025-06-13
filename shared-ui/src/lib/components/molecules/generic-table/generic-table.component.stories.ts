import { Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { ActionType, GenericTableComponent, TableConfig } from '@e221-front-office/shared-ui';

const meta: Meta<GenericTableComponent<any>> = {
  component: GenericTableComponent,
  title: 'Components / Molecules / Generic Table',
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<GenericTableComponent<any>>;

const buildTableConfig ={

    columns: [
      {
        header: "Spécialité",
        field: 'speciality'
      },
      {
        header: "Mention",
        field: 'mention',
      },
      {
        header: "Domaine",
        field: 'domain',
        isAmount: true,
      },
      {
        header: "Actions",
        showThreeDotsAction: true
      }
    ],
    pagination: {
      pageable: null,
      totalPages: 10,
      totalElements: 20,
      last: false,
      size: 5,
      number: 0,
      sort: null,
      numberOfElements: 10,
      first: false,
      empty: false,
      content:[
        {
          id: 101, speciality: "Développement Web/Mobile", mention: "Informatique", domain: "Sciences et Technologies"
        },
        {
          id: 102, speciality: "Développement Web/Mobile", mention: "Informatique", domain: "Sciences et Technologies"
        },
        {
          id: 103, speciality: "Développement Web/Mobile", mention: "Informatique", domain: "Sciences et Technologies"
        }
      ]
    },
    disablePagination: false,
    loading: false,
    withCheckBox: false,
    sortColumn: 'name',
    actions: [
      {
        label: "Modifier",
        icon: "pi pi-pencil"
      },
      {
        label: "Supprimer",
        icon: "pi pi-trash"
      }
    ],
    sortDirection: 'asc',
    trackBy: (item: any) => item?.id!,
    emptyMessage: "table.noData"
  };

const buildTableConfigNoPagination ={

  columns: [
    {
      header: "Spécialité",
      field: 'speciality'
    },
    {
      header: "Mention",
      field: 'mention',
    },
    {
      header: "Domaine",
      field: 'domain',
      isAmount: true,
    }
  ],
  pagination: {
    pageable: null,
    totalPages: 0,
    totalElements: 0,
    last: false,
    size: 0,
    number: 0,
    sort: null,
    numberOfElements: 0,
    first: false,
    empty: false,
    content:[
      {
        id: 101, speciality: "Développement Web/Mobile", mention: "Informatique", domain: "Sciences et Technologies"
      },
      {
        id: 102, speciality: "Développement Web/Mobile", mention: "Informatique", domain: "Sciences et Technologies"
      },
      {
        id: 103, speciality: "Développement Web/Mobile", mention: "Informatique", domain: "Sciences et Technologies"
      }
    ]
  },
  disablePagination: true,
  loading: false,
  withCheckBox: false,
  sortColumn: 'name',
  sortDirection: 'asc',
  trackBy: (item: any) => item?.id!,
  emptyMessage: "table.noData"
};


export const Default: Story = {
  args: {
    config: buildTableConfig as TableConfig<any>
  },
};

export const NoPagination: Story = {
  args: {
    config: buildTableConfigNoPagination as TableConfig<any>
  },
};

