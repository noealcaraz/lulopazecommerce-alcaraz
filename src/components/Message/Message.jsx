import Alert from 'react-bootstrap/Alert';

function Message ({ purchaseID }) {
  return (
    <div >
      {[
        'success',
      ].map((variant) => (
        <Alert key={variant} variant={variant} >
         ¡Gracias por tu elegirnos! Tu id de compra es: {purchaseID}
        </Alert>
      ))}
    </div>
  );
}

export default Message;