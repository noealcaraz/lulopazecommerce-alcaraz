import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

//Componente
import CardMaceta from '../Cards/CardMaceta'
import Cargando from '../Spinner/Spinner';

//Firestore
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig"


const ListMacetas = () => {
    const [macetas, setMacetas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getMacetas = async() => {
          const q = query(collection(db, "macetas"));
          const queryMacetas = await getDocs(q);
          const docs = [];
          queryMacetas.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setMacetas(docs);
        };
        getMacetas();
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);        
    }, []);

  return (
    <>
      {isLoading ? (
        <div className='cargando'>
          <Cargando />
        </div>
      ) : (
        <div className='card-container'>
        {macetas
          ? macetas.map((maceta) => (
              <div key={maceta.id} className='card-item'>
                <Link to={`/product-detail/${maceta.id}`} className='card-link'>
                  <CardMaceta img={maceta.img} name={maceta.name} price={maceta.price} />
                </Link>
              </div>
            ))
          : null}
      </div>
    )}
    </>
  );
};

export default ListMacetas;

