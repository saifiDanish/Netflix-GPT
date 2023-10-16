import { Provider } from 'react-redux';
import Body from './Components/Body';
import './index.css';
import appstore from './utils/Appstore';

function App() {
  return (
    <div>
      <Provider store={appstore}>
        <Body/>
      </Provider>
    </div>
  );
}

export default App; 
