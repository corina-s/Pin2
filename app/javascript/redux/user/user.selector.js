import { createSelector } from 'reselect';

const selectUser = state => state.session;

export const selectCurrentUser = createSelector(
    [selectUser],
    (session) => session.currentUser
)