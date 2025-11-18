/**
 * Angular tutorial, with
 * - ...
 * - Composing Components
 * - ...
 */

// Importing input due to "Component Input Properties"
import {Component, input} from '@angular/core';

/**
 * An example component of this application.
 * From 'Composing Components'
 * 
 * @selector 'app-user'
 * @description An example component used in the main component.
 */
@Component({
  selector: 'app-user',
  /**
   * The output of this component.
   */ 
  template: `Username: {{ username() }}<br>
  The user's name is {{name()}}`,
})
export class User {
  username = input<string>('youngTech');

  /**
   * From 'Component Input Properties'
   * 
   * @remarks <p><code>name = input<string>();</code> creates an uninitialized property.</p>
   * @remarks <p><code>name = input.required<string>();</code> creates an uninitialized property that need to be set.</p>
   * @remarks <p><code>name = input<string>('Initial Name>();</code> creates an initialized property but cannot be overwritten.</p>
   */
  name = input<string>();
}
