import React from 'react';

export default function FilterData({ hanelDroupDownYearProps }) {
  const hanelDroupDown = (e) => {
    // console.log(e.target.value);
    hanelDroupDownYearProps(e);
  };

  return (
    <>
      {/* <label>Select</label> &nbsp; */}
      <select name="form-control" onChange={hanelDroupDown}>
        <option value="1">All Select</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </>
  );
}
