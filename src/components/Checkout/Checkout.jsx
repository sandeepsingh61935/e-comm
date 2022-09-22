import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";

import { commerce } from '../../lib/commerce';
import { AddressForm, PaymentForm, Confirmation } from "../index";
import useStyles from "./styles";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({cart}) => {

  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken ,setCheckoutToken] = useState(null);
  const [shippingData , setShippingData]  = useState({});
  const classes = useStyles();

  useEffect(()=> {
    const gToken = async() => {
        try {
            const token = await commerce.checkout.generateToken(cart.id,{type: 'cart'});
            setCheckoutToken(token);
        }
        catch (err) {
          console.log(err)
        }
    }
    gToken();
  },[cart]);

  const nextStep = () => setActiveStep(prevStep=> prevStep + 1);
  const backStep = () => setActiveStep(prevStep=> prevStep - 1);
  const next = (data)=> {
    setShippingData(data);
    nextStep();
  }
  return (
    <>
      <div className={classes.toolbar}></div>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && (activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next = {next}/> : <PaymentForm shippingData = {shippingData} checkoutToken= {checkoutToken}/>) }
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
