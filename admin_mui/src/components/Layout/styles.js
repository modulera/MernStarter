import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
    overflowX: "hidden",
  },
  container: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100vw - 240px)`,
    minHeight: "100vh",
    display: "flex", // ! for footer push bottom
    flexDirection: "column", // ! for footer push bottom
  },
  containerShift: {
    width: `calc(100vw - ${240 + theme.spacing(6)}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1, // ! for footer push bottom
    display:"flex",
  },
  link: {
    '&:not(:first-child)': {
      paddingLeft: 15
    }
  }
}));
