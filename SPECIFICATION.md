# Virtual Navratri Experience - Technical Specification

## Project Overview

A deeply personal romantic web application designed specifically for Pavan and girl to celebrate Navratri together through an immersive virtual experience, featuring personalized content, local assets, and a mobile-first design approach.

## Technical Architecture

### Frontend Framework
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Radix UI + shadcn/ui** for components

### Deployment
- **Static Export** for Netlify compatibility
- **Optimized build** with image optimization disabled
- **Progressive Web App** capabilities

## Feature Specifications

### 1. Car Animation Screen
**Purpose**: Create romantic pickup scenario from girl's hostel
**Components**:
- Animated car movement with heart icons
- Girls hostel location marker
- Smooth transition animations
- Personalized romantic messaging
- Mobile-optimized animations

**Technical Requirements**:
- CSS animations with transform transitions
- Timed state transitions (1s, 3s, 4s delays)
- Fully responsive design
- Touch-friendly for mobile

### 2. Activity Screens

#### Dance Screen
- **Audio Integration**: Nagada Sang Dhol & Chogada with robust error handling
- **Visual Elements**: Dancing cats animation with sway effects
- **Controls**: Play/pause functionality with manual fallbacks
- **Mobile**: Touch-friendly controls and responsive layout
- **Purpose**: Entertainment only (no romantic progression)

#### Play Screen (Game Selection)
- **Dual Games**: Festival Rush (action) & Festival Quiz (knowledge)
- **Game Selection UI**: Beautiful cards with hover effects
- **Festival Rush**: 30-second clicking game with falling items
- **Festival Quiz**: 5 Navratri-themed questions with emoji clues
- **Mobile**: Optimized for touch interactions
- **Purpose**: Entertainment only (no romantic progression)

#### Food Screen ⭐ **EXCLUSIVE ROMANTIC PATH**
- **Special Item**: Rajma Chawal with premium styling and personal message
- **Selection System**: Requires exactly 3 items from 7 options
- **Categories**: Juices (3), Special Dish (1), Sweets (3)
- **Progress Tracking**: Visual counter and completion indicators
- **Mobile**: Responsive grid layout (1→2→3 columns)
- **Purpose**: ONLY path to romantic sequence

### 3. Romantic Journey Screens

#### Happy Ending Screen
- Image gallery (moon, girl photos)
- Romantic messaging
- Transition to proposal
- Atmospheric design

#### Proposal Screen
- Ring animation
- Heartfelt proposal text
- Yes/No response handling
- Emotional impact design

#### Final Screen
- Response-based content
- Celebration animations (if yes)
- Restart functionality
- Memorable conclusion

## State Management

### Global State
```typescript
type View = 'home' | 'car' | 'main' | 'dance' | 'play' | 'food' | 'surprise' | 'ending' | 'propose' | 'final';

interface AppState {
  view: View;
  explored: {
    dance: boolean;
    play: boolean;
    food: boolean;
  };
  proposalResponse: 'yes' | 'no' | null;
}
```

### Progress Logic
- All three activities must be completed
- Automatic progression to surprise screen
- Linear flow with meaningful checkpoints

## Design System

### Color Palette
```css
:root {
  --primary: 340 82% 56%;      /* Pink/Rose */
  --secondary: 340 20% 92%;    /* Light Pink */
  --accent: 38 92% 50%;        /* Orange/Amber */
}
```

### Typography Scale
- **Headlines**: 4xl-8xl for impact
- **Subheadings**: 2xl-4xl for structure
- **Body**: lg-xl for readability
- **Captions**: sm-base for details

### Animation Library
- **fadeIn**: Entry animations
- **glow**: Text effects
- **spin-slow**: Ring animation
- **heartbeat**: Romantic elements
- **particle effects**: Celebration moments

## Performance Requirements

### Loading Times
- Initial page load: < 3 seconds
- Screen transitions: < 500ms
- Animation smoothness: 60fps
- Image loading: Progressive/lazy

### Bundle Size
- Main bundle: < 500KB gzipped
- Image optimization: WebP format
- Code splitting: Route-based
- Tree shaking: Enabled

## Accessibility Standards

### WCAG Compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios
- Focus management

### Responsive Design
- Mobile-first approach
- Touch-friendly interactions
- Flexible layouts
- Readable text sizes

## Content Management

### Image Sources
- **Unsplash API** for high-quality images
- **Optimized dimensions** for performance
- **Alt text** for accessibility
- **Fallback images** for errors

### Text Content
- **Personalized messaging** for girl
- **Cultural references** to Navratri
- **Emotional progression** throughout journey
- **Multiple language support** (future)

## Deployment Configuration

### Netlify Setup
```toml
[build]
  publish = "out"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--production=false"
```

### Next.js Configuration
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
```

## Quality Assurance

### Testing Strategy
- **Component testing** with Jest/RTL
- **E2E testing** with Playwright
- **Visual regression** testing
- **Performance monitoring**

### Browser Support
- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile browsers** (iOS Safari, Chrome Mobile)
- **Progressive enhancement** for older browsers

## Security Considerations

### Data Privacy
- **No personal data collection**
- **Client-side only** processing
- **Secure image loading** from trusted sources
- **No external tracking**

### Content Security
- **CSP headers** for XSS protection
- **HTTPS only** deployment
- **Secure image sources**
- **Input validation** (minimal inputs)

## Maintenance & Updates

### Version Control
- **Semantic versioning**
- **Feature branch workflow**
- **Automated deployments**
- **Rollback capabilities**

### Monitoring
- **Performance metrics**
- **Error tracking**
- **User analytics** (privacy-focused)
- **Uptime monitoring**

## Future Enhancements

### Phase 2 Features
- **Audio integration** (background music)
- **Photo upload** functionality
- **Custom messages** creation
- **Social sharing** capabilities

### Technical Improvements
- **PWA implementation**
- **Offline support**
- **Push notifications**
- **Advanced animations**