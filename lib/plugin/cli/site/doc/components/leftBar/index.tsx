//@ts-nocheck
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './index.scss';
import classNames from 'classnames'
const LeftNav:React.FC = () => {
    const [curName,setCurName] = useState('');
    const [sortedPackages,setSortedPackages] = useState([{
        name:'cell'
    }]);
    const [cur,setCur] = useState([]);
    //自定义方法
    function selectNav(name:any){
        console.log(name);
    }
    function listCheck(cpt:any){
        console.log(cpt);
    }
    return (
        <div className="main-menu lt-nv">
		<div className="left-nav-fixed">
			<ol className="nav-l-1">
				<dt>指南</dt>
				<dd className={classNames(curName==='intr'?'l-1 curs':'l-1')}>
					<a href="#/intro">介绍</a>
				</dd>
				<dd className={classNames(curName==='fastStart'?'l-1 curs':'l-1')}>
					<a href="#/start">快速上手</a>
				</dd>
				<dd className={classNames(curName==='theme'?'l-1 curs':'l-1')}>
					<a href="#/theme">主题定制</a>
				</dd>
				<dd className={classNames(curName==='international'?'l-1 curs':'l-1')}>
					<a href="#/international">国际化</a>
				</dd>
				<dd className={classNames(curName==='update'?'l-1 curs':'l-1')}>
					<a href="https://github.com/jdf2e/nutui/releases" target="_blank">更新日志</a>
				</dd>
			</ol>
			<ol className="cplist">
				<dt>组件</dt>
                {
                   sortedPackages.length>0 && sortedPackages.map((nameObj, index)=>{
                    return (
                        <dd
                            onClick={()=>{selectNav(nameObj.name)}}
                            className={classNames("l-1", cur.indexOf(nameObj.name) > -1 && 'cur')}
                            key={index}
                        >
                        <div className="l-c-i">
                                <span>{ nameObj.name }</span>
                                <i className="pt"></i>
                        </div>
                        {
                            cur.indexOf(nameObj.name) > -1 &&
                            <ul className="l-2">
                                {
                                    nameObj.ary.map((cpt)=>{
                                        if(cpt.showDemo){
                                            return (
                                                <li onClick={()=>{listCheck(cpt)}} className={classNames(curName == cpt.name ? 'curs' : '')} key="cpt.name">
                                                <Link to="{ name: cpt.name }">
                                                        { cpt.name }
                                                        <span>{ cpt.chnName }</span>
                                                </Link>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        }  
                        </dd>
                    )
                    })
                }
			</ol>
		</div>
	</div>
    )
}
export default LeftNav;
/*

                   sortedPackages.map((nameObj, index)=>{
                        return (
                            <dd
                                onClick={()=>{selectNav(nameObj.name)}}
                                className={classNames("l-1", cur.indexOf(nameObj.name) > -1 && 'cur')}
                                key={index}
                            >
                                <div className="l-c-i">
                                    <span>{ nameObj.name }</span>
                                    <i className="pt"></i>
                                </div>
                                {
                                    cur.indexOf(nameObj.name) > -1 &&
                                    <ul className="l-2">
                                        {
                                            nameObj.ary.map((cpt)=>{
                                                if(cpt.showDemo){
                                                    return (
                                                        <li onClick={()=>{listCheck(cpt)}} className={classNames(curName == cpt.name ? 'curs' : '')} key="cpt.name">
                                                        <Link to="{ name: cpt.name }">
                                                                { cpt.name }
                                                                <span>{ cpt.chnName }</span>
                                                        </Link>
                                                        </li>
                                                    )
                                                }
                                            })
                                        }
                                    </ul>
                                }
                            </dd>
                        )
                    })
*/