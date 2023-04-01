const MySwal = withReactContent(Swal)


export const addToCart = (itemToAdd, cart, setCart) => {
  const MySwal = withReactContent(Swal);
  const duplicatedItem = cart.find((obj) => obj.id === itemToAdd.id);
  
  console.log(`Item a agregar:`);
  console.log(itemToAdd);
  console.log(`Item a agregar:`);
  console.log(duplicatedItem);

  if (duplicatedItem === undefined) {
    setCart([...cart, itemToAdd]);
    MySwal.fire({
      title: <strong>Agregado el item</strong>,
      html: <i>You clicked the button!</i>,
      icon: 'success'
    })
  } else {
    MySwal.fire({
      title: <strong>Item repetido</strong>,
      html: <i>You clicked the button!</i>,
      icon: 'error'
    })
  }
};
