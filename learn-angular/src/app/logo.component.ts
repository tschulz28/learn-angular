import {Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

/** 
 * The logo component displaying the application logo.
 * 
 * @selector 'app-logo'
 * @description Displays the application logo with optimized image loading.
 * @remarks **Build process:** NgOptimizedImage only works in production builds (ng build --configuration=production).In dev mode (ng serve), images are loaded normally.
 * *Try `ng build --configuration=production` and `ng serve --configuration=production` to test in production mode.*
 * @remarks **Required attributes:** width and height are required to avoid layout shifts.
 * @remarks **Supported formats:** WebP, AVIF, JPEG, PNG, SVG, GIF.
 */
@Component({
    selector: 'app-logo',
    template: `
        <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="assets/angular.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt"  width="32" height="32" />
      </li>
    </ul>`,
    imports: [NgOptimizedImage],
})
export class LogoComponent {
    // URL of the logo image
    logoUrl = '/assets/angular.svg';

    // Alt text for the logo image
    logoAlt = 'Dynamic Angular logo';
}