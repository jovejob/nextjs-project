import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Card {
  id: number;
  title: string;
  description: string;
  image?: string | null;
  labelTag?: string | null;
  buttonText?: string;
  buttonLink?: string;
}

interface CardsState {
  cards: Card[];
  status: "idle" | "loading" | "failed";
}

const initialState: CardsState = {
  cards: [],
  status: "idle",
};

// ✅ Fetch Cards Data (Used on the Server)
export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const response = await fetch("https://run.mocky.io/v3/c8927342-2c6f-40d7-9ff4-9eee6c02b691");
  const data = await response.json();
  return data.cards;
});

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    // ✅ Allow setting cards from SSR
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = "idle";
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setCards } = cardsSlice.actions; // ✅ Export setCards reducer
export default cardsSlice.reducer;



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// interface Card {
//   id: number;
//   title: string;
//   description: string;
//   image: string | null;
//   labelTag: string | null;
//   buttonText: string;
//   buttonLink: string;
// }

// interface CardsState {
//   cards: Card[];
//   status: "idle" | "loading" | "failed";
// }

// const initialState: CardsState = {
//   cards: [],
//   status: "idle",
// };

// // Fetch Cards Data Once (Now Used in SSR)
// export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
//   const response = await fetch("https://run.mocky.io/v3/c8927342-2c6f-40d7-9ff4-9eee6c02b691");
//   const data = await response.json();
//   return data.cards;
// });

// // // Async thunk to fetch cards data
// // export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
// //   const response = await fetch("https://run.mocky.io/v3/c8927342-2c6f-40d7-9ff4-9eee6c02b691");
// //   return response.json();
// // });

// const cardsSlice = createSlice({
//   name: "cards",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCards.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchCards.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.cards = action.payload.cards;
//       })
//       .addCase(fetchCards.rejected, (state) => {
//         state.status = "failed";
//       });
//   },
// });

// export default cardsSlice.reducer;
