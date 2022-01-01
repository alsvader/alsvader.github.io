const styles = (theme) => ({
  swiperContainer: {
    margin: '2rem auto',
    width: '90%',
    [theme.breakpoints.up('md')]: {
      margin: '3rem auto',
    },
    [theme.breakpoints.up('laptopLg')]: {
      margin: '4rem auto',
    },
    // [theme.breakpoints.up('xl')]: {
    //   margin: '5rem auto',
    // },
  },
  cardRoot: {
    maxWidth: 345,
    textAlign: 'center',
    transition: 'all 0.4s ease-in',
    '& h3': {
      fontSize: '1.5rem',
      color: theme.palette.primary.main,
    },
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '-1px 3px 8px 5px rgba(0,0,0,0.23)',
      top: '-4px',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

export default styles;
