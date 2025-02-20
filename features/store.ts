import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "@/features/cards/cardsSlice";
import userSlice from "@/features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    cards: cardsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
