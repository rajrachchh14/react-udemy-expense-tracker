import React from 'react';

export default function Form({
  FormDataProps,
  PriceHandelProps,
  ProductHandelProps,
  DateHandelProps,
  FormDataStoreProps,
  formErrProps,
}) {
  const formSubmit = (e) => {
    e.preventDefault();
    FormDataStoreProps();
  };

  let [dtErr, productErr, priceErr, ErrorDateBg, ErrorProductBg, ErrorPriceBg] =
    formErrProps;

  return (
    <div className="col-lg-12">
      <form onSubmit={formSubmit}>
        <div className="form-group ">
          <label>Select Date</label>
          <input
            type="date"
            name="date"
            className={`form-control ${ErrorDateBg ? 'bg-error' : ''}`}
            onChange={DateHandelProps}
            value={FormDataProps.date}
          />
          <span className="text-danger">{dtErr}</span>
        </div>
        <div className="form-group">
          <label>Select Product</label>
          <input
            type="text"
            className={`form-control ${ErrorProductBg ? 'bg-error' : ''}`}
            placeholder="Product"
            onChange={ProductHandelProps}
            value={FormDataProps.product}
          />
          <span className="text-danger">{productErr}</span>
        </div>
        <div className="form-group">
          <label>Select Price</label>
          <input
            type="number"
            className={`form-control ${ErrorPriceBg ? 'bg-error' : ''}`}
            placeholder="Price"
            value={FormDataProps.price}
            onChange={PriceHandelProps}
          />
          <span className="text-danger">{priceErr}</span>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
