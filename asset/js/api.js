document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        fetchColorPalette(card, index);
    });
});

function fetchColorPalette(card, cardIndex) {
    // Menggunakan warna dasar yang berbeda untuk setiap kartu
    const baseColor = getBaseColor(cardIndex);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome&count=4`)
    .then(response => response.json())
    .then(data => updateColorPalette(card, data));
}

function updateColorPalette(card, data) {
    const colorDivs = card.querySelectorAll('.color1');
    colorDivs.forEach((div, index) => {
        if (data.colors[index]) {
            const bgElement = div.querySelector(`.bg${index + 1}`);
            bgElement.style.backgroundColor = data.colors[index].hex.value;

            const textElement = div.querySelector(`.text${index + 1}`);
            textElement.textContent = data.colors[index].hex.value;
        }
    });
}

function getBaseColor(cardIndex) {
    // Contoh sederhana, mengubah warna dasar berdasarkan indeks kartu
    const baseColors = ['24B1E0', 'FF5733', 'DAF7A6', 'FFC300', 'C70039', '900C3F', '581845'];
    return baseColors[cardIndex % baseColors.length];
}
