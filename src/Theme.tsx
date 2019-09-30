import React, {
  createContext,
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

// https://github.com/jenil/bulmaswatch/tree/gh-pages/_themes
const AVAILABLE_THEMES = [
  'default',
  'cerulean',
  'cosmo',
  'cyborg',
  'darkly',
  'flatly',
  'journal',
  'litera',
  'lumen',
  'lux',
  'materia',
  'minty',
  'nuclear',
  'pulse',
  'sandstone',
  'simplex',
  'slate',
  'solar',
  'spacelab',
  'superhero',
  'united',
  'yeti',
] as const;

export type ThemeType = typeof AVAILABLE_THEMES[number];

interface ThemeContextInterface {
  theme: ThemeType;
  setTheme:
    | Dispatch<SetStateAction<ThemeType>>
    | ((theme: ThemeType) => undefined);
  AVAILABLE_THEMES: typeof AVAILABLE_THEMES;
}

/**
 * theme: currently selected theme
 * setTheme: theme setter
 * AVAILABLE_THEMES: string[] (ThemeType[]) of all available themes
 */
const ThemeContext = createContext<ThemeContextInterface>({
  theme: AVAILABLE_THEMES[0],
  setTheme: (theme: ThemeType) => undefined,
  AVAILABLE_THEMES,
});

/**
 * removes previous existing theme <link />
 * onLoad of the next to prevent FOUC
 */
const onStyleLoad = () => {
  const themeLinks = Array.from(
    document.head.querySelectorAll('[data-app-theme]'),
  );

  if (themeLinks.length > 1) {
    themeLinks[0].remove();
  }
};

/**
 * given a <link data-app-theme /> element,
 * extracts the default theme from its href
 */
const parseInitialTheme = (): ThemeType => {
  const { href } = document.querySelector(
    '[data-app-theme]',
  ) as HTMLLinkElement;

  const theme = href.match(
    `/${AVAILABLE_THEMES.map(theme => `(${theme})`).join('|')}/g`,
  ) as ThemeType[];

  return theme ? theme[0] : AVAILABLE_THEMES[0];
};

let isFirstRender = true;

const Theme: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(parseInitialTheme());

  useEffect(() => {
    // do not replace theme on initial render
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    const link = Object.assign(document.createElement('link'), {
      rel: 'stylesheet',
      href: `//unpkg.com/bulmaswatch/${theme}/bulmaswatch.min.css`,
      onload: onStyleLoad,
    });

    link.dataset.appTheme = '1';

    document.head.appendChild(link);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, AVAILABLE_THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, AVAILABLE_THEMES };

export default Theme;
