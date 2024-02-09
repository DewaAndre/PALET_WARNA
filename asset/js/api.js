document.addEventListener('DOMContentLoaded', function() {
  fetchColorPalette();
});

function fetchColorPalette() {
  fetch('http://128.199.167.159/v1/idc/color-palletes')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Asumsi menggunakan palet warna pertama dari data yang diterima untuk kartu pertama
      // dan palet warna kedua untuk kartu kedua (sesuaikan ini berdasarkan data yang sebenarnya diterima)
      if (data.data && data.data.length > 1) {
        updateCardColors('.a', data.data[0].colors);
        updateCardColors('.b', data.data[1].colors);
        updateCardColors('.c', data.data[0].colors);
        updateCardColors('.d', data.data[1].colors);
        updateCardColors('.e', data.data[1].colors);
        updateCardColors('.f', data.data[1].colors);
        updateCardColors('.g', data.data[1].colors);
        updateCardColors('.z', data.data[1].colors);
        updateCardColors('.i', data.data[1].colors);
        updateCardColors('.j', data.data[1].colors);
        updateCardColors('.k', data.data[1].colors);
        updateCardColors('.l', data.data[1].colors);
      }
    })
    .catch(error => console.error('Error fetching color palette:', error));
}

function updateCardColors(cardClassPrefix, colors) {
  colors.forEach((color, index) => {
    if (index < 4) { // Memastikan hanya memperbarui 4 elemen per kartu
      const bgElement = document.querySelector(`${cardClassPrefix}${index + 1} .bg${index + 1}`);
      const textElement = document.querySelector(`${cardClassPrefix}${index + 1} .text${index + 1}`);
      if (bgElement && textElement) {
        bgElement.style.backgroundColor = color;
        textElement.textContent = color;
        textElement.style.visibility = 'visible';
      }
    }
  });
}

