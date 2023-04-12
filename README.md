# Pereira React Course

## Datos del alumno

- Nombre: Pereira, Mauro Alejandro
- Plataforma: CoderHouse
- Comisión: 39585
- Curso: React
- E-mail: mauro.a.pereira@gmail.com

## PreEntrega 01 Pereira

### E-commerce

#### Formato

Link al último commit de tu repositorio en Github. Debe tener el nombre “PreEntrega1+Apellido”

#### Consigna

- Crea una carpeta dentro de src llamada components que contenga la implementación del componente NavBar dentro del archivo NavBar.js. Su funcionalidad es la de renderizar una barra de menú (Navbar).

#### Objetivos

- Crear el menú e-commerce de tu
  proyecto.

#### Se debe entregar

- Brand (título/nombre de la tienda)
- Un listado de categorías clickeables
- Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).

#### Deberás corroborar que tu proyecto cuente con:

Componente Navbar.Js

### Crea tu landing

#### Formato

Link al último commit de tu repositorio en Github. Debe tener el nombre “PreEntrega1+Apellido”

#### Consigna.

- Crea un componente CartWidget con un ícono y una notificación mostrando un número hardcodeado (fijo). Este servirá luego para indicar la cantidad de elementos que tenemos en el carrito pero por ahora, mostrará un número hardcodeado (colocado en el código). Ubica este componente (CartWidget) dentro de Navbar. Agrega algunos estilos con bootstrap/materialize u otro.
- Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado.

#### Objetivos

- Crear la landing de tu proyecto.

#### Se debe entregar

- Crea un componente CartWidget.js que haga rendering de un ícono Cart, e inclúyelo dentro de NavBar.js para que esté visible en todo momento.
- Crea un componente ItemListContainer. Impórtalo dentro de App.js, y abajo de NavBar.js.

#### Deberás corroborar que tu proyecto cuente con:

Componente Navbar.Js

### Versiones

- v1.0:
  - E-commerce de una ferretería, incluye colores del proyecto de javascript https://mauropereira.github.io/pereira-js-course/FerreteriaEshopPereira/
  - Navbar con ícono de la ferretería, links de interés y cartwidget con un contador hardcodeado.
  - ItemListContainer donde figuran las ofertas.
  - Lista de categorías clickeables tipo formulario con un botón de submit el cual tiene un estilo que deriva de aplicarle Material UI.
- v1.1:
  - Incorporada la propiedad greeting dentro de ItemLisContainer.js

## PreEntrega 02 Pereira

### E-commerce

### Formato

Link a último commit de git donde se cumplan los objetivos + GIF mostrando la navegabilidad. Debe tener el nombre “PreEntrega2+Apellido”.

### Consigna

Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom

### Componentes:

1.  Navbar con cart
2.  Catálogo
3.  Detalle de producto

### Objetivos.

Deberás desarrollar la navegabilidad básica de la aplicación, demostrando que la app permite ver el catálogo, y navegar a un detalle.

### Se debe entregar

- Rutas a configurar:
  ‘/’ navega a < ItemListContainer />
  ‘/category/:id’ < ItemListContainer />
  ‘/item/:id’ navega a < ItemDetailContainer />

- Links a configurar
  Clickear en el brand debe navegar a ‘/’
  Clickear un Item.js debe navegar a /item/:id
  Clickear en una categoría del navbar debe navegar a /category/:categoryId

- Para finalizar deberá integrar los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase! Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría.

- Notas:
  - No usar HashRouter como en el ejemplo del gif (usar BrowserRouter)
  - Utilizar el id de la categoría como nombre en la URL param en vez de números (vehículos, por ej)
  - Utilizar el id del item como URL param

### Versiones

- v2.0: Incluye todo lo pedido para la entrega. La cotización de dolar se realiza consultando a la API https://dolarsi.com. Este dato se utilizará más adelante para generar las órdenes de compra.

## Entrega final

### Ferretería E-commerce Pereira

### Piezas sugeridas

Te recomendamos incluir:

- NavBar
- CartWidget
- ItemListContainer
- ItemList
- ItemDetailContainer
- ItemDetail
  - ItemQuantitySelector
  - Description
  - AddItemButton
- Checkout
  - Brief (detalle de compra)

### Requisitos base

Los requisitos base serán parte de los criterios de evaluación para aprobar el proyecto.

- Inicio: Al momento de ingresar a la app en la ruta base ‘/’

  - Visualizar -como mínimo- un set de productos disponibles para la compra.
  - Contar con algún acceso visible a la vista de carrito que debe alojarse en el route /cart.
  - Acceder a un menú desplegable que contendrá las categorías. Al clickear en una, debe navegar a la lista de productos de la misma mediante un route /categories/:categoryId. Éste invocará la misma vista que el home, pero visualizando sólamente productos de esa categoría.

- Flow: Al clickear un ítem del listado debe navegar a la ruta /item/:id, donde id es el id del item (generado por firebase), y ver la descripción del producto (foto, precio, selector de cantidad). Si se ingresa a /item/:id y el producto no existe en firebase, debemos responder un mensaje adecuado que indique algo relacionado a que el producto no existe.
- Firebase:

  - Implementar al menos dos colecciones:
    - items: catálogo completo
      - Link para foto (puede almacenarse de modo estático en la página en una subruta /images/:itemid )
      - Precio unitario
      - Descripción (sólo se ve en detalle)
      - Categoria (id a mano para versión estática, o id de firebase para versión dinámica -opcional-)
    - orders: las órdenes generadas, que deben incluir los productos, descripciones y los precios al momento de la compra.
      - Las órdenes deben poder tener items surtidos, cada uno con su cantidad. Por ejemplo: remeras x 2 y gorra x 1
      - id, items, fecha, estado ( por defecto en ‘generada’)
    - categories (solo para versión dinámica -opcional-):
      - Versión dinámica (-opcional-): Crear una colección de categories en firebase para hidratar el menú y usar los id’s de éstos para linkearlos a sus ítems. Idealmente, categories/:id debería tener una descripción {id:‘ad43k348j’, key: ‘calzado’, description: ‘Calzado’} para que quede /categories/calzado en lugar de /categories/ad43k348j

- El cart debe ser accesible durante toda la experiencia y tener una indicación de la cantidad de items incluidos agregados (ej. si hay un item con dos unidades y un ítem con una unidad, debe decir ‘tres’).
- Checkout mínimo:
  - Items con sus cantidades
  - Total de la orden
  - Input para nombre, apellido y teléfono
  - Input para email y lógica de repetir el email 2 veces (a excepción de que realicen el desafío extra de auth, en ese caso no sería necesario)
- Finalizada la orden, debo recibir mi order id con el id del objeto de firebase.
- La navegabilidad debe ocurrir utilizando el router, y no href’s o location.
- Por cada librería pública extra que utilices, deberás incluir en algún archivo el link al proyecto, y una justificación de por qué agrega valor.
- Readme.md: El archivo debe estar en el root del proyecto para dar una breve
  introducción acerca de su proyecto y qué ideas o enfoque eligió para el
  mismo. Si incluyó dependencias extra por npm (por fuera de las trabajadas en
  clase), aparte debe hacer un resumen explicando sus decisiones.

### Versiones

- v3.3: Incluye los requisitos base sin aplicar una validación extra de los datos de usuario en Checkout. TODO: cargar todos los items de MOCK_DATA en firebase a traves de un admin, agregar mejoras en formularios y batch.
- v3.3.1: implementado batch
- v3.3.2: implementado mejora de formulario con Formik
