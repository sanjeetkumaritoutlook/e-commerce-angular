import { CanDeactivateFn } from '@angular/router';
import { ConsumeMicrouiComponent } from '../consume-microui/consume-microui.component';
export const canExitGuard: CanDeactivateFn<ConsumeMicrouiComponent> = (component) => {
  if (component.unsavedChanges) {
    return confirm('You have unsaved changes. Do you really want to leave?');
  }
  return true;
};