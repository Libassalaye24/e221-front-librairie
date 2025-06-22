import { FormControl } from '@angular/forms';

export interface FilterStudentForms {
  class: FormControl<string>;
  search: FormControl<string>;
  status: FormControl<string>;
}

export interface FilterStudentValues {
  class: string;
  search: string;
  status: string;
}
