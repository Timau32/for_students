import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../store/actions/booksCreator";
import BookListItem from "./BookListItem";

const Booklist = () => {
  const { books, booksIsLoading, booksIsError } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if(booksIsError){
    return <div>Error: {booksIsError}</div>
  }

  return (
    <ul>
      {booksIsLoading ? (
        <div>Loading...</div>
      ) : (
        books.map((el) => <BookListItem key={`books-${el.id}`} book={el} />)
      )}
    </ul>
  );
};

export default Booklist;
