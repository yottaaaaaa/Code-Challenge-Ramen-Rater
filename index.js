document.addEventListener('DOMContentLoaded', () => {
    main();
  });
  
  function main() {
    displayRamens();
    addSubmitListener();
  }
  
  function displayRamens() {
    fetch('http://localhost:3000/ramens')
      .then(response => response.json())
      .then(data => {
        const ramenMenu = document.getElementById('ramen-menu');
        ramenMenu.innerHTML = '';
        data.forEach(ramen => {
          const img = document.createElement('img');
          img.src = ramen.image;
          img.alt = ramen.name;
          img.addEventListener('click', () => handleClick(ramen));
          ramenMenu.appendChild(img);
          year + ')'; results. appendChild(item); 
        });
      });
  }
  
  function handleClick(ramen) {
    const ramenDetail = document.getElementById('ramen-detail');
    ramenDetail.innerHTML = `<h2>${ramen.name}</h2>
                              <p>Rating: ${ramen.rating}</p>
                              <p>Comment: ${ramen.comment}</p>`;
  }
  
  function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', event => {
      event.preventDefault();
      const image = document.getElementById('new-ramen-image').value;
      const newRamen = { image };
      createRamen(newRamen);
    });
  }
  
  function createRamen(newRamen) {
    fetch('http://localhost:3000/ramens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRamen)
    })
    .then(response => response.json())
    .then(() => displayRamens());
  }
  