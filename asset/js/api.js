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
        updateCardColors('.z', data.data[7].colors);//h
        updateCardColors('.i', data.data[8].colors);
        updateCardColors('.j', data.data[9].colors);
        updateCardColors('.k', data.data[10].colors);
        updateCardColors('.l', data.data[11].colors);
        updateCardColors('.y', data.data[12].colors);//m
        updateCardColors('.n', data.data[13].colors);
        updateCardColors('.o', data.data[14].colors);
        updateCardColors('.p', data.data[15].colors);
        updateCardColors('.q', data.data[16].colors);
        updateCardColors('.r', data.data[17].colors);
        updateCardColors('.s', data.data[18].colors);
        updateCardColors('.t', data.data[19].colors);
        updateCardColors('.u', data.data[20].colors);
        updateCardColors('.w', data.data[22].colors);//p
        updateCardColors('.x', data.data[23].colors);
        updateCardColors('.aa', data.data[25].colors);
        updateCardColors('.ba', data.data[26].colors);
        updateCardColors('.ca', data.data[27].colors);
        updateCardColors('.da', data.data[28].colors);
        updateCardColors('.ea', data.data[29].colors);
        updateCardColors('.fa', data.data[30].colors);
        updateCardColors('.ga', data.data[31].colors);
        updateCardColors('.ha', data.data[32].colors);
        updateCardColors('.ia', data.data[33].colors);
        updateCardColors('.ja', data.data[34].colors);
        updateCardColors('.ka', data.data[35].colors);
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


// hilangkan warna awal ketika nav di klik
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


// Populer
document.addEventListener('DOMContentLoaded', function() {
  fetchColorPalette();

  // Event listener untuk teks 'light'
  document.getElementById('Populer').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perilaku default hyperlink
    // Asumsi ID 5, 6, dan 7 mewakili palet warna terang
    updateCardsWithLightPalette([20, 21, 22, 23, 24]); // Memanggil fungsi dengan array ID palet
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


// Collection
document.addEventListener('DOMContentLoaded', function() {
  fetchColorPalette();

  // Event listener untuk teks 'light'
  document.getElementById('Collection').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perilaku default hyperlink
    // Asumsi ID 5, 6, dan 7 mewakili palet warna terang
    updateCardsWithLightPalette([12, 13, 14, 15, 16, 17, 18, 19, 20]); // Memanggil fungsi dengan array ID palet
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


// light
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


// Dark
document.addEventListener('DOMContentLoaded', function() {
  fetchColorPalette();

  // Event listener untuk teks 'light'
  document.getElementById('dark').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perilaku default hyperlink
    // Asumsi ID 5, 6, dan 7 mewakili palet warna terang
    updateCardsWithLightPalette([12, 13, 14, 15, 16, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]); // Memanggil fungsi dengan array ID palet
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



// mencari warna
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-input'); // Mendapatkan input pencarian

  function searchPalette(query) {
    fetch('http://128.199.167.159/v1/idc/color-palletes')
      .then(response => response.json())
      .then(data => {
        const filteredPalettes = data.data.filter(palette => palette.title.toLowerCase().includes(query.toLowerCase()));
        displaySearchResults(filteredPalettes);
      })
      .catch(error => console.error('Error:', error));
  }

  function displaySearchResults(palettes) {
    const rightContainer = document.querySelector('.right'); // Mendapatkan container untuk menampilkan hasil
    rightContainer.innerHTML = ''; // Bersihkan konten saat ini

    // Membuat container untuk kartu-kartu dengan display flex
    const cardConElement = document.createElement('div');
    cardConElement.className = 'card-con';
    rightContainer.appendChild(cardConElement);

    palettes.forEach((palette, index) => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      let cardBodyHTML = `<div class="card-body">`;

      palette.colors.forEach((color, colorIndex) => {
        // Membuat elemen warna dan teks untuk setiap warna dalam palet
        cardBodyHTML += `
            <div class="color1 ${String.fromCharCode(97 + index) + (colorIndex + 1)}">
                <div class="bg${colorIndex + 1}" style="background-color: ${color};"></div>
                <div class="text-bg text${colorIndex + 1}">${color}</div>
            </div>`;
      });

      cardBodyHTML += `</div>`;
      cardElement.innerHTML = cardBodyHTML;
      cardConElement.appendChild(cardElement); // Menambahkan kartu ke dalam container kartu
    });
  }

  searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    if (query.length > 0) {
      searchPalette(query);
    } else {
      displaySearchResults([]); // Jika tidak ada query, bersihkan hasil
    }
  });
});
