document.getElementById('colorPaletteForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent default form submission

    const title = document.getElementById('title').value;
    const colorsInput = document.getElementById('colors').value;
    const colorsArray = colorsInput.split(',').map(color => color.trim());

    const data = {
        title: title,
        colors: colorsArray
    };

    try {
        const response = await fetch('http://128.199.167.159/v1/idc/color-palletes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Success:', responseData);
        document.getElementById('responseMessage').textContent = 'Color palette added successfully!';
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').textContent = `Failed to add color palette: ${error.message}`;
    }
});
