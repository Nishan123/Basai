import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileComponent from '../components/ProfileNav';
import ManageProperty from '../components/TrendingStays';

export const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await fetch('http://localhost:5000/users/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/login');
            return;
          }
          throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        console.log('Profile data received:', data); // Add this line for debugging
        setUserData(data);

        // Fetch properties only if profile fetch is successful
        const propertiesResponse = await fetch('http://localhost:5000/properties/my-properties', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (propertiesResponse.ok) {
          const propertiesData = await propertiesResponse.json();
          setProperties(propertiesData);
        }

      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <div className="bg-red-100 p-4 rounded-lg">
          {error}. Please try{' '}
          <button 
            onClick={() => window.location.reload()} 
            className="text-blue-500 underline"
          >
            refreshing
          </button>.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-20">
      {userData?.user ? <ProfileComponent userData={userData} /> : null}
      {properties.length > 0 && <ManageProperty properties={properties} />}
    </div>
  );
};
