import React, {Component} from 'react';
import Card from './Card';

//import {robots} from './robots';


const CardList = (props) => {

    let robotArrray = props.robots;
    let cardArray = robotArrray.map(x => Card(x));
        return(
            <div>
               {cardArray}
            </div>
        );

};

export default CardList;