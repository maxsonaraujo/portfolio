export const getDictionary = (lang: string): any => {
    const dict = require("@/dictionary/" + lang + ".json")
    return dict;
}

export const getProfile = () => {

    return require("@/dictionary/profile.json");
}