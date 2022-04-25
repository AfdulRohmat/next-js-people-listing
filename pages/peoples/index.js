import React from "react";
import Head from "next/head";
import styles from "../../styles/Peoples.module.css";
import Link from "next/link";

// FETCHING DATA FROM API WITH getStaticProps (NEXT JS FEATURE)
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { peoples: data },
  };
};

const peoples = ({ peoples }) => {
  return (
    <>
      {/* Adding Meta Data */}
      <Head>
        <title>Peoples List | People List</title>
        <meta name="keyword" content="peoples" />
      </Head>

      {/*  */}
      <div>
        <h1>All Peoples</h1>
        {peoples.map((poople) => (
          <Link href={`/peoples/${poople.id}`} key={poople.id}>
            <a className={styles.single}>
              <h3>{poople.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default peoples;
