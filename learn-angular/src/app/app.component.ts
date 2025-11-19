/**
 * Angular tutorial, with
 * - Components in Angular
 * - Updating the Component Class
 * - Composing Components
 * - Control Flow in Components - @if
 * - Control Flow in Components - @for
 * - Property Binding in Angular
 * - Event Handling
 * - Component Input Properties (https://angular.dev/tutorials/learn-angular/8-input)
 * 
 * Connected from index.html:
 * index.html
 * |
 * └── <app-root>  → AppComponent (Root-Komponente)
 *        |
 *        ├── <app-header>   → HeaderComponent
 *        |
 *        ├── <app-user>     → UserComponent
 *        |
 *        ├── <app-dashboard> → DashboardComponent
 *        |        |
 *        |        ├── <app-chart>     → ChartComponent
 *        |        └── <app-stats>     → StatsComponent
 *        |
 *        └── <app-footer>   → FooterComponent
 * 
 * Get this running:
 * go to the source folder 'cd learn-angular'
 * execute 'ng serve' in terminal
 * open http://localhost:4200/ in browser
 * 
 * ✅ Best practices
 * Clear naming: Prefix app- for your own tags so that they differ from standard HTML.
 * Reusability: Build small, focused components (e.g., UserCard, LoginForm).
 * Hierarchy instead of monolith: It is better to have many small components than one huge root component.
 */

// Importing input due to "Component Input Properties"
import {Component, input} from '@angular/core';
import {User} from './user.component';

/**
 * The main component of this application
 * 
 * @selector 'app-root'
 * @description Shows the starting page with some welcome text.
 */
@Component({
  selector: 'app-root',
  /**
   * The output of this component.
   * 
   * Get this running:
   * execute 'ng serve' in terminal
   * open http://localhost:4200/ in browser
   */ 
  template: `<p><i>From 'Property Binding in Angular'</i><br>
  Status isEditable: {{ isEditable }}
  <div [contentEditable]="isEditable"><input [disabled]="!isEditable"/></div>
    <h1>Starting</h1>
    <h2>
    <!-- From 'Control Flow in Components - @if'
         and 'Property Binding in Angular' -->
    <p [style.color]="isServerRunning ? 'darkgreen' : 'red'">@if (isServerRunning) {
      working with <section>
      @if (isLoggedIn) {
        <!-- From 'Composing Components' and Component Input Properties
          Setting the input property with <'selector' name="value"/> this will not work on properties with initial
          values. Use the syntax <'selector' [name]="'value'"/> for those. -->
        &quot;<app-user [username]="'TSZ'" name="Thomas S."/>&quot;
      }
      @else
      {
        guest
      }
      </section>
    }
    @else {
     No, the server is not running!
    }</p>
    </h2>
    <button (click)="toggleServer()">Toggle Server</button>
    <button (click)="toggleLogin()" [disabled]="!isServerRunning">Toggle Login</button>
     
    <!-- From 'Updating the Component Class' -->
    <p><i>From 'Updating the Component Class'</i><br>
    Hello world from {{ city }}!</p>
    <p>Do some calculation<br/>
    1 + 1 = {{1 + 1}}</p>

    <!-- From 'Control Flow in Components - @from' -->
    <p><i>From 'Control Flow in Components - &#64;from'</i><br>
    @for (os of operatingSystems; track os.id) {      {{ os.name }}    }<br>
    @for (user of users; track user.id){
      {{user.name}}
    }</p>

    <p><i>Playing around to toggle a boolean member</i><br>
    Status: {{ isActive }} <= <button (click)="toggleActive()">Toggle</button></p>
    <button (click)="toggleEditable()">Toggle Editable</button>

    <!-- From 'Event Handling' -->
    <section
     (mouseover)="showSecretMessage()"
     (mouseleave)="hideSecretMessage()">
      There's a secret message for you, hover to reveal 👀
       <span [class.hidden]="!message">{{ message }}</span>
    </section>
    Some more text ...
    `,
  imports: [User],
  styles: `
  :host {
    color: #919191;
    font-family: Arial, sans-serif;
  }
  h1 {
    color: darkblue;
  }
  h2 {
    color: darkgreen;
  }
`,
})

export class AppComponent
{
  /**
   * Name of the city displayed in the template.
   * From 'Updating the Component Class'
   */
  city = 'Dornum';

  /**
   * Boolean member used to verify whether the user is logged in or not.<br>
   * From 'Control Flow in Components - @if'
   */
  isLoggedIn = true;

  /**
   * Boolean member used to verify whether the server is running or not.
   * From 'Control Flow in Components - @if'
   */
  isServerRunning = true;

  /**
   * Boolean member used to toggle via button.
   */
  isActive = false;

  /**
   * Boolean member used from 'Property Binding in Angular'.<br>
   * @remarks Changing the value does not change anything ...
   */
  isEditable = true;

  /**
   * JSON noted enumeration, used for 'Control Flow in Components - @from'
   */
  operatingSystems = [
    {id: 'win', name: 'Windows'},
    {id: 'osx', name: 'MacOS'},
    {id: 'linux', name: 'Linux'}];
  
  /**
   * JSON noted enumeration, used for for 'Control Flow in Components - @from'
   */
  users = [
    {id: 0, name: "Sarah"},
    {id: 1, name: "Amy"},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'}
  ];

  /**
   * A string that represents a message.
   */
  message = '';

  /**
   * Toggles the status of the boolean member 'isActive'.
   */
  toggleActive() {
    this.isActive = !this.isActive;
  }

  /**
   * Toggles the status of the boolean member 'isLoggedIn'.
   */
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  /**
   * Toggles the status of the boolean member 'isServerRunning'.
   */
  toggleServer() {
    this.isServerRunning = !this.isServerRunning;

    // If the server is not running, assure that the user is not logged in anymore.
    if (this.isServerRunning == false) {
      this.isLoggedIn = false;
    }
  }

  /**
   * Toggles the status of the boolean member 'isEditable'.
   */
  toggleEditable() {
    this.isEditable = !this.isEditable;
  }

  /**
   * From 'Event Handling'.
   */
  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }

  /**
   * Enhancing 'Event Handling'
   */
  hideSecretMessage() {
    this.message = '';
  }
}
