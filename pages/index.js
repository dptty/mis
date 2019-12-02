import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import './index.scss';
import Nav from "../components/nav";
import Report from "../components/report";

const addReporter = async () => {
  const reporterId = await fetch('/api/create/reporter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ reporter: 'New Location' })
  });
  return reporterId;
};

const Home = ({ reporters }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <button onClick={addReporter}>Add new location</button>

    <div className="locations">
      {reporters
        .map((location) => <Report key={location.reporter} location={location} />)
      }
    </div>



    <style jsx>{``}</style>
  </div>
);

Home.getInitialProps = async () => {
  const response = await fetch(`http://localhost:3000/api/report`);
  const reporters = await response.json();
  return { reporters };
};

export default Home;
