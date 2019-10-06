// Describing the shape of the chat's slice of state
export type ValidNote = 2000 | 5000 | 10000 | 20000;

export type Notes = {
  [key in ValidNote]: number;
};

export interface NoteState {
  notes: Notes;
}

// Describing the different ACTION NAMES available
export const INCREASE_NOTE = 'INCREASE_NOTE';
export const DECREASE_NOTE = 'DECREASE_NOTE';
export const GET_NOTES = 'GET_NOTES';
export const SET_NEW_NOTES = 'SET_NEW_NOTES';

interface IncreaseNoteAmountAction {
  type: typeof INCREASE_NOTE;
  payload: { note: ValidNote; amount: number };
}

interface DecreaseNoteAmountAction {
  type: typeof DECREASE_NOTE;
  payload: { note: ValidNote; amount: number };
}

interface GetNotesAction {
  type: typeof GET_NOTES;
  payload: { amount: number };
}

interface SetNewNotes {
  type: typeof SET_NEW_NOTES;
  payload: { notes: Notes };
}

export type NoteActioTypes =
  | IncreaseNoteAmountAction
  | DecreaseNoteAmountAction
  | GetNotesAction
  | SetNewNotes;
