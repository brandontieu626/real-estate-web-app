import axios from 'axios';
export const baseUrl='https://bayut.p.rapidapi.com'
export const fetchApi = async(url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '9da0c30f96msh6c9c58d42112a06p1bea7djsn913e5690fa24',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}