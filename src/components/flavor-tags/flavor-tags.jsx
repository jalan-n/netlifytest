import React, { useContext } from "react"
//eslint-disable-next-line
import { isInCart } from "../../helpers"
//eslint-disable-next-line
import { CartContext } from "../../context/cart-context"
import { ProductsContext } from "../../context/products-context"
import { withRouter } from "react-router-dom"
// import FlavorSizes from "../../components/flavor-tags/flavor-size"
import "./flavor-tags.styles.scss"
import FlavorSizes from "./flavor-size"

const FlavorTags = (props, index) => {
  const { id, category, flavorDetails, imageUrl, description } = props
  //eslint-disable-next-line
  const product = {
    id,
    category,
    flavorDetails,
    imageUrl,
    description,
  }

  const { products } = useContext(ProductsContext)
  const allProducts = products.map((details, index) => (
    <FlavorSizes {...details} key={`${index}-${details.id}`} />
  ))

  return (
    <div className="featured-product">
      <div key={index}>
        <img src={imageUrl} alt="product" />
        <div>
          <h3>{category}</h3>
          <p>{description}</p>
        </div>
        <div key={`${index}-${id}`}>{{ allProducts }}</div>
      </div>
    </div>
  )
}

export default withRouter(FlavorTags)
