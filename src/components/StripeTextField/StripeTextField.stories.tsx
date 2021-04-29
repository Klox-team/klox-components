import React from "react";

import { StripeTextField, StripeTextFieldProps } from "./StripeTextField";
import { Elements, CardElement, IbanElement } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

type StripeElement = typeof CardElement | typeof IbanElement;

export default {
  title: "Components/StripeTextField",
  component: StripeTextField,
  argTypes: {},
};

const Template = (args: StripeTextFieldProps<StripeElement>) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeTextField {...args} />
    </Elements>
  );
};

export const Card = Template.bind({});
Card.args = {
  stripeElement: CardElement,
  inputProps: {
    options: {
      showIcon: true,
    },
  },
  label: "Numero de votre carte bancaire",
};

export const Iban = Template.bind({});
Iban.args = {
  stripeElement: IbanElement,
};
