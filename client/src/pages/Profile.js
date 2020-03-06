import React from "react";
import { UserConsumer } from '../context';
import { Button } from "reactstrap";
import { Link} from "react-router-dom"
import CityForm from "../components/Form/index";


const Profile = () => {
    return (
        <UserConsumer>
        {({ data, logout }) => (
        <div>
            {(data.loggedIn)? (
                <div>
                    <CityForm/>
                    <Button onClick={logout}>Logout</Button>
                </div>
            ): (
                <div>
                    <h1> Log in to view this page </h1>
                    <Link to="/login"><Button> Login </Button></Link>
                    
                </div>
            )}
        </div>
      )}
      </UserConsumer>
    )
    
}

export default Profile;