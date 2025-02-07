import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./componenets/Card"
import { AiOutlineLoading3Quarters } from "react-icons/ai";


function App() {
  const [cardData, setCardData] = useState(null)
  useEffect(() => {
    const getData = async() => {
      try{
        const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
        setCardData(response?.data?.results[0])
      }catch(err){
        console.log("Error in fetching data from api",err)
      }
    }
    getData()
  },[])
  return (
    <div className="font-bold">
      {
        cardData ? 
        <div className="flex justify-center items-center h-screen bg-gray-700">
          <Card data={cardData}/>
        </div> 
        : 
        <div className="w-full flex justify-center items-center gap-2 h-screen">
          <AiOutlineLoading3Quarters className="animate-spin"/>Loading...
        </div>
      }
    </div>
  )
}

export default App
