import React, { Component } from 'react';
import './List.css';
import Card from './card/Card';

var data = require('./organizations.json');

class List extends Component {
    render() {
        return (
            <div className="List">
                {Object.keys(data).map((key, index) =>
                    <Card key={index} 
                    name={data[key].name}
                    location={data[key].location}
                    description={data[key].description}
                    image_url={data[key].image_url}
                    twitter_url={data[key].twitter_url}
                    facebook_url={data[key].facebook_url}
                    instagram_url={data[key].instagram_url}></Card>
                )}
            </div>
        );
    }
}
        
export default List;
        