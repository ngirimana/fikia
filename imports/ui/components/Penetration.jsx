
import React, {Component} from 'react';
import { PieChart, Pie, Legend, Tooltip} from 'recharts';

const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

class Penetration extends React.Component{
    render() {
        return (
           <PieChart width={250} height={250}>
        <Pie isAnimationActive={false} data={data01} cx={125} cy={125} outerRadius={80} fill="#8884d8" label/>
        <Tooltip/>
       </PieChart>
        );
    }
}

export default Penetration;