import { useEffect } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import { useParams } from "react-router-dom";
import ListItemComponent from "../components/ListItemComponent";
import PagePagination from "../components/Pagination";
import { useSelector, useDispatch } from "../store";
import { fetchBooks } from "../slices/books";
import SkeletonLoading from "../components/SkeletonLoading";
import { Box } from "@material-ui/core";
import SearchField from "../components/SearchField";
import NotFoundComponent from "../components/NotFoundComponent";

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
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const Books = () => {
  const classes = useStyles();
  const { allBooks, loading } = useSelector((state) => state.books);
  const { pageNumber } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      page: Number(pageNumber),
    };
    dispatch(fetchBooks(params));
  }, [dispatch, pageNumber]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <SearchField />
      {loading && <SkeletonLoading />}

      {!loading && allBooks && allBooks?.books.length > 0 && (
        <Box>
          <List className={classes.root}>
            {allBooks.books.map((book) => (
              <ListItemComponent key={book.id} book={book} />
            ))}
          </List>
          <Box>
            <PagePagination />
          </Box>
        </Box>
      )}

      {allBooks && allBooks?.books.length === 0 && <NotFoundComponent />}
    </Container>
  );
};

export default Books;
