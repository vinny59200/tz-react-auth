import React, { useState, useEffect } from 'react';
import EasyUserList from './component/EasyUserList';
import { EasyUser } from './model/EasyUser';
import './App.css';

const App: React.FC = () => {
  const [easyUserList, setEasyUserList] = useState<EasyUser[]>([]);

  useEffect(() => {
    // Fetch the list of users from your API or service
    // and update the state
    // setEasyUserList(fetchedUsers);
  }, []);

  return (
    <div>
      <EasyUserList easyUserList={easyUserList} />
    </div>
  );
};

export default App;