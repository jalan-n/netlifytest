import React, { useContext } from "react"
import Layout from "../../shared/layout"
import FeaturedProduct from "../../shared/featured-product"
import { ProductsContext } from "../../../context/products-context"
import Categories from "../categories/categories"
import "./shop.styles.scss"

const Shop = () => {
  const { products } = useContext(ProductsContext)
  const allProducts = products.map((product) => {
    return (
      <div className="featured-product" key={product.catId} id={product.catId}>
        <FeaturedProduct {...product} />
        <div className="size-price-container" id={product.category}>
          {product.flavorDetails.map((detail) => {
            return <Categories {...detail} key={detail.id} />
          })}
        </div>
      </div>
    )
  })

  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{allProducts}</div>
      </div>
    </Layout>
  )
}

export default Shop
