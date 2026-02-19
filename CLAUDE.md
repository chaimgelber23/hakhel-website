# Hakhel.info Website Redesign

## Project Overview
Modern redesign of Hakhel.info - a Jewish Torah education and community resource organization based in Flatbush, Brooklyn. Established in 1755, Hakhel focuses on Torah study, charitable acts, and proper mitzvah performance.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel

## Skills Available
- **UI/UX Pro Max:** `.claude/skills/ui-ux-pro-max/` - Design intelligence with 67 UI styles, 96 color palettes, 57 font pairings
- **Marketing Skills:** `.claude/skills/marketing/` - SEO, copywriting, content strategy, analytics
- **Marketing Tools:** `.claude/skills/marketing-tools/` - Integration guides for analytics, ads, email

## Design Guidelines
- Professional, warm, educational aesthetic appropriate for a Torah organization
- Clean, modern design replacing the outdated original site
- Mobile-first responsive design
- Accessible (WCAG 2.1 AA compliance)
- Fast loading - optimize all assets

## Content Source
All content scraped/adapted from the original https://www.hakhel.info

## Key Pages & Content
- **Home** - Organization overview, quick links to programs, email subscription CTA
- **About** - History, mission, leadership
- **Programs** - Yarchei Kallah, Tefillin Awareness Project, V'Ani Tefilah Foundation
- **Daily Emails** - Archive of daily Torah email bulletins (2005-2020), organized by month/year
- **Bulletins** - Community Awareness Bulletin archive (PDFs from 5761-5765)
- **Resources** - Calendars, schedules, tefillah aids, kavanah resources, guidelines, reference tables
- **Gemach List** - Hundreds of community resource listings organized by category and location (Brooklyn, Queens, Five Towns, Monsey, Lakewood)
- **Recordings** - Audio shiurim and video resources
- **Public Announcements** - Community service announcements
- **Shatnez** - Shatnez newsletter archive
- **Contact** - Contact info, email subscription

## Original Site Structure
The original hakhel.info has:
- Left sidebar navigation
- Heavy use of PDFs for resources
- MP3 audio files for shiurim
- WMV video files
- Constant Contact email integration
- Microsoft Office-era styling (Cambria Math, Segoe UI)

## Commands
```bash
# Development
npm run dev

# Build
npm run build

# Search UI/UX database
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>
```
