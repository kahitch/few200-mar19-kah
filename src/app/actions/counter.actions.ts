import { Action } from '@ngrx/store';

// "Action Creators"

export const INCREMENT = '[counter] increment';
export class CountImcremented implements Action {
  readonly type = INCREMENT;
  constructor() { }
}

export const DECREMENT = '[counter] decrement';
export class CountDecremented implements Action {
  readonly type = DECREMENT;
  constructor() { }
}

export const RESET = '[counter] reset';
export class ResetCounter implements Action {
  readonly type = RESET;
  constructor() { }
}

export type All = CountImcremented | CountDecremented | ResetCounter;

// Discriminated Unions

