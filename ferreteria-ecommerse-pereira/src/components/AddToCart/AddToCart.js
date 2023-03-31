export const addToCart = (itemToAdd, cart, setCart) => {
  const duplicatedItem = cart.find((obj) => obj.id === itemToAdd.id);

  console.log(`Item duplicado: ${itemToAdd.id}`);
  console.log(`Item duplicado: ${duplicatedItem.id}`);

  if (duplicatedItem !== undefined) {
    setCart([...cart, itemToAdd]);
    console.log("Item agregado");
  } else {
    console.log("Item duplicado, no se agrega");
  }
};
