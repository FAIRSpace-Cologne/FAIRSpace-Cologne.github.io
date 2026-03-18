// ===== FAIRDATA COLOGNE VIDEO PLAYER =====
(function () {
    const videoCards = document.querySelectorAll('.video-card');
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const closeBtn = document.querySelector('.video-modal-close');

    if (!videoCards.length || !videoModal) return;

    // Generate thumbnail for video files on load
    videoCards.forEach(card => {
        const thumbnail = card.querySelector('.video-thumbnail');
        const videoType = thumbnail.getAttribute('data-video-type');
        const videoPreview = thumbnail.querySelector('.video-preview');
        const posterUrl = thumbnail.getAttribute('data-poster');

        if (videoType === 'file' && videoPreview) {
            // If poster URL is provided, use it
            if (posterUrl) {
                videoPreview.setAttribute('poster', posterUrl);
            } else {
                // Generate thumbnail from video at 1 second
                videoPreview.addEventListener('loadedmetadata', function () {
                    this.currentTime = 1; // Capture frame at 1 second
                });
            }
        }
    });

    // Open video modal
    videoCards.forEach(card => {
        card.addEventListener('click', function () {
            const thumbnail = this.querySelector('.video-thumbnail');
            const videoType = thumbnail.getAttribute('data-video-type');
            const videoId = thumbnail.getAttribute('data-video-id');
            const videoSrc = thumbnail.getAttribute('data-video-src');

            let embedUrl = '';

            if (videoType === 'youtube') {
                // YouTube video
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
                videoPlayer.src = embedUrl;
            } else if (videoType === 'file') {
                // Local video file - use HTML5 video element
                videoPlayer.outerHTML = `<video id="videoPlayer" controls autoplay>
                    <source src="${videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
            }

            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    const closeModal = () => {
        videoModal.classList.remove('active');

        // Reset video player
        const currentPlayer = document.getElementById('videoPlayer');
        if (currentPlayer.tagName === 'VIDEO') {
            currentPlayer.pause();
            // Replace video element with iframe for next use
            currentPlayer.outerHTML = '<iframe id="videoPlayer" src="" frameborder="0" allowfullscreen></iframe>';
        } else {
            videoPlayer.src = '';
        }

        document.body.style.overflow = '';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });
})();