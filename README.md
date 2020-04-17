# react-ui
react版本组件库
```html

<div className="doc__layout">
    <PageHeader version={version} i18n={i18n} sideNavData={sideNavData} />
    <div className="main-content">
    <div className="page-container">
        <SideNav data={sideNavData} base={oreo} ref={sideNavRef} />
        <div className="page-content">
        <div className="react-doc-page-content">

            <Switch>
                <Route key={`route-${path}`} component={source} path={path} />
                <Route key={`route-${path}`} component={source} path={path} />
            </Switch>

        </div>
        <FooterNav data={footerData} />
        </div>
    </div>
    </div>
    <PageFooter ref={saveFooter} i18n={i18n} />
</div>

```
