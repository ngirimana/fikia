
import React, {Component} from 'react';
import { PieChart, Pie, Legend, Tooltip} from 'recharts';

const data01 = [{"value":14.926,"date":2000},{"value":15.829,"date":2001},{"value":16.777,"date":2002},{"value":17.598,"date":2003},{"value":18.426,"date":2004},{"value":19.282,"date":2005},{"value":20.168,"date":2006},{"value":21.085,"date":2007},{"value":22.033,"date":2008},{"value":22.988,"date":2009},{"value":23.952,"date":2010},{"value":24.922,"date":2011},{"value":25.894,"date":2012},{"value":26.869,"date":2013},{"value":27.841,"date":2014},{"value":28.811,"date":2015},{"value":29.775,"date":2016},{"value":30.731,"date":2017}]

class Penetration extends React.Component{
    render() {
        return (
          <div>
           <PieChart width={300} height={250}>
        <Pie isAnimationActive={false} data={data01} cx={125} cy={150} outerRadius={80} fill="#8884d8" label/>
        <Tooltip/>
       </PieChart>
        <div className="card card-inverse card-primary ">
                   <blockquote className="card-blockquote">
                        <p>Urban population (% of total)<br/>

  <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo2">More...</button>
  <div id="demo2" className="collapse">
   <small><i>Source: United Nations Population Division. World Urbanization Prospects: 2014 Revision.</i><br/>

Urban population refers to people living in urban areas as defined by national statistical offices. The data are collected and smoothed by United Nations Population Division.</small></div></p>
                  
                    </blockquote>
                </div>
                </div>
        );
    }
}

export default Penetration;

  