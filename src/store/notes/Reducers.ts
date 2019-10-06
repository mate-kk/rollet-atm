import {
  NoteState,
  INCREASE_NOTE,
  DECREASE_NOTE,
  NoteActioTypes,
  SET_NEW_NOTES,
} from './Types';

const initialState: NoteState = {
  notes: {
    2000: 10,
    5000: 10,
    10000: 10,
    20000: 10,
  },
};

export default (state = initialState, action: NoteActioTypes): NoteState => {
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
      // Do not go below 0
      if (state.notes[action.payload.note] == 0) return state;
      return {
        notes: {
          ...state.notes,
          [action.payload.note]:
            state.notes[action.payload.note] - action.payload.amount,
        },
      };
    case SET_NEW_NOTES:
      return {
        notes: { ...action.payload.notes },
      };
    default:
      return state;
  }
};
