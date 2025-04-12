import { useState, useEffect } from 'react';
import ExpensesTable from './ExpensesTable';
import { useNavigate } from 'react-router-dom';

function MainScreen() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const formatCountries = data.map((country) => ({
          name: country.name.common,
          flag: country.flags.svg,
        }));
        setCountries(formatCountries);
        setLoading(false);
      } catch (error) {
        alert('error fetching data', error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <div>
      <button
        className="btn btn_outline_success"
        onClick={() => navigate('/new')}
      >
        Go to New Page
      </button>

      <ExpensesTable items={countries} />
    </div>
  );
}
export default MainScreen;
