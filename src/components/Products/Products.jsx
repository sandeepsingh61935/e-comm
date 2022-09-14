import React from "react";
import {Grid} from "@material-ui/core";
import Product from "../Product/Product";
const products = [
  {
    id: 1,
    name: "shoes",
    description: "Running shoes",
    price: '$5',
    image: 'https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    name: "macbook",
    description: "macbook 16` inch pro",
    price: '$200',
    image: 'https://i.ibb.co/Qp1SXBw/commerce.png'
  },
];
const Products = () => {
  return (<main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product}></Product>
        </Grid>
      ))}
    </Grid>
  </main>)
};

export default Products;
