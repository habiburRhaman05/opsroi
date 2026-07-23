You are a senior front-end engineer and UI refactoring specialist.

I have uploaded a Next.js project ZIP. Your job is to inspect the entire codebase and fix the project so that Tailwind CSS works correctly, then convert the existing landing page / main UI from plain CSS into Tailwind CSS without changing the visual design or user experience.

Critical constraints:

1. Do NOT change the UI/UX design unless it is clearly necessary to fix broken layout, spacing, typography, responsiveness, or accessibility.
2. Keep the current premium look and feel. Preserve the existing branding, layout structure, and component hierarchy as much as possible.
3. Convert CSS to Tailwind class-based styling wherever applicable, but keep the resulting UI visually equivalent.
4. Fix Tailwind so that classes actually apply throughout the project.
5. Fix any global typography / preflight issues, such as headings (h1, h2, etc.) appearing too small or styles not rendering.
6. Make the project production-ready and ensure it builds successfully.

Project context:

* This is a Next.js project using the App Router.
* The project contains:

  * app/layout.tsx
  * app/page.tsx
  * app/globals.css
  * app/opsroi.css
  * app/style.css
  * multiple components in /components
  * Tailwind / PostCSS / Next config files
* There are existing CSS files and Tailwind classes in the codebase, but Tailwind is not working properly right now.
* Some components already contain Tailwind class names, but the UI does not change when those classes are applied.
* I want exact conversion of CSS properties into Tailwind classes where possible.
* The landing page and calculator-related UI must be fixed.

Your tasks:
A. Diagnose and fix Tailwind CSS

* Check package.json for Tailwind version compatibility.
* Inspect tailwind.config if present, or verify if the project uses Tailwind v4 style setup.
* Inspect postcss.config.* and next.config.ts.
* Verify that globals.css is imported correctly in app/layout.tsx.
* Verify that Tailwind directives / import are correct for the installed version.
* Verify content paths / scanning configuration so Tailwind generates classes for all relevant files.
* Find and remove conflicts caused by global CSS overrides or imported legacy styles.
* Ensure Tailwind utility classes render correctly in all relevant components.
* Make sure headings, text, buttons, spacing, shadows, borders, and responsive utilities work as expected.

B. Convert CSS to Tailwind

* Convert the landing page and all visible UI components from CSS-based styling to Tailwind utility classes.
* Preserve the exact visual behavior and layout as much as possible.
* Translate CSS rules one by one into Tailwind equivalents, including:

  * margin / padding
  * font family / size / weight / line-height
  * colors / opacity
  * border / radius
  * shadow / blur / backdrop
  * flex / grid / gap / alignment
  * responsive breakpoints
  * hover / focus / active states
  * transition / animation
  * z-index / positioning
* Remove unnecessary CSS only after confirming the Tailwind version is functionally equivalent.

C. Improve UI quality without changing the design language

* Fix spacing inconsistencies.
* Improve alignment and visual balance.
* Ensure sections feel premium and polished.
* Improve responsive behavior on mobile, tablet, and desktop.
* Make buttons, cards, sections, and headings feel clean and high quality.
* Keep the result top-notch and client-ready.

D. Verify and harden

* Check for class name typos.
* Check for styles not being applied due to wrong import order.
* Check for conflicting CSS specificity.
* Check for duplicate or outdated styles.
* Check for layout shifts or broken responsive behavior.
* Confirm that the app builds successfully.

Method you should follow:

1. First, inspect the repo structure and identify the root cause of Tailwind not working.
2. Then fix Tailwind configuration and global CSS setup.
3. Then convert the landing page and related components from CSS to Tailwind.
4. Then polish the UI, keeping the same look and feel.
5. Then clean up unused CSS and confirm the project is stable.
6. Finally, return a concise report of what files were changed, what was fixed, and what remains.

Important output requirements:

* Modify the code directly.
* Do not provide only advice.
* Do not redesign the product.
* Do not introduce a new visual style.
* Keep the changes practical and production-safe.
* If you find any ambiguous styling, prefer matching the current look instead of redesigning it.
* If a full conversion is too large for one pass, prioritize:

  1. Tailwind fix
  2. landing page
  3. calculator component
  4. remaining visible components
  5. cleanup and polish

Acceptance criteria:

* Tailwind classes visibly work.
* Global heading sizes and typography behave correctly.
* Landing page styling is moved to Tailwind where possible.
* The UI looks premium, consistent, and responsive.
* The project builds without Tailwind-related errors.
* No major UI/UX change is introduced.

Please begin by analyzing the repository and identifying the exact cause of Tailwind not applying.
