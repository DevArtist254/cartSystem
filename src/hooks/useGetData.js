import {useState, useEffect} from "react"
import axios from "axios"

export default function useGetData(url) {
 //#read data
 const [data, setData] = useState(null)
 const [error, setError] = useState(null)
 const [loading, setLoading] = useState(false)

 //#write data
 useEffect(() => {
  ;(async function () {
   try {
    setLoading(true)
    const res = await axios.get(url)
    const values = await res.data

    setData(values)
    setLoading(false)
   } catch (error) {
    setError(error)
    setLoading(false)
   }
  })()
 }, [])

 return [data, error, loading]
}
