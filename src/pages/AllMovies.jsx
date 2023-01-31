import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

import "./allMovies.css";

import { getMovies, deleteMovie } from "../service/api";

import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

const AllMovies = () => {
  // const data = [
  //   {
  //     id: 1,
  //     title: "Título de la película",
  //     year: 1999,
  //     time: 22,
  //     language: "Español",
  //     release: "01-01-2023",
  //     country: "uk",
  //   },
  //   {
  //     id: 2,
  //     title: "Título de la película",
  //     year: 1999,
  //     time: 22,
  //     language: "Español",
  //     release: "01-01-2023",
  //     country: "uk",
  //   },
  //   {
  //     id: 3,
  //     title: "Título de la película",
  //     year: 1999,
  //     time: 22,
  //     language: "Español",
  //     release: "01-01-2023",
  //     country: "uk",
  //   },
  //   ,
  //   {
  //     id: 4,
  //     title: "Título de la película",
  //     year: 1999,
  //     time: 22,
  //     language: "Español",
  //     release: "01-01-2023",
  //     country: "uk",
  //   },
  //   ,
  //   {
  //     id: 5,
  //     title: "Título de la película",
  //     year: 1999,
  //     time: 22,
  //     language: "Español",
  //     release: "01-01-2023",
  //     country: "uk",
  //   },
  //   ,
  //   {
  //     id: 6,
  //     title: "Título de la película",
  //     year: 1999,
  //     time: 22,
  //     language: "Español",
  //     release: "01-01-2023",
  //     country: "uk",
  //   },
  //   ,
  //   {
  //     id: 7,
  //     title: "Título de la película",
  //     year: 1999,
  //     time: 22,
  //     language: "Español",
  //     release: "01-01-2023",
  //     country: "uk",
  //   },
  //   ,
  //   {
  //     id: 8,
  //     title: "Título de la película",
  //     year: 1999,
  //     time: 22,
  //     language: "Español",
  //     release: "01-01-2023",
  //     country: "uk",
  //   },
  //   ,
  //   {
  //     id: 9,
  //     title: "Título de la película",
  //     year: 1999,
  //     time: 22,
  //     language: "Español",
  //     release: "01-01-2023",
  //     country: "uk",
  //   },
  //   ,
  //   {
  //     id: 10,
  //     title: "Título de la película",
  //     year: 1999,
  //     time: 22,
  //     language: "Español",
  //     release: "01-01-2023",
  //     country: "uk",
  //   },
  //   ,
  //   {
  //     id: 11,
  //     title: "Título de la película",
  //     year: 1999,
  //     time: 22,
  //     language: "Español",
  //     release: "01-01-2023",
  //     country: "uk",
  //   },
  // ];

  // const [movies, setMovies] = useState(data);
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    getAllMovies();
  }, []);

  // const getAllMovies = () => {
  //   setMovies(data);
  // };


  const getAllMovies = async () => {
    let response = await getMovies();
    setMovies(response.data);
  };
  // const deleteMovieDetails = async (id) => {
  //   await deleteMovie(id);
  //   getAllMovies();
  // }; 

  const deleteMovieDetails = async (id) => {
    Swal.fire({
      title: '¿Estás seguro de querer eliminar esta película?',
      text: "¡No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, ¡bórrala!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMovie(id);
        Swal.fire(
          '¡Película eliminada!',
          `El registro de esta película ha sido borrado con éxito`,
          'success'
        )
        getAllMovies();
      }
    })
  }; 

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr className="table-head">
            <th>ID</th>
            <th>TÍTULO</th>
            <th>AÑO</th>
            <th>TIEMPO</th>
            <th>LENGUAJE</th>
            <th>FECHA</th>
            <th>PAÍS</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id} className="table-body">
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.time}</td>
              <td>{movie.language}</td>
              <td>{movie.release}</td>
              <td>{movie.country}</td>
              <td>
                <div className="actions">
                  <Link to={`/edit/${movie._id}`} className="btn edit">
                    <BsFillPencilFill className="icon" />
                  </Link>
                  <Link
                    className="btn delete"
                    onClick={() => deleteMovieDetails(movie._id)}
                  >
                    <BsFillTrashFill className="icon" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllMovies;
