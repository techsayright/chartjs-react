import React from 'react'
import {Pie} from 'react-chartjs-2'

export default function PieChart() {

    let data={
        labels:[2016,2017,2018,2019,2020],
        datasets:[
            {
                label:"Income Pie",
                data:[123,234,458,335,612],
                backgroundColor:["blue","green","yellow","red","purple"],
                borderColor:"yellow",
                hoverOffset: 10
            }
        ]
    }
    return (
        <div>
            <Pie data={data} options={{maintainAspectRatio: false}} height={400}/>
        </div>
    )
}
