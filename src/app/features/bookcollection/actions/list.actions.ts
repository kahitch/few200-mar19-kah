import { Action } from '@ngrx/store';
import { BookEntity } from '../reducers/list';

let tempID = 999;

export const ITEM_ADDED = '[booklist] Item Added';
export class AddedBookItem implements Action {
    readonly type = ITEM_ADDED;
    payload: BookEntity;
    constructor(title: string, author: string, format: string) {

        this.payload = {
            id: 'T' + tempID++,
            title, author, format
        };
    }
}


export type All = AddedBookItem;
