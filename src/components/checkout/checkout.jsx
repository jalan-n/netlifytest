import React, { useContext, useState } from "react"
import { CartContext } from "../../context/cart-context"
import Layout from "../shared/layout"
import StripeCheckout from "../checkout/stripe-checkout/stripe-checkout"
// import ShippingAddress from "./x-custom-checkout/shipping-address"
// import CustomCheckout from "./x-custom-checkout/custom-checkout"
import "./checkout.styles.scss"

const Checkout = () => {
  const { itemCount, total, cartItems } = useContext(CartContext)
  // const [shipping, setShipping] = useState(null)
  // const addressShown = {
  //   display: shipping ? "none" : "block",
  // }
  // const cardShown = {
  //   display: shipping ? "block" : "none",
  // }
  return (
    <Layout>
      <div className="checkout">
        <h2>Checkout Summary</h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h3>{`Amount to Pay: $${total}`}</h3>
        <StripeCheckout />

        {/* <div style={addressShown}>
          <ShippingAddress setShipping={setShipping} />
        </div>
        <div style={cardShown}>
          <CustomCheckout {...{ shipping, cartItems }} />
        </div> */}
      </div>
    </Layout>
  )
}

export default Checkout
