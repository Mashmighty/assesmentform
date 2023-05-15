import './App.css';
import Header from './components/header'
import SideMenu from './components/sideMenu';
import Tabs from './components/tabs';
import Select from './components/select';
import myForm from './components/formQuestionnaire';
function App() {
  const tabs= [{name:"Home"},{name:"Editions"},{name:"Individual agent report"},{name:"Individual shop report"},{name:"All shops report"}]
  const options= [{name:"January",value:"January"},{name:"February",value:"February"},{name:"March",value:"March"},{name:"April",value:"April"},{name:"May",value:"May"},
  {name:"June",value:"June"},{name:"July",value:"July"},{name:"August",value:"August"},{name:"September",value:"September"},{name:"October",value:"October"},{name:"November",value:"November"},
  {name:"December",value:"December"}]
  const years= [{name:"2023",value:"2023"},{name:"2024",value:"2024"}]
  const shops= [{name:"Bomas",value:"Bomas"},{name:"Bungoma",value:"Bungoma"},{name:"Buruburu",value:"Buruburu"},{name:"Busia",value:"Busia"},{name:"Diani",value:"Diani"},{name:"Digo",value:"Digo"},
  {name:"Eastleigh",value:"Eastleigh"},{name:"Eldoret",value:"Eldoret"},{name:"Eldoret2",value:"Eldoret2"},{name:"Embu",value:"Embu"},{name:"Garden city",value:"Garden city"},{name:"Garissa",value:"Garissa"},
  {name:"I&M",value:"I&M"},{name:"JKIA",value:"JKIA"},{name:"Junction",value:"Junction"},{name:"Kakamega",value:"Kakamega"},{name:"Kericho",value:"Kericho"},{name:"Kimathi",value:"Kimathi"},
  {name:"Kisii",value:"Kisii"},{name:"Kisumu - Jubilee",value:"Kisumu - Jubilee"},{name:"Kisumu - tuffoam",value:"Kisumu - tuffoam"},{name:"Kitale",value:"Kitale"},{name:"Kitengela",value:"Kitengela"},{name:"Kitui",value:"Kitui"},
  {name:"Machakos",value:"Machakos"},{name:"Malindi",value:"Malindi"},{name:"Maua",value:"Maua"},{name:"Meru",value:"Meru"},{name:"MIA",value:"MIA"},{name:"Migori",value:"Migori"},
  {name:"Moi avenue",value:"Moi avenue"},{name:"Naivasha",value:"Naivasha"},{name:"Nakumatt Mega",value:"Nakumatt Mega"},{name:"Nakuru",value:"Nakuru"},{name:"Nakuru Westside",value:"Nakuru Westside"},{name:"Nanyuki",value:"Nanyuki"},
  {name:"Narok",value:"Narok"},{name:"Nyahururu",value:"Nyahururu"},{name:"Nyali",value:"Nyali"},{name:"Nyeri",value:"Nyeri"},{name:"Rex",value:"Rex"},{name:"Ronald Ngala",value:"Ronald Ngala"},
  {name:"Sarit",value:"Sarit"},{name:"The hub",value:"The hub"},{name:"Thika",value:"Thika"},{name:"Trm",value:"Trm"},{name:"Village market",value:"Village market"},{name:"Westgate",value:"Westgate"}]
  //agents will need to get from an agent database. To be configured
  const agents= [{name:"Simon Kakai",value:"Simon Kakai"},{name:"Oscar Keya",value:"Oscar Keya"}]
  return (
    <div className="App">
     <Header/>
     <div className='container'>
     <SideMenu/>
          <div className='main-content'>
            <Tabs tabs={tabs}/>
            <div className='calendar'> <Select options={options} label="Month" placeHolder="Select Month"/>
            <Select options={years} label="Year" placeHolder="Select Year"/><Select options={shops} label="Retail centre" placeHolder="Select centre"/>
            <Select options={agents} label="Agent name" placeHolder="Select name"/></div>
           
          </div>
     </div>
    </div>
  );
}

export default App;
