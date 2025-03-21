import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function PublicRoute({ children }) {
    const { token } = useContext(UserContext);
    
    if (token) {
        return <Navigate to="/" />;
    }
    
    return children;
}

export default PublicRoute; 