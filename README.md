# Divine Ayu Wellness — Website

A single-page static website for **Divine Ayu Wellness**, an Ayurvedic Spa & Wellness Center in Battaramulla, Sri Lanka. *"Embrace the Art of Relaxation."*

## Files

| File | Purpose |
|------|---------|
| `index.html` | The full website (one page). |
| `styles.css` | Styling — navy & gold branding. |
| `script.js` | Mobile menu + scroll animations. |
| `images/` | Logo, service posters and treatment photos. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is. |

## View it locally

Just open `index.html` in any web browser (double-click it).

## Publish free on GitHub Pages

1. Create a new repository on [github.com](https://github.com) (e.g. `divine-ayu-wellness`).
2. Upload **all** these files and the `images/` folder into the repository
   (drag-and-drop on the GitHub website works, or use `git`).
3. In the repo go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick branch **`main`** and folder **`/ (root)`**, then click **Save**.
6. Wait ~1 minute. Your site will be live at:
   `https://<your-username>.github.io/divine-ayu-wellness/`

### Using git from the command line

```bash
git init
git add .
git commit -m "Divine Ayu Wellness website"
git branch -M main
git remote add origin https://github.com/<your-username>/divine-ayu-wellness.git
git push -u origin main
```

Then enable Pages as in steps 3–6 above.

## Editing content

- **Phone number:** search for `077 887 2345` and `+94778872345` in `index.html`.
- **Address:** search for `Kuruduwatte Road` in `index.html`.
- **Services:** each treatment is an `<article class="card">` block in `index.html`.
- **Colours:** change the values under `:root` at the top of `styles.css`.

## Optional: custom domain

If you buy a domain (e.g. `divineayu.lk`), add it under **Settings → Pages → Custom domain**.
