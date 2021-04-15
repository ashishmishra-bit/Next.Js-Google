import Head from 'next/head';
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY } from '../Key';
import Response from '../Response';


function Search({ results }) {
    console.log(results)
    return (
        <div>
            <head>
                <title>Ssearch</title>
                <link rel="icon" href="/favicon.ico" />
            </head>

            <Header />

        </div>
    );
}

export default Search;

export async function getServerSideProps(context){
    const useDummyData = true;

    const data = useDummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).then((response) => response.json());

    return {
        props: {
            results: data,
        },
    };
}
