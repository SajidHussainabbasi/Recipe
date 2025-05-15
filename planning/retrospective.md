## Retrospective – Recipe

### What Went Well
- Successfully integrated with TheMealDB API to fetch real-time recipe data
- Clean and modular codebase with structured folders: `api`, `handlers`, `listeners`, `components`
- Search functionality worked seamlessly with input from user.
- Displayed key recipe details: name, category, area (cuisine), instructions, and image
- Responsive and minimal UI worked well across desktop and mobile devices
- Used async/await for clean and readable API calls

### What Can Improve
- No loading spinner or message shown during API fetch; users may be unsure if the app is working
- Error handling for invalid input or failed requests could be more user-friendly.
- Design could be enhanced with better typography, spacing, and color palette.
- Lacked accessibility improvements like ARIA labels, keyboard navigation, or focus indicators.
