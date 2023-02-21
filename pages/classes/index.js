import directus from "../../lib/directus";

import Link from "next/link";

export default function Home( { Classes } )  {
     console.log(Classes)
     return (
          <div>
               <h1>Pen and Table</h1>
               <h2>Classes</h2>
               
               { Classes.map( (Class) => (
                    <div>
                         <Link key={Class.id} href={`classes/${Class.slug}`} >
                              <h3>{Class.Class}</h3>
                         </Link>
                         <p>{Class.Description}</p>
                    </div>
               ))}
          </div>
     )
}

export const getStaticProps = async () => {
     const res = await directus.items("Classes").readByQuery({
          limit: -1,
          fields: ["Class", "id", "slug"],
     });

     return {
          props: {
          Classes: res.data,
          },
     };
};

