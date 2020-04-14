//@ts-nocheck
import React, { FC,useState,Fragment,useEffect} from 'react'
import { Link} from 'react-router-dom'
import classNames from 'classnames'
import config from '@/config.tsx';
import './index.scss';
const MainNav : FC = ()=>{
    //class 样式名区域
    // const demoListBox = classNames('demo-list-box',{
    //    'unfold':foldStatus[item]
    // })
    //data 区域
    const [foldStatus,setFoldStatus] = useState([]);
    const [oriSorts,setOriSorts] = useState(config.sorts);
    const [packageLists,setPackageLists] = useState(config.packages);
    const [versions,setVersions] = useState('1.2'); //无法获取ts
    const [sort,setSort] = useState([1, 2, 0, 3, 4, 5]);
    //useEffect区域
    useEffect(()=>{
        let status = [];
        oriSorts.forEach(()=>{
            status.push(false)
        })
        setFoldStatus(status)
    },[])
    // useEffect(()=>{
    //     const seVal = sessionStorage.getItem('foldStatus');
	// 	if (seVal && seVal !== 'false') {
    //         setFoldStatus(JSON.parse(seVal))
	// 	}
    // },[])
    //触发函数区域
    const toggleFold = (idx)=>{
        let newStatus =foldStatus.map((item,index)=>{
            if(index === idx){
                item = !item;
            }
            return item;
        })
        setFoldStatus(newStatus);
        sessionStorage.setItem('foldStatus', JSON.stringify(foldStatus));
    }

    //最后渲染页面区域
    return (
        <div className="demo-list-wrapper">
        <a href="https://github.com/jdf2e/nutui/" target="_blank" className="github-btn">Github</a>
        <h1 className="logo"></h1>
		<div className="version">NutUI 3.0</div>
        <p>一套京东风格的移动端React组件库</p>
        {
            sort.map((item)=>{
                return (
                    <div className={classNames('demo-list-box',{'unfold':foldStatus[item]})} key={item}>
                    <h4 onClick={()=>{toggleFold(item)}}>
                    {oriSorts[item]}
                    <i></i>
                    </h4>
                    <ul>
                        {
                            packageLists.map((cpt)=>{
                                return (
                                    cpt.sort == item ?
                                    <li key={cpt.name}>
                                        <Link to="/button">
                                        {cpt.name }
                                        <span>{ cpt.chnName }</span>
                                        </Link>
                                    </li>
                                    :null
                                )
                            })
                        }
                    </ul>
                </div>
                )
            })
        }
        <div id="demo-footer">京东用户体验设计部（JDC） · 前端开发部 · v{versions}</div>
        </div>
    )
}
export default MainNav;