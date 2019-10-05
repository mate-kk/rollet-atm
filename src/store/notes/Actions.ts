import {
  ValidNote,
  INCREASE_NOTE,
  DECREASE_NOTE,
  NoteActioTypes,
} from './Types';

export function increaseNoteAmount(
  note: ValidNote,
  amount: number = 1,
): NoteActioTypes {
  return {
    type: INCREASE_NOTE,
    payload: { note, amount },
  };
}

export function decreaseNoteAmount(note: ValidNote, amount: number = 1) {
  return {
    type: DECREASE_NOTE,
    payload: { note, amount },
  };
}
