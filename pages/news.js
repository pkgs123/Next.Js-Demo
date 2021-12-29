import React,{useState} from 'react';
import Title from './title';
const News = ({news})=>{
    const [searchQuery,setSearchQuery] = useState('');
    const[value,setValue]=useState({
        text:'',
        coolMsg:''
    })

    
    const {text,coolMsg} = value;
    const handleChange = name=>e=>{
        // setSearchQuery(e.target.value);
        setValue({...value,[name]:e.target.value})

    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("TextValue",text);
    }
    
    const searchForm = ()=>{
        return(
            <>
            <form onSubmit={handleSubmit}>
                <input type="text"  value={text} onChange={handleChange('text')}/>
                <input type="text" value ={coolMsg} placeholder='write something..' onChange={handleChange('coolMsg')}/>
            </form>
            </>
        )
    }

    return(
        <>
        <h1>News:{searchForm()}</h1><hr/>
        {/* {searchForm()}<hr/> */}
       {
           news.articles.map((n,i)=>{
               return <>
               <p key={i}><a href={n.url} target="_blank">{n.title}</a></p>
               </>
           })
       }
        </>
    )
}

News.getInitialProps = async ()=>{
    let news;
    try{
        let resp = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
        news = await resp.json();
        console.log("News Data",news);
    }
    catch(e){
        console.log("Error",e);
        news=[];
    }
    return{
        news
    }
}

export default News;