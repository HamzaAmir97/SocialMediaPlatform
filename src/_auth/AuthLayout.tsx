import  {Outlet,  Navigate} from 'react-router-dom';


function AuthLayout() {
  // TODO: Replace with actual authentication check
  const isAuthenticated = false;

  return (
    <>
    { isAuthenticated?(
  <Navigate to ='/'/>
    ):(

<>
  <section className='flex flex-1 justify-center items-center flex-col
  py-10'>
  <Outlet />

  </section>
  <img
            src="/assets/images/side-img.png"
            alt="Authentication page visual"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
          
</>

    )



    }
    
    
    </>
  )
}

export default AuthLayout