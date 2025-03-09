import { CanDeactivateFn } from '@angular/router';
import { ConsumeMicrouiComponent } from '../consume-microui/consume-microui.component';
import { inject } from '@angular/core';
export const canExitGuard: CanDeactivateFn<ConsumeMicrouiComponent> = (component) => {
  return component.canDeactivate();

};