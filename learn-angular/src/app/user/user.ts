import {Component} from '@angular/core';

/**
 * The big picture:<br>
 * Data model (user.ts) ↔️ Components (user.component.ts, user-detail.component.ts) ↔️ Routing ↔️ Services<br>
 * All parts are interlinked:
 * <ul>
 *  <li> Models define the data structure.</li>
 *  <li> Components take care of the presentation.</li>
 *  <li> Routing controls navigation.</li>
 *  <li> Services manage shared logic and data.</li>
 * </ul>
 * 
 *
 */

@Component({
  selector: 'app-usersite',
  template: `
    <div>Username: {{ username }}</div>
  `,
})
export class UserSite {
  username = 'username';
}
