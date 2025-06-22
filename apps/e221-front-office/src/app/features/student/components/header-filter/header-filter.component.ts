import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  output,
  OutputEmitterRef, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent, SelectComponent } from '@e221-front-office/shared-ui';
import { FilterStudentForms, FilterStudentValues } from '../../forms-interfaces/student.form.filter';


@Component({
  selector: 'app-header-filter',
  imports: [CommonModule, ReactiveFormsModule, SelectComponent, InputComponent],
  standalone: true,
  templateUrl: './header-filter.component.html',
  styleUrl: './header-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderFilterComponent implements OnInit {
  // injections

  // inputs outputs
  @Output()
  formEvent = new EventEmitter<FilterStudentValues>();

  // properties
  formFilter: FormGroup = new FormGroup<FilterStudentForms>(<FilterStudentForms>{
    class: new FormControl(''),
    search: new FormControl(''),
    status: new FormControl(''),
  });

  classesOptions = signal([
    {
      label: "L1 info", value: "1"
    },
    {
      label: "L2 info", value: "2"
    }
  ]);

  statusOptions = signal([
    {
      label: "Active", value: "1"
    },
    {
      label: "Inactive", value: "2"
    }
  ])
  // hooks
  ngOnInit(): void {
    this.formFilter.valueChanges.subscribe((): void => {
      this.formEvent.emit(this.formFilter.getRawValue() as FilterStudentValues);
    });
  }

  // methods
}
