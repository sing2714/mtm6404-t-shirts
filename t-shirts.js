const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]


    function TShirt (props) {
      const tshirt = props.tshirt

      function buyHandler () {
        props.onBuy(props.index)
      }

      function quantityHandler (e) {
        props.onQuantityChange(props.index, parseInt(e.target.value))
      }

      const options = []
      for (let i = 1; i <= tshirt.stock; i++) {
        options.push(<option key={i} value={i}>{i}</option>)
      }

      return (
        <div className="card">
          <img src={`images/${tshirt.image}`} alt={tshirt.title} />
          <h2>{tshirt.title}</h2>
          <p className="price">$ {tshirt.price.toFixed(2)}</p>

          {tshirt.stock > 0 ? (
            <React.Fragment>
              <p className="stock">In Stock: {tshirt.stock}</p>
              <div className="controls">
                <select value={tshirt.quantity} onChange={quantityHandler}>
                  {options}
                </select>
                <button onClick={buyHandler}>Buy</button>
              </div>
            </React.Fragment>
          ) : (
            <p className="out-of-stock">Out of Stock</p>
          )}
        </div>
      )
    }

    function App () {
      const [shirts, setShirts] = React.useState(tshirts)

      function quantityHandler (index, value) {
        const updated = shirts.map((shirt, i) => {
          if (i === index) {
            return { ...shirt, quantity: value }
          }
          return shirt
        })
        setShirts(updated)
      }

      function buyHandler (index) {
        const updated = shirts.map((shirt, i) => {
          if (i === index) {
            return { ...shirt, stock: shirt.stock - shirt.quantity, quantity: 1 }
          }
          return shirt
        })
        setShirts(updated)
      }

      return (
        <div className="store">
          {shirts.map((shirt, index) => (
            <TShirt
              key={index}
              index={index}
              tshirt={shirt}
              onBuy={buyHandler}
              onQuantityChange={quantityHandler}
            />
          ))}
        </div>
      )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(<App />)