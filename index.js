function fetchData() {
    fetch('https://leafy-winter-413902.ey.r.appspot.com/users')
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
  //setInterval(fetchData, 10000); // 10 seconds = 10000 milliseconds
fetchData();
fetch("https://api.render.com/deploy/srv-cn74c0mn7f5s73d9ispg?key=Bkn3UUceoOM");
  
