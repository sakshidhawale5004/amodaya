# 🚀 HOSTINGER UPLOAD GUIDE - Fix 404 Certificate Error

## ❌ Current Problem:
Certificates showing 404 error on amodayawellness.com

## ✅ Solution:
Upload the `certificates` folder to your Hostinger public_html

---

## 📋 Step-by-Step Upload Instructions:

### Method 1: Upload Certificates Folder Only (Quick Fix)

1. **Extract the ZIP file:**
   - Right-click `AWA-FINAL-NO-BRANDING.zip`
   - Extract to a folder

2. **Login to Hostinger:**
   - Go to: https://hpanel.hostinger.com
   - Login with your credentials

3. **Open File Manager:**
   - Click on your website
   - Click "File Manager" button

4. **Navigate to public_html:**
   - Open the `public_html` folder
   - This is where your website files are

5. **Upload Certificates Folder:**
   - Click "Upload" button
   - Select the entire `certificates` folder from the extracted ZIP
   - Wait for upload to complete

6. **Verify Structure:**
   Your `public_html` should look like this:
   ```
   public_html/
   ├── index.html
   ├── assets/
   ├── certificates/          ← This folder must be here!
   │   ├── Degree certificate bhagyashree deshpande.jpg
   │   ├── dimplethakkarcerifcates (1).jpg
   │   ├── Dr Kalyani Certificate.pdf
   │   └── [all other certificates]
   ├── favicon.png
   └── [other files]
   ```

7. **Test:**
   - Go to: https://amodayawellness.com/certificates/dimplethakkarcerifcates%20(1).jpg
   - If you see the certificate image, it's working!

---

### Method 2: Re-upload Everything (Complete Fix)

If Method 1 doesn't work, do a complete re-upload:

1. **Backup Current Files (Optional):**
   - In Hostinger File Manager
   - Select all files in `public_html`
   - Download as backup

2. **Delete Old Files:**
   - Select all files in `public_html`
   - Click "Delete"
   - Confirm deletion

3. **Upload New ZIP:**
   - Click "Upload"
   - Upload `AWA-FINAL-NO-BRANDING.zip`
   - Wait for upload to complete

4. **Extract ZIP:**
   - Right-click on `AWA-FINAL-NO-BRANDING.zip`
   - Click "Extract"
   - Extract to current directory

5. **Move Files to Root:**
   - You'll see a folder created from extraction
   - Open that folder
   - Select ALL files inside (index.html, assets, certificates, etc.)
   - Click "Move"
   - Move to `public_html` root
   - Delete the empty folder and ZIP file

6. **Final Structure:**
   ```
   public_html/
   ├── index.html              ✅
   ├── .htaccess              ✅
   ├── favicon.png            ✅
   ├── assets/                ✅
   │   └── [all files]
   └── certificates/          ✅ MUST BE HERE!
       ├── Degree certificate bhagyashree deshpande.jpg
       ├── dimplethakkarcerifcates (1).jpg
       ├── dimplethakkarcerifcates (2).jpg
       ├── dimplethakkarcerifcates (3).jpg
       ├── Dr Kalyani Certificate.pdf
       ├── dr samir prabhudesai.pdf
       ├── drswapnilbhanushali.jpeg
       ├── KALYANI PATIL  Udyam Registration Certificate.pdf
       ├── neelamkaur (1).pdf
       ├── neelamkaur (2).pdf
       ├── rameshsuryavanshi.jpeg
       ├── rubykhan  (1).png
       ├── rubykhan  (2).png
       ├── rubykhan  (3).png
       ├── rupalishaw (1).jpeg
       ├── rupalishaw (2).jpeg
       ├── rupalishaw (3).jpeg
       ├── samiitsarode.jpg
       └── smitalodhe.jpg
   ```

---

## 🔍 How to Verify It's Working:

### Test These URLs:

1. **Test Certificate 1:**
   ```
   https://amodayawellness.com/certificates/dimplethakkarcerifcates%20(1).jpg
   ```
   Should show: Dimple Thakkar's certificate image

2. **Test Certificate 2:**
   ```
   https://amodayawellness.com/certificates/Dr%20Kalyani%20Certificate.pdf
   ```
   Should show: Dr. Kalyani's PDF certificate

3. **Test Certificate 3:**
   ```
   https://amodayawellness.com/certificates/smitalodhe.jpg
   ```
   Should show: Dr. Smita Lodhe's certificate

If all three work, then ALL certificates will work!

---

## ⚠️ Common Mistakes to Avoid:

### ❌ WRONG Structure:
```
public_html/
└── dist/                    ← NO! Don't upload the dist folder
    └── certificates/
```

### ❌ WRONG Structure:
```
public_html/
└── AWA-FINAL-NO-BRANDING/   ← NO! Don't upload the parent folder
    └── certificates/
```

### ✅ CORRECT Structure:
```
public_html/
├── index.html
├── assets/
└── certificates/            ← YES! Directly in public_html
```

---

## 🐛 Troubleshooting:

### If certificates still show 404:

1. **Check File Permissions:**
   - In File Manager, right-click `certificates` folder
   - Click "Permissions"
   - Set to: 755 (rwxr-xr-x)
   - Apply to all files inside

2. **Check File Names:**
   - File names are case-sensitive on Linux servers
   - Make sure they match exactly (including spaces and parentheses)

3. **Clear Browser Cache:**
   - Press Ctrl+Shift+Delete
   - Clear cached images and files
   - Try again

4. **Check .htaccess:**
   - Make sure `.htaccess` file is in `public_html`
   - It should contain the React Router rules

---

## 📞 Need Help?

If you're still seeing 404 errors after following these steps:

1. Take a screenshot of your Hostinger File Manager showing the `public_html` contents
2. Try accessing: https://amodayawellness.com/certificates/
3. Check if you see a directory listing or 404

---

## ✅ Success Checklist:

- [ ] Logged into Hostinger
- [ ] Opened File Manager
- [ ] Navigated to public_html
- [ ] Uploaded certificates folder
- [ ] Verified certificates folder is directly in public_html (not in a subfolder)
- [ ] Tested certificate URLs
- [ ] Certificates load successfully
- [ ] Clicked "View More" on doctor profiles
- [ ] Clicked on certificate links
- [ ] Certificates open in new tab

---

**Once the certificates folder is in the right place, everything will work!** 🎉
