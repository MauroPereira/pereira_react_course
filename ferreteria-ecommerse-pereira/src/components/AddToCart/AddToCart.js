export const addToCart = (itemToAdd, cart, setCart) => {
  const duplicatedItem = cart.find((obj) => obj.id === itemToAdd.id);

  console.log(`Item a agregar:`);
  console.log(itemToAdd);
  console.log(`Item a agregar:`);
  console.log(duplicatedItem);

  if (duplicatedItem === undefined) {
    setCart([...cart, itemToAdd]);

    // const MySwal = withReactContent(Swal);
    // MySwal.fire({
    //   title: <strong>Agregado el item</strong>,
    //   html: <i>You clicked the button!</i>,
    //   icon: "success",
    // });
  } else {
    // const MySwal = withReactContent(Swal);
    // MySwal.fire({
    //   title: <strong>Item repetido</strong>,
    //   html: <i>You clicked the button!</i>,
    //   icon: "error",
    // });
  }
};
