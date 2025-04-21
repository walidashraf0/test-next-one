import React from "react";

const About = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

  const fetchData = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 5000);
    });

//   useEffect(() => {
//     try {
//       const x = fetchData().then((res) => {
//         return res;
//       });
//       setData(x);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

let data = fetchData();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-4xl font-bold text-red-600">About</h1>
      {/* {loading ? (
        <h3 className="text-3xl text-red-600 font-bold font-mono">Loading...</h3>
      ) : (
        ""
      )} */}
      {data ? (
        <h3 className="text-lg text-red-600 font-bold font-mono">{data}</h3>
      ) : (
        ""
      )}
    </section>
  );
};

export default About;
