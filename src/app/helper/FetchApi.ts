import { useState } from "react"

export const useFetch = async(url: string) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)
    try {
        const res = await fetch(url)
        const result = await res.json()
        setData(result.data)
        setLoading(false)
    } catch (error: any) {
        setErrorMsg(error.message)
        setLoading(false)
    }
  return [data, isLoading, errorMsg]
}