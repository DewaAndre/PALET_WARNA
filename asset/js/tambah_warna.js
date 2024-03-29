document.getElementById('colorPaletteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const colorsInput = document.getElementById('colors').value;

    const data = {
        title: title,
        colors: colorsInput
    };

    fetch('http://128.199.167.159/v1/idc/color-pallete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Color palette added successfully!');

        document.getElementById('colorPaletteForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while adding the color palette.');
    });
});
