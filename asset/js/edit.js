document.getElementById('editColorPaletteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const paletteId = document.getElementById('paletteId').value;
    const title = document.getElementById('title').value;
    const colors = document.getElementById('colors').value;

    const data = {
        title: title,
        colors: colors
    };

    fetch(`http://128.199.167.159/v1/idc/color-pallete/${paletteId}/edit`, {
        method: 'PUT',
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
        alert('Color palette updated successfully!');

        document.getElementById('editColorPaletteForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while updating the color palette.');
    });
});
