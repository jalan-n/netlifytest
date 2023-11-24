import React from "react"
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../icons"

const CartItem = (props) => {
  const {
    imageUrl,
    price,
    size,
    category,
    quantity,
    id,
    description,
    increase,
    decrease,
    removeProduct,
  } = props
  const product = {
    imageUrl,
    price,
    category,
    quantity,
    id,
    description,
  }

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={imageUrl} alt={category} />
        <h4>{category}</h4>
      </div>
      <div className="name-price">
        <p>{size}</p>
        <p>${price}</p>
      </div>
      <div className="quantity">
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className="btns-container">
        <button className="btn-increase" onClick={() => increase(product)}>
          <PlusCircleIcon width="20px" />
        </button>
        {quantity === 1 && (
          <button className="btn-trash" onClick={() => removeProduct(product)}>
            <TrashIcon width="20px" />
          </button>
        )}
        {quantity > 1 && (
          <button className="btn-decrease" onClick={() => decrease(product)}>
            <MinusCircleIcon width="20px" />
          </button>
        )}
      </div>
    </div>
  )
}

export default CartItem
