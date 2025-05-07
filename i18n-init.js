i18next.init({
  lng: 'en', // Default language
  debug: true, // Enable debug mode
  resources: {
    en: {
      translation: {
        html_title: "Hillfe & Get a Handy",
        label_language: "Language",
        site_title: "Hillfe & Get a Handy",
        tagline: "Jobs, dignity, and a connection — for Berliners in need.",
        section_what_we_do: "What We Do",
        description: "We connect people without homes or stable work with quick jobs in homes, small businesses as well as local cafes and restaurants — and we provide a phone and SIM card so they can stay connected.",
        btn_get_help: "Need a Handy + Work",
        btn_offer_job: "Offer a Job",
        how_it_works: "How It Works",
        step1: "Tell us what you need (or what help you can offer).",
        step2: "We match helpers with jobs — fast and local.",
        step3: "Everyone gets a phone to stay in the loop.",
        footer: "© 2025 Hillfe & Get a Handy. Made with care in Berlin."
      }
    },
    de: {
      translation: {
        html_title: "Hillfe & Handy",
        label_language: "Sprache",
        site_title: "Hillfe & Handy",
        tagline: "Jobs, Würde und Verbindung – für Berliner in Not.",
        section_what_we_do: "Was Wir Tun",
        description: "Wir verbinden Menschen ohne Zuhause oder stabile Arbeit mit schnellen Jobs in Haushalten, kleinen Unternehmen sowie lokalen Cafés und Restaurants – und wir stellen ein Telefon und eine SIM-Karte zur Verfügung, damit sie in Kontakt bleiben können.",
        btn_get_help: "Ich brauche ein Handy + Arbeit",
        btn_offer_job: "Ich biete einen Job an",
        how_it_works: "Wie Es Funktioniert",
        step1: "Sagen Sie uns, was Sie brauchen (oder welche Hilfe Sie anbieten können).",
        step2: "Wir bringen Helfer schnell und lokal mit Jobs zusammen.",
        step3: "Jeder bekommt ein Telefon, um in Verbindung zu bleiben.",
        footer: "© 2025 Hillfe & Handy. Mit Liebe in Berlin gemacht."
      }
    },
    pl: {
      translation: {
        html_title: "Pomoc i Telefon",
        label_language: "Język",
        site_title: "Pomoc i Telefon",
        tagline: "Praca, godność i kontakt — dla potrzebujących w Berlinie.",
        section_what_we_do: "Co Robimy",
        description: "Łączymy osoby bezdomne lub bez stabilnej pracy z szybkimi pracami w domach, małych firmach oraz lokalnych kawiarniach i restauracjach – zapewniamy również telefon i kartę SIM, aby mogli pozostać w kontakcie.",
        btn_get_help: "Potrzebuję telefonu i pracy",
        btn_offer_job: "Oferuję pracę",
        how_it_works: "Jak To Działa",
        step1: "Powiedz nam, czego potrzebujesz (lub jaką pomoc możesz zaoferować).",
        step2: "Szybko i lokalnie dopasowujemy pomocników do prac.",
        step3: "Każdy dostaje telefon, aby pozostać w kontakcie.",
        footer: "© 2025 Pomoc i Telefon. Stworzone z troską w Berlinie."
      }
    },
    ru: {
      translation: {
        html_title: "Помощь и Телефон",
        label_language: "Язык",
        site_title: "Помощь и Телефон",
        tagline: "Работа, достоинство и связь — для нуждающихся в Берлине.",
        section_what_we_do: "Что Мы Делаем",
        description: "Мы связываем людей без дома или стабильной работы с быстрыми работами в домах, небольших компаниях, а также в местных кафе и ресторанах – и предоставляем телефон и SIM-карту, чтобы они могли оставаться на связи.",
        btn_get_help: "Мне нужен телефон и работа",
        btn_offer_job: "Я предлагаю работу",
        how_it_works: "Как Это Работает",
        step1: "Скажите нам, что вам нужно (или какую помощь вы можете предложить).",
        step2: "Мы быстро и локально подбираем помощников для работы.",
        step3: "Каждый получает телефон, чтобы оставаться на связи.",
        footer: "© 2025 Помощь и Телефон. Сделано с заботой в Берлине."
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
// Include the i18next backend plugin
i18next
  .use(i18nextHttpBackend) // Use the HTTP backend to load translations
  .init({
    backend: {
      // Path to your translation files
      loadPath: '/locales/{{lng}}.json' 
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    debug: true // Enable debug mode to see logs in the console
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
