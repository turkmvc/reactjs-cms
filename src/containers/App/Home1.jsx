import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import FrontHeader from 'components/Header/FrontHeader';
import Footer from 'components/Footer/Footer';
import Sidebar from 'components/Sidebar/Sidebar';

import {style} from "variables/Variables.jsx";

 // import appRoutes from 'routes/app.jsx';
import data from '../../data';

class App extends Component {
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        var color = Math.floor((Math.random() * 4) + 1);
        var level;
    }
    componentDidUpdate(e){
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }
    render() {
        return (

                <div className="wrapper">
                    <div>
                        <FrontHeader {...this.props}/>
                            <Switch>
                                {
                                    data.menu.map((item,key) => {
                                        console.log(item);
                                        return (
                                            <Route path={item.path} 
                                            component={item.component} 
                                            key={key}/>
                                        );
                                    })
                                }
                            </Switch>
                        <Footer />
                    </div>
                </div>
        );
    }
}

export default App;
