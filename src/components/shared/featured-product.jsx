import React, { useContext } from "react"
import { withRouter } from "react-router-dom"
import "./featured-product.styles.scss"

const FeaturedProduct = (props) => {
  const { imageUrl, history, catId, category } = props

  return (
    <>
      <div
        id={catId}
        className="featured-image"
        onClick={() => history.push(`/product/${catId}`)}
      >
        <img src={imageUrl} alt="product" />
        <div>{category}</div>
      </div>
    </>
  )
}

export default withRouter(FeaturedProduct)
