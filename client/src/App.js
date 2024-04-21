import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import DashLayout from './components/Dashboard/DashLayout'
import Welcome from './features/auth/Welcome'
import FinanceLayout from './components/Finance/FinanceLayout';
import PaymentHistory from './components/Finance/PaymentHistory';
import MakePayment from './components/Finance/MakePayment';
import ConfigureCards from './components/Finance/ConfigureCards'
import Health from './components/Doctor/addhealth'
import HealthDetails from './components/Doctor/healthdetails'
import UpdateHealth from './components/Doctor/Updatehealth'
import Header5 from './components/Doctor/header'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}> 
        <Route index element={<Public/>}/>
        
        <Route path='login' element={<Login/>}/>

        <Route path='dash' element={<DashLayout/>}> 
            <Route index element={<Welcome/>}/>
            
        </Route>

        <Route path='finance' element={<FinanceLayout/>}> 
            <Route index element={<PaymentHistory/>}/>
            <Route path='pay' element={<MakePayment/>}/>
            <Route path='card' element={<ConfigureCards/>}/>
            
        </Route>

        <Route path='/doctor' element={<Header5/>}>
          <Route index element={<Health/>}/>
          <Route path='healthdetails' element={<HealthDetails/>}/>
          <Route path='updatehealth/:id' element={<UpdateHealth/>}/>
        </Route>
        

      </Route>
    </Routes>
  );
}

export default App;
