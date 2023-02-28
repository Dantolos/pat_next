import Head from 'next/head';
import styles from '../styles/Home.module.css';
import directus from "../lib/directus";
import Link from "next/link";

export default function Home( { Classes } ) {
  console.log(Classes)
  return (
    <home>
      <h1>Pen&Table</h1>
    </home>
  )
}


export const getStaticProps = async () => {
  const res = await directus.items("Classes").readByQuery({
    limit: -1,
    fields: ["Description", "Class", "id", "slug"],
  });

  return {
    props: {
      Classes: res.data,
    },
    revalidate: 10,
  };
};