import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import fr from './locales/fr.json'
import ar from './locales/ar.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar },
  },
  lng: localStorage.getItem('prynia-lang') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

// NEW
const updateDirection = (lng) => {
  document.documentElement.lang = lng
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
}

updateDirection(i18n.language)

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('prynia-lang', lng)
  updateDirection(lng)
})

export default i18n