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
  - E-commerce de una ferretería, incluye colores del proyecto de javascript https://mauropereira.github.io/pereira_js_course/FerreteriaEshopPereira/
  - Navbar con ícono de la ferretería, links de interés y cartwidget con un contador hardcodeado.
  - ItemListContainer donde figuran las ofertas.
  - Lista de categorías clickeables tipo formulario con un botón de submit el cual tiene un estilo que deriva de aplicarle Material UI.
- v1.1:
  - Incorporada la propiedad greeting dentro de ItemLisContainer.js

## PreEntrega 02 Pereira

### E-commerce

### Formato

Link a último commit de git donde se cumplan los objetivos + GIF mostrando la navegabilidad. Debe tener
el nombre “PreEntrega2+Apellido”.

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
