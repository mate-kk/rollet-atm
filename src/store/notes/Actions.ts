import {
  ValidNote,
  INCREASE_NOTE,
  DECREASE_NOTE,
  NoteActioTypes,
  GET_NOTES,
  Notes,
  SET_NEW_NOTES,
} from './Types';

export const increaseNoteAmount = (
  note: ValidNote,
  amount: number = 1,
): NoteActioTypes => {
  return {
    type: INCREASE_NOTE,
    payload: { note, amount },
  };
};

export const decreaseNoteAmount = (
  note: ValidNote,
  amount: number = 1,
): NoteActioTypes => {
  return {
    type: DECREASE_NOTE,
    payload: { note, amount },
  };
};

export const setNewNotes = (notes: Notes): NoteActioTypes => {
  return {
    type: SET_NEW_NOTES,
    payload: { notes },
  };
};

export const getNotes = (amount: number): NoteActioTypes => {
  return {
    type: GET_NOTES,
    payload: { amount },
  };
};
