import profileJson from '@/dictionaries/profile.json'
import dictionaryDefaultJosn from '@/dictionaries/en-US.json'

export type IProfile = typeof profileJson;
type IDict = typeof dictionaryDefaultJosn;
export interface IDictionary extends IDict, IProfile { lang: string }

export enum DICTIONARIES {
    ptBr="pt-BR",
    enUs="en-US",
    default="en-US"
}

export const getDictionaries = (lang: string): IDictionary => {
    const dict = require("@/dictionaries/" + lang + ".json")
    const profile = require("@/dictionaries/profile.json")
    const dictionary = { ...dict, ...profile, lang };
    return dictionary;
}
