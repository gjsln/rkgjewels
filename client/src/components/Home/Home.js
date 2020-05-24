import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='landing'>
        <div className='dark-overlay landing-inner text-light'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='display-4 mb-4'>SELL DIAMONDS, JEWELRY
                LUXURY WATCHES AND BAGS ONLINE</h3>
                <p className='lead'>
                The faster and safer way to sell diamonds, jewelry,
                luxury watches and bags for the best possible prices.
                </p>
                <p className='lead'>
                No fees. Money in as little as 24 hours. Honest price ranges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;