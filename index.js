function fetchData() {
    fetch('https://nodeserver-qypo.onrender.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return "";
      })
      .then(data => {
        console.log('Data fetched successfully:', data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Fetch data initially
  //fetchData();
  
  // Fetch data every 10 seconds
  setInterval(fetchData, 10000); // 10 seconds = 10000 milliseconds
  