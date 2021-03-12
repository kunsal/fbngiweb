import React from 'react';

import investmentService from '../services/investment-service';
import Helmet from 'react-helmet';
import moment from 'moment';
import { Link } from 'react-router-dom';
import userService from '../services/user-service';

class Home extends React.Component {
  state = {
    user: null,
    investments: [],
    investment: null
  }

  async componentDidMount() {
    const investments = await investmentService.mine();
    if (investments) this.setState({investments});
    this.setState({user: userService.getUser()});
  }

  render() {
    const { investments, investment } = this.state;

    return (
      <React.Fragment>
       <Helmet>
         <style type="text/css">{`
          body {
            background-color: rgb(222, 217, 251);
          }
          
          @media screen and (min-width: 700px) {
            .investment-list {
              height: 78vh;
              overflow: scroll;
            }
          }
        `}</style>
       </Helmet>
       <div className="row">
        <div className="col-md-4">
          <h1>Hello </h1>
        </div>
      </div>
    </React.Fragment>
    );
  }
}
 
export default Home;