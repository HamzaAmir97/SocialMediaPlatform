
import './App.css'
import { Routes,Route } from "react-router-dom";
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import { AllUsers, CreatePost, EditPost, Home, PostDetails, Profile, Saved, UpdateProfile } from './root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './root/RootLayout';
import { Toaster } from "@/components/ui/toaster"
import Explore from './root/pages/Explore';

function App() {

  return (
    <main className='flex h-screen w-screen'>
 

 {/* //public routes */}
    <Routes>
    <Route element ={<AuthLayout/>}>

    <Route path='/sign-in' element={<SigninForm />} />
    <Route path='/sign-up' element={<SignupForm />} />
    
  
    </Route>
    
   


   
   
{/* private routes */}
    <Route element={<RootLayout/>}>
    <Route index element={<Home/>} />
    <Route path='/explore' element={<Explore/>} />
    <Route path='/saved' element={<Saved/>} />
    <Route path='/all-users' element={<AllUsers/>} />
    <Route path='/create-post' element={<CreatePost/>} />
    <Route path='/update-post/:postId' element={<EditPost/>} />
    <Route path='/posts/:postId' element={<PostDetails/>} />
    <Route path='/profile/:id/*' element={<Profile/>} />
    <Route path='/update-profile/:id' element={<UpdateProfile/>} />
    </Route>


    </Routes>

    <Toaster />

    </main>
  )
}

export default App
