import i18next from "i18next";
import i18nextMiddleware from "i18next-express-middleware";
import backend from "i18next-node-fs-backend";
import path from "path";
// multi language middleware
i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(backend)
  .init({
    backend: {
      loadPath: path.resolve(__dirname, "../", "locales/{{lng}}/{{ns}}.json"),
    },
    debug: false,
    detection: {
      order: ["querystring", "cookie"],
      caches: ["cookie"],
    },
    preload: ["en", "ar"],
    saveMissing: true,

    fallbackLng: ["en"],
  });

export const middleware = i18next;

export default i18nextMiddleware;
