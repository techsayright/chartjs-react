import React from 'react'
import {Line} from 'react-chartjs-2'

export default function LineChart() {

    let data={
        labels:[2016,2018,2019,2020,2021],
        datasets:[
            {
                label:"Annual Income",
                data:[20000,24000,25000,40000,35000],
                backgroundColor:'light-pink',
                borderColor: 'pink',
                fill:false
            }

        ]
    }
    let options={
        maintainAspectRatio: false
    }
    return (
        <div>
            <Line data={data} options={options} height={500}/>
        </div>
    )
}
