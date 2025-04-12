import { useState } from 'react';
import { ref, set } from 'firebase/database';
import database from './FireBase'; // ודאי שזה הנתיב הנכון לקובץ שלך

function ExpenseForm({ onAddRow }) {
  const [name, setName] = useState('');
  const [flagFile, setFlagFile] = useState(null);

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (!flagFile) {
      alert('Please upload a flag image.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const expenseData = {
        name: name,
        flag: reader.result,
      };

      // שולח ל-Firebase
      const uniqueKey = Date.now();
      set(ref(database, 'objects/' + uniqueKey + '/fav'), expenseData)
        .then(() => {
          console.log('Data sent successfully!');
        })
        .catch((error) => {
          console.error('Error sending data:', error);
        });

      // שולח למסך
      onAddRow(expenseData);

      // איפוס השדות
      setName('');
      setFlagFile(null);
    };

    reader.readAsDataURL(flagFile);
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div>
        <label>Country Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Flag Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFlagFile(e.target.files[0])}
        />
      </div>
      {flagFile && (
        <div>
          <p>Preview:</p>
          <img
            src={URL.createObjectURL(flagFile)}
            alt="Flag Preview"
            style={{ width: '100px', height: '60px', objectFit: 'cover' }}
          />
        </div>
      )}
      <button type="submit">Add Country</button>
    </form>
  );
}
export default ExpenseForm;
