import React from 'react'
import productos from "../../data.json"
import ItemList from './ItemList';

const ItemListContainer = () => {
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (productos.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() =>{
        resolve (productos);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  const cat = productos.map((product) => {
    return product.category;
  });

  return (
    <>
      <ItemList productos={productos} cat={cat} />
    </>
  )
}

export default ItemListContainer