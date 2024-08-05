
import './App.css'
import { Routes,Route } from "react-router-dom";
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './root/RootLayout';

function App() {

  return (
    <main className='flex h-screen w-screen'>

    <Routes>
    <Route element ={<AuthLayout/>}>

    <Route path='/sign-in' element={<SigninForm />} />
    <Route path='/sign-up' element={<SignupForm />} />
    
  
   </Route>


   {/* //public routes */}
   
{/* private routes */}
    <Route element={<RootLayout/>}>
    <Route index element={<Home/>} />
    </Route>

    </Routes>
    </main>
  )
}

export default App
