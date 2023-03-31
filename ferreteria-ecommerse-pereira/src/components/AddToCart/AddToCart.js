export const addToCart = (itemToAdd, cart, setCart) => {
  const duplicatedItem = cart.find((obj) => obj.id === itemToAdd.id);
  
  console.log(`Item a agregar:`);
  console.log(itemToAdd);
  console.log(`Item a agregar:`);
  console.log(duplicatedItem);

  if (duplicatedItem === undefined) {
    setCart([...cart, itemToAdd]);
    console.log("Item agregado");
  } else {
    console.log("Item duplicado, no se agrega");
  }
};
