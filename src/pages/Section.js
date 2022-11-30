// import React from 'react';
 
// class Section extends React.Component {
 
//   countries = ['USA', 'Australia', 'Britain', 'India', 'Sri lanka'];
 
//   showCountry(country) {
//     alert(country)
//   }
 
//   render() {
//     return (
//     <ul>
//       {this.countries.map((item) => (
//         <li>
//           <button onClick={() => this.showCountry(item)}>
//             Click Here
//           </button>
//         </li>
//       ))}
//     </ul>
//     );
//   }
// }
 
// export default Section;
 


import React, { useState, useEffect } from 'react';


const App = () => {
  const [users, setUsers] = useState([]);

  // make a utility function to get data
  // const getData = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // };

  // async format
  const getData = async () => {
    const res = await fetch('http://localhost:3000/user');
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div>
      {/* <h1>Text</h1> */}
      <button onClick={getData}>Button</button>
      <div>
        {users.map((user) => (
          <div key={user.email}>
            {user.email}
            
            </div>
        ))}
      </div>
      {/* <div>
        {users.map((user) => (
          <div key={user.email}>
            {user.email}</div>
        ))}
      </div> */}
    </div>
  );
};

export default App;
