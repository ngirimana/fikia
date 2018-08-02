import React, { Component } from 'react';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
//const data=[{"value":0,"decimal":0,"date":1961},{"value":0,"decimal":0,"date":1962},{"value":0,"decimal":0,"date":1963},{"value":0,"decimal":0,"date":1964},{"value":0,"decimal":0,"date":1965},{"value":0,"decimal":0,"date":1966},{"value":0,"decimal":0,"date":1967},{"value":0,"decimal":0,"date":1968},{"value":0,"decimal":0,"date":1969},{"value":0,"decimal":0,"date":1970},{"value":0,"decimal":0,"date":1971},{"value":0,"decimal":0,"date":1972},{"value":0,"decimal":0,"date":1973},{"value":0,"decimal":0,"date":1974},{"value":0,"decimal":0,"date":1975},{"value":0,"decimal":0,"date":1976},{"value":0,"decimal":0,"date":1977},{"value":0,"decimal":0,"date":1978},{"value":0,"decimal":0,"date":1979},{"value":0,"decimal":0,"date":1980},{"value":0,"decimal":0,"date":1981},{"value":0,"decimal":0,"date":1982},{"value":0,"decimal":0,"date":1983},{"value":0,"decimal":0,"date":1984},{"value":0,"decimal":0,"date":1985},{"value":0,"decimal":0,"date":1986},{"value":0,"decimal":0,"date":1987},{"value":0,"decimal":0,"date":1988},{"value":0,"decimal":0,"date":1989},{"value":0,"decimal":0,"date":1990},{"value":0,"decimal":0,"date":1991},{"value":0,"decimal":0,"date":1992},{"value":0,"decimal":0,"date":1993},{"value":0,"decimal":0,"date":1994},{"value":0,"decimal":0,"date":1995},{"value":0,"decimal":0,"date":1996},{"value":0,"decimal":0,"date":1997},{"value":0.0708234056624446,"decimal":0,"date":1998},{"value":0.144865715408141,"decimal":0,"date":1999},{"value":0.485938739572097,"decimal":0,"date":2000},{"value":0.780367771723458,"decimal":0,"date":2001},{"value":0.965194720604765,"decimal":0,"date":2002},{"value":1.50593075437316,"decimal":0,"date":2003},{"value":1.55663622060959,"decimal":0,"date":2004},{"value":2.47981062609163,"decimal":0,"date":2005},{"value":3.41278737598544,"decimal":0,"date":2006},{"value":6.72287471201077,"decimal":0,"date":2007},{"value":13.6239593686513,"decimal":0,"date":2008},{"value":24.3474332008412,"decimal":0,"date":2009},{"value":34.6327287958573,"decimal":0,"date":2010},{"value":42.2799922138221,"decimal":0,"date":2011},{"value":52.746580197172,"decimal":0,"date":2012},{"value":60.4524782354981,"decimal":0,"date":2013},{"value":68.2836071178721,"decimal":0,"date":2014},{"value":75.3220609596947,"decimal":0,"date":2015},{"value":74.8607259168611,"decimal":0,"date":2016},{"value":0,"decimal":0,"date":2017}];
const data=[{"value":0.00999999977648258,"decimal":1,"date":1990},{"value":0.00999999977648258,"decimal":1,"date":1991},{"value":2.3,"decimal":1,"date":1992},{"value":0.0427721999585629,"decimal":1,"date":1993},{"value":0.188256278634071,"decimal":1,"date":1994},{"value":0.577478110790253,"decimal":1,"date":1995},{"value":1.16230273246765,"decimal":1,"date":1996},{"value":2.14179015159607,"decimal":1,"date":1997},{"value":3.10292291641235,"decimal":1,"date":1998},{"value":4.04264211654663,"decimal":1,"date":1999},{"value":6.2,"decimal":1,"date":2000},{"value":5.85776567459106,"decimal":1,"date":2001},{"value":6.74377536773682,"decimal":1,"date":2002},{"value":7.62350177764893,"decimal":1,"date":2003},{"value":8.50300693511963,"decimal":1,"date":2004},{"value":4.8,"decimal":1,"date":2005},{"value":10.285608291626,"decimal":1,"date":2006},{"value":11.2008304595947,"decimal":1,"date":2007},{"value":6,"decimal":1,"date":2008},{"value":13.0973424911499,"decimal":1,"date":2009},{"value":9.7,"decimal":1,"date":2010},{"value":10.8,"decimal":1,"date":2011},{"value":16.0697765350342,"decimal":1,"date":2012},{"value":15.2,"decimal":1,"date":2013},{"value":19.8,"decimal":1,"date":2014},{"value":22.8,"decimal":1,"date":2015},{"value":29.37,"decimal":1,"date":2016},{"value":0,"decimal":1,"date":2017}];
class Summary extends React.Component{
    render() {
        return (
          <div>
            <BarChart width={450} height={250} data={data}
            margin={{top: 0, right: 0, left: 0, bottom: 0}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="date"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="value" fill="#8884d8" />
       <Bar dataKey="decimal" fill="#82ca9d" />
      </BarChart>

      <div className="card card-inverse card-primary ">
                   <blockquote className="card-blockquote">
                        <p>Access to electricity % of population<br/>

  <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo1">More...</button>
  <div id="demo1" className="collapse">
   <small><i>Source: World Bank, Sustainable Energy for All (SE4ALL) database from the SE4ALL Global Tracking Framework led jointly by the World Bank, 
   International Energy Agency, and the Energy Sector Management Assistance Program.</i><br/>

Access to electricity is the percentage of population with access to electricity. 
Electrification data are collected from industry, national surveys and international sources.</small></div></p>
                  
                    </blockquote>
                </div>
                </div>



        );
    }
}

export default Summary;

// ReactDOM.render(
//     <TwoLevelPieChart />,
//     document.getElementById('container')
// );
