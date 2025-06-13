import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-resources-card-resources-card',
  imports: [],
  templateUrl: './resources-card.component.html',
  styleUrl: './resources-card.component.scss'
})
export class ResourcesCardComponent {

  @Input() iconLeft: string = "pi pi-folder-open";

  @Input() iconRight: string = "pi pi-ellipsis-v";

  @Input() description: string = "Domaines & Spécialités";

  @Input() variant: "active" | "default" = "default";

}
