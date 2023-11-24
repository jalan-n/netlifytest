import React, { useContext } from "react"
import { isInCart } from "../../../helpers"
import { CartContext } from "../../../context/cart-context"
import { withRouter } from "react-router-dom"
import "../categories/categories.styles.scss"

const Categories = (props) => {
  const { id, size, price, category, imageUrl, description } = props
  const product = {
    id,
    size,
    price,
    category,
    imageUrl,
    description,
  }

  //eslint-disable-next-line
  const { addProduct, cartItems, increase } = useContext(CartContext)
  //eslint-disable-next-line
  const itemInCart = isInCart(product, cartItems)

  return (
    <>
      {!itemInCart && (
        <div
          id={id}
          className="nomad-btn-categories"
          onClick={() => addProduct(product)}
        >
          {size} ${price}
        </div>
      )}
      {itemInCart && (
        <div
          id={id}
          className="nomad-btn-categories item-added"
          onClick={() => increase(product)}
        >
          <div className="item-added-size">{size} add more</div>

          {/* <div className="btns-container">
            <button className="btn-increase" onClick={() => increase(product)}>
              <PlusCircleIcon width="20px" />
            </button>
            {quantity === 1 && (
              <button
                className="btn-trash"
                onClick={() => removeProduct(product)}
              >
                <TrashIcon width="20px" />
              </button>
            )}
            {quantity > 1 && (
              <button
                className="btn-decrease"
                onClick={() => decrease(product)}
              >
                <MinusCircleIcon width="20px" />
              </button>
            )}
          </div> */}
        </div>
      )}
    </>
  )
}

export default withRouter(Categories)
