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
    const [producto, setMaceta] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showBuyButton, setShowBuyButton] = useState(true);

    const { id } = useParams();
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const getMaceta = async () => {
            const q = query(collection(db, "macetas"), where(documentId(), "==", id));
            const docs = [];
            const queryMacetas = await getDocs(q);
            queryMacetas.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setMaceta(docs);
        };
        getMaceta();
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
          // ...otros datos del producto que deseas agregar al carrito
        };

        const isItemInCart = cart.some((item) => item.id === newItem.id);
        if (!isItemInCart) {      
            setCart((prevCart) => [...prevCart, newItem]);
            alert('Producto añadido al carrito con éxito');
            navigate('/carrito', { state: { cartItem: newItem } });
            console.log(newItem)
        } else {
            alert ('El producto ya existe en el carrito')
        }
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
                            addToCart={addToCart}
                        />
                    ))
                )}
        </div>
    );
};
export default ProductDetailPage;