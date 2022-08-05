import React from 'react';
import utils from '../utils';

export default ({ data, searchBy }) => {
    if(!data.ProductId) return null;
    return (
        <div className='productHeader'>
            <div>Product Id<br />{data.ProductId}</div>
            <div>Product Name<br />{data.ProductName}</div>
            {
                searchBy === "Sales" ?
                    (<div>Amount<br />{data.NumberOfSales}</div>) :
                    (<div>Gross Sales<br />{utils.formatter.format(data.Amount)}</div>)
            }
        </div>
    )
}