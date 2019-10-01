
## Usage

- add default theme to index.html->head with a "data-app-theme" property
```html
 <link
 rel="stylesheet"
 href="//unpkg.com/bulmaswatch/THEME_NAME/bulmaswatch.min.css"
 data-app-theme="1"
 />
```

- import `ThemeContext` from `Theme.tsx` and use it via `React.useContext(ThemeContext)`

```js
import React, { useContext } from 'react';
import { ThemeContext } from './Theme';

const MyComponent = () => {
  const { AVAILABLE_THEMES, setTheme, theme } = useContext(ThemeContext);

  return (
    <ul>
      {AVAILABLE_THEMES.map(theme => <li key={theme}>{theme}</li>)}
    </ul>
  );
}

export default MyComponent;
```