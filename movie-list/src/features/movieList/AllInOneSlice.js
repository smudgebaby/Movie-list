import { createSlice } from '@reduxjs/toolkit'

export const AllinOneSlice = createSlice({
  name: 'movieList',
  initialState: {
    liked: [],
    blocked: [],
    pageIds: [],
    movieInfo: []
  },
  reducers: {
    like:(state,action)=> {
        state.liked.add(action.payload)
    },

    block:(state,action)=> {
        state.blocked.add(action.payload)
    },

    unlike:(state,action)=>  {
        state.liked.delete(action.payload)
    },

    unblock:(state,action)=> {
        state.blocked.delete(action.payload)
    },

    likedToBlocked:(state,action)=> {
        state.liked.delete(action.payload)
        state.blocked.add(action.payload)
    },

    blockedToLiked:(state,action)=> {
        state.blocked.delete(action.payload)
        state.liked.add(action.payload)
    },

    update:(state,action)=> {
        state.pageIds[action.payload.pageNumber] = action.payload.curPageIds
        action.payload.movieInfos.forEach(info => {
            state.movieInfo[info.id] = info
        });
    },
    default:(state) => state
  }
})


export const { like,block,unlike,unblock,likedToBlocked,blockedToLiked,update } = AllinOneSlice.actions
export default AllinOneSlice.reducer
