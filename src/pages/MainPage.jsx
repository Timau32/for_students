import { useDispatch, useSelector } from "react-redux";
import { Header, Booklist, CartItems } from "../Components";
import classes from "./styles.module.css";
import { useEffect } from "react";
import fetchAllCart from "../store/actions/cartCreator";

const MainPage = () => {
  const { isOpen } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCart());
  }, []);
  
  return (
    <>
      <header className={classes.header}>
        <Header />
      </header>
      <main className="container">
        <Booklist />
      </main>

      {isOpen && <CartItems />}
    </>
  );
};

export default MainPage;
