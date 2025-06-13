import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionCallBackType, TableColumn, TableConfig } from 'shared-ui/src/lib/models';
import { SelectComponent } from '../../atoms';
import { Select } from 'primeng/select';
import { Paginator, PaginatorState } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { SplitButton } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'lib-generic-table',
  standalone: true,
  imports: [
    CommonModule,
    SelectComponent,
    Select,
    Paginator,
    FormsModule,
    SplitButton,
    Menu,
  ],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent<T> {
  @Input() config!: TableConfig<T>;
  @Output() sort = new EventEmitter<string>();
  @Output() pageChange = new EventEmitter<any>();
  @Output() sizeChange = new EventEmitter<any>();
  @Output() linkClick = new EventEmitter<{ item: T; column: TableColumn<T> }>();
  @Output() selectionChange = new EventEmitter<T[]>();
  @Output() actionsEvent = new EventEmitter<ActionCallBackType<T>>();

  activeItem: T | null = null;
  protected isOpen: boolean = false;
  protected pageNumbers: any[] = [];
  selectedItems: Set<T> = new Set();
  isAllSelected = false;
  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 30, value: 30 },
    { label: 40, value: 40 },
    { label: 50, value: 50 },
  ];

  // constructor
  constructor(private el: ElementRef) {
  }

  // methods
  protected get loadingArray(): number[] {
    return Array(this.config.loadingRows || 3).fill(0);
  }

  protected getCellValue(item: T, column: TableColumn<T>): string | number {
    if (typeof column.field === 'function') {
      return column.field(item);
    }
    return item[column.field as keyof T] as string | number;
  }

  protected trackBy(item: T): any {
    return this.config.trackBy ? this.config.trackBy(item) : item;
  }

  protected handleSort(header: string): void {
    this.sort.emit(header);
    if (this.config.onSort) {
      this.config.onSort(header);
    }
  }

  protected handleLinkClick(item: T, column: TableColumn<T>): void {
    if (column.onLinkClick) {
      column.onLinkClick(item);
    } else if (this.config.onLinkClick) {
      this.config.onLinkClick({ item, column });
    }
    this.linkClick.emit({ item, column });
  }

  protected isTemplateRef(template: any): template is TemplateRef<any> {
    return template instanceof TemplateRef;
  }

  toggleSelectAll(checked: boolean): void {
    this.isAllSelected = checked;
    if (checked) {
      this.config.pagination?.content.forEach((item) =>
        this.selectedItems.add(item)
      );
    } else {
      this.selectedItems.clear();
    }
    this.emitSelection();
  }

  toggleSelectItem(item: T, checked: boolean): void {
    if (checked) {
      this.selectedItems.add(item);
    } else {
      this.selectedItems.delete(item);
    }

    this.isAllSelected =
      this.config.pagination?.content.every((item) =>
        this.selectedItems.has(item)
      ) ?? false;

    this.emitSelection();
  }

  isSelected(item: T): boolean {
    return this.selectedItems.has(item);
  }

  private emitSelection(): void {
    this.selectionChange.emit(Array.from(this.selectedItems));
  }

  onSelectItemChange(event: Event, item: T): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox) {
      this.toggleSelectItem(item, checkbox.checked);
    }
  }

  onSelectAllChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox) {
      this.toggleSelectAll(checkbox.checked);
    }
  }

  onActionClick(event: ActionCallBackType<T>): void {
    this.actionsEvent.emit(event);
  }

  resetSelection(): void {
    this.selectedItems.clear(); // Réinitialise les éléments sélectionnés
    this.isAllSelected = false; // Réinitialise l'état "tout sélectionné"
    this.emitSelection(); // Émet un événement de sélection vide
  }

  onPageChange($event: PaginatorState) {
    this.pageChange.emit($event);
  }

  generatePageNumbers(): void {
    this.pageNumbers = Array(this.config.pagination?.totalPages)
      .fill(0)
      .map((x, i) => i);
    console.log('pageNumbers ', this.pageNumbers);
  }

  onSizeChange($event: any) {
    this.sizeChange.emit($event);
  }

}
