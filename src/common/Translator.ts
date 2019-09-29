import Dictionary from './dictionary.json';

export default class Translator {
  static _(word: string, currentLang: 'hu' | 'en' = 'en') {
    //@ts-ignore
    let found = Dictionary[currentLang][word];
    return found ? found : word;
  }
}
