import axios from 'axios';
// 7OcZf6pHU2Fcr1kg8bVODQ
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses' ,
    headers: {
        Authorization: 'Bearer bIo6WLYhatOIZY-aem0ANO2AfzzYG74MrQnzKPxsBea9nbAM025NdqDOF6pi2U2PVs6VSSobYdvG5cJfLZNgldYj79RBiQhVkRduINqhcsRXgQaxT897u-AY6BVnYHYx'
    }
});