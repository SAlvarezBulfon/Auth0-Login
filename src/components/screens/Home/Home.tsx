
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../../ui/Login/Login'
import LogoutButton from '../../ui/Logout/Logout'
import Profile from '../Profile/Profile';


const Home = () => {
    const {isAuthenticated} = useAuth0();
    return (
        <>
        {isAuthenticated ? 
        <div>
            <Profile/>
            <LogoutButton />
        </div>: 
                    <LoginButton />
        }

        </>
    )
}

export default Home