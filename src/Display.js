import React from 'react';
import FilterData from './FilterData';
export default function Display({
  DataProps,
  hanelDroupDownYearProps,
  yearDataProps,
}) {
  /*
  let AllData = [
    {
      id: 1,
      date: "01-30-2021",
      price: 100,
      product: "x",
    },
  ];
  */

  // console.log(typeof yearDataProps.length);
  console.log(yearDataProps.length);
  // For Droup Down
  // default Length of Arry Set in useState = 1 & Droup down Set  1 length

  const result =
    yearDataProps.length === 1
      ? DataProps.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.product}</td>
              <td>{data.price}</td>
            </tr>
          );
        })
      : DataProps.filter(
          (DataProps) => DataProps.date.split('-')[0] === yearDataProps
        ).map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.product}</td>
              <td>{data.price}</td>
            </tr>
          );
        });

  return (
    <>
      <div className="col-lg-12 displayDiv">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th colSpan="3" className="text-right text-bold">
                <FilterData hanelDroupDownYearProps={hanelDroupDownYearProps} />
              </th>
            </tr>
            <tr>
              <th>YY - MM - DD</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {result.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center">
                  No Data Available
                </td>
              </tr>
            ) : (
              result
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
