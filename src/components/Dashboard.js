'use client';
import { useEffect, useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './FireBase';
import MainScreen from './MainScreen';

function Dashboard(props) {
  const [user, setUser] = useState('');
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    alert('user signed out!');
  };

  return (
    <div>
      {user ? (
        <div>
          <h2> welcome {user.email}</h2>
          <button onClick={handleSignOut}>Sign out </button>
          {<MainScreen />}
        </div>
      ) : (
        <div>
          <h2>Sign in or signup</h2>
          <SignIn />
          <SignUp />
        </div>
      )}
    </div>
  );
}
export default Dashboard;
