import React from 'react';
import utils from '../utils';

export default ({ sales }) => {
    if(!sales) return null;
    return (
        <div className='card'>
            {
                Object.keys(sales).map((key, index) => {
                    return (
                        <div key={index.toString()}>
                            <h3>{key}</h3>
                            <table className='productTable'>
                                <thead>
                                    <tr>
                                        <th>Product Price</th>
                                        <th>Payout Percentage</th>
                                        <th>Payout Amount</th>
                                        <th>Shipping Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        sales[key].map((details, index) => {
                                            return (
                                                <tr key={index.toString()}>
                                                    <td>{utils.formatter.format(details.ProductPrice)}</td>
                                                    <td>%{details.PayoutPercentage}</td>
                                                    <td>{utils.formatter.format(details.PayoutAmount)}</td>
                                                    <td>{details.OrderShippingType}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}