import { Button, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setisOpen } from "../../store/reducers/cartSlice";
import classes from "./styles.module.css";
import { useEffect } from "react";
import fetchAllCart, { addToCart, removeFromCart } from "../../store/actions/cartCreator";

const CartItems = () => {
  const { items, itemsIsError, itemsIsLoading } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCart());
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "auto");
  }, []);

  const onOverlayClick = () => dispatch(setisOpen(false));

  const renderitems = (el, idx) => {
    const { id, title, count, total } = el;

    const onAddToCart = () => dispatch(addToCart(id));
    const onRemoveFromCart = () => dispatch(removeFromCart(id));

    return (
      <tr key={`item-${id}`}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <Button onClick={onAddToCart} variant="outline-success my-1">
            <i className="fa-solid fa-circle-plus"></i>
          </Button>
          <Button onClick={onRemoveFromCart} variant="outline-warning my-1">
            <i className="fa-solid fa-circle-minus"></i>
          </Button>
          <Button variant="outline-danger my-1">
            <i className="fa-solid fa-trash"></i>
          </Button>
        </td>
      </tr>
    );
  };
  return (
    <>
      <div className={classes.overlay} onClick={onOverlayClick}></div>
      <aside className={classes.cart}>
        <h2>Your order (cart)</h2>

        {itemsIsError && itemsIsError}

        {itemsIsLoading ? (
          <Spinner />
        ) : !itemsIsError && !itemsIsLoading && items?.length === 0 ? (
          <div className={classes.alert}>Nothing</div>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>№</th>
                <th>Item</th>
                <th>Count</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{items?.map(renderitems)}</tbody>
          </Table>
        )}
      </aside>
    </>
  );
};

export default CartItems;
