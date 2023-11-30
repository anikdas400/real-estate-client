import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";


const useProperties = () => {
    const axiosPublic = useAxiosPublic();
    // const [properties,setProperties]=useState([])
    // const [loading,setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/properties')
    //     .then(res => res.json())
    //     .then(data=>{             
    //         setProperties(data)
    //         setLoading(false)
    //     })
    // },[])
    // return [properties,loading]

    const {data: property = [], isPending: loading, refetch} = useQuery({
        queryKey: ['property'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/properties');
            return res.data;
        }
    })


    return [property, loading, refetch]
};

export default useProperties;