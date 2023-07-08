import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import './ProductCategory.css'
import { CartContext } from '../../context/ShoppingCartContext';

//Componentes
import CardMaceta from '../../components/Cards/CardMaceta';
import Cargando from '../../components/Spinner/Spinner';

//Firestore
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig"

const ProductCategoryPage = () => {
    const [productoByMaterial, setProductByMaterial] = useState([]); //'productoByMaterial' almacena un valor y lo actualiza con 'setProductByMaterial', se inicializa el estado de productoByMaterial con un array vacio.
    const [isLoading, setIsLoading] = useState(true); 
    const [showBuyButton, setShowBuyButton] = useState(true);

    const { category } = useParams();
    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        const getMaceta = async() => {
          const q = query(
            collection(db, "macetas"),
            where("category", "==", category)
          );
          const docs = [];
          const queryMacetas = await getDocs(q);
          queryMacetas.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
         setProductByMaterial(docs)
        };
        getMaceta();
        setTimeout(() => {
            setIsLoading(false);
          }, 300);
      }, [category]);

      const handleBuyButtonClick = () => {
        setShowBuyButton(true);
    };

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

  return (
    <div className='card-containerproduct'>  
        {isLoading ? (
            <div className='cargando'>
                <Cargando />
            </div>
        ) : (
              productoByMaterial.map((maceta) => {
                return (
                  <CardMaceta 
                  key={maceta.id}
                  img={maceta.img}
                  name={maceta.name}
                  price={maceta.price}
                  showBuyButton={showBuyButton}
                  handleBuyButtonClick={handleBuyButtonClick}
                  addToCart={() => addToCart(maceta)}                       
                  />                       
                )
              })
        )}
    </div>
  )
}

export default ProductCategoryPage;