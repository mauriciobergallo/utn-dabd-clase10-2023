import { CanDeactivateFn } from '@angular/router';
import { PublicChildComponent } from '../public/public-child/public-child.component';

export const validateFormGuard: CanDeactivateFn<PublicChildComponent> = (component, currentRoute, currentState, nextState) => {
  if (!component.isChecked) {
    return confirm('Estás seguro? NO tenes checkeado el check');
  }

  return true;
};
