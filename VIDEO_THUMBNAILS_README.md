# FAIRdata Cologne - Video Thumbnail System

## How Video Thumbnails Work

The video cards automatically use the actual video thumbnails instead of placeholder images. Here's how it works for different video types:

---

## 1. YouTube Videos

### Automatic Thumbnail Loading
YouTube videos automatically load thumbnails from YouTube's CDN using the video ID.

### HTML Structure:
```html
<div class="video-thumbnail" data-video-type="youtube" data-video-id="YOUR_VIDEO_ID">
    <img src="https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg" 
         onerror="this.src='https://img.youtube.com/vi/YOUR_VIDEO_ID/hqdefault.jpg'"
         alt="Video Title" />
    <!-- Play overlay and duration -->
</div>
```

### How to Add a YouTube Video:
1. Get the YouTube video ID (the part after `v=` in the URL)
   - Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`
2. Replace `YOUR_VIDEO_ID` with the actual video ID in the HTML
3. The thumbnail will automatically load from YouTube

### YouTube Thumbnail Quality:
- **maxresdefault.jpg**: High quality (1280x720) - loads first
- **hqdefault.jpg**: Medium quality (480x360) - fallback if maxres doesn't exist
- The `onerror` attribute automatically switches to lower quality if high quality isn't available

---

## 2. Local Video Files

### Option A: Automatic Thumbnail from Video (Recommended)
The browser automatically generates a thumbnail from the video at the 1-second mark.

### HTML Structure:
```html
<div class="video-thumbnail" data-video-type="file" data-video-src="videos/your-video.mp4">
    <video class="video-preview" muted>
        <source src="videos/your-video.mp4" type="video/mp4">
    </video>
    <!-- Play overlay and duration -->
</div>
```

### How to Add a Local Video (Auto Thumbnail):
1. Upload your video file to the `videos/` folder
2. Set `data-video-src="videos/your-video.mp4"`
3. The video element will automatically show the first frame as thumbnail

---

### Option B: Custom Thumbnail Image
If you have a specific thumbnail image you want to use:

### HTML Structure:
```html
<div class="video-thumbnail" 
     data-video-type="file" 
     data-video-src="videos/your-video.mp4"
     data-poster="videos/thumbnails/your-thumbnail.jpg">
    <video class="video-preview" muted>
        <source src="videos/your-video.mp4" type="video/mp4">
    </video>
    <!-- Play overlay and duration -->
</div>
```

### How to Add a Local Video (Custom Thumbnail):
1. Upload your video file to `videos/` folder
2. Upload your thumbnail image to `videos/thumbnails/` folder
3. Set both `data-video-src` and `data-poster` attributes
4. The custom thumbnail will be displayed

---

## Directory Structure

```
project/
├── videos/
│   ├── dataverse-intro.mp4          # Your video files
│   ├── repository-guide.mp4
│   ├── licensing-guide.mp4
│   └── thumbnails/                  # Optional custom thumbnails
│       ├── dataverse-intro.jpg
│       ├── repository-guide.jpg
│       └── licensing-guide.jpg
└── fairdata-cologne.html
```

---

## Complete Examples

### Example 1: YouTube Video
```html
<div class="video-card">
    <div class="video-thumbnail" data-video-type="youtube" data-video-id="dQw4w9WgXcQ">
        <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
             onerror="this.src='https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg'"
             alt="FAIR Principles Tutorial" />
        <div class="play-overlay">
            <svg class="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="rgba(10, 72, 139, 0.9)" />
                <path d="M10 8L16 12L10 16V8Z" fill="white" />
            </svg>
        </div>
        <span class="video-duration">4:35</span>
    </div>
    <div class="video-info">
        <h3>Introduction to FAIR Principles</h3>
        <p>Learn the fundamentals of Findable, Accessible, Interoperable, and Reusable data.</p>
        <div class="video-meta">
            <span class="video-type">YouTube</span>
            <span class="video-views">1.2K views</span>
        </div>
    </div>
</div>
```

### Example 2: Local Video (Auto Thumbnail)
```html
<div class="video-card">
    <div class="video-thumbnail" data-video-type="file" data-video-src="videos/dataverse-intro.mp4">
        <video class="video-preview" muted>
            <source src="videos/dataverse-intro.mp4" type="video/mp4">
        </video>
        <div class="play-overlay">
            <svg class="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="rgba(10, 72, 139, 0.9)" />
                <path d="M10 8L16 12L10 16V8Z" fill="white" />
            </svg>
        </div>
        <span class="video-duration">4:58</span>
    </div>
    <div class="video-info">
        <h3>Getting Started with Dataverse</h3>
        <p>Step-by-step guide to publishing your datasets on the Dataverse platform.</p>
        <div class="video-meta">
            <span class="video-type">File</span>
            <span class="video-views">643 views</span>
        </div>
    </div>
</div>
```

### Example 3: Local Video (Custom Thumbnail)
```html
<div class="video-card">
    <div class="video-thumbnail" 
         data-video-type="file" 
         data-video-src="videos/repository-guide.mp4"
         data-poster="videos/thumbnails/repository-guide.jpg">
        <video class="video-preview" muted>
            <source src="videos/repository-guide.mp4" type="video/mp4">
        </video>
        <div class="play-overlay">
            <svg class="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="rgba(10, 72, 139, 0.9)" />
                <path d="M10 8L16 12L10 16V8Z" fill="white" />
            </svg>
        </div>
        <span class="video-duration">3:28</span>
    </div>
    <div class="video-info">
        <h3>Choosing the Right Repository</h3>
        <p>Compare different data repositories and select the best one for your research.</p>
        <div class="video-meta">
            <span class="video-type">File</span>
            <span class="video-views">521 views</span>
        </div>
    </div>
</div>
```

---

## Tips & Best Practices

1. **YouTube Videos**: 
   - Always use the actual video ID from YouTube
   - The thumbnail loads automatically from YouTube's servers
   - No need to store thumbnail images locally

2. **Local Videos**:
   - Videos should be in MP4 format for best compatibility
   - Keep videos under 5 minutes as specified
   - If using auto-thumbnails, ensure the first second of video looks good
   - For better control, create custom thumbnails (JPG, 1280x720 recommended)

3. **Performance**:
   - YouTube thumbnails load from YouTube's CDN (fast)
   - Local video previews don't autoplay (just show poster frame)
   - Custom thumbnails should be optimized (under 200KB recommended)

4. **Accessibility**:
   - Always include descriptive `alt` text for images
   - Add proper video titles in the `video-info` section

---

## Troubleshooting

**YouTube thumbnail not showing:**
- Check if the video ID is correct
- Make sure the YouTube video is public
- The fallback to lower quality happens automatically

**Local video thumbnail not showing:**
- Check if the video path is correct
- Ensure the video file exists in the `videos/` folder
- Try adding a custom `data-poster` attribute with a thumbnail image

**Video not playing:**
- YouTube: Check internet connection and video availability
- Local: Verify the video file path and format (MP4 recommended)

---

## Summary

✅ **YouTube videos**: Automatic thumbnails from YouTube (no setup needed)  
✅ **Local videos**: Auto-generate from video OR use custom thumbnail images  
✅ **No placeholder images needed**: Real video thumbnails always used  
✅ **Fully responsive**: Works on all devices  

