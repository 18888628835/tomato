import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Spin } from "antd";

const Index = React.lazy(() => import("./pages/Index"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
function App() {
  return (
    <Router>
      <Switch>
        <Suspense
          fallback={
            <div className="global-spin">
              <Spin tip="正在加载中，请稍候..."></Spin>
            </div>
          }
        >
          <Route exact path="/" component={Login} />
          <Route exact path="/index" component={Index} />
          <Route exact path="/signUp" component={SignUp} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
