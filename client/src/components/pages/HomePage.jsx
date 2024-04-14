import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Categories from "../../components/categories/Categories";
import Header from "../../components/header/Header";
import Products from "../../components/products/Products";

const HomePage = () => {

  const [categories, setCategories] = useState()

  useEffect(() => {
    
    const getAllData = async () =>{
        try {
          const response = await fetch("http://localhost:5000/api/category/get-all");
          const fromData = await response.json();
          fromData && setCategories(fromData.map((item)=>{
              return{...item , value:item.title};
          }))
          
        } catch (error) {
          console.log(error)
        }
     }
    getAllData()
  }, [])
  console.log(categories)

  return (
    <>
    <Header />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)] md:pb-60">            
          <Categories categories={categories} setCategories={setCategories} />
        </div>
        <div className="products flex-[8] overflow-auto max-h-[calc(100vh-_-112px)] md:pb-60">
          <Products categories={categories}/>
        </div>
        <div className="total-price min-w-[300px]  border">
          <Card/>
        </div>
      </div>
    </>
  )
}

export default HomePage