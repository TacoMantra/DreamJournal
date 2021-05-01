import {
    createSlice, PayloadAction, createAsyncThunk, createEntityAdapter,
} from '@reduxjs/toolkit';
import { DateTime } from 'luxon';
import { IDream } from '../models/dream/Dream';
import LoadingStates from '../consts/enums/loadingStates';
import { fetchDreams, createDream } from '../data-sources/dreams';

const fetchDreamsByUserId = createAsyncThunk(
    'dreams/fetchByUserIdStatus',
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await fetchDreams(userId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const createDreamForUser = createAsyncThunk(
    'dreams/createDreamStatus',
    async (args: { dream: IDream }, { rejectWithValue }) => {
        try {
            await createDream(args.userId, args.dream);
            return args.dream;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const dreamsAdapter = createEntityAdapter<IDream>({
    sortComparer: (a, b) => DateTime.fromISO(a.dateIn) < DateTime.fromISO(b.dateIn),
    selectId: (dream) => `dream_${dream.dateIn}`,
});

const dreamsSlice = createSlice({
    name: 'dreams',
    initialState: dreamsAdapter.getInitialState({
        loading: LoadingStates.idle,
        error: null,
    }),
    reducers: {},
    extraReducers: {
        [fetchDreamsByUserId.pending]: (state) => { state.loading = LoadingStates.pending; },
        [fetchDreamsByUserId.fulfilled]: (state, action: PayloadAction<Array<IDream>>) => {
            dreamsAdapter.setAll(state, action.payload);
            state.error = null;
            state.loading = LoadingStates.idle;
        },
        [fetchDreamsByUserId.rejected]: (state, action: PayloadAction<Error>) => {
            state.loading = LoadingStates.failed;
            state.error = action.payload;
        },
        [fetchDreamsByUserId.pending]: (state) => { state.loading = LoadingStates.pending; },
        [fetchDreamsByUserId.rejected]: (state, action: PayloadAction<Error>) => {
            state.loading = LoadingStates.failed;
            state.error = action.payload;
        },
        [createDreamForUser.fulfilled]: (state, action: PayloadAction<IDream>) => {
            dreamsAdapter.addOne(state, action.payload);
            state.error = null;
            state.loading = LoadingStates.idle;
        },
    },
});

export { fetchDreamsByUserId, createDreamForUser };

export default dreamsSlice.reducer;
