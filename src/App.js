import './App.css';
import Header from './components/header'
import SideMenu from './components/sideMenu';
import Tabs from './components/tabs';
function App() {
  const tabs= [{name:"Home"},{name:"Editions"},{name:"Individual agent report"},{name:"Individual shop report"},{name:"All shops report"}]
 
  return (
    <div className="App">
     <Header/>
     <div className='container'>
     <SideMenu/>
          <div className='main-content'>
            <Tabs tabs={tabs}/>
        
          </div>
     </div>
    </div>
  );
}

export default App;
