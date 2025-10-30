'use client'
import React, { useEffect, useState } from 'react'

type Product={
    id:number,
    thumbnail:string,
    title:string,
}

type ApiResponse = {
    products: Product[];
}

function page() {

    const [products, setProducts] =  useState<Product[]>([]);

    const [page, setPage] = useState(1);

    const selectPageHandler = (selectedPage:number)=>{
        setPage(selectedPage);
    }

    const fetchApiCalldata = async () =>{
        const res = await fetch("https://dummyjson.com/products")
        const data : ApiResponse = await res.json();

        if(data && data.products ){
            setProducts(data.products);
        }
        console.log(data);
    } 

    useEffect(()=>{
        fetchApiCalldata()
    },[])
  return (
    <div >
        {
            products.length>0 && <div className='flex items-center'>
                {
                    products.slice(page*10 -10, page*10).map((prod)=>{
                        return <span key={prod.id}>
                            <img src={prod.thumbnail} alt={prod.title} />
                            <span>{prod.title}</span>
                        </span>
                    })
                }
            </div>
        }
        {
        products.length >0 && <div className='flex items-center justify-center p-5 m-5 gap-5'> 
            <span>prev</span>
            {
                [...Array(products.length/10)].map((_,i )=>{
                    return <span onClick={()=> selectPageHandler(i+1)} className='cursor-pointer border border-black px-2' key={i}>{i+1}</span>
                })

            }
            {/* <span>{page}</span> */}
            <span>next</span>
        </div>
        }
    </div>
    
  )
}

export default page