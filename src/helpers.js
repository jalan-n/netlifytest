export const isInCart = (product, cartItems) => {
  return cartItems.find((item) => item.id === product.id)
}

const API = "http://localhost:8080"

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: "POST", body: null, ...opts }
  console.log("body", body)
  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  //console.log("response:", res)

  if (res.status === 200) {
    return res.json()
  }
}
