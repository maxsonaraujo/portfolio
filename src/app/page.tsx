import { redirect } from "next/navigation";

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en-US', 'pt-BR']
let defaultLocale = 'en-US'

const lang = match(languages, locales, defaultLocale) // -> 'en-US'
console.log(lang)

export default function Main() {
    redirect(lang)
}