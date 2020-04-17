//@ts-nocheck
import React, { FC } from 'react'
import { HashRouter, Route , Switch,Link} from 'react-router-dom'
import frontCover from './index.tsx';
import './asset/css/common.scss';
import './asset/css/style-blue.scss';
import Name from './pages/name.tsx';
import Box from './pages/box.tsx';
import Wrapper from './components/wrapper';

let route = [{
  path:'/intro',
  source:Name
},{
  path:'/box',
  source:Box
}];

//向路由中增加配置文件中的路由
function addRoute(page) {
  const { name, source } = page;
  route.push({
    path: `/${name}`,
    source,
  });
}

function renderRouter(data) {
  const { source,path } = data;
  return <Route key={`route-${path}`} exact component={source} path={path}/>;
}

const RouteMap = ()=>{
  return (
    <HashRouter>
      <Switch>
      <Route  exact component={frontCover} path="/"/>
      <Wrapper>
        <Switch>{route.map(renderRouter)}</Switch>
      </Wrapper>
      </Switch>
    </HashRouter>
    )
}
export default RouteMap;