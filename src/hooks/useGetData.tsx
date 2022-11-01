import axios from 'axios';
import  { useEffect, useState } from 'react'

const useGetData = (url: string) => {
  const [response, setResponse] = useState<any>({});
  const getData = async () => {
   
    try {
      const response = await axios.get(url);
      setResponse({ data: response.data, status: response.status})
    } catch (error) {
      console.error(error);
    }
  
  }
  useEffect(() => {
    getData()
  }, [url])

  return response
}

export default useGetData