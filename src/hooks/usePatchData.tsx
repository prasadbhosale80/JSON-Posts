import axios from 'axios';
import React, { useEffect, useState } from 'react'

const usePatchData = ({ url, data }: any) => {
    const [response, setResponse] = useState<any>({});
    const patchData = async (url: any, data: any) => {

        try {
            const response = await axios.put(url, data);
            setResponse({ data: response.data, status: response.status })
        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        if (url && data) {
            patchData(url, data)
        }
    }, [url, data])

    return { response, patchData }
}

export default usePatchData