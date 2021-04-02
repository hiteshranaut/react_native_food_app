import { useEffect , useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results , setResults] = useState([]);
    const [errorMessage , setErrorMessage] = useState(''); 


const searchApi = async (searchTerm) => {
    
    try {
        const response = await  yelp.get('/search' , {
            params: {
                limit: 10 , 
                term: searchTerm ,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    } catch (err) {
        setErrorMessage("Something went wrong");
    }
    
    
  };


  //call serch api when component 
//   is firs

    useEffect(() => {
        searchApi("pasta");
    } , [])


    return [searchApi , results , errorMessage];
};