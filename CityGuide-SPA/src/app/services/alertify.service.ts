import { Injectable } from '@angular/core';
declare let alertfify: any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  success(message: string) {
    alertfify.success(message);
  }

  warning(message: string) {
    alertfify.warning(message);
  }

  error(message: string) {
    alertfify.error(message);
  }
}
