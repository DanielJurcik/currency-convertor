import React from 'react'

export default function CurrencyRow(props) {
    const{
        currencyOptions,
        activeCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    return (
        <div>
            <input type="number" className="currency-input" value={amount} onChange={onChangeAmount}/>
            <select value={activeCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))
                }
            </select>
        </div>
    )
}
