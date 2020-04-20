import React, { useState } from 'react';
import './index.scss';
import Search from './components/search'
import {Link} from 'react-router-dom'
const Main:React.FC = () => {
    /*
        自定义函数区域
    */
   function openwindow(){
    console.log('hello');
   }
   return (
        <div className="container">
        <div className="css-animation">
            <span className="blue-bg"></span>
            <span className="phone"></span>
            <span className="goods"></span>
            <span className="nut"></span>
            <span className="people"></span>
            <span className="flower">
                <span className="leaf_2"></span>
                <span className="leaf_1"></span>
                <span className="leaf_4"></span>
                <span className="leaf_3"></span>
                <span className="flowerpot"></span>
            </span>
            <span className="fengche"></span>
        </div>
		<div className="wrapper">
			<div className="header">
				<span className="logo">
					NUTUI
					<s></s>
				</span>
				<Search />
				<div className="menu">
					<ul>
						<li>
							<a href="#/intro">指南</a>
						</li>
						<li>
							<a href="#/ActionSheet">组件</a>
						</li>
						<li>
							<Link to="/demo.html#/index" className="qrcode top-qr" target="_blank">
								示例
								<span className="qcode-box">
									<span>请使用手机扫码体验</span>
									<img src="https://img14.360buyimg.com/uba/jfs/t1/32118/11/559/2782/5c3d81ecEbda0c0f1/5f2b637d11817204.png"/>
								</span>
							</Link>
						</li>
					</ul>
					<select onChange={()=>{openwindow()}}>
						<option value="2">2.X</option>
						<option value="1">1.X</option>
					</select>
					<a href="https://github.com/jdf2e/nutui" title="Github" target="_blank" className="github-icon">github</a>
				</div>
			</div>
			<div className="content">
				<div className="mouseDiv" id="mouseDiv"></div>
				<p className="title">NutUI</p>
				<p className="sub-title">一套京东风格的轻量级移动端React组件库</p>
				<Link to="/intro" className="blue-btn">开始使用</Link>
				<span className="qrcode btn">
					扫码体验
					<span className="qcode-box">
						<span>请使用手机扫码体验</span>
						<img src="https://img14.360buyimg.com/uba/jfs/t1/32118/11/559/2782/5c3d81ecEbda0c0f1/5f2b637d11817204.png"/>
					</span>
				</span>
			</div>
		</div>
	</div>
    )
}
export default  Main;