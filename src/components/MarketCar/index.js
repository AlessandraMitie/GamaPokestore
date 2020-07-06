import React from 'react';

function MarketCar(props) {
    const {carContent} = props;

    return(
        <div>
            <div>
                {carContent.map(item => (
                    <div key={item.id}>
                        {item.name}
                    </div>
                ))}
            </div>
            <div>
                Total {carContent.reduce((a,b) => { return (a+b.value) }, 0 )} 
            </div>
        </div>
    );
};

export default MarketCar;