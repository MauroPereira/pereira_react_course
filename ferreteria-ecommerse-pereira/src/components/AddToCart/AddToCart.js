export const addToCart = (itemToAdd, cart, setCart) => {
  const itemDuplicated = cart.find((obj) => obj.id === itemToAdd.id);
  if (itemDuplicated !== undefined) {
    setCart([...cart, itemToAdd]);
    console.log("Item agregado");
  } else {
    console.log("Item duplicado, no se agrega");
  }
};
