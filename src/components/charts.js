import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
          labels: ['Brice', 'Rokia'],
          datasets:[
              {
                  label: 'Students age',
                  data:[
                      23,
                      22
                  ],
                  backgroundColor: [
                      'rgba(255,99,132,0.6)',
                      'rgba(255,99,132,0.6)',
                  ]
              }
          ]
      },

     

      Studentnumberofstudentperclass:{
        labels: ['class 41', 'class 42'],
        datasets:[
            {
                label: 'Number of student per class',
                data:[
                    25,
                    23
                ],
                backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                ]
            }
        ]
    },

    StudentgradeData:{
        labels: ['Brice', 'Rokia'],
        datasets:[
            {
                label: 'Students grade',
                data:[
                    12,
                    13
                ],
                backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                ]
            }
        ]
    },
    Studentnumbersex:{
        labels: ['Female', 'Male'],
        datasets:[
            {
                label: 'Students grade',
                data:[
                    12,
                    13
                ],
                backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                ]
            }
        ]
    }

    }
  }


  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
                display:true,
                text:'Students age',
                fontSize:25
              },
              legend:{
                display:true,
                position:'right'
              }
          
            }}

        />

        <Bar
          data={this.state.StudentgradeData}
          options={{
            title:{
                display:true,
                text:'Students grade',
                fontSize:25
              },
              legend:{
                display:true,
                position:'right'
              }
          
            }}
        />

        <Bar
          data={this.state.Studentnumberofstudentperclass}
          options={{
            title:{
                display:true,
                text:'Number of Student per class',
                fontSize:25
              },
              legend:{
                display:true,
                position:'right'
              }
          
            }}
        />
         <Bar
          data={this.state.Studentnumbersex}
          options={{
            title:{
                display:true,
                text:'Number of Female/Male ',
                fontSize:25
              },
              legend:{
                display:true,
                position:'right'
              }
          
            }}
        />

      </div>
    )
  }
}

export default Chart;
