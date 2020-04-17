import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './asset/css/common.scss';
import './asset/css/style-blue.scss';
const Intro:React.FC = () => {
   return (
    <div>  
        <Link to="/intro">我是intro页面</Link>
        <div></div>
        <Link to="/box">点击是box</Link>
	</div>
    )
}
export default  Intro;