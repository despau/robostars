import React from 'react';
import Card from './Card';


const CardList = ({robos}) => {

    // if (true) {
    //     throw new Error('NOOOOOOO')
    // }

    const cardComponent = robos.map( robo => {
        return <Card 
                    key={robo.id} 
                    id={robo.id} 
                    name={robo.name} 
                    email={robo.email} 
                />
    });

    return (
        <div>
            {cardComponent}
        </div>
    );
}
export default CardList;