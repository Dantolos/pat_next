import { useRouter } from 'next/router'
import Link from "next/link";
import directus from "../../lib/directus";

export default function ClassPage({Class}){
     const router = useRouter()
   
     return (
          <div>
               <Link href="/races"><span>zurück</span></Link>
               <h1>Class: { Class.Class }</h1>
               
               <p>{ Class.Description }</p>
          </div>
     )
}

export const getStaticProps = async ({ params }) => {
     
     const res = await directus.items("Classes").readByQuery({
          filter: { slug: params.slug },
          fields: ["Description", "Class", "id", "slug"],
     });

     return {
          props: {
               Class: res.data[0],
          },
          revalidate: 10,
     };
};

export const getStaticPaths = async () => {
     const res = await directus.items("Classes").readByQuery({
          limit: -1,
          fields: ["slug"],
     });
   
     return {
          paths: res.data.map((post) => ({
               params: {
                    slug: post.slug,
               },
          })),
          fallback: true,
     };
};