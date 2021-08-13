import create from 'zustand';

export interface PaginationProps {
  page: number;
  perPage: number;
  total: number;
  setPage: (e: number) => void;
  setPerPage: (e: number) => void;
  setTotal: (e: number) => void;
}

const usePaginate = create((set) => ({
  page: 1,
  perPage: 8,
  total: 0,
  setPage: (e: number): number | void => set({ page: e }),
  setPerPage: (e: number): number | void => set({ perPage: e }),
  setTotal: (e: number): number | void => set({ total: e }),
}));

export default usePaginate;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// export interface PaginationProps {
//   page: number;
//   perPage: number;
//   total: number;
//   setPage: (e: number) => void;
//   setPerPage: (e: number) => void;
//   setTotal: (e: number) => void;
// }
// const initialState: PaginationProps = {
//   page: 1,
//   perPage: 8,
//   total: 0,
//   setPage: (e: number): number | void => set({ page: e }),
//   setPerPage: (e: number): number | void => set({ perPage: e }),
//   setTotal: (e: number): number | void => set({ total: e }),
// };

// export const usePaginate = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setState: (state: PaginationProps, action: PayloadAction<string>) => {
//       // state.isLogged = true;
//     },
//   },
// });

// export const { setState } = usePaginate.actions;
// export default usePaginate.reducer;
