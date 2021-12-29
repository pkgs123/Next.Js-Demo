import Nav from './nav';
import Hero from './Hero';
export default function Layout(props){
    return(
        <>
        <Nav/>
        <Hero/>
        <main>
        {props.children}
        </main>
        </>
    )
}