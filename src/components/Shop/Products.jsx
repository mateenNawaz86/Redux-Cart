import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: Math.floor(Math.random() * 100),
    title: "Cheese Cake",
    price: 7,
    description: "Cheese cake is so yummy",
  },
  {
    id: Math.floor(Math.random() * 100),
    title: "Tandori Pizza",
    price: 11,
    description: "Pizza is so delicious",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((item) => {
          return (
            <ProductItem
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              key={item.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
