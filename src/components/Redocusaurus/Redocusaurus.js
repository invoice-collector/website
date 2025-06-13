import React from 'react';
import { RedocStandalone } from 'redoc';
import { useColorMode } from '@docusaurus/theme-common';
import './styles.css';

/**
 * NOTE: Colors taken from `node_modules/infima/styles/common/dark-mode.css`
 * and related files
 */
const DOCUSAURUS = {
  fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: '16px',
  darkGray: '#303846',
  dark: {
    primaryText: '#f5f6f7',
    secondaryText: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgb(24, 25, 26)',
  }
};

/** @type {Partial<import('redoc').ResolvedThemeInterface>} */
let LIGHT_THEME_OPTIONS = {
  colors: {
    primary: {
      main: "#1890ff"
    },
  },
  typography: {
    fontFamily: DOCUSAURUS.fontFamily,
    fontSize: DOCUSAURUS.fontSize,
    headings: {
      fontFamily: DOCUSAURUS.fontFamily,
      fontSize: DOCUSAURUS.fontSize,
    },
  },
  sidebar: {
    backgroundColor: '#ffffff',
  },
  rightPanel: {
    backgroundColor: DOCUSAURUS.darkGray,
  }
};

/**
 * @type {Partial<import('redoc').ResolvedThemeInterface>}
 */
let DARK_THEME_OPTIONS = {
  colors: {
    primary: {
      main: "#1890ff"
    },
    text: {
      primary: DOCUSAURUS.dark.primaryText,
      secondary: DOCUSAURUS.dark.secondaryText,
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
    },
    border: {
      dark: '#ffffff',
      light: 'rgba(0,0,0, 0.1)',
    },
  },
  schema: {
    nestedBackground: DOCUSAURUS.dark.backgroundColor,
    typeNameColor: DOCUSAURUS.dark.secondaryText,
    typeTitleColor: DOCUSAURUS.dark.secondaryText,
  },
  sidebar: {
    backgroundColor: DOCUSAURUS.dark.backgroundColor,
    textColor: DOCUSAURUS.dark.primaryText,
    arrow: {
      color: DOCUSAURUS.dark.primaryText,
    },
  },
};


/**
 * @returns {import('redoc').ResolvedThemeInterface}
 */
function getThemeOptions(isDarkMode) {
  
  if (!isDarkMode) return LIGHT_THEME_OPTIONS;
  return DARK_THEME_OPTIONS;
  /*let baseTheme = {
    colors: {
      primary: {
        main: "#1890ff"
      },
    },
  };
  baseTheme = merge(baseTheme, LIGHT_THEME_OPTIONS);
  if (!isDarkMode) return baseTheme;
  return merge({}, baseTheme, DARK_THEME_OPTIONS);*/
}

/**
 *
 * @param {{
 *  spec: string
 * }} props
 */
function Redocusaurus(props) {
  const { isDarkTheme } = useColorMode();
  const theme = getThemeOptions(isDarkTheme);

  return (
    <RedocStandalone 
      specUrl={props.spec}
      options={{
        scrollYOffset: 'nav',
        theme
      }}
    />
  );
}

export default Redocusaurus;
