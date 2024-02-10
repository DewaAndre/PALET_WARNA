document.getElementById('colorPaletteForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const title = document.getElementById('title').value;
    const colorsInput = document.getElementById('colors').value;
    const colors = colorsInput.split(',').map(color => color.trim()); 

    const data = {
        title: title,
        colors: colors
    };

    fetch('http://128.199.167.159/v1/idc/color-palletes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Color palette added successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while adding the color palette.');
    });
});
