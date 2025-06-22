import { FormControl } from '@angular/forms';
import { TemplateRef } from '@angular/core';
import { IPagination } from './pagination.interface';
import { MenuItem } from 'primeng/api';

export interface TableColumn<T> {
  header: string;
  field: keyof T | ((item: T) => string | number);
  sortable?: boolean;
  isAmount?: boolean;
  isImage?: boolean;
  className?: string;
  class?: string;
  template?: TemplateRef<{ $implicit: T }> | ((item: T) => string);
  isLink?: boolean;
  onLinkClick?: (item: T) => void;
  showThreeDotsAction?: boolean;
}

export interface TableConfig<T> {
  columns: TableColumn<T>[];
  pagination?: IPagination<T>;
  loading?: boolean;
  disablePagination?: boolean;
  withCheckBox?: boolean;
  loadingRows?: number;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
  emptyMessage?: string;
  trackBy?: (item: T) => any;
  onSort?: (header: string) => void;
  onPageChange?: (page: number) => void;
  onLinkClick?: (data: { item: T; column: TableColumn<T> }) => void;
  actions?: MenuItem[];
}

export interface TableHeaderConfig {
  title: {
    text: string;
    count?: number;
    disableAddButton?: boolean;
  };
  addButton?: {
    text: string;
    isPrimary?: boolean;
    disable?: boolean;
    onClick: () => void;
  };
  statusButton?: {
    text: string;
    disable?: boolean;
    onClick: () => void;
  };
  filter?: {
    text: string;
    onClick: () => void;
  };
  buttons?: ITableButtons[];
  search?: {
    placeholder: string;
    control: FormControl<string | null>;
  };
}


export class ActionCallBackType<T> {
  actionType: ActionType;
  item: T;
  event?: unknown;

  constructor(type: ActionType, item: T, event: unknown| null) {
    this.actionType = type;
    this.item = item;
    this.event = event;
  }

}


export interface ITableButtons {
  text: string;
  isPrimary?: boolean;
  disable?: boolean;
  withIcon?: boolean;
  isFilter?: boolean;
  onClick: () => void;
}


export class TableAction {
  mini?: boolean;
  link?: string;
  callback?: unknown;
  type: unknown = ActionType;

  constructor(obj: Partial<TableAction> = {}) {
    this.type = obj.type;
    this.link = obj.link;
    this.mini = obj.mini ?? true;
    this.callback = obj.callback;
  }
}

export enum ActionType {
  open = 'open',
  view = 'view',
  edit = 'edit',
  treat = 'treat',
  start = 'start',
  toggle = 'toggle',
  delete = 'delete',
  pending = 'pending',
  archive = 'archive',
  configure = 'configure',
  rejected = 'rejected',
  redirect = 'redirect',
  validated = 'validated',
  incomplete = 'incomplete',
}
