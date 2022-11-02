import React from "react";

import { Bar } from 'react-chartjs-2'


const BarChart = () => {
    return<div>
        <Bar

        data = {{
            labels : ['Alchols', 'Malic Acid', 'Ash', 'Alcalinity of Ash', 'Magnesium',
             'Total Phenols', 'Flavonoids', 'Non Flavonoid Phenol', 'Color Intenesity'], // horizontal axis

             datasets: [
               {
                label: 'wine data set',
                data: [1, 14.23, 1.71, 2.43, 15.6, 127, 2.8, 3.06, 2.29], // vertical axis
                backgroundColor: [
                    'red',
                    'grey',
                    'black',
                    'brown',
                    'Silver',
                    'pink',
                    'Violet',
                    'Maroon',
                    'Yellow'
                  ],

                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
            },
        ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
               
                
        
        />
    </div>
}

export default BarChart