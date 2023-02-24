import { useRouter } from 'next/router'
import Link from "next/link";
import directus from "../../lib/directus";

export default function ClassPage({Race}){
     const router = useRouter()
   
     return (
          <div>
               <Link href="/races"><span>zurück</span></Link>
               <h1>{ Race.Race }</h1>
               
               <div style={{display: 'flex'}}>
                    <p style={{width: '50%'}}>{ Race.Weaknesses }</p>
                    <p style={{width: '50%'}}>{ Race.Strengths }</p>
               </div>
               <p>{ Race.Short_Description }</p>
          </div>
     )
}

export const getStaticProps = async ({ params }) => {
     const res = await directus.items("Races").readByQuery({
          filter: { slug: params.slug },
          fields: ["Race", "slug", "Strengths", "Weaknesses", "Short_Description"],
     });

     return {
          props: {
               Race: res.data[0],
          },
          revalidate: 10,
     };
};

export const getStaticPaths = async () => {
     const res = await directus.items("Races").readByQuery({
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