import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// this component is used to take the array of information and turn it to a new array to display on the page
class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                 {
                     this.props.businesses.map((business) => {
                        return <Business key={business.id} business={business} />
                     })
                 }

            </div>)
    }
};

export default BusinessList;