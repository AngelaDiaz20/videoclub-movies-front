<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  
  ![logoMovies](https://user-images.githubusercontent.com/50422794/215829613-62a22bd5-13d9-4949-8c5f-001a1c1bb7dd.png)

  
  <h3 align="center">DOCUMENTATION</h3>

  <p align="center">
    Esta documentación es parte de un proyecto educativo
    <br />
    <br />
    <a href="#">Despligue de la aplicación</a>
    <br />
    <a href="https://github.com/bryan0175](https://brayanduarte.vercel.app/">Brayan Duarte</a>
    ·
    <a href="https://github.com/bryan0175](https://github.com/AngelaDiaz20">Angela Diaz</a>
    ·
    <a href="#">Valentina Camacho</a>
    ·
    <a href="#">Ivan Muños</a>
    ·
    <a href="#">Jonathan Sánchez</a>
    ·
    <a href="#">Jazmin Bejarano</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#Acerca-del-proyecto">Acerca del proyecto</a></li>
    <li><a href="#Construccion-de-la-aplicacion">Construcción de la aplicación</a></li>
    <li><a href="#Documentacion-tecnica">Documentación técnica</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Acerca del proyecto

![logoMovies](https://user-images.githubusercontent.com/50422794/215829613-62a22bd5-13d9-4949-8c5f-001a1c1bb7dd.png)

En este proyecto utilizamos algunas tecnologias basicas, utilizamos la metodologia scrum para trabajar en equipo y sacar este proyecto adelante, es un crud básico pero el verdadero reto fue trabajar en equipo para sacarlo adelante

![logoMovies](https://user-images.githubusercontent.com/50422794/215830147-fa7e237d-e162-474b-b3c4-dc8ec43984f7.png)

La aplicacion nos permite tanto visualizar como agregar peliculas, con sus respectivos datos, nos permite filtrar por nombres, agregar peliculas como lo mencioné previamente, se tiene la posibilidad de editar y borrar peliculas

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Construccion de la aplicacion

Esta sección tiene una lista de los principales marcos/bibliotecas que utilicé para construir el proyecto.

* <a href="https://reactjs.org">![image](https://user-images.githubusercontent.com/50422794/211116164-7b79fadd-869a-43e3-8053-a224f080f9c2.png)</a>
* <a href="https://react-icons.github.io/react-icons/">![image](https://user-images.githubusercontent.com/50422794/211116212-ef61c9ba-9787-42f1-917d-b49a15a2d75c.png)</a>
* <a href="https://reactrouter.com/en/main">![image](https://user-images.githubusercontent.com/50422794/211116261-6cda0e56-0192-4c44-a9ec-7f7f921e1f79.png)</a>
* <a href="https://expressjs.com/es/">![image](https://user-images.githubusercontent.com/50422794/215832140-54a86230-4ede-459c-82e3-5c05ee219f10.png)</a>
* <a href="https://www.mongodb.com/">![image](https://user-images.githubusercontent.com/50422794/215832681-e822e2d6-ae97-4c63-9d0b-be6c36a2eda1.png)</a>
* <a href="https://nodejs.org/es/">![image](https://user-images.githubusercontent.com/50422794/215834151-4c767188-7bfa-406e-9967-9c07dc4f737f.png)</a>
* <a href="https://mui.com/">![image](https://user-images.githubusercontent.com/50422794/215833458-26ad6ecd-120d-4153-bd96-291f950f034c.png)</a>
* <a href="https://sweetalert2.github.io/#native_link#">![image](https://user-images.githubusercontent.com/50422794/215833564-1e1010ba-b3ce-4097-adac-6c5588a9e74a.png)</a>
* <a href="https://www.npmjs.com/package/axios">![image](https://user-images.githubusercontent.com/50422794/215833618-06eef285-0ac3-46be-ac0c-44bc311dc823.png)
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Documentacion tecnica
* <h3>Filtro de peliculas</h3>

```javascript
  const [movies, setMovies] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  
  const filteredMovies = useMemo(() => {
        return movies.filter(item => (
            item.title.toLowerCase().includes(inputTitle.toLowerCase())
        ))
  },[inputTitle, movies]);
```

Se ulitizo el hook de useState para crear 2 estados, uno para guardar los datos de la bd y otro para guardar los datos que recibe el input.
Por otra parte se creo una una funcion llamada filteredMovies con la cual se realiza un filtro, pero para mejorar el rendimiento del consumo de los datos, se utilizo el hook de useMemo, que no permite mejorar la renderizacion de los datos que traemos de la bd, al momento de usar el useMemo tenemos que retornar un valor, entonces se utiliza el metodo filter para filtrar los datos y traer solo los titulos, para que el filtro funcione correctamente cambiamos los datos que traemos con el filtro a minusculas y los datos que se incluyen en el input de busqueda tambien los combierta a minusculas, al final el useMemo nos pide 2 dependencias para que se ejecute en el momento al que cambie alguna de estas 2.

```html
  <TextField
    id="searchInput"
    value={inputTitle}
    placeholder="Buscar por titulo"
    onChange={(e) => setInputTitle(e.target.value)}
    label="Outlined"
    InputProps={{
      startAdornment: (
        <InputAdornment position="end">
          <AiOutlineSearch />
        </InputAdornment>
      ),
    }}
    variant="outlined"
  />
```
En este imput le asignamos la variable inputTitle que tenemso en el hook useState para que los datos que ingrese el usuario se guarden en esta variable y se utiliza el metodo onChange para ejecutar una funcion interna y que el valor que ingrese el usuario se cambie en tiempo real con la funcion setInputTitle que nos genera el hook useState.
