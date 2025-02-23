import { useState, useEffect } from 'react';
import ProfileComponent from '../components/ProfileNav';
import ManageProperty from '../components/TrendingStays';

export const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found');
        }

        const [profileResponse, propertiesResponse] = await Promise.all([
          fetch('http://localhost:5000/users/profile', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }),
          fetch('http://localhost:5000/properties/my-properties', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          })
        ]);

        if (!profileResponse.ok || !propertiesResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const [profileData, propertiesData] = await Promise.all([
          profileResponse.json(),
          propertiesResponse.json()
        ]);

        setUserData(profileData);
        setProperties(propertiesData);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <ProfileComponent userData={userData} />
      <ManageProperty properties={properties} />
    </>
  );
};
