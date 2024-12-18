import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/reducer";

const Detail = () => {
    const params = useParams();
    const [data, setData] = useState({});
    const dispatch = useDispatch();

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data})=> setData(data))
    },[params])
    return (
        <div className="container">
            {
                JSON.stringify(data) === '{}'
                ? ''
                : <div className="row">
                    <div className="col-6">
                        <img className="detail-img" src={data.image} alt="" />
                    </div>

                    <div className="col-6">
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <p>{data.category}</p>
                        <p>${data.price}</p>
                        <button onClick={()=>{
                    dispatch(addCart(data))
                }}>buy</button>
                    </div>
                </div>
            }

        </div>
    );
}

export default Detail;