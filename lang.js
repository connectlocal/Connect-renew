
const translations = {
  en: {
    title: "Connect",
    intro: "Connect is a place where locals and foreigners can practice languages together.",
    register: "Register",
    name: "Name:",
    language: "Language you want to practice:",
    submit: "Submit"
  },
  ja: {
    title: "Connect（つながる）",
    intro: "Connectは、外国人と地元の人が一緒に言語練習できる場所です。",
    register: "登録",
    name: "名前：",
    language: "練習したい言語：",
    submit: "送信"
  },
  zh: {
    title: "连接",
    intro: "Connect 是本地人与外国人一起练习语言的地方。",
    register: "注册",
    name: "姓名：",
    language: "想练习的语言：",
    submit: "提交"
  },
  ko: {
    title: "커넥트",
    intro: "Connect는 외국인과 현지인이 함께 언어를 연습하는 공간입니다.",
    register: "등록",
    name: "이름:",
    language: "연습하고 싶은 언어:",
    submit: "제출"
  },
  es: {
    title: "Conectar",
    intro: "Connect es un lugar donde los locales y extranjeros pueden practicar idiomas juntos.",
    register: "Registrarse",
    name: "Nombre:",
    language: "Idioma que deseas practicar:",
    submit: "Enviar"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
