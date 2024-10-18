import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend'
import languageDetector from "i18next-browser-languagedetector";
import uzTranslation from './locales/uz.json'
import ruTranslation from './locales/ru.json'

const language = localStorage.getItem('i18nextLng') || 'uz'

i18next
.use(Backend)
.use(languageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'en',
    lng: 'uz',
    debug: true,
    resources: {
        uz: {translation: uzTranslation},
        ru: {translation: ruTranslation}
    }
})

export default i18next