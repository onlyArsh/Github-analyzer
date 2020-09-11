import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from "prop-types";
function Users({users,loading})  
{  
    if(loading)
    {
      return <Spinner/>
    }
    else
    {
        return (
            <div className={userStyle}>
                {users.map(user => (
                  <UserItem key= {user.id} user={user}/> 
                ))}
            </div>
        );
    }
}
UserItem.propTypes = {
    user : PropTypes.object.isRequired,
    loading : PropTypes.bool.isRequired
};

const userStyle = {
    display : "grid",
    gridTemplateColumns : "repeat(3,1fr)",
    gridGap : "1rem"
};

export default Users;
