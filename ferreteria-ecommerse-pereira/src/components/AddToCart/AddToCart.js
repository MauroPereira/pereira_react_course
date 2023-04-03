// import Swal from "sweetalert2";

// const successAlert = () => {
//   Swal.fire({  
//       title: 'Good job!',  
//       text: 'You clicked the button.',
//       icon: 'success'
//     }); 
// }

// const questionAlert = () => {
//   Swal.fire({  
//       title: 'Do you have a problem to solve?!',  
//       text: 'Ask us on dirask',
//       icon: 'question'
//     }); 
// }

export const addToCart = (itemToAdd, cart, setCart) => {
  const duplicatedItem = cart.find((obj) => obj.id === itemToAdd.id);

  console.log(`Item a agregar:`);
  console.log(itemToAdd);
  console.log(`Item a agregar:`);
  console.log(duplicatedItem);

  if (duplicatedItem === undefined) {
    setCart([...cart, itemToAdd]);
    console.log("Item agregado");
    // successAlert();

    // const MySwal = withReactContent(Swal);
    
    // MySwal.fire({
    //   title: <strong>Agregado el item</strong>,
    //   html: <i>You clicked the button!</i>,
    //   icon: "success",
    // });

  } else {
    console.log("Item duplicado, no agregado");
    // const MySwal = withReactContent(Swal);
 
    // MySwal.fire({
    //   title: <strong>Item repetido</strong>,
    //   html: <i>You clicked the button!</i>,
    //   icon: "error",
    // });
    // questionAlert();
  }
};
