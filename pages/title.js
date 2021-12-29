 import Head from 'next/head';
 const Title =(props)=>{
    return(
        <div>
            <Head>
            <title>{props.title}</title>
            </Head>
               
            </div>
    )
}
export default Title;   