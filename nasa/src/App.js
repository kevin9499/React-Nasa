import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound'
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import Home from './components/Home/Home'
import PictureMars from './components/PictureMars/PictureMars';
import PictureAstronomie from './components/PictureAstronomie/PictureAstronomie';
import Collection from './components/Collection/Collection';
import FooterBar from './components/FooterBar/FooterBar';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {

  return (
    <Layout>
      <Router>
        <Header>
          <Navbar />
        </Header>
        <Content style={{ padding: '14px 50px' }}>
          <div className="site-layout-content">
            <Switch>
              <Route path='/picture/mars' component={PictureMars} />
              <Route path='/picture/astronomie' component={PictureAstronomie} />
              <Route path='/Collection' component={Collection} />
              <Route exact path='/' component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Content>
      </Router>
      <Footer style={{ textAlign: 'center' }} >
        <FooterBar />
      </Footer>
    </Layout >
  );
}

export default App;
