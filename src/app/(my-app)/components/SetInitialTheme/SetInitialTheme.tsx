import { THEME_KEY, Theme } from "@/app/(my-app)/context/ThemeContext";

const setInitialTheme = `
  (function() {
    try {
      var theme = localStorage.getItem('${THEME_KEY}');
      if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? '${Theme.DARK}' : '${Theme.LIGHT}';
      }
      document.documentElement.setAttribute('data-theme', theme);
    } catch(e) {}
  })();
`;
const SetInitialTheme = () => {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
    </>
  );
};

export default SetInitialTheme;
