import React from 'react'

const GetData = () => {

    const fetchData = () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve("Data fetched successfully!");
          }, 5000);
        });

    let data = fetchData();

  return (
    <h3 className='text-lg text-red-600 font-bold font-mono'>{data}</h3>
  )
}

export default GetData