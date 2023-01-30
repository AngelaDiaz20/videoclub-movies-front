import { useState } from "react";
import './editMovie.css'

import Cinta from '../assets/img/cinta-sola.png'
import MovieImg from '../assets/img/movie.png'
import { MdNoteAdd } from 'react-icons/md'

import {
    FormControl,
    Input,
    InputLabel,
    styled,
} from "@mui/material";

import { addMovie } from "../service/api";
import { useNavigate } from "react-router-dom";

const FormSpan = styled(FormControl)`
  grid-column: span 2;
`;

const ButtonAdd = styled(FormControl)`
    margin: 20px 0;
    grid-column: span 2;
`;

const defaultValue = {
    id: "",
    title: "",
    year: "",
    time: "",
    language: "",
    release: "",
    country: "",
};

const AddMovie = () => {
    const [movie, setMovie] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const addMovieDetails = async () => {
        await addMovie(movie);
        navigate('/');
    }
    return (
        <section className="container_all">
            <section className="container_form">
                <div className="title">
                    <div className="triangle"></div>
                    <h1>REGISTRO DE PELÍCULA</h1>
                </div>

                <form className="add-form">
                    {/* <div className="form-group form__group field">
        <input onChange={(e) => onValueChange(e)} name="id" placeholder="id" className="form__field"/>
        <label className="form__label" for="id">ID</label>
      </div> 

      <div className="form-group">
        <label>Año</label>
        <input onChange={(e) => onValueChange(e)} name="year" />
      </div>

      <div className="form-group">
        <label>Titulo</label>
        <input onChange={(e) => onValueChange(e)} name="title" />
      </div>

      <div className="form-group">
        <label>Tiempo</label>
        <input onChange={(e) => onValueChange(e)} name="time" />
      </div>

      <div className="form-group">
        <label>Lenguaje</label>
        <input onChange={(e) => onValueChange(e)} name="language" />
      </div>

      <div className="form-group">
        <label>Fecha de lanzamiento</label>
        <input onChange={(e) => onValueChange(e)} name="release" />
      </div>

      <div className="form-group">
        <label>País</label>
        <input onChange={(e) => onValueChange(e)} name="country" />
      </div>

      <div className="form-group">
        <button className="btn" onClick={() => addMovieDetails()}>AGREGAR PELICULA</button>
      </div> */}

                    <FormControl>
                        <InputLabel>ID</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="id" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Año</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="year" />
                    </FormControl>

                    <FormSpan>
                        <InputLabel>Titulo</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="title" />
                    </FormSpan>

                    <FormControl>
                        <InputLabel>Tiempo duración</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="time" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Lenguaje</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="language" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Fecha de lanzamiento</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="release" />
                    </FormControl>

                    <FormControl>
                        <InputLabel>País</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="country" />
                    </FormControl>

                    <ButtonAdd>
                        <button className="btn" onClick={() => addMovieDetails()}><MdNoteAdd className="icon" />AGREGAR PELICULA</button>
                    </ButtonAdd>

                </form>
            </section>
            <img src={Cinta} alt="Imagen cinta" className="cinta" />
            <img src={MovieImg} alt="Imagen de combo" className="movie-img" />

        </section>
    );
};

export default AddMovie;
