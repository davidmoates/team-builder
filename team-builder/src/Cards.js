import React from "react";

function Cards({ formValues }) {
  return(
      {formValues.map((index) => {
        return (
          <div>
            <h1>{index.name}</h1>
            <h2>{index.role}</h2>
            <p>{index.email}</p>
          </div>

      );
      })}

  )

}

export default Cards;
