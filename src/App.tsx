import React, { useState, useEffect } from 'react';
import EasyUserList from './component/EasyUserList';
import { EasyUser } from './model/EasyUser';

const App: React.FC = () => {
  const [easyUserList, setEasyUserList] = useState<EasyUser[]>([]);

  useEffect(() => {
    // Fetch the list of users from your API or service
    // and update the state
    // setEasyUserList(fetchedUsers);
  }, []);

  return (
    <div>
      <nav>
        <h1>Easy Spring Auth</h1>
      </nav>
      <EasyUserList easyUserList={easyUserList} />
    </div>
  );
};

export default App;