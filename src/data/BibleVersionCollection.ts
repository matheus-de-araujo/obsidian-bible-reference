import { IBibleVersion } from '../interfaces/IBibleVersion'
import { BibleAPISourceCollection } from './BibleApiSourceCollection'

export const BibleVersionCollection: IBibleVersion[] = [
  // bible api
  {
    key: 'web',
    versionName: 'World English Bible',
    language: 'English',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'clementine',
    versionName: 'Clementine Latin Vulgate',
    language: 'Latin',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'kjv',
    versionName: 'King James Version',
    language: 'English',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'bbe',
    versionName: 'Bible in Basic English',
    language: 'English',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'oeb-us',
    versionName: 'Open English Bible, US Edition',
    language: 'English',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'almeida',
    versionName: 'João Ferreira de Almeida',
    language: 'Portuguese',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'rccv',
    versionName: 'Romanian Corrected Cornilescu Version',
    language: 'Romanian',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'cherokee',
    versionName: 'Cherokee New Testament',
    language: 'Cherokee',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'oeb-cw',
    versionName: 'Open English Bible, Commonwealth Edition',
    language: 'English (UK)',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'webbe',
    versionName: 'World English Bible, British Edition',
    language: 'English (UK)',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  // bolls life
  {
    key: 'nkjv',
    versionName: 'New King James Version',
    language: 'English',
    apiSource: BibleAPISourceCollection.bollsLife,
    infoUrl: 'https://wikipedia.org/wiki/New_King_James_Version',
  },
  {
    key: 'niv',
    versionName: 'New International Version, 1984',
    language: 'English',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'nrsvce',
    versionName: 'New Revised Standard Version Catholic Edition (NRSVCE)',
    language: 'English',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'esv',
    versionName: 'English Standard Version',
    language: 'English',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'ntlh',
    versionName: 'Nova Tradução Na Linguagem de Hoje',
    language: 'Portuguese',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'cuv',
    versionName: 'Chinese Union Version (Traditional)',
    language: 'Chinese',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'nr06',
    versionName: 'Nuova Riveduta, 2006',
    language: 'Latin / Italian',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'svd',
    versionName: 'Smith and Van Dyke',
    language: 'Arabic العربية',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'btx3',
    versionName: 'La Biblia Textual 3ra Edicion',
    language: 'Spanish',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'rv1960',
    versionName: 'Reina Valera 1960',
    language: 'Spanish',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'rv2004',
    versionName: 'Reina Valera Gomez 2004',
    language: 'Spanish',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'pdt',
    versionName: 'Palabra de Dios para Todos',
    language: 'Spanish',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'nvi',
    versionName: 'Nueva Version Internacional',
    language: 'Spanish',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'ntv',
    versionName: 'Nueva Traduccion Viviente, 2009',
    language: 'Spanish',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'lbla',
    versionName: 'La Biblia de Las Americas, 1997',
    language: 'Spanish',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'bg',
    versionName: 'Biblia gdańska, 1881',
    language: 'Polish',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'bw',
    versionName: 'Biblia warszawska, 1975',
    language: 'Polish',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'tb',
    versionName: 'Terjemahan Baru',
    language: 'Indonesian',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'bti',
    versionName: 'Библия под ред. М.П. Кулакова и М.М. Кулакова, 2015',
    language: 'Russian',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
  {
    key: 'utt',
    versionName: 'Українська Біблія LXX УБТ Рафаїла Турконяка (2011) 77 книг',
    language: 'Ukrainian',
    apiSource: BibleAPISourceCollection.bollsLife,
  },
]

export const DEFAULT_BIBLE_VERSION = BibleVersionCollection[11]
