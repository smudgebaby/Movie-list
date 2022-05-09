import { createSlice } from "@reduxjs/toolkit";

export const AllinOneSlice = createSlice({
  name: "movieList",
  initialState: {
    liked: [],
    blocked: [],
    pageIds: [],
    movieInfo: [],
  },
  reducers: {
    like: (state, action) => {
      state.liked.add(action.payload);
      return state;
    },

    block: (state, action) => {
      state.blocked.add(action.payload);
      return state;
    },

    unlike: (state, action) => {
      state.liked.delete(action.payload);
      return state;
    },

    unblock: (state, action) => {
      state.blocked.delete(action.payload);
      return state;
    },

    likedToBlocked: (state, action) => {
      state.liked.delete(action.payload);
      state.blocked.add(action.payload);
      return state;
    },

    blockedToLiked: (state, action) => {
      state.blocked.delete(action.payload);
      state.liked.add(action.payload);
      return state;
    },

    update: (state, action) => {
      state.pageIds[action.payload.pageNumber] = action.payload.curPageIds;
      action.payload.movieInfos.forEach((info) => {
        state.movieInfo[info.id] = info;
      });
      return state;
    },
  },
});

export const {
  like,
  block,
  unlike,
  unblock,
  likedToBlocked,
  blockedToLiked,
  update,
} = AllinOneSlice.actions;
export default AllinOneSlice.reducer;
