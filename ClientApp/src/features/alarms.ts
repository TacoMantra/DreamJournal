import {
    createSlice, PayloadAction, createAsyncThunk, createEntityAdapter,
} from '@reduxjs/toolkit';
import { DateTime } from 'luxon';
import { IAlarm } from '../models/alarm/Alarm';
import LoadingStates from '../consts/enums/loadingStates';
import { fetchAlarms } from '../data-sources/alarms';

export const fetchAlarmsByUserId = createAsyncThunk(
    'alarms/fetchByUserIdStatus',
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await fetchAlarms(userId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const alarmsAdapter = createEntityAdapter<IAlarm>({
    sortComparer: (a, b) => DateTime.fromISO(a.time) < DateTime.fromISO(b.time),
});

export const alarmsSlice = createSlice({
    name: 'alarms',
    initialState: alarmsAdapter.getInitialState({
        loading: LoadingStates.idle,
        error: null,
    }),
    reducers: {},
    extraReducers: {
        [fetchAlarmsByUserId.pending]: (state) => { state.loading = LoadingStates.pending; },
        [fetchAlarmsByUserId.fulfilled]: (state, action: PayloadAction<Array<IAlarm>>) => {
            alarmsAdapter.setAll(state, action.payload);
            state.error = null;
            state.loading = LoadingStates.idle;
        },
        [fetchAlarmsByUserId.rejected]: (state, action: PayloadAction<Error>) => {
            state.loading = LoadingStates.failed;
            state.error = action.payload;
        },
    },
});

export default alarmsSlice.reducer;
