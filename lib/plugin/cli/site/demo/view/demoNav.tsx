//@ts-nocheck
import React, { FC,useState,Fragment,useEffect} from 'react'
import { withRouter,Link} from 'react-router-dom'
import classNames from 'classnames'
import './index.scss';
const DemoNav = (props)=>{
    const [showFlag,setShowFlag] = useState(true);
    const [currTitle,setCurrTitle] = useState('');

    //
    function goBack(){
        
    }
    //useEffect区域
    useEffect(()=>{
        let currPath = props.location.pathname;
        setCurrTitle(currPath)
        if(currPath === '/'){
            setShowFlag(false);
        }else{
            setShowFlag(true);
        }
    })
    //最后渲染页面区域
    return(
        showFlag?
         <div className="demo-nav">
            <Link className="goback" to='/'>
                <b className="go-btn"></b>
            </Link>
            <div className="title"> {currTitle.slice(1)} </div>
            <a className="home" href="###"></a>
        </div>
        :
        null
    )
}
export default withRouter(DemoNav);
