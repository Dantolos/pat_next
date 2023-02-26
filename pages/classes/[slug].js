import Link from "next/link";
import directus from "../../lib/directus";

export default function ClassPage({Class}){
   
     return (
          <div>
               <Link href="/races"><span>zurück</span></Link>
               <h1>Class: { Class.Class }</h1>
               
               <p>{ Class.Description }</p>
          </div>
     )
}

export async function getServerSideProps(context) {
     const res = await directus.items("Classes").readByQuery({
          filter: { slug: context.params.slug },
          fields: ["Description", "Class", "id", "slug"],
     });
     return {
          props: {
               Class: res.data[0],
          },
         
     };
}

