import { useI18n } from 'vue-i18n'

export default useI18n().locale.value = localStorage.getItem('locale') || navigator.languages.find(el => Object.keys(['en', 'fr', 'es', 'de']).includes(el)) || 'en'