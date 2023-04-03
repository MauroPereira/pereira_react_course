import Swal from "sweetalert2";

const successAlert = (item) => {
  Swal.fire({  
      title: 'Producto agregado al carrito',  
      text: `${item.quantity} uni. de ${item.name}`,
      icon: 'success'
    }); 
}

const warningAlert = (item) => {
  Swal.fire({  
      title: 'Producto ya existente',  
      text: `Se suman ${item.quantity} uni. de ${item.name}`,
      icon: 'warning'
    }); 
}

export const addToCart = (itemToAdd, cart, setCart) => {
  const duplicatedItem = cart.find((obj) => obj.id === itemToAdd.id);

  console.log(`Item a agregar:`);
  console.log(itemToAdd);
  console.log(`Item a agregar:`);
  console.log(duplicatedItem);

  if (duplicatedItem === undefined) {
    setCart([...cart, itemToAdd]);
    console.log("Item agregado");
    successAlert(itemToAdd);

  } else {
    console.log("Item duplicado, no agregado");
    warningAlert(itemToAdd);
  }
};
