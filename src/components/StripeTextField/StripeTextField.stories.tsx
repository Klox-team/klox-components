import React from "react";

import { StripeTextField } from "./StripeTextField";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  IbanElement,
} from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

export default {
  title: "Components/StripeTextField",
  component: StripeTextField,
  argTypes: {},
};

export const Card = () => (
  <Elements stripe={stripePromise}>
    <StripeTextField
      stripeElement={CardNumberElement}
      inputProps={{
        options: {
          showIcon: true,
        },
      }}
      label="Numero de votre carte bancaire"
    />
    <StripeTextField
      stripeElement={CardExpiryElement}
      label="Date d'expiration de votre carte bancaire"
    />
    <StripeTextField
      stripeElement={CardCvcElement}
      label="Code secret de votre carte bancaire"
    />
  </Elements>
);

export const Iban = () => (
  <Elements stripe={stripePromise}>
    <StripeTextField
      stripeElement={IbanElement}
      inputProps={{
        options: {
          supportedCountries: ["SEPA"],
        },
      }}
      label="Numero de Iban"
    />
  </Elements>
);
