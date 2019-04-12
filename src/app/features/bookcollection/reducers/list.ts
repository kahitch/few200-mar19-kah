// import { Action } from '@ngrx/store';
import * as actions from '../actions/list.actions';

import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface BookEntity {
    id: string;
    title: string;
    author: string;
    format: string;
}


export interface State extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

const initialState: State = {
    ids: ['1', '2', '3'],
    entities: {
        1: { id: '1', title: 'The Hobbit', author: 'Tolkien, J.R.R.', format: 'Hardcover' },
        2: { id: '2', title: 'The Pelican Brief', author: 'Grisham, John', format: 'E-Book' },
        3: { id: '3', title: 'I Am Zlatan', author: 'Ibrahimovich, Zlatan', format: 'Paperback' }
    }
};

export function reducer(state: State = initialState, action: actions.All): State {
    switch (action.type) {
        case actions.ITEM_ADDED: {
            return adapter.addOne(action.payload, state);
        }
        default: {
            return state;
        }
    }
}
