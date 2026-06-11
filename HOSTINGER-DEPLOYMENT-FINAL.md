# Hostinger Deployment Instructions - FINAL

## 📦 WHAT'S READY

The `dist/` folder contains the complete, production-ready website with:
- ✅ 9 active doctors with images
- ✅ 14 certificate files (correct ones only)
- ✅ Certificate viewer page
- ✅ All styling and assets
- ✅ AWA favicon (no Lovable branding)

---

## 🚀 STEP-BY-STEP DEPLOYMENT

### Step 1: Prepare the Build
```bash
# The build is already done. Files are in: dist/
# If you need to rebuild:
cd awa-web-experience-main
npm run build
```

### Step 2: Create Deployment Package

**Option A**: Zip the dist folder manually
```
1. Navigate to: dist/
2. Select all files and folders
3. Right-click → Send to → Compressed (zipped) folder
4. Name it: awa-deployment.zip
```

**Option B**: Use command line
```powershell
cd "C:\Users\Sakshi\Downloads\awa-web-experience-main (5)\awa-web-experience-main"
Compress-Archive -Path dist -DestinationPath awa-deployment.zip
```

### Step 3: Connect to Hostinger via FTP

1. **Open FTP Client** (FileZilla, WinSCP, or Hostinger's File Manager)
2. **Enter Hostinger Credentials**:
   - Host: (from Hostinger email)
   - Username: (from Hostinger email)
   - Password: (from Hostinger email)
   - Port: 21

3. **Navigate to**: `public_html` folder

### Step 4: Upload Files

**Method 1**: Upload ZIP and extract
```
1. Upload awa-deployment.zip to public_html/
2. Extract it
3. Delete the .zip file
4. Files should now be in public_html/
```

**Method 2**: Direct file upload
```
1. Upload all files from dist/ directly to public_html/
2. Maintain folder structure (assets/, certificates/)
3. Ensure hidden files are copied too (.htaccess, etc.)
```

### Step 5: Verify File Structure in public_html

Your FTP `public_html` folder should contain:
```
public_html/
├── index.html
├── favicon.ico
├── favicon.png
├── _redirects
├── robots.txt
├── certificate-viewer.html
├── placeholder.svg
├── assets/
│   ├── index-*.js
│   ├── index-*.css
│   └── [all images]
└── certificates/
    ├── dimplethakkarcerifcates (1).jpg
    ├── dimplethakkarcerifcates (2).jpg
    ├── dimplethakkarcerifcates (3).jpg
    ├── Dr Kalyani Certificate.pdf
    ├── KALYANI PATIL  Udyam Registration Certificate.pdf
    ├── dr samir prabhudesai.pdf
    ├── drswapnilbhanushali.jpeg
    ├── neelamkaur (1).pdf
    ├── neelamkaur (2).pdf
    ├── Degree certificate bhagyashree deshpande.jpg
    ├── rubykhan  (1).png
    ├── rubykhan  (2).png
    ├── rubykhan  (3).png
    └── smitalodhe.jpg
```

### Step 6: Test the Deployment

1. **Visit Main Site**: https://amodayawellness.com/
2. **Check Favicon**: Should see AWA logo (not Lovable)
3. **Visit Doctors Page**: https://amodayawellness.com/members
4. **Verify Doctors Display**: All 9 doctors should appear
5. **Test Certificate Click**: Click on a doctor's certificate
   - Should open certificate viewer
   - Should show back button
   - Should show download button
6. **Test Back Button**: Should return to doctors page
7. **Check Images**: All doctor images should load

---

## ⚠️ TROUBLESHOOTING

### Issue: Favicon still shows old logo
**Solution**:
1. Hard refresh browser: `Ctrl+Shift+Delete` (Chrome/Edge) or `Cmd+Shift+Delete` (Safari)
2. Clear browser cache completely
3. Try in incognito/private window
4. Give Hostinger cache 24 hours to clear

### Issue: Certificate files return 404
**Solution**:
1. Verify `certificates/` folder exists in `public_html/`
2. Check folder name is lowercase (not `Certificates/`)
3. Verify all 14 files are uploaded
4. Check file names match exactly (including spaces)

### Issue: Images not loading
**Solution**:
1. Verify `assets/` folder exists in `public_html/`
2. Ensure all image files are uploaded
3. Check folder permissions (should be 755)
4. Hard refresh page: `Ctrl+F5`

### Issue: Routing not working
**Solution**:
1. Verify `.htaccess` file is in `public_html/` root
2. The file should contain routing rules for React
3. Contact Hostinger support if mod_rewrite is not enabled

---

## 📊 WHAT'S IN EACH FOLDER

### `/assets/`
Contains all compiled JavaScript, CSS, and images

### `/certificates/`
Contains 14 certificate files for 8 doctors:
- **3 files**: Diimple Thakkar
- **1 file**: Samir Prabhudesai  
- **2 files**: Neelam Kaur
- **2 files**: Dr. Kalyani Patil
- **1 file**: Dr. Smita Lodhe
- **1 file**: Bhagyashree Deshpande
- **3 files**: Ruby Khan
- **1 file**: Dr. Swapnil Bhanushali
- **0 files**: Dr. Priti Yamdagni (no certificates available)

---

## 🔒 FILE PERMISSIONS

For Hostinger, set these permissions:

| Item | Permission | Notes |
|------|-----------|-------|
| public_html/ | 755 | Directory |
| public_html/assets/ | 755 | Directory |
| public_html/certificates/ | 755 | Directory |
| HTML files | 644 | certificate-viewer.html, index.html |
| .htaccess | 644 | Important for routing |
| Image files | 644 | JPG, PNG, JPEG files |
| PDF files | 644 | Certificate PDFs |

---

## 💡 USEFUL LINKS

- **Hostinger Dashboard**: [Log in here](https://hpanel.hostinger.com)
- **Amodaya Website**: https://amodayawellness.com/
- **Doctors Page**: https://amodayawellness.com/members
- **GitHub Repository**: https://github.com/sakshidhawale5004/amodaya

---

## ✅ POST-DEPLOYMENT CHECKLIST

- [ ] All files uploaded to public_html/
- [ ] Favicon displays AWA logo (not Lovable)
- [ ] All 9 doctors appear on /members page
- [ ] All doctor images load correctly
- [ ] Navigation shows "Doctors" (not "Members")
- [ ] Certificate files accessible
- [ ] Certificate viewer opens when clicking certificates
- [ ] Back button returns to doctors page
- [ ] Download button works on certificates
- [ ] Mobile responsive design works
- [ ] No console errors in browser DevTools
- [ ] Performance is good (no 404 errors)

---

## 🎯 FINAL NOTES

1. **Wait for DNS Propagation**: If domain not working, wait 24-48 hours
2. **Clear Cache**: Browser and Hostinger cache may need clearing
3. **SSL Certificate**: Ensure HTTPS is enabled in Hostinger
4. **Backups**: Hostinger automatic backups should be enabled
5. **Support**: Contact Hostinger support if deployment issues occur

---

## 📞 SUPPORT

If you encounter any issues:

1. **Check the error**: Look at browser console (F12) for errors
2. **Review deployment checklist**: Ensure all steps completed
3. **Contact Hostinger**: They can help with server-side issues
4. **Check GitHub**: Latest code is at github.com/sakshidhawale5004/amodaya

---

**Website Status**: ✅ READY FOR PRODUCTION DEPLOYMENT
