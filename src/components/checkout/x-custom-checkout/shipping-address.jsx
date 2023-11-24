import React from "react"
import { Formik } from "formik"

const validate = (values) => {
  const { name, email, country, city, line1, postal_code } = values
  const errors = {}
  if (!email) {
    errors.email = "Required"
  }
  if (!name) {
    errors.name = "Required"
  }
  if (!country) {
    errors.country = "Required"
  }
  if (!city) {
    errors.city = "Required"
  }
  if (!line1) {
    errors.line1 = "Required"
  }
  if (!postal_code) {
    errors.postal_code = "Required"
  }

  return errors
}

const ShippingAddress = ({ setShipping }) => {
  const initialValues = {
    email: "",
    name: "",
    country: "",
    city: "",
    line1: "",
    postal_code: "",
    note: "",
  }

  return (
    <div>
      <h4>Shipping Address</h4>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
          // console.log("values", values)
          setShipping(values)
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          const { name, email, country, city, line1, postal_code } = errors
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Name"
                  className={"nomad-input " + (name ? "error" : "")}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Email"
                  className={"nomad-input " + (email ? "error" : "")}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  onChange={handleChange}
                  value={values.country}
                  placeholder="country"
                  className={"nomad-input " + (country ? "error" : "")}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={values.city}
                  placeholder="city"
                  className={"nomad-input " + (city ? "error" : "")}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="line1"
                  onChange={handleChange}
                  value={values.line1}
                  placeholder="street"
                  className={"nomad-input " + (line1 ? "error" : "")}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="postal_code"
                  onChange={handleChange}
                  value={values.postal_code}
                  placeholder="Zip code"
                  className={"nomad-input " + (postal_code ? "error" : "")}
                />
              </div>
              <div>
                <textarea
                  type="textarea"
                  name="note"
                  rows="10"
                  onChange={handleChange}
                  value={values.note}
                  placeholder="Send instructions with your order"
                  className={"nomad-input"}
                />
              </div>
              <div className="submit-btn">
                <button
                  type="submit"
                  className="button is-black nomad-btn submit"
                >
                  Continue
                </button>
              </div>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

export default ShippingAddress
