import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useAddData = ({ url, data }: any) => {
    const [response, setResponse] = useState<any>({});

    const postData = async (url:any,data:any) => {

        try {
            const response = await axios.post(url, data);
            setResponse({ data: response.data, status: response.status })
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        if (url && data) {
            postData(url,data)
        }
    }, [url,data])
    console.log(response);

    return {response, postData}
}

export default useAddData