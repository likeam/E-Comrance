import React, { useContext } from 'react'
import Layout from '../../components/layout/layout';
import myContext from '../../context/data/myContext';


function Home() {

    const context = useContext(myContext);
    console.log(context);
    const {state,color} = context;
    console.log(state);

  return (
    <Layout>
        <h1>Name : {state.name}</h1>
        <h1>Age : {state.age}</h1>
    </Layout>
  )
}

export default Home;