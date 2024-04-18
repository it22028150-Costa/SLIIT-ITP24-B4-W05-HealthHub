import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import DashLayout from './components/Dashboard/DashLayout'
import Welcome from './features/auth/Welcome'
import PaymentLayout from './components/Payment/PaymentLayout';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}> 
        <Route index element={<Public/>}/>
        <Route path='login' element={<Login/>}/>

        <Route path='dash' element={<DashLayout/>}> 
            <Route index element={<Welcome/>}/>
            
        </Route>

        <Route path='payment' element={<PaymentLayout/>}> 
            
            
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
