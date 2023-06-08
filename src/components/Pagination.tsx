import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { useSelector } from "../store";
import { Theme, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pagination: {
      position: "fixed",
      bottom: 0,
      background: "#fff",
      padding: "12px",
    },
  })
);

export default function PagePagination() {
  const { pageNumber } = useParams();
  const { allBooks } = useSelector((state) => state.books);
  const classes = useStyles();

  return (
    <Pagination
      className={classes.pagination}
      page={Number(pageNumber)}
      count={allBooks?.count}
      variant="outlined"
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/books/page/${item.page}`}
          {...item}
        />
      )}
    />
  );
}
