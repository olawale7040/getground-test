import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import BookIcon from "@material-ui/icons/Book";
import { Book } from "../utils/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    blue: {
      color: "#fff",
      backgroundColor: blue[500],
    },
    list: {
      borderBottom: `solid 1px ${grey[300]}`,
    },
  })
);

type ListItemComponentProps = {
  book: Book;
};
const ListItemComponent = ({ book }: ListItemComponentProps) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.list}>
      <ListItemAvatar>
        <Avatar className={classes.blue}>
          <BookIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={book.book_title}
        secondary={book.book_publication_year}
      />
    </ListItem>
  );
};
export default ListItemComponent;
