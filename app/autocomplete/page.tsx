"use client"
import React, { useEffect, useState } from 'react'

type Recipe = {
  id: number,
  name: string,
  ingredients?: string[],
  instructions?: string[],
  cuisine?: string,
  image?: string,
  [k: string]: unknown
}

type RecipeSearchResponse = {
  recipes: Recipe[],
  total?: number,
  skip?: number,
  limit?: number
}

const page = () => {

  const [input, setInput] = useState("");
  const [results, setResults] = useState<Recipe[]>([]);
  const [showResults, setShowResults] = useState(false);

  // caching - localstorage and simple way as well 
  // how to cache the result -  object -- {man: [], mango:[]}

  const [cache, setCache]= useState<{ [key: string]: any }>({});

 
  const fetchData = async() =>{

    if(cache[input]){
      setResults(cache[input]);
      return;
    }

  //    if (q.trim().length < 2) {
  //   setResults([]);
  //   return;
  // }
    const res = await fetch(
      `https://dummyjson.com/recipes/search?q=` + input
    );
    const json: RecipeSearchResponse = await res.json();
    console.log(json?.recipes)
    setResults(json.recipes ?? []);
        setCache(prev => ({...prev, [input]:[json.recipes ]}))
  };


  // debouncing with 300 ms to fetchdata fucntion API CALL

  useEffect(()=>{
    const timer = setTimeout(fetchData, 300);
    return () =>{
      clearTimeout(timer)
    }
  }, [input])


  return (
    <div className='flex justify-center items-center flex-col mt-10'>
      <h1 className='text-5xl'>AutoComplete</h1>
      <div>
        <input 
        type='text' 
        placeholder="Search recipes..."
        className='w-96 p-10px border-2 border-black m-10'
        value={input} 
        onChange={(e)=>{setInput(e.target.value)}}
        onFocus={()=>{setShowResults(true)}}
        onBlur={()=>{setShowResults(false)}}/>
      </div>
      {showResults && results.length > 0 && 
      <div className='w-96 m-auto border-2 border-black text-left max-h-96 overflow-y-scroll'>
        {results.map((r: Recipe)=> <span className='block text-black p-5 hover:bg-gray-400 cursor-pointer' key={r.id}> {r.name} </span> )}
      </div>}
    </div>
  )
}

export default page