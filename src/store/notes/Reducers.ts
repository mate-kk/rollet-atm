import {
  NoteState,
  INCREASE_NOTE,
  DECREASE_NOTE,
  NoteActioTypes,
} from './Types';

const initialState: NoteState = {
  notes: {
    2000: 0,
    5000: 0,
    10000: 0,
    20000: 0,
  },
};

export function NoteReducer(
  state = initialState,
  action: NoteActioTypes,
): NoteState {
  switch (action.type) {
    case INCREASE_NOTE:
      return {
        notes: {
          ...state.notes,
          [action.payload.note]:
            state.notes[action.payload.note] + action.payload.amount,
        },
      };
    case DECREASE_NOTE:
      return {
        notes: {
          ...state.notes,
          [action.payload.note]:
            state.notes[action.payload.note] - action.payload.amount,
        },
      };
    default:
      return state;
  }
}
