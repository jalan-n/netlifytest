import React, { useContext } from "react"
import { isInCart } from "../../helpers"
import { ProductsContext } from "../../context/products-context"
import { CartContext } from "../../context/cart-context"
import { withRouter } from "react-router-dom"
import "./flavor-tags.styles.scss"

const FlavorSizes = (props) => {
  const { sizeId, size, price } = props
  const product = {
    sizeId,
    size,
    price,
  }
  //eslint-disable-next-line
  const { addProduct, cartItems, increase } = useContext(CartContext)
  //eslint-disable-next-line
  const itemInCart = isInCart(product, cartItems)

  const { products } = useContext(ProductsContext)

  return (
    <>
      {products.map((flavors) => {
        return flavors.flavorDetails.map((detail) => {
          // console.log(detail)
          return (
            <div key={detail.sizeId} className="">
              {console.log("id:", detail.sizeId)}
              <p>{detail.size}</p>
              <p>{detail.price}</p>
            </div>
          )
        })
      })}
      <div
        key={sizeId}
        className="button nomad-btn"
        onClick={() => addProduct(product)}
      >
        {size} ${price}
      </div>
    </>
  )
}

export default withRouter(FlavorSizes)
