import React from "react";

import { StripeTextField, StripeTextFieldProps } from "./StripeTextField";
import {
  Elements,
  AuBankAccountElement,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  FpxBankElement,
  IbanElement,
  IdealBankElement,
} from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

type StripeElement =
  | typeof AuBankAccountElement
  | typeof CardCvcElement
  | typeof CardExpiryElement
  | typeof CardNumberElement
  | typeof FpxBankElement
  | typeof IbanElement
  | typeof IdealBankElement;

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
  stripeElement: { CardNumberElement },
};

export const Iban = Template.bind({});
Iban.args = {
  stripeElement: { IbanElement },
};
