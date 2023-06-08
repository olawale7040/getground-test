import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Dispatch } from "../store";
import { withStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Box } from "@material-ui/core";
import { fetchBooks } from "../slices/books";
import { QueryParams } from "../utils/types";

const styles = (theme: Theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

type ReduxType = ReturnType<typeof mapDispatcherToProps>;
type ClassesProps = {
  classes: Record<keyof ReturnType<typeof styles>, string>;
};
type ComponentProps = ClassesProps & ReduxType;

type SearchProps = {
  searchText: string;
};

class SearchField extends Component<ComponentProps> {
  state: SearchProps = {
    searchText: "",
  };

  handleSearchBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filters = [{ type: "all", values: [this.state.searchText] }];
    const params = {
      filters,
    };
    this.props.searchBook(params);
  };

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.wrapper} data-testid="book-search-field">
        <form onSubmit={this.handleSearchBook}>
          <Paper className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Search title book"
              value={this.state.searchText}
              onChange={(event) =>
                this.setState({ searchText: event.target.value })
              }
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
      </Box>
    );
  }
}

const mapDispatcherToProps = (dispatch: Dispatch) => {
  return {
    searchBook: (data: QueryParams) => dispatch(fetchBooks(data)),
  };
};

export default compose(
  connect(null, mapDispatcherToProps),
  withStyles(styles)
)(SearchField) as React.ElementType;
