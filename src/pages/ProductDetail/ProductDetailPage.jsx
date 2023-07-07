import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/ShoppingCartContext';

//Componentes
import CardMaceta from '../../components/Cards/CardMaceta';
import Cargando from '../../components/Spinner/Spinner';


//Firestore
import { collection, query, where, getDocs, documentId } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig"


const ProductDetailPage = () => {
    const [producto, setMaceta] = useState([]); // *producto* almacena un valor y lo actualiza con *setMaceta*, se inicializa el estado *producto* con un array vacío. 
    const [isLoading, setIsLoading] = useState(true); 
    const [showBuyButton, setShowBuyButton] = useState(true);

    const { id } = useParams(); // id desestructura el objeto q es devuelto por useParams para obtener solo la prop ID (React Router)
    const { addItemToCart } = useContext(CartContext); // CartContext accede a la funcion addItemToCart a través de useContext
    const navigate = useNavigate(); // useNavitage utiliza a navigate para acceder a /carrito (React Router)

    useEffect(() => {
        const getMaceta = async () => {
            const q = query(collection(db, "macetas"), where(documentId(), "==", id)); // se crea una consulta 'q' utilizando la f() 'query' de Firebase, se consulta en 'macetas' y con 'where' filtro los documentos donde el id del doc sea igual al valor de la variable id
            const docs = []; //acá se almacenan los datos q obtengo de la consulta q hice arriba
            const queryMacetas = await getDocs(q); //'getDocs' f() de Firebase, se usa para obtener los docs q cumplen con la consulta 'q' - await espera q se complete la operacion asincronica y se resuelva la promise
            queryMacetas.forEach((doc) => { //se recorre c/documento obtenido de 'queryMacetas'. 
                docs.push({ ...doc.data(), id: doc.id }); //por c/documento se extrae la info utilizando 'doc.data()' y se agrega al array 'docs' utilizando 'push'. además se agrega una propiedad adicional 'id' al obj para almacenar el id del documento
            });
            setMaceta(docs); //'setMaceta' actualiza el estado de producto con el valor de 'docs'
        };
        getMaceta(); //actualiza el estado del componente, consulta a Firebase, obtiene documentos de "macetas", los procesa, y almacena en productos del componente utilizando 'setMaceta'
        setTimeout(() => { 
            setIsLoading(false);
        }, 300);
    }, [id]);

    const addToCart = (maceta) => {
        const newItem = {
          id: maceta.id,
          img: maceta.img,
          name: maceta.name,
          price: maceta.price,
          quantity: 1,
        };
        addItemToCart(newItem);
        navigate('/carrito');
    };

    const handleBuyButtonClick = () => {
        setShowBuyButton(true);
    };

    return (
        <div className='card-containerone'>
            {isLoading ? (
                <div className='cargando'>
                    <Cargando />
                </div>
            ) : (
                    producto.map((maceta) => (
                        <CardMaceta
                            key={maceta.id}
                            img={maceta.img}
                            name={maceta.name}
                            price={maceta.price}
                            description={maceta.description}
                            showBuyButton={showBuyButton}
                            handleBuyButtonClick={handleBuyButtonClick}
                            addToCart={() => addToCart(maceta)}
                        />
                    ))
                )}
        </div>
    );
};
export default ProductDetailPage;