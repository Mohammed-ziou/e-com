import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JuI7UFed45AtU9FbttThiPt41G7I3UvjIWS9bKm3V8S3TcqhfiiVxxTEhLhl960JwktN9KloEU1abWkQjpKexZe00a9cxCspb";

  const onToken = (token) => {
    console.log(token);
    alert("You were scammed :)");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown dp Ltd."
      billingAddress
      shippingAddress
      description={`Yore total is $${price}`}
      amount={priceForStripe}
      panalLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
