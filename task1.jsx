function Task1() {
  function ProductCard({ title, price, category }) {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          margin: "10px",
          width: "250px",
          borderRadius: "10px"
        }}
      >
        <h2>{title}</h2>
        <p>Price: ${price}</p>
        <p>Category: {category}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Task 1: Product Cards</h1>

      <ProductCard
        title="Laptop"
        price="800"
        category="Electronics"
      />

      <ProductCard
        title="Headphones"
        price="50"
        category="Accessories"
      />
    </div>
  );
}

export default Task1;