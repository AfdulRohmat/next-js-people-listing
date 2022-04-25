import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"; // for redirect method

const NotFound = () => {
  const router = useRouter();

  //   BACK TO HOMEPAGE AFTER 3 SECOND
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  //
  return (
    <>
      {/* Adding Meta Data */}
      <Head>
        <title>people List | Error</title>
        <meta name="keyword" content="peoples"/>
      </Head>
      <div className="not-found">
        <h1>Ooopsss., Something Wrong</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to the
          <Link href="/">
            <a> Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
