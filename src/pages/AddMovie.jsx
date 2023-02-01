import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './formMovie.css'

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
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 1500
        })
        navigate('/all');
        await addMovie(movie);
    }

    // const addMovieDetails = async () => {
    //     await addMovie(movie);
    //     Swal.fire({
    //         title: 'Registro exitoso',
    //         text: "¿Deseas añadir otro nuevo registro?",
    //         icon: 'success',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Si, añadir',
    //         cancelButtonText: 'No, ver listado'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             navigate('/add');
    //         }
    //     })
        
    // }

    return (
        <section className="container_all">
            <section className="container_form">
                <div className="title">
                    <div className="triangle"></div>
                    <h1>REGISTRO DE PELÍCULA</h1>
                </div>

                <form className="add-form">
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
                        <Input onChange={(e) => onValueChange(e)} name="release"/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>País</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="country" />
                    </FormControl>

                    <ButtonAdd>
                        <button className="btn" onClick={() => addMovieDetails()}><MdNoteAdd className="icon"/>AGREGAR PELICULA</button>
                    </ButtonAdd>

                </form>
            </section>
            <img src={Cinta} alt="Imagen cinta" className="cinta" />
            <img src={MovieImg} alt="Imagen de combo" className="movie-img" />

        </section>
    );
};

export default AddMovie;
