import React, { useState } from 'react';
import { ref, get } from 'firebase/database';
import database from './FireBase';
import ExpenseItemTable from './ExpenseItemTable';

const NewComponent = () => {
  const [dataArray, setDataArray] = useState([]);

  const fetchDataFromFirebase = async () => {
    try {
      const dbRef = ref(database, 'objects');
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        // שליפה של כל ה- "fav" מכל מפתח
        const formattedData = Object.values(data).map((item) => item.fav);
        setDataArray(formattedData);
        console.log('Data fetched successfully:', formattedData);
      } else {
        console.log('No data available.');
      }
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div>
      <h1>All Saved Countries from Firebase</h1>
      <button onClick={fetchDataFromFirebase}>Fetch Countries</button>
      <div className="expense-grid">
        {dataArray.map((rowData, index) => (
          <ExpenseItemTable
            key={index}
            name={rowData.name}
            flag={rowData.flag}
          />
        ))}
      </div>
    </div>
  );
};

export default NewComponent;
