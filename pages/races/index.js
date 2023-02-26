import directus from "../../lib/directus";

import Link from "next/link";

export default function Home( { Races } )  {
     return (
          <div>
               <h1>Pen and Table</h1>
               <h2>Roles</h2>
               
               { Races.map( (Race) => (
                    <div>
                         <Link key={Race.id} href={`races/${Race.slug}`} >
                              <h3>{Race.Race}</h3>
                         </Link>
                    </div>
               ))}
          </div>
     )
}

export const getStaticProps = async () => {
     const res = await directus.items("Races").readByQuery({
          limit: -1,
          fields: ["Race", "id", "slug"],
     });

     return {
          props: {
               Races: res.data,
          },
          revalidate: 10,
     };
};

