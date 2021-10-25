import React, { useState } from 'react';
import Display from './Display';

import Form from './Form';
import Header from './Header';
// import Card from "./Ui/Card";

function App() {
  const [formData, setFormData] = useState({
    date: '',
    product: '',
    price: '',
  });

  const [ErrorDate, setErrorDate] = useState('');
  const [ErrorProduct, setErrorProduct] = useState('');
  const [ErrorPrice, setErrorPrice] = useState('');

  const [ErrorDateBg, setErrorDateBg] = useState(false);
  const [ErrorProductBg, setErrorProductBg] = useState(false);
  const [ErrorPriceBg, setErrorPriceBg] = useState(false);

  // For Display Data */
  const [data, setData] = useState([]);

  // For Droupdown Data */
  const [yearData, setYearData] = useState([1]);

  /* Fast Method  For Save & Update Data */
  const DateHandel = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        date: e.target.value,
      };
    });
  };

  const ProductHandel = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        product: e.target.value,
      };
    });
  };

  const PriceHandel = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        price: e.target.value,
      };
    });
  };

  const FormDataStore = () => {
    const store = {
      date: formData.date,
      product: formData.product,
      price: formData.price,
    };

    if (formData.date.length === 0) {
      setErrorDateBg(true);

      setErrorProductBg(false);
      setErrorPriceBg(false);
      setErrorDate('Enter Date');
      setErrorProduct('');
      setErrorPrice('');
      return false;
    } else if (formData.product.length === 0) {
      setErrorProductBg(true);
      setErrorDateBg(false);
      setErrorPriceBg(false);
      setErrorProduct('Enter Product');
      setErrorDate('');
      setErrorPrice('');
      return false;
    } else if (formData.price.length === 0) {
      setErrorPriceBg(true);
      setErrorDateBg(false);
      setErrorProductBg(false);
      setErrorPrice('Enter Price');
      setErrorDate('');
      setErrorProduct('');
      return false;
    } else {
      setErrorDate('');
      setErrorProduct('');
      setErrorPrice('');
      setErrorDateBg(false);
      setErrorProductBg(false);
      setErrorPriceBg(false);
      // return true;
    }

    setData((prevData) => {
      return [store, ...prevData];
    });

    formData.date = '';
    formData.product = '';
    formData.price = '';
  };

  const hanelDroupDownYear = (e) => {
    // console.log(e.target.value);
    setYearData(e.target.value);
  };

  return (
    <>
      <Header />
      {/* <Card> */}

      <div className="container">
        <div className="row">
          <Form
            FormDataProps={formData}
            DateHandelProps={DateHandel}
            PriceHandelProps={PriceHandel}
            ProductHandelProps={ProductHandel}
            FormDataStoreProps={FormDataStore}
            formErrProps={[
              ErrorDate,
              ErrorProduct,
              ErrorPrice,
              ErrorDateBg,
              ErrorProductBg,
              ErrorPriceBg,
            ]}
          />

          <Display
            yearDataProps={yearData}
            DataProps={data}
            hanelDroupDownYearProps={hanelDroupDownYear}
          />
        </div>
      </div>
      {/* </Card> */}
    </>
  );
}

export default App;
