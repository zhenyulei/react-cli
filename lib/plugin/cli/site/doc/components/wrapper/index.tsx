//@ts-nocheck
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Search from '../search/index'
import LeftNav from '../leftBar'
import '../../asset/css/common.scss';
import '../../asset/css/style-blue.scss';
import './index.scss'
const Wrapper:React.FC = function (props) {
    /*自定义函数区域
    */
   function clearSearch(){
       console.log('hello');
   }
   function openwindow(){
       console.log('hellow');
   }
   return (
    <div className="md-swaper" onClick={()=>{clearSearch()}}> 
        <div className="hder">
				<div className="logo">
					<Link to="/index" className="logo-link">
						<img src={require('../../asset/css/i/nut.png')}/>
					</Link>
					<span className="version">v1.1</span>
				</div>
				<div className="h-nav">
					<Search />
					<ul className="list">
						<li className="joinus">
							<Link to="/joinus"></Link>
							<img src={require("../../asset/css/i/jion_us.gif")}/>
						</li>
						<li className="cur">
							<Link to="/intro">指南</Link>
						</li>
						<li>
							<a className="qrcode demoLink" href="/demo.html#/" target="_blank">
								示例
								<a className="qrcode-box">
									<span>请使用手机扫码体验</span>
									<img src="https://img14.360buyimg.com/uba/jfs/t1/32118/11/559/2782/5c3d81ecEbda0c0f1/5f2b637d11817204.png"/>
								</a>
							</a>
						</li>
						<li>
							<select onChange={()=>{openwindow()}}>
								<option value="2">2.X</option>
								<option value="1">1.X</option>
							</select>
						</li>
						<li className="github">
							<a target="_back" href="https://github.com/jdf2e/nutui"></a>
						</li>
					</ul>
				</div>
			</div>
            <div className="demo-wrapper">
            <LeftNav/>
            {props.children}{/*这里是每一页的main区域*/}
            </div>
            <div className="foot">
				Copyright © 2018~2020
				<a href="//jdc.jd.com" target="_blank">JDC</a>-
				<a target="_blank" href="#!">前端开发部</a>
			</div>
	</div>
    )
}
export default  Wrapper;