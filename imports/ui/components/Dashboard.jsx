import React from 'react';
import Trends from '../components/Trends.jsx';
import Summary from '../components/Summary.jsx';
import Penetration from '../components/Penetration.jsx';
import Insight from '../components/Insight.jsx'

import Dheader from '../components/Dheader.jsx';

import styled from 'styled-components';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';

import {cogs} from 'react-icons-kit/icomoon/cogs'
import {leaf} from 'react-icons-kit/icomoon/leaf'
import {home} from 'react-icons-kit/icomoon/home'
import {podcast} from 'react-icons-kit/icomoon/podcast'
import {airplane} from 'react-icons-kit/icomoon/airplane'
import {heartBroken} from 'react-icons-kit/icomoon/heartBroken'
import {flag} from 'react-icons-kit/icomoon/flag'
import {u1F402} from 'react-icons-kit/noto_emoji_regular/u1F402'

const Separator = styled.div`
    padding-right: 12px;
`;
const Title = styled.div`
    padding: 12px;
`;
const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

function Dashboard() {
    return <div>
<Dheader />
        <div className="sidenav scontainer-fluid" style={{padding:0}}>
            <div className="row">
             <div className="col-md-2 sidebar" style={{width:220}}>
 
  
       <div style={{background: '#2c3e50', color: '#FFF', width: 220,height:1000,position:'fixed'}}> 
        <SideNav highlightColor='#f4511e' highlightBgColor='#00bcd4' defaultSelected='home'> 
        <Title> Categories </Title>      
            <Nav id="home">
            <NavIcon><Icon20 icon={home} /></NavIcon>
            <NavText> Home </NavText>
        </Nav>
        <Nav id="agri">
            <NavIcon><Icon20 icon={leaf} /></NavIcon><NavText> Agriculture</NavText>
        </Nav>
        <Nav id="tech">
            <NavIcon><Icon20 icon={cogs} /></NavIcon>
            <NavText> Technology </NavText>
        </Nav>

         <Nav id="telecom">
            <NavIcon><Icon20 icon={podcast} /></NavIcon>
            <NavText> Telecom </NavText>
        </Nav>
         <Nav id="transport">
            <NavIcon><Icon20 icon={airplane} /></NavIcon>
            <NavText> Transportation </NavText>
        </Nav>
        <Nav id="health">
            <NavIcon><Icon20 icon={heartBroken} /></NavIcon>
            <NavText> Health </NavText>
        </Nav>
        <Nav id="tourism">
            <NavIcon><Icon20 icon={flag} /></NavIcon>
            <NavText> Tourism </NavText>
        </Nav>
        <Nav id="farming">
            <NavIcon><Icon20 icon={u1F402} /></NavIcon>
            <NavText> Farming </NavText>
        </Nav>
        <Nav id="customers">
            <NavIcon><Icon20 icon={ic_people} /></NavIcon>
            <NavText> Customers </NavText>
            <Nav id="dashboard2">
                <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
                <NavText> Search </NavText>
            </Nav>
            <Nav id="sales2">
                <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
                <NavText> Promote </NavText>
            </Nav>
           
        </Nav>
        <Nav id="orders">
            <NavIcon><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
            <NavText> Orders </NavText>
        </Nav>
        </SideNav>
        </div>

   </div>
        <div className="col-md-10 content">

        <div className="row text-center" style={{margin:5}}>
        <div className="col-md-3">
<h3>Agriculture</h3>
</div>

        <div className="col-md-3">

<div className="btn-group">
  <button type="button" className="btn btn-lg btn-huge btn-primary">Provinces based</button>
  <button type="button" className="btn btn-lg btn-huge btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span className="caret"></span>
    <span className="sr-only">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Kigali</a></li>
    <li><a href="#">Western province</a></li>
    <li><a href="#">Southern province</a></li>
    <li><a href="#">Eastern province</a></li>
    <li><a href="#">Northern province</a></li>
    
  </ul>
</div>

    </div>

          <div className="col-md-3">

<div className="btn-group">
  <button type="button" className="btn btn-lg btn-huge btn-success">Districts based</button>
  <button type="button" className="btn btn-lg btn-huge btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span className="caret"></span>
    <span className="sr-only">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Kicukiro</a></li>
    <li><a href="#">Gasabo</a></li>
    <li><a href="#">Nyarugenge</a></li>
    <li role="separator" className="divider"></li>
    <li><a href="#">more...</a></li>
  </ul>
</div>

    </div>


      <div className="col-md-3">

<div className="btn-group">
  <button type="button" className="btn btn-lg btn-huge btn-info">Years based</button>
  <button type="button" className="btn btn-lg btn-huge btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span className="caret"></span>
    <span className="sr-only">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">2018</a></li>
    <li><a href="#">2017</a></li>
    <li><a href="#">2016</a></li>
    <li role="separator" className="divider"></li>
    <li><a href="#">more...</a></li>
  </ul>
</div>

    </div>

      


 </div>
        
            <div className="row" style={{margin:10}}>
                <div className="col-md-6">     
                    <div className="panel panel-default">
                    <div className="panel-heading">
                        Summary
                    </div>
                    <div className="panel-body">
                        <Summary/>
                    </div>
                    </div> 
                </div>
                <div className="col-md-6">
                    
                    <div className="panel panel-default">
                    <div className="panel-heading">
                        Trends
                    </div>
                    <div className="panel-body">
                        <Trends/>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row"style={{margin:10}}>
            <div className="col-md-6">     
                <div className="panel panel-default">
                <div className="panel-heading">
                    Penetration
                </div>
                <div className="panel-body">
                <Penetration/>
                </div>
                </div> 
            </div>

            <div className="col-md-6">    
                <div className="panel panel-default">
                <div className="panel-heading">
                    Insight
                </div>
                <div className="panel-body">
                    <Insight/>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>     
        </div>
    </div>

;
        
}

export default Dashboard;
