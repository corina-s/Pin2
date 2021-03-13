import { createSelector } from 'reselect';

const selectUser = state => state;

export const selectCurrentUser = createSelector(
    [selectUser],
    (state) => state.user.currentUser
)