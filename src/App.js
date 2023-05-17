import {useState} from 'react'
import './App.css';
import Header from './components/header'
import SideMenu from './components/sideMenu';
import Tabs from './components/tabs';
import Select from './components/select';
import {options, years, agents} from "./constants";
import { shops } from './data';
function App() {
  const [agents, setAgents]= useState([])
  const [selectedShop, setSelectedShop]= useState("")
  const [selectedRole, setSelectedRole]= useState("")
  const [selectedAgent, setSelectedAgent]= useState("")
  const tabs= [{name:"Home"},{name:"Editions"},{name:"Individual agent report"},{name:"Individual shop report"},{name:"All shops report"}]
  const getShops=()=>{
    return shops.map((shop)=>{
      const tempShop = {
        name: shop.shop_name,
        value: shop.shop_name
      };
  
      return tempShop;
    });
  };
  const getAgents=(shop)=>{
    const [tempShop]= shops.filter((el)=>el.shop_name===shop);
console.log (shop)
     return setAgents (tempShop.agents.map((el2) => {
       const tempAgent = {
         name: el2.name,
         value: el2.name,
         role: el2.role
       };
   return tempAgent;
      
     }));
   };
   const shopHandler=(shop)=>{
    setSelectedShop(shop);
    getAgents(shop);
  
  }
  const agentHandler=(agent)=>{
    setSelectedAgent(agent)
  const tempAgent= agents.find((el)=>el.name===agent);
 setSelectedRole(tempAgent.role)
  
  };
  return (
    <div className="App">
     <Header/>
     <div className='container'>
     <SideMenu/>
          <div className='main-content'>
            <Tabs tabs={tabs}/>
      
            <div className='calendar'> <Select options={options} label="Month" placeHolder="Select Month"/>
            <Select options={years} label="Year" placeHolder="Select Year"/><Select options={getShops()} onChange={(e)=>shopHandler(e.target.value)}
            value={selectedShop} label="Retail centre" placeHolder="Select centre"/>
            <Select options={agents} onChange={(e)=>agentHandler(e.target.value)} value={selectedAgent} label="Agent name" placeHolder="Select name"/></div>
            {selectedRole ==="Manager" && "i am a manager"}
     {selectedRole ==="Team leader" && "i am a Team leader"}
     {selectedRole ==="Stock controller" && "i am a Stock controller"}
     {selectedRole ==="CEE" && "i am a CEE"}
          </div>
          
     </div>
     
    </div>
  );
}

export default App;
