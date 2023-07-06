import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ProductCategory.css'

//Componentes
import CardMaceta from '../../components/Cards/CardMaceta';
import Cargando from '../../components/Spinner/Spinner';

//Firestore
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig"

const ProductCategoryPage = () => {
    const [productoByMaterial, setProductByMaterial] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { category } = useParams();

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
                  />                       
                )
              })
        )}
    </div>
  )
}

export default ProductCategoryPage;