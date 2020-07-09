import React from 'react';

function MarketCar(props) {
    const {carContent} = props;
    let total = 0;
    for (let x=0; x < carContent.length; x++) {
        total += carContent[x].price;
        console.log(carContent[x].price);
    }

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
                Total {total}
            </div>
        </div>
    );
};

export default MarketCar;