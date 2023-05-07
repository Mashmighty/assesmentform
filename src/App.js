import './App.css';
import Header from './components/header'
import SideMenu from './components/sideMenu';
import Tabs from './components/tabs';
import Select from './components/select';
function App() {
  const tabs= [{name:"Home"},{name:"Editions"},{name:"Individual agent report"},{name:"Individual shop report"},{name:"All shops report"}]
  const options= [{name:"January",value:"January"},{name:"February",value:"February"},{name:"March",value:"March"},{name:"April",value:"April"},{name:"May",value:"May"}]
  const years= [{name:"2023",value:"2023"}]
  return (
    <div className="App">
     <Header/>
     <div className='container'>
     <SideMenu/>
          <div className='main-content'>
            <Tabs tabs={tabs}/>
            <div className='calendar'> <Select options={options} label="Month" placeHolder="Select Month"/>
            <Select options={years} label="Year" placeHolder="Select Year"/></div>
           
          </div>
     </div>
    </div>
  );
}

export default App;
