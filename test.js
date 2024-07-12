fetch('http://localhost:7070/usernew', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        raceNumber:1,
        statusComplemented: true,
        createdAt:"23-09-1982"
      
    })
  }).then(response => response.json()).then(data => console.log(data)).catch(error => console.error('Error:', erro))