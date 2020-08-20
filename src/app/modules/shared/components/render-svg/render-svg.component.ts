import { Component, Input } from '@angular/core';

@Component({
  selector: 'gf-render-svg',
  templateUrl: './render-svg.component.html',
  styleUrls: ['./render-svg.component.scss']
})
export class RenderSvgComponent {

  @Input() svgName: string = null;

  get svgRoute(): string {
    return `assets/images/svg/${this.svgName}.svg`;
  }
}
