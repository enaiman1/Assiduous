const apiKey ="ya_B-GIf4Gv1v25lrpRKVStf0PpOjh3HKQq5jcSlfk3OU1jXWT5tm31yQ9sQ750H1ZqQtr5bagt3U7-E8Gn-s_wUIPMhmfNDWE3g3twXi6fRmBW8f4e0wvw-90q0XnYx"
// this object is the api call to yelp
const Yelp = {

 searchYelp(term, location, sortBy){
     return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
     {headers: 
        {Authorization: `Bearer ${apiKey} `}
    })
     .then(response => {
         return response.json()
        })
        .then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(((business)=>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count

                    }
                }))
            }
        })
 }   

};

export default Yelp