const theme = {
  fontStyles: {
    main: "'Open Sans', sans-serif"
  },

  fontSizing: {
    xl: '12rem',
    l: '6rem',
    m: '5.5rem',
    ms: '4rem',
    s: '2rem'
  },

  device: {
    desktop: '(max-width: 1000px)',
    tablet: '(max-width: 800px)',
    mobile: '(max-width: 500px)'
  },

  colors: {
    lightBrown: `#f3e1d0`
  },

  flex: (direction = 'row', justify = 'flex-start', align = 'stretch') => `{
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  }`
};

export default theme;
