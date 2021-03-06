import * as fromList from './list';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoItem } from '../models';

const featureName = 'todosFeature';

export interface State {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};


// Selectors

// 1. Create a feature Selector

const selectFeature = createFeatureSelector<State>(featureName);

// 2. Selector for each branch

const selectList = createSelector(selectFeature, f => f.list);

// 3. "Helpers"

const { selectAll: selectTodoEntities } = fromList.adapter.getSelectors(selectList);
// "Object Destructuring"

// 4. The selectors for the components.

// TodoItem[]
export const selectTodoItems = createSelector(selectTodoEntities, e => e as TodoItem[]);
