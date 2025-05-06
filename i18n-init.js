i18next.init({
  lng: 'en', // default language
  debug: true,
  resources: {
    en: {
      translation: {
        title: "Hillfe & Get a Handy",
        tagline: "Jobs, dignity, and a connection — for Berliners in need.",
        get_help: "Need a Handy + Work",
        offer_job: "Offer a Job",
        how_it_works: "How It Works"
        // add more keys...
      }
    },
    de: {
      translation: {
        title: "Hillfe & Handy",
        tagline: "Jobs, Würde und Verbindung – für Berliner in Not.",
        get_help: "Ich brauche ein Handy + Arbeit",
        offer_job: "Ich biete einen Job an",
        how_it_works: "So Funktioniert's"
      }
    },
    pl: {
      translation: {
        title: "Pomoc i Telefon",
        tagline: "Praca, godność i kontakt — dla potrzebujących w Berlinie.",
        get_help: "Potrzebuję telefonu i pracy",
        offer_job: "Oferuję pracę",
        how_it_works: "Jak To Działa"
      }
    },
    ru: {
      translation: {
        title: "Помощь и Телефон",
        tagline: "Работа, достоинство и связь — для нуждающихся в Берлине.",
        get_help: "Нужен телефон и работа",
        offer_job: "Предложить работу",
        how_it_works: "Как Это Работает"
      }
    }
  }
}, function(err, t) {
  // Initial translation
  updateContent();
});

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = i18next.t(key);
  });
}

// Language switcher
document.getElementById('language').addEventListener('change', (e) => {
  const selectedLang = e.target.value;
  i18next.changeLanguage(selectedLang, updateContent);
});
