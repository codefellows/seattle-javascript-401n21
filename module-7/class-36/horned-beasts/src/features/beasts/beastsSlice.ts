import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import allBeasts from "./data.js";

export interface Beast {
  image_url: string;
  title: string;
  description: string;
  keyword: string;
  horns: number;
}

export interface BeastState {
  selectedHorns: number | undefined;
  allBeasts: Beast[];
}

const initialState: BeastState = {
  selectedHorns: undefined,
  allBeasts,
};

export const beastsSlice = createSlice({
  name: "beasts",
  initialState,
  reducers: {
    selectHorns(state, action: PayloadAction<number | undefined>) {
      state.selectedHorns = action.payload;
      state.allBeasts =
        state.selectedHorns === undefined
          ? allBeasts
          : allBeasts.filter((beast) => beast.horns === state.selectedHorns);
    },
  },
});

export const { selectHorns } = beastsSlice.actions;

export const selectedBeasts = (state: RootState): Beast[] =>
  state.beasts.allBeasts;
