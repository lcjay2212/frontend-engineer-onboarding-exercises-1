import { configureStore } from '@reduxjs/toolkit';
import loggedSlice from 'hooks/loggedinSlice';
import productsSlice from 'hooks/productsSlice';
import usersSlice from 'hooks/usersSlice';

export const store = configureStore({
  reducer: {
    product: productsSlice,
    user: usersSlice,
    logged: loggedSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
