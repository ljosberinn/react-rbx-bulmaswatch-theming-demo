import React, {
  createContext,
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

const LINK_ELEMENT_STATICS = {
  selector: '[data-app-theme]',
  prop: {
    key: 'appTheme',
    value: '1',
  },
};

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
const onStyleLoad = (): void => {
  const themeLinks = Array.from(
    document.head.querySelectorAll(LINK_ELEMENT_STATICS.selector),
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
  const { href } = getThemeLink();

  const theme = href.match(
    `/${AVAILABLE_THEMES.map(theme => `(${theme})`).join('|')}/g`,
  ) as ThemeType[];

  return theme ? theme[0] : AVAILABLE_THEMES[0];
};

const getThemeLink = () =>
  document.head.querySelector(LINK_ELEMENT_STATICS.selector) as HTMLLinkElement;

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

    const { key, value } = LINK_ELEMENT_STATICS.prop;

    link.dataset[key] = value;

    // prevent overriding/collision with styles appearing further down in the head
    getThemeLink().insertAdjacentElement('afterend', link);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, AVAILABLE_THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, AVAILABLE_THEMES };

export default Theme;
