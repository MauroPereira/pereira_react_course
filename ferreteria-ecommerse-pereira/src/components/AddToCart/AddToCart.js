import Swal from "sweetalert2";

const successAlert = (item) => {
  Swal.fire({  
      title: 'Producto agregado al carrito',  
      text: `${item[0].quantity} uni. de ${item[0].name}`,
      icon: 'success'
    }); 
}

const warningAlert = (item) => {
  Swal.fire({  
      title: 'Producto ya existente',  
      text: `Se suman ${item[0].quantity} uni. de ${item[0].name}`,
      icon: 'warning'
    }); 
}

export const addToCart = (itemToAdd, cart, setCart) => {
  // ItemToAdd es un arreglo de un objeto, por eso es necesario 
  // agregarle el indice  
  const duplicatedItem = cart.find((obj) => obj.id === itemToAdd[0].id);

  if (duplicatedItem === undefined) {
    setCart([...cart, itemToAdd[0]]);
    successAlert(itemToAdd);

  } else {
    warningAlert(itemToAdd);    
  }

};
