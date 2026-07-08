**Project:** CountryGirl — Agricultural Photography Landing Page  
**Type:** Responsive website wireframe (Desktop + Mobile breakpoints)  
**Style:** Clean, editorial, full-width layout

---

**GLOBAL LAYOUT RULES**

Create two artboards side by side: one at 1440px wide (Desktop) and one at 390px wide (Mobile). Use a consistent 8px grid. All sections should span full width. Use placeholder gray rectangles for all images. Label every component and section clearly.

---

**SECTION 1 — NAVIGATION BAR**

Desktop: Fixed top navigation bar, full width, 72px tall, light background with a subtle bottom border.

- Left side: Place a circular logo placeholder (48px diameter) with the label "Logo" inside it.
- Right side: Place large typographic text reading "Country Girl" styled as a display heading, right-aligned, vertically centered in the nav bar.
- No additional nav links needed.

Mobile: Same fixed nav bar, 60px tall. Center the logo placeholder horizontally. Remove the "Country Girl" heading text entirely — the logo is the only element visible. Do not include a hamburger menu.

---

**SECTION 2 — HERO / TAGLINE + CAROUSEL**

Directly below the nav bar. Full-width section, approximately 600–700px tall on desktop, 500px on mobile.

- At the top of this section, center-align a short tagline text block. Label it: **"Tagline — 1–2 lines of motivational copy for agricultural photography"**. Use a large font size (H1 scale). Below the tagline, add a smaller supporting subtext line. Both centered.
- Below the tagline, place a full-width image carousel component. The carousel frame should be approximately 500px tall on desktop and 280px tall on mobile.
- Inside the carousel, stack 5 equal-width landscape image placeholder rectangles (label them Image 1 through Image 5). Show only one at a time in the frame.
- Add two navigation arrow icons (left chevron, right chevron) on the left and right edges of the carousel, vertically centered.
- Below the carousel, add 5 small circular dot indicators centered horizontally — one filled dot (active) and four hollow dots (inactive).
- Label the carousel component: **"Auto-rotating carousel — 5 images, 4s interval, manual chevron override"**

---

**SECTION 3 — ABOUT THE PHOTOGRAPHER**

Full-width section with a two-column layout on desktop, single-column stack on mobile. Section height approximately 500px desktop, auto on mobile. Light neutral background to visually separate it from the carousel.

Desktop layout:

- Left column (40% width): Square or portrait image placeholder labeled **"Photographer Photo"**
- Right column (60% width): Vertically centered text block containing:
    - A section label in small caps: "About Me"
    - A heading: "Meet the Photographer"
    - A multi-line paragraph placeholder (5–6 lines of lorem ipsum)

Mobile layout: Stack vertically — photographer photo on top (full width, 280px tall), text block below it with left-aligned text and standard padding.

---

**SECTION 4 — PORTFOLIO GRID**

Full-width section. Dark or slightly off-white background to contrast the about section. Padding top/bottom 80px desktop, 48px mobile.

- Section heading centered at top: **"Portfolio"** (H2 size)
- Below the heading, place a responsive image grid:
    - Desktop: 3-column grid with 5 rows = 15 image slots (use 10–15 placeholder rectangles, all equal size, approximately 420px × 320px each, with 16px gaps)
    - Mobile: 2-column grid with same placeholders at equal width
- Label each cell Image A through Image O
- Label this section: **"Photography portfolio grid — 10 to 15 images, masonry or uniform grid, equal spacing"**

---

**SECTION 5 — PERSISTENT CTA BUTTON (FLOATING)**

This is a floating action button fixed to the bottom-right corner of the viewport on both desktop and mobile.

- Position: Fixed, bottom-right. Desktop: 32px from right edge, 32px from bottom. Mobile: 20px from right, 20px from bottom.
- Shape: Rounded pill button, approximately 180px wide × 52px tall on desktop, 160px wide × 48px tall on mobile.
- Label inside the button: **"Book a Session →"**
- Button color: Filled, use a warm accent color (amber or earthy green).
- Include a small annotation note: **"This button persists as user scrolls. Tapping navigates to the Booking Form page."**
- Add a subtle drop shadow annotation below: **"z-index: top layer, always visible"**

---

**PAGE 2 — BOOKING FORM PAGE**

Create a second artboard at 1440px (Desktop) and 390px (Mobile) for the form page. This is a standalone page, not a modal.

**Form Page — Desktop Layout:**

- Centered card container, max-width 640px, vertically centered on the page with padding.
- At the top of the card: Page heading **"Tell Us About Your Session"**, subtext: **"We'll get back to you within 24 hours."**
- Below the heading, a vertical form with the following labeled input fields, each with a visible label above the field:
    1. **Full Name** — single-line text input
    2. **Email Address** — single-line text input. Add an inline annotation: _"Validate: must contain @ and domain (e.g. [name@email.com](mailto:name@email.com)). Show red error state and message 'Please enter a valid email address' if invalid."_
    3. **Phone Number** — single-line text input with placeholder "+1 (_**) _**-****". Add annotation: _"Validate: must be 10 digits, reject sequences like 1234567890 or 0000000000. Show red error state and message 'Please enter a valid phone number' if invalid."_
    4. **Animal Type** — single-line text input or dropdown with placeholder "e.g. Cattle, Horses, Chickens"
    5. **How Many Animals** — number input field, min value 1
    6. **Location / Address** — multi-line textarea, 3 rows tall
- Below all fields: A full-width submit button labeled **"Submit Request"**, filled with the same accent color as the floating CTA.
- Add a note below the button: _"All fields required. Inline validation fires on blur (when user leaves each field). Submit is disabled until all fields are valid."_

**Form Page — Success State (shown after valid submission):**

Add a separate artboard or a state overlay on the same artboard showing:

- The form card replaced by a centered success message
- A large green checkmark icon (circle with checkmark, approximately 72px)
- Heading: **"Thank You!"**
- Subtext: **"We've received your request and will be in touch shortly."**
- Label this state: **"Post-submit success state — form replaced, no page reload"**

---

**RESPONSIVENESS ANNOTATIONS**

Add a sticky annotation strip along the right edge of the desktop artboard with the following notes:

- Nav: Logo centers on mobile, title text hidden
- Carousel: Full width both breakpoints, height reduces on mobile
- About section: 2-col desktop → 1-col stacked mobile (photo on top)
- Portfolio grid: 3-col desktop → 2-col mobile
- Floating CTA: Repositions slightly but always bottom-right, both breakpoints
- Form: Card is full-width on mobile with 16px side padding
  
  
  **SECTION 6 — FOOTER**

Full-width footer section, sits at the very bottom of the landing page below the portfolio grid. Approximately 200px tall on desktop, 240px tall on mobile. Use a dark background (near-black or deep charcoal) to anchor the page visually and contrast against the portfolio section above.

**Desktop Layout — three columns, horizontally centered content:**

- Left column (33% width): Display the logo placeholder (40px circle) with the text "Country Girl" beside it in white, styled smaller than the nav version. Below it, a single line of muted secondary text: _"Agricultural photography with heart."_
- Center column (33% width): A small heading labeled **"Follow Along"** in white, small caps or uppercase, 12px. Directly below it, a single Instagram link row containing:
    - The Instagram icon (use the standard Instagram outline glyph or a simple square-with-circle placeholder icon, 24px)
    - Text beside the icon: **"@countrygirlphotography"** (or a placeholder handle label)
    - The entire row is a tappable link. Add annotation: _"Links to external Instagram profile page, opens in new tab."_
    - Style the link text in a warm accent color matching the CTA button (amber or earthy green) to make it stand out.
- Right column (33% width): A small block of muted text:
    - Line 1: **"© 2025 Country Girl Photography"**
    - Line 2: **"All rights reserved."**
    - Right-aligned on desktop.

**A thin horizontal divider line (1px, low-opacity white) separates the top footer content from a slim bottom bar, approximately 40px tall, containing only the copyright line centered — this bottom bar is an alternative layout if the three-column approach feels too wide.**

---

**Mobile Layout:**

Stack all footer content vertically, center-aligned:

- Logo placeholder centered, with "Country Girl" text below it
- Below that: **"Follow Along"** label
- Instagram icon + handle text centered, styled as a tappable link
- Below that: copyright text, muted, small font size (12px)
- Even vertical spacing between each element, approximately 16px gaps
- Add annotation: _"All footer content center-aligned on mobile. Instagram link opens in new tab."_

---

**Footer Annotations to include:**

- _"Footer is not fixed — it scrolls with the page and sits below all content sections."_
- _"Instagram icon should use the recognizable Instagram camera outline glyph."_
- _"Handle text is a hyperlink — color matches the floating CTA accent for brand consistency."_
- _"Dark footer background creates visual closure and frames the floating CTA button above it."_