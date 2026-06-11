# 🚀 AWA Website - Hostinger Deployment Instructions

## ✅ Pre-Deployment Checklist (COMPLETED)

- ✅ Node.js installed
- ✅ Dependencies installed (`npm install`)
- ✅ Production build created (`npm run build`)
- ✅ Vite base path configured correctly (`base: '/'`)
- ✅ `.htaccess` file created for React Router
- ✅ All doctor certificates updated
- ✅ ZIP file created: `amodaya-website-final.zip`

---

## 📦 Files Ready for Upload

**Location:** `C:\Users\Sakshi\Downloads\awa-web-experience-main (5)\amodaya-website-final.zip`

**Contents:**
```
dist/
├── index.html          ← Main entry point
├── .htaccess          ← React Router configuration
├── _redirects         ← Netlify redirects (backup)
├── favicon.ico        ← Website icon
├── robots.txt         ← SEO configuration
├── placeholder.svg    ← Placeholder image
└── assets/            ← All CSS, JS, and images
    ├── index-*.css
    ├── index-*.js
    └── [all images]
```

---

## 🌐 Step-by-Step Upload to Hostinger

### Step 1: Login to Hostinger
1. Go to: https://hpanel.hostinger.com
2. Enter your credentials
3. Select your hosting plan

### Step 2: Access File Manager
1. Click on **"Websites"** in the left menu
2. Select your domain
3. Click **"File Manager"** button

### Step 3: Navigate to Root Directory
1. Open the **`public_html`** folder
2. This is where your website files go

### Step 4: Clean Existing Files (if any)
1. Select all existing files in `public_html`
2. Click **"Delete"** (if this is a fresh install)
3. Confirm deletion

### Step 5: Upload Your Website

**⚠️ CRITICAL: Upload CONTENTS of dist folder, NOT the dist folder itself**

**Option A: Upload ZIP and Extract (Recommended)**
1. Click **"Upload"** button in File Manager
2. Select `amodaya-website-final.zip`
3. Wait for upload to complete
4. Right-click on the ZIP file
5. Select **"Extract"**
6. Delete the ZIP file after extraction

**Option B: Upload Files Directly**
1. Extract `amodaya-website-final.zip` on your computer
2. Select ALL files inside the extracted folder
3. Drag and drop into `public_html` in File Manager

### Step 6: Verify File Structure

Your `public_html` should look like this:
```
public_html/
├── index.html          ✅
├── .htaccess          ✅
├── _redirects         ✅
├── favicon.ico        ✅
├── robots.txt         ✅
├── placeholder.svg    ✅
└── assets/            ✅
    └── [all files]
```

**❌ WRONG Structure:**
```
public_html/
└── dist/              ← NO! Don't upload the dist folder
    └── index.html
```

---

## 🔒 Step 7: Enable SSL Certificate

1. Go back to Hostinger dashboard
2. Click on **"SSL"** in the left menu
3. Find your domain
4. Click **"Activate SSL"** or **"Install SSL"**
5. Wait 5-10 minutes for SSL to activate

---

## 🎉 Step 8: Test Your Website

1. Open your browser
2. Go to: `https://yourdomain.com`
3. Test all pages:
   - ✅ Home page loads
   - ✅ About page works
   - ✅ Members page shows all doctors
   - ✅ Click "View More" on doctor cards
   - ✅ Verify certificates display correctly
   - ✅ Events page works
   - ✅ Membership page works
   - ✅ Contact form works

---

## 🐛 Troubleshooting Common Issues

### ❌ Issue: Blank White Page
**Cause:** Wrong base path in Vite config  
**Solution:** Already fixed! (`base: '/'` is set correctly)

### ❌ Issue: CSS/JS Not Loading (404 errors)
**Cause:** Files not in correct location  
**Solution:**
1. Press F12 in browser
2. Check Console tab for errors
3. Verify files are in `public_html` root, not in a subfolder

### ❌ Issue: Page Refresh Shows 404
**Cause:** Missing `.htaccess` file  
**Solution:** Already included! The `.htaccess` file handles React Router

### ❌ Issue: Images Not Loading
**Cause:** Incorrect file paths  
**Solution:**
1. Check browser console (F12)
2. Verify `assets` folder is in `public_html`
3. Check file permissions (should be 644)

### ❌ Issue: "Not Secure" Warning
**Cause:** SSL not activated  
**Solution:** Follow Step 7 to enable SSL

---

## 📝 What's Updated in This Deployment

### Doctor Profiles with Certificates:

1. **Dr. Bhagyashree Deshpande**
   - BDS from MUHS Nashik (2017)

2. **Dr. Dimple Thakkar**
   - Ho'Oponopono + EFT Healer
   - Handwriting Analyst & Grapho Analytical Therapist
   - Master Tarot Card Reader

3. **Dr. Smita Lodhe**
   - Registered Occupational Therapist & Physiotherapist

4. **Dr. Samir Prabhudesai**
   - Low Carb Nutrition & Metabolic Health Diploma

5. **Dr. Swapnil Bhanushali**
   - M.D. (Ayurveda) from MUHS Nashik

6. **Dr. Neelam Kaur**
   - REIKI Practitioner
   - Crystal Healing
   - Hypnotherapy
   - Acupressure & Mudra Therapy
   - Numerology

7. **Dr. Ruby Khan**
   - Certified Nutrition and Weight Management Advisor

8. **Dr. Rupali Shaw**
   - Functional Medicine Health Coach
   - Yoga Teacher (RYT 200)
   - Best Trainer Award

9. **Dr. Kalyani Patil**
   - Licensed Emotional Intelligence Coach Practitioner

10. **Dr. Samiit Sarode**
    - Graphic Design Professional

---

## 🔄 Future Updates

To update the website in the future:

1. Make changes in VS Code
2. Run: `npm run build`
3. Upload new files from `dist` folder to Hostinger
4. Overwrite existing files

---

## 📞 Support

If you encounter any issues:
- Check Hostinger Knowledge Base
- Contact Hostinger Support (24/7 chat)
- Check browser console (F12) for errors

---

## ✅ Deployment Complete!

Once uploaded, your website will be live at:
**https://yourdomain.com**

All doctor profiles with detailed certificates will be visible when users click "View More" on each doctor's card.

---

**Last Updated:** May 22, 2026  
**Build Version:** Production  
**Framework:** React + Vite + TypeScript
