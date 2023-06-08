import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import { IconButton } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: "400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    icon: {
      marginTop: "12px",
    },
  })
);

const NotFoundComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h6">No record found</Typography>
      <IconButton component={Link} to="/" className={classes.icon}>
        <HomeIcon color="primary" />
      </IconButton>
    </Box>
  );
};

export default NotFoundComponent;
