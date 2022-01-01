const rootStyle = (theme) => ({
  container: {
    [theme.breakpoints.up('laptop')]: {
      margin: 'auto',
      width: '90%',
    },
    [theme.breakpoints.up('laptopLg')]: {
      margin: 'auto',
      width: '80%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: 'auto',
      width: '65%',
    },
  },
});

export default rootStyle;
