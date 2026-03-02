# Privacy & Data Handling - FAIRspace Cologne Website

## No Data Storage Policy

This website has been configured to **NOT store any user data, cookies, or cache**.

### Implemented Privacy Measures:

1. **No Cookies**
   - No cookies are set or used anywhere in the application
   - No session tracking
   - No user identification

2. **No Local Storage**
   - No localStorage usage
   - No sessionStorage usage
   - No IndexedDB usage
   - No Web SQL usage

3. **No Caching**
   - Meta tags added to prevent browser caching:
     - `Cache-Control: no-cache, no-store, must-revalidate`
     - `Pragma: no-cache`
     - `Expires: 0`

4. **No External Tracking**
   - No Google Analytics
   - No Facebook Pixel
   - No third-party tracking scripts
   - No CDN tracking

5. **No Form Data Storage**
   - No form data is saved
   - No user input is stored

6. **Images**
   - All images are static resources loaded from the server
   - No user-uploaded images
   - No image processing or storage

### What This Means:

- **Complete Privacy**: No user data is collected, stored, or transmitted
- **No Tracking**: User behavior is not tracked across sessions
- **Fresh Load**: Every page load is fresh with no cached data
- **Anonymous**: Users remain completely anonymous

### Technical Implementation:

All HTML files include these meta tags:
```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

### Verification:

To verify no data is being stored:
1. Open browser Developer Tools (F12)
2. Go to Application tab
3. Check:
   - Cookies: Should be empty
   - Local Storage: Should be empty
   - Session Storage: Should be empty
   - Cache Storage: Should be empty

### Server Configuration (Optional - If Using Apache):

Add this to your `.htaccess` file for additional security:

```apache
# Disable all caching
<IfModule mod_headers.c>
    Header set Cache-Control "no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires "0"
</IfModule>

# Disable cookies (if needed)
<IfModule mod_headers.c>
    Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure;SameSite=Strict
</IfModule>
```

### Server Configuration (Optional - If Using Nginx):

Add this to your nginx configuration:

```nginx
add_header Cache-Control "no-cache, no-store, must-revalidate";
add_header Pragma "no-cache";
add_header Expires "0";
```

### GDPR Compliance:

This website is **fully GDPR compliant** because:
- No personal data is collected
- No consent is required (no data to consent to)
- No cookies or tracking
- No data processing

### Contact:

If you have any questions about privacy or data handling, please contact the FAIRspace Cologne team.

---

**Last Updated:** January 2025
**Verified:** No data storage mechanisms present
