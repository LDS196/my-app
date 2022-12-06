
type TopCarsPropsType={
    dataCars: Array<CarsType>
}
type CarsType={
    manufacturer:string,
    model:string,
}

export const TopCars = (props: TopCarsPropsType) => {
    let topCars = props.dataCars.map((car,index) => {
        return(
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{car.manufacturer}</td>
            <td>{car.model}</td>
        </tr>
        )
    } )

    return(

        <table>
            <tr>
                <th>#</th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            {topCars}
        </table>




    )
}