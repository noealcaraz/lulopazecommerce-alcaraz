import React, { useState } from 'react'
import './Shop.css'

//Componente
import Message from '../../components/Message/Message';

//Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Firestore
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const initialState = {
  name: '',
  email: '',
  phone: '',
};

const FormControlDisabledExample = () => {
  const [values, setValues] = useState(initialState);

  const [purchaseID, setPurchaseID] = useState("")
   
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({...values, [name]: value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Añade un doc con un id generado.
    const { name, email, phone } = values;
    const docRef = await addDoc(collection(db, "compras"), {
      name, email, phone,
    });
    //console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    //Reinicia el estado del formulario.
    setValues(initialState);
  }

  return (
    <div className='containerform'>
      <h1>Realiza tu compra y te enviaremos un código de seguimiento del producto</h1>
        <form className='formulario' onSubmit={onSubmit}>
          <Form.Control  style={{ width: '400px' }}
            type="text"
            placeholder="Nombre y apellido"
            name="name"
            value={values.name}
            onChange={handleOnChange}
          />
          <br />
          <Form.Control  style={{ width: '400px' }}
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleOnChange}
          />
          <br />
          <Form.Control  style={{ width: '400px' }}
            type="number"
            placeholder="Teléfono"
            name="phone"
            value={values.phone}
            onChange={handleOnChange}
          />
          <br />
          <Button variant="success" type="submit">Comprar</Button>
        </form>
        {purchaseID && <Message purchaseID={purchaseID}/>}
    </div>
  );
}

export default FormControlDisabledExample;