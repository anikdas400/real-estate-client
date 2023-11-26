import { useEffect, useState } from "react";


const useProperties = () => {
    const [house,setHouse]=useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch('properties.json')
        .then(res => res.json())
        .then(data=>{             
            setHouse(data)
            setLoading(false)
        })
    },[])
    return [house,loading]
};

export default useProperties;