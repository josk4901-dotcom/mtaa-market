import SEO from "../components/SEO";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <SEO
        title="Shopping Cart"
        description="Review your selected products, update quantities and check your total at Mtaa Market."
      />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to get started.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-5 border border-gray-200 p-4 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="text-gray-600 mt-1">
                      KSh {item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="border px-3 py-1 rounded hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="border px-3 py-1 rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-right">
              <h2 className="text-2xl font-bold">
                Total: KSh {total.toLocaleString()}
              </h2>

              <button
                onClick={() => alert("Checkout will be available soon.")}
                className="bg-black text-white px-8 py-3 rounded-md mt-5 hover:bg-orange-600 transition"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Cart;