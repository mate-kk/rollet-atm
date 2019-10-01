import Dictionary from './dictionary.json';

export default class Translator {
  static _(word: string, currentLang: 'hu' | 'en' = 'en') {
    if (currentLang == 'en') return word;
    //@ts-ignore
    let found = Dictionary[currentLang][word];
    return found ? found : word;
  }
}
