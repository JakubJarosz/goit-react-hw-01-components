import React from 'react';
import './App.css';
import Description from "./componet-description/description";
import Stats from './component-stats/stats';
import Statistic from './component-statistic/statistic';
import Friends from './component-friends/friends';
import Transaction from './components-transaction/transaction';
import user from "./user.json";
import data from "./data.json"
import friends from "./friends.json"
import transaction from "./transactions.json"

const App = () => (
  <div className="App">
    <div className="profile">
      <Description
        imgUrl={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
      />
      <Stats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
    <Statistic data={data} />
    <Friends
      friends={friends}
    />
    <div className="transaction">
      <Transaction transaction={transaction} />
    </div>
  </div>
);

export default App;



