import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

import "./allMovies.css";

import { getMovies, deleteMovie } from "../service/api";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment'

import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai"

const AllMovies = () => {

  // const [movies, setMovies] = useState(data);
  const [movies, setMovies] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  
  const filteredMovies = useMemo(() => {
        return movies.filter(item => (
            item.title.toLowerCase().includes(inputTitle.toLowerCase())
        ))
  },[inputTitle, movies]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    let response = await getMovies();
    setMovies(response.data);
  };

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
          {filteredMovies.map((movie) => (
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
