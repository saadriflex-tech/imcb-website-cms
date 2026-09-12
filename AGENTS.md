<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# IMCB Website Project Rules

**CRITICAL INSTRUCTIONS FOR ALL AGENTS WORKING ON THIS PROJECT:**
You must read and follow these rules before editing or writing any code.

### 1. Framer Motion Animations (The "Invisible" Bug)
**NEVER** use `initial={{ opacity: 0 }}` directly on Framer Motion components without a robust fallback. There is a known environment bug on the client's machine where `opacity: 0` elements get stuck and become permanently invisible, breaking the layout.
*   **Fix:** Use standard CSS animations (`@keyframes`) for initial page-load pop-ups.
*   **Fix:** For scroll animations, use `initial="hidden"` only if the variants safely handle it, or stick to `opacity: 1` initial states and just animate the `y` transform.

### 2. Strict Color Palette
You must strictly adhere to the project's exact color palette defined in `globals.css`. 
*   `--b`: `#41447f` (Navy Blue - Primary text and accents)
*   `--bg`: `#cae6f2` (Light Blue Background)
*   `--r-dark`: `#b75858` (Dark Red - Headings & Buttons)
*   `--line`: `#edf9da` (Light Green - Borders)
*   **Do not use any other hex codes.** If you need a color, map it to these variables.

### 3. Icons and UI
*   Always use `lucide-react` for UI icons.
*   Do not use raw emojis for structural UI elements.
*   Maintain a premium, clean aesthetic with soft drop shadows.

### 4. Code Standards
*   Use Next.js 15 App Router standards.
*   Use `<Link href="...">` from `next/link` instead of standard `<a>` tags.
*   Ensure all HTML entities are escaped (e.g., use `&apos;` instead of `'`).

### 5. Hidden Text and Watermarks
**NEVER** use faint, low-opacity (e.g., `rgba(255,255,255,0.05)`), or transparent text as "decorative watermarks" behind images or sections. When users press `Ctrl+A` (Select All), this text becomes fully visible with an ugly selection highlight, ruining the aesthetic. Always stick to clean, visible text.

### 6. Mobile Responsiveness is Mandatory
**NEVER** build desktop-only layouts. Anytime you add a new page, section, or UI component, it **must** be perfectly mobile-responsive from the start. 
*   Avoid using hard-coded pixel widths or static inline grids (e.g., `display: grid; gridTemplateColumns: 1.5fr 1fr`).
*   Use the responsive utility classes already defined in `globals.css` (like `.responsive-main-grid`) or write new `@media (max-width: 768px)` queries.
*   Always test mentally: "How will this look on a small iPhone screen?"
