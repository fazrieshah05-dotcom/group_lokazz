let slideIndex=0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index){
  slides.forEach(slide=>slide.classList.remove("active"));
  dots.forEach(dot=> dot.classList.remove("active"));
  
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide(){
  slideIndex=(slideIndex+1)% slides.length;
  showSlide(slideIndex)
}

function prevSlide(){
  slideIndex=(slideIndex-1+slides.length)%slides.length;
  showSlide(slideIndex);
}

function currentSlide(index){
  slideIndex=index;
  showSlide(slideIndex);
}
let autoSlide = setInterval(nextSlide, 3000);

const observerOptions = {
    threshold: 0.2 // Imej akan muncul bila 20% bahagian imej masuk skrin
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        }
    });
}, observerOptions);

// Guna window.onload supaya JS tunggu semua gambar loading dulu baru cari .collection-item
window.onload = () => {
    document.querySelectorAll('.collection-item').forEach(item => {
        observer.observe(item);
    });
};

window.onload = () => {
    // 1. Perhati tulisan tajuk
    const title = document.querySelector('#collection-title');
    if (title) {
        observer.observe(title);
    }

    // 2. Perhati semua gambar koleksi
    document.querySelectorAll('.collection-item').forEach(item => {
        observer.observe(item);
    });
};


    
        function openLightbox(imgSrc) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
        }

        // Fungsi Filter Sederhana
        function filterGallery(category) {
            const items = document.querySelectorAll('.gallery-item');
            const btns = document.querySelectorAll('.filter-btn');
            
            btns.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            items.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    

document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('productFilter');
    
    // Ambil semua section dan semua item produk
    const sections = document.querySelectorAll('.product-section');
    const allProducts = document.querySelectorAll('.product-item');

    filterSelect.addEventListener('change', function() {
        const selectedValue = this.value; // 'all', 'sneakers', atau 'sandals'

        allProducts.forEach(item => {
            if (selectedValue === 'all') {
                // Tunjukkan semua produk
                item.style.display = 'block';
                // Pastikan semua section (Classic, Sporty, Sandalz) nampak tajuknya
                sections.forEach(sec => sec.style.display = 'block');
            } else {
                // Jika pilih 'sneakers', tunjuk item yang ada class 'sneakers' sahaja
                if (item.classList.contains(selectedValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }

                // Logik tambahan: Sembunyikan terus section yang kosong
                sections.forEach(sec => {
                    const hasVisibleItems = sec.querySelectorAll(`.product-item.${selectedValue}`).length > 0;
                    if (hasVisibleItems) {
                        sec.style.display = 'block';
                    } else {
                        sec.style.display = 'none';
                    }
                });
            }
        });
    });
});






