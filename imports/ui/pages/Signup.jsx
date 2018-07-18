import React from 'react';
import classNames from 'classnames';

function signUp() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} >
      <h1>Fikia</h1>

      <p>
        Make the best decisions for your business through the power of data
      </p>

      <div>
        {/* this is where our partners go */}
      </div>

      <h4>What we do</h4>

      <ul>
        {/* <i>icon */}
        <li>Are you an</li>
          <ul>
            <li>entrepreneur?</li>
            <li>researcher?</li>
            <li> investor?</li>
          </ul>
        {/* <i>icon */}
        <li>Looking to create an impactfull product/service that serves your community?</li>
        {/* <i>icon */}
        <li>User Fikia to:</li>
          <ul>
            <li>gain access to reliable,relevant data</li>
            <li>forecast revenue</li>
            <li>get deeper insight into consumer behaviour</li>
          </ul>
        {/* <i>icon */}
        <li>Make informed decision on:</li>
        <ul>
            <li>how to grow your business</li>
            <li>where to invest</li>
            <li>how/when to expand to other markets</li>
          </ul>
      </ul>
    </div>
  );
}

export default signUp;
