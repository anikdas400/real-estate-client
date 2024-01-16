import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://real-estate-server-five.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};


export default useAxiosPublic;