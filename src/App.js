import React, { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch, Redirect } from 'react-router-dom'

import configureStore, { history } from 'store/configureStore'
import RequireAuth from 'hoc/RequireAuth'
import useDocumentHeight from 'hooks/useDocumentHeight'

import './App.less';
import 'css/app.scss';

const PageNotFound = lazy(() => import('./components/notfound'));
const Login = lazy(() => import('./components/auth/LoginBackground'));
const Home = lazy(() => import('./components/home/index'));
const StoryCreate = lazy(() => import('./components/story/story-create'));
const StoryDetail = lazy(() => import('./components/story/story-detail'));
const Profile = lazy(() => import('./components/profile'));

const store = configureStore()

const App = () => {
    useDocumentHeight()

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/sign-in" component={Login} />
                        <Route path="/404" component={PageNotFound} />
                        <Route exact path="/" render={(props) => {
                            const Component = RequireAuth(props)(Home)
                            return <Component />
                        }} />
                        <Route exact path="/story/:id" render={(props) => {
                            const Component = RequireAuth(props)(StoryDetail)
                            return <Component />
                        }} />
                        <Route exact path="/story-create" render={(props) => {
                            const Component = RequireAuth(props)(StoryCreate)
                            return <Component />
                        }} />
                        <Route exact path="/profile" render={(props) => {
                            const Component = RequireAuth(props)(Profile)
                            return <Component />
                        }} />
                        
                        <Redirect to="/404" />
                    </Switch>
                </Suspense>
            </ConnectedRouter>
        </Provider>
    )
}
export default App;
