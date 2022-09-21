import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({ item, onUpdateQuantity, onRemoveQuantity }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      ></CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography variant="h4" noWrap= {true}>
          {item.name}
        </Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>

      <CardActions className={classes.CardActions}>
        <div className={classes.buttons}>
          <Button className={classes.minus} type="button" size="small" onClick = {()=>onUpdateQuantity(item.id,item.quantity-1)}>
            -
          </Button>
          <Typography className> {item.quantity} </Typography>
          <Button className={classes.plus} type="button" size="small" onClick = {()=>onUpdateQuantity(item.id,item.quantity+1)}>
            +
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick = {()=>onRemoveQuantity(item.id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
