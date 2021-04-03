import axios from 'axios';
// 7OcZf6pHU2Fcr1kg8bVODQ
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses' ,
    headers: {
        Authorization: 'Bearer '
    }
});