import {
    createSlice, PayloadAction, createAsyncThunk, createEntityAdapter,
} from '@reduxjs/toolkit';
import { DateTime } from 'luxon';
import { IAlarm } from '../models/alarm/Alarm';
import LoadingStates from '../consts/enums/loadingStates';
import { fetchAlarms, createAlarm, deleteAlarm } from '../data-sources/alarms';

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

export const createAlarmForUser = createAsyncThunk(
    'alarms/createAlarmForUserStatus',
    async (args: { userId: string, alarm: IAlarm }, { rejectWithValue }) => {
        try {
            await createAlarm(args.userId, args.alarm);
            return args.alarm;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const deleteAlarmById = createAsyncThunk(
    'alarms/deleteAlarmByIdStatus',
    async (alarmId: int, { rejectWithValue }) => {
        try {
            await deleteAlarm(alarmId);
            return alarmId;
        } catch (error) {
            return rejectWithValue(error.response);
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
        [createAlarmForUser.pending]: (state) => { state.loading = LoadingStates.pending; },
        [createAlarmForUser.fulfilled]: (state, action: PayloadAction<IAlarm>) => {
            alarmsAdapter.addOne(state, action.payload);
            state.error = null;
            state.loading = LoadingStates.idle;
        },
        [fetchAlarmsByUserId.rejected]: (state, action: PayloadAction<Error>) => {
            state.loading = LoadingStates.failed;
            state.error = action.payload;
        },
        [deleteAlarmById.pending]: (state) => { state.loading = LoadingStates.pending; },
        [deleteAlarmById.fulfilled]: (state, action: PayloadAction<int>) => {
            alarmsAdapter.removeOne(state, action.payload);
            state.error = null;
            state.loading = LoadingStates.idle;
        },
        [deleteAlarmById.rejected]: (state, action: PayloadAction<Error>) => {
            state.loading = LoadingStates.failed;
            state.error = action.payload;
        },
    },
});

export default alarmsSlice.reducer;
