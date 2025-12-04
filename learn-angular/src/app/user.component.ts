/**
 * Angular tutorial, with
 * - ...
 * - Composing Components
 * - ...
 */

// Importing input due to "Component Input Properties"
// Importing output due to "Component Output Properties"
import {Component, input, output} from '@angular/core';

// Importing FormsModule due to Forms Overview
import { FormsModule } from '@angular/forms';

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
  The user's name is {{name()}}<br>
  <!-- From 'Component Output Properties' -->
  <button class="btn" (click)="addItem()">Add Item</button><br>
  <!-- From 'Forms Overview'
       NOTE: The syntax [()] is known as "banana in a box" but it represents
       two-way binding: property binding and event binding.  -->
  <!-- label for ="framework">Favorite Framework: <input type="text" id="framework"
    [(ngModel)]="framework" /></label -->`,
  imports: [FormsModule]
})
export class User {

  /**
   * Property for username.<br>
   * Designed as input property with default value 'youngTech'.
   * 
   * @remarks <p>`name = input<string>();` creates an uninitialized property.</p>
   * @remarks <p>`name = input.required<string>();` creates an uninitialized property that need to be set.</p>
   * @remarks <p>`name = input<string>('Initial Name');` creates an initialized property - see following remarks!</p>
   * @remarks <p>Setting the input property with `<'selector' name="value"/>` will **not** work on properties with initial values.</p>
   * @remarks <p>Use the syntax `<'selector' [name]="'value'"/>` to set properties with initial values.</p>
   */
    username = input<string>('youngTech');

  /**
   * From 'Component Input Properties'
   * 
   * @remarks <p>`name = input<string>();` creates an uninitialized property.</p>
   * @remarks <p>`name = input.required<string>();` creates an uninitialized property that need to be set.</p>
   * @remarks <p>`name = input<string>('Initial Name');` creates an initialized property - see following remarks!</p>
   * @remarks <p>Setting the input property with `<'selector' name="value"/>` will **not** work on properties with initial values.</p>
   * @remarks <p>Use the syntax `<'selector' [name]="'value'"/>` to set properties with initial values.</p>
   */
  name = input<string>();

  /** 
   * From 'Forms Overview'<br>
   * Property bound to the input field with two-way binding:<br>
   * `[(ngModel)]="framework"`
   * 
   * @remarks The syntax [()] is known as "banana in a box" but it represents two-way binding: property binding and event binding.
   */
  framework = ''; 

  /**
   * Represents an output property.<br>
   * From 'Component Output Properties'.<br><br>
   * Clicking the button in the template will trigger the event, executing `addItemEvent.emit(...)`.<br><br>
   * The child component (`this`) emits the event, the parent component listens to it with
   * `(addItemEvent)="addItem($event)"`.
   */
  addItemEvent = output<string>();

  /**
   * Method to trigger the output event.
   * From 'Component Output Properties'
   */
  addItem() {
    this.addItemEvent.emit(`?`);
  }
}
