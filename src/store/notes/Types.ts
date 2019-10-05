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

interface IncreaseNoteAmountAction {
  type: typeof INCREASE_NOTE;
  payload: { note: ValidNote; amount: number };
}

interface DecreaseNoteAmountAction {
  type: typeof DECREASE_NOTE;
  payload: { note: ValidNote; amount: number };
}

export type NoteActioTypes =
  | IncreaseNoteAmountAction
  | DecreaseNoteAmountAction;
