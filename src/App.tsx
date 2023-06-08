import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Books from "./Pages/Books";
import { DEFAULT_ROUTE_PATH } from "./utils/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
      backgroundColor: "#f5f5f5",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  })
);

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <Routes>
          <Route path="books/page/:pageNumber" element={<Books />} />
          <Route
            path="/"
            element={<Navigate replace to={DEFAULT_ROUTE_PATH} />}
          />
        </Routes>
      </main>
    </>
  );
}
