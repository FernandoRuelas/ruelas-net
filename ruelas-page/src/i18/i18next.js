import Vue from 'vue';
import VueI18n from 'vue-i18n';
import es from '../language/es.json';
import en from '../language/en.json';

Vue.use(VueI18n);

const messages = {
    en: en,
    es: es
  };

// Detectar el idioma del navegador
const userLanguage = navigator.language.split('-')[0]; // Obtiene el idioma principal del navegador

// Establecer el idioma por defecto
const defaultLocale = ['en', 'es'].includes(userLanguage) ? userLanguage : 'en'; // Usa el idioma del navegador si está disponible, de lo contrario usa español

const i18n = new VueI18n({
  locale: defaultLocale,
  messages,
});

export default i18n