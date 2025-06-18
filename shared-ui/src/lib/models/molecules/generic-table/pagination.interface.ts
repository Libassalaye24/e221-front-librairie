// pagination.interface.ts
export interface IPagination<T> {
  content: T[];
  pageable: Pageable | null;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort[] | null;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort[];
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  direction: 'ASC' | 'DESC';
  property: string;
  ignoreCase: boolean;
  nullHandling: 'NATIVE' | 'NULLS_FIRST' | 'NULLS_LAST';
  descending: boolean;
  ascending: boolean;
}
