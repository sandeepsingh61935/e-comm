import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { CartItem } from "..";
import useStyles from "./styles";
const Cart = ({
  cart,
  handleUpdateCartQuantity,
  handleRemoveFromCart,
  handleEmptyCart
}) => {
  const classes = useStyles();

  if (Array.isArray(cart) && cart.length === 0) return "Loading...";

  const isEmpty = !cart.line_items.length;

  const EmptyCart = () => (
    <Typography variant="subtitle1"> You have no items in you cart</Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateQuantity = {handleUpdateCartQuantity} onRemoveQuantity = {handleRemoveFromCart}/>
          </Grid>
        ))}
      </Grid>

      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal : {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick = {handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component = {Link} to = "/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar}></div>
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
