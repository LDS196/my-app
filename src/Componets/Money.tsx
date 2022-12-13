import {useState} from "react";


type MoneyType = 'All'|'RUBLS'|'Dollars';
export const Money = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [nameMoney, setNameMoney] = useState<MoneyType>('All')
    const showMoney = (name: MoneyType) => {
        setNameMoney(name)
    }
    let currentMoney;

    if (nameMoney === 'All') {
         currentMoney = money.map((el, index) => {
            return <li key={index}><span>{el.banknots}</span><span>{el.value}</span><span>{el.number}</span></li>
        })
    } else {
         currentMoney = money.filter((el) => el.banknots === nameMoney).map((el, index) => {
            return <li key={index}><span>{el.banknots}</span><span>{el.value}</span><span>{el.number}</span></li>
        });
    }
    return (
        <div>
            {currentMoney}
            <button onClick={() => showMoney('All')}>All</button>
            <button onClick={() => showMoney('RUBLS')}>RUBLS</button>
            <button onClick={() => showMoney('Dollars')}>Dollars</button>
        </div>
    )
}