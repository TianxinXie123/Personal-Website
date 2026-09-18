const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// Set the initial title when the script loads
toggleBtn.title = body.classList.contains('dark-mode') ? "Light Mode" : "Dark Mode";

function updateButton(isDark) {
    const btnIcon = toggleBtn.querySelector('.icon');
    btnIcon.innerText = isDark ? "☀️" : "🌙";
    toggleBtn.title = isDark ? "Light Mode" : "Dark Mode";
}

// Add click event listener
toggleBtn.addEventListener('click', () => {
    // Toggle the .dark-mode class
    body.classList.toggle('dark-mode');
    
    // Check if dark mode is active now
    const isDark = body.classList.contains('dark-mode');
    
    // Save the preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update the button appearance
    updateButton(isDark);
});

// Open the Modal
function openModal() {
    document.getElementById("resumeModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("resumeModal").style.display = "none";
}

//play video
function openVideoModal(videoUrl) {
    document.getElementById("projectVideo").src = videoUrl+'?autoplay=1';
    document.getElementById("videoModal").style.display = "block";
}

function closeVideoModal() {
    document.getElementById("projectVideo").src = "";
    document.getElementById("videoModal").style.display = "none";
}


window.onclick = function(event) {
    let resumeModal = document.getElementById("resumeModal");
    let videoModal = document.getElementById("videoModal");
    let galleryModal = document.getElementById("galleryModal");

    if (event.target == resumeModal) {
        closeModal();
    }
    if (event.target == videoModal) {
        closeVideoModal();
    }
    // Clicking the dimmed backdrop (anywhere that isn't a photo) closes the photo gallery
    if (galleryModal && (event.target == galleryModal ||
        event.target.classList.contains('gallery-modal-content') ||
        event.target.classList.contains('photo-bubble-container'))) {
        closeGalleryModal();
    }
}

// Close the photo gallery with the Esc key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGalleryModal();
    }
});


function toggleLike(btnElement) {
    const isLiked = btnElement.classList.toggle('liked');
    const countSpan = btnElement.querySelector('.like-count');
    let count = parseInt(countSpan.innerText);

    if (isLiked) {
        btnElement.innerHTML = `❤️ <span class="like-count">${count + 1}</span>`;
    } else {
        btnElement.innerHTML = `🤍 <span class="like-count">${count - 1}</span>`;
    }
}



//contact

const phoneSpan = document.getElementById('phone-number');
if(phoneSpan) {
phoneSpan.addEventListener('click', function() {
    const textToCopy = this.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Phone number copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
    }
// Array holding all gallery image data
const galleryData = [
    { title: "Pistachio Cookies", src: "assets/photo/pistachio_cookies.jpg", likes: 42 },
    { title: "Sichuan Pepper Beef Pancakes", src: "assets/photo/beef_pancakes.jpg", likes: 88 },
    { title: "Salmon Avocado Sushi", src: "assets/photo/Salmon Avocado Sushi.jpg", likes: 15 },
    { title: "Teriyaki Chicken Leg Rice Bowl", src: "assets/photo/Teriyaki Chicken Leg Rice Bowl.jpg", likes: 15 },
    { title: "Spicy Crawfish", src: "assets/photo/Spicy Crawfish.jpg", likes: 15 },
    { title: "Grilled Fish", src: "assets/photo/Grilled Fish.jpg", likes: 15 },
    { title: "Mapo Tofu", src: "assets/photo/Mapo Tofu.jpg", likes: 15 }
];

// Function to render the gallery items to the DOM
function renderGallery() {
    const container = document.getElementById('dynamic-gallery');
    
    // Check if the container exists on the current page to prevent errors
    if (!container) return; 

    let htmlContent = '';

    // Loop through the array and construct the HTML string
    galleryData.forEach(item => {
        htmlContent += `
            <div class="gallery-item">
                <img src="${item.src}" alt="${item.title}">
                <div class="gallery-info">
                    <h4>${item.title}</h4>
                    <div class="gallery-meta">
                        <button class="like-btn" onclick="toggleLike(this)">
                            🤍 <span class="like-count">${item.likes}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    // Inject the constructed HTML into the container
    container.innerHTML = htmlContent;
}

// Call the render function once the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', renderGallery);

// Array holding all cosplay gallery image data
const cosplayData = [
    { src: "assets/photo/Tamaki-2.jpg", alt: "Tamaki2", title: "My Real Hero Danny", date: "9/15/2024", likes: 395 },
    { src: "assets/photo/Tamaki-3.jpg", alt: "Tamaki3", title: "Green Table Decoration", date: "9/15/2024", likes: 138},
    { src: "assets/photo/Undertaker-4.jpg", alt: "Undertaker4", title: "Undertaker4", date: "9/15/2024", likes: 90 },
    { src: "assets/photo/Ku-1.jpg", title: "Ku1", date: "9/15/2024", likes: 709 },
    { src: "assets/photo/Jinshi-1.jpg", alt: "Sample Image 1", title: "Jinshi1", date: "9/15/2024", likes: 993 },
    { src: "assets/photo/Yanxie-3.jpg", alt: "Yanxie cosplay", title: "Yanxie cosplay", date: "9/15/2024", likes: 240950 },
    { src: "assets/photo/Yanxie-2.jpg", alt: "Yanxie cosplay", title: "Yanxie cosplay", date: "9/15/2024", likes: 239089 },
    { src: "assets/photo/Liu-2.jpg", title: "Liu cosplay", date: "9/15/2024", likes: 350 },
    { src: "assets/photo/Liu-3.jpg", title: "Liu cosplay", date: "9/15/2024", likes: 471 }
];

// Function to render the cosplay gallery items to the DOM
function renderCosplayGallery() {
    const container = document.getElementById('cosplay-gallery');
    console.log("Container found:", container);
    if (!container) return; 

    let htmlContent = '';

    cosplayData.forEach(item => {
        htmlContent += `
            <div class="gallery-item">
                <img src="${item.src}" alt="${item.alt}">
                <div class="gallery-info">
                    <h4>${item.title}</h4>
                    <div class="gallery-meta">
                        <span class="date">📅 ${item.date}</span>
                        <span class="like-btn" onclick="toggleLike(this)">
                            🤍 <span class="like-count">${item.likes}</span>
                        </span>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// Call the render function once the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', renderCosplayGallery);

// Photo gallery popup (My Life bubbles on the home page)
const galleryModals = {
    cosplay: {
        title: "My Cosplay Picshots",
        subtitle: "Character loading... 100%✨ Let's enjoy the time!",
        data: cosplayData
    },
    cooking: {
        title: "Lv. Max Chef's Kitchen",
        subtitle: "Transforming ingredients into art, one dish at a time.",
        data: galleryData
    }
};

// Bubble sizes cycle so the photos look like a cluster of bubbles
const photoBubbleSizes = ['photo-bubble-lg', 'photo-bubble-md', 'photo-bubble-sm'];

function openGalleryModal(type) {
    const gallery = galleryModals[type];
    if (!gallery) return;

    document.getElementById('galleryModalTitle').innerText = gallery.title;
    document.getElementById('galleryModalSubtitle').innerText = gallery.subtitle;

    let htmlContent = '';

    gallery.data.forEach((item, index) => {
        const sizeClass = photoBubbleSizes[index % photoBubbleSizes.length];
        htmlContent += `
            <div class="photo-bubble ${sizeClass}">
                <img src="${item.src}" alt="${item.alt || item.title}" loading="lazy">
                <div class="photo-bubble-overlay">
                    <h4>${item.title}</h4>
                    <button class="like-btn" onclick="toggleLike(this)">
                        🤍 <span class="like-count">${item.likes}</span>
                    </button>
                </div>
            </div>
        `;
    });

    document.getElementById('galleryModalBody').innerHTML = htmlContent;
    document.getElementById('galleryModal').style.display = 'block';
    document.body.classList.add('modal-open');
}

function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (!modal) return;

    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}