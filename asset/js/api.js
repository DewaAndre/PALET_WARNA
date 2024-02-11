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
        updateCardColors('.c', data.data[2].colors);
        updateCardColors('.d', data.data[3].colors);
        updateCardColors('.e', data.data[4].colors);
        updateCardColors('.f', data.data[5].colors);
        updateCardColors('.g', data.data[6].colors);
        updateCardColors('.z', data.data[7].colors);
        updateCardColors('.i', data.data[8].colors);
        updateCardColors('.j', data.data[9].colors);
        updateCardColors('.k', data.data[10].colors);
        updateCardColors('.l', data.data[11].colors);
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


// 
function updateCardColors(cardClassPrefix, colors) {
  colors.forEach((color, index) => {
    if (index < 4) { // Memastikan hanya memperbarui 4 elemen per kartu
      const bgElement = document.querySelector(`${cardClassPrefix}${index + 1} .bg${index + 1}`);
      const textElement = document.querySelector(`${cardClassPrefix}${index + 1} .text${index + 1}`);
      if (bgElement && textElement) {
        bgElement.classList.add('color-transition'); // Menambahkan kelas untuk transisi
        bgElement.style.backgroundColor = color;
        textElement.textContent = color;
        textElement.style.visibility = 'visible';
      }
    }
  });
}



// click light
document.addEventListener('DOMContentLoaded', function() {
  fetchColorPalette();

  // Event listener untuk teks 'light'
  document.getElementById('light').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perilaku default hyperlink
    // Asumsi ID 5, 6, dan 7 mewakili palet warna terang
    updateCardsWithLightPalette([5, 6, 7, 10, 11]); // Memanggil fungsi dengan array ID palet
  });
});

function updateCardsWithLightPalette(paletteIds) {
  fetch('http://128.199.167.159/v1/idc/color-palletes')
    .then(response => response.json())
    .then(data => {
      paletteIds.forEach((paletteId, index) => {
        const palette = data.data.find(p => p.id === paletteId);
        if (palette) {
          // Menggunakan class kartu yang berbeda berdasarkan indeks
          // Misalnya, kartu pertama menggunakan warna dari palet ID pertama, dan seterusnya
          // Pastikan class kartu (.a, .b, .c, ...) sesuai dengan struktur HTML Anda
          const cardClass = String.fromCharCode(97 + index); // Mengubah indeks ke huruf (0 -> 'a', 1 -> 'b', ...)
          updateCardColors('.' + cardClass, palette.colors);
        }
      });
    })
    .catch(error => console.error('Error fetching color palette:', error));
}
