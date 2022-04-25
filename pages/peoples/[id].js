import React from "react";

// FUCTION TO HANDLE DYNAMIC ROUTE OR PATH USING NEXT JS FEATURE CALLED getStaticPaths
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((people) => {
    return {
      params: { id: people.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

// FETCHING SINGLE DATA FROM API WITH getStaticProps (NEXT JS FEATURE) BASED ON DYAMIC PATH ID THAT CREATED ABOVE
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { people: data },
  };
};

const Detailpeople = ({ people }) => {
  return (
    <>
      <div>
        <h1>Detail Page</h1>
        <h1>{people.name}</h1>
        <p>{people.email}</p>
        <p>{people.website}</p>
        <p>{people.address.city}</p>
      </div>
    </>
  );
};

export default Detailpeople;
