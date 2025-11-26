import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from 'axios';

function PaginaTemporal() {

    // const { id } = useParams();
    const [searchParam] = useSearchParams();
    const c = searchParam.get("c");
    const [comidas, setComidas] = useState([]);
    const [categorias, setCategorias] = useState([]);

    // console.log(id);
    console.log(c);

    useEffect(
        () => {
            // console.log('dentro: ' + id);
            console.log('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + c);
            Axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + c)
                .then((response) => setComidas(response.data.meals))
                .catch((error) => console.log(error));

            Axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
                .then((response) => setCategorias(response.data.categories))
                .catch((error) => console.log(error));
        }, []
    );

    console.log(comidas);
    console.log(categorias);

    return (
        <div className="row">
            <div className="col-md-6">
                <h1>Categorias</h1>
                <div className="row">
                {
                    categorias.map((categoria) => {
                        return <div className="col-md-4">
                            <a href={'http://localhost:3000/otros?c=' + categoria.strCategory}>{categoria.strCategory}</a>
                        </div>
                    })
                }
                </div>
            </div>
            <div className="col-md-6">
                <h1>Comidas</h1>
                <div className="row">
                    {
                        comidas.map((comida) => {
                            return <div className="col-md-4">
                                <h2>{comida.strMeal}</h2>
                                <p>
                                    <img src={comida.strMealThumb} style={{ width: '100px' }}></img>
                                </p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );

}

export default PaginaTemporal;