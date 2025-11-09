# 💕 Virtual Date Night Experience 💕

A deeply personal and romantic virtual date experience designed for Praharsha and Madhukar to share special moments together, no matter how far apart they are.

## 💕 About This Project

This immersive web experience takes you on a magical journey through a virtual date night. From a romantic car pickup animation to sharing dances, games, and Madhukar's favorite Rajma Chawal, culminating in a beautiful proposal under the stars - this app creates unforgettable memories for couples celebrating love across distances.

## ✨ Features

### 🚗 **Car Animation Journey**
- Beautiful animated sequence of picking up Madhukar from her place
- Smooth transitions with romantic messaging
- Heart animations and festive atmosphere

### 🎭 **Interactive Activities**
- **💃 Dance with Me**: Groove to Nagada Sang Dhol & Chogada with dancing cats
- **🎮 Play with Me**: Choose between two engaging games:
  - **⚡ Festival Rush**: Fast-paced action game with falling diyas and dandiya
  - **🧠 Fun Quiz**: Test your knowledge with emoji clues
- **🍽️ Food Corner**: The EXCLUSIVE path to romance featuring:
  - Fresh juices (Apple, Watermelon, Pineapple)
  - **🍛 Rajma Chawal**: Madhukar's special favorite with premium styling
  - Traditional sweets (Gulab Jamun, Rasgulla, Jalebi)

### 🌙 **Romantic Journey** (Only accessible through Food Corner)
- **Surprise Screen**: "Will you be my forever date partner?"
- **Under the Stars**: Local photos of beautiful moons and Madhukar
- **Proposal Moment**: Ring animation with heartfelt proposal
- **Celebration**: Fireworks and celebration for the happy couple

### 🎨 **Visual Experience**
- Comprehensive particle effects (diyas, confetti, fireworks, stars)
- Romantic color scheme (pinks, oranges, purples)
- **Mobile-first responsive design** for all devices
- Beautiful festive elements with modern animations
- **Local image assets** for reliability and personalization

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd virtual-date-night
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your personal assets**
   - Place Madhukar's photo as `public/images/madhukar/madhukar.jpg`
   - Add moon photos as `public/images/moon/moon1.jpg` and `public/images/moon/moon2.jpg`
   - Audio files are already included: `nagada-sang-dhol.mp3` and `chogada.mp3`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to start the experience

### Building for Production

```bash
npm run build
```

This creates an optimized static export in the `out` directory, ready for Netlify deployment.

## 🌐 Deployment

### Netlify Deployment

This project is configured for easy Netlify deployment:

1. **Push to Git repository**
2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider

3. **Deploy settings** (auto-configured via `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

## 🎯 User Journey

### **Main Path to Romance:**
1. **Welcome Screen** - "Praharsha is waiting for you, get inn soon..."
2. **Car Animation** - Romantic pickup from her place with heart animations
3. **Activity Selection** - Choose from Dance, Play, or **Food Corner** (special)
4. **Optional Activities** - Dance and Play are for enjoyment only
5. **Food Corner** - **REQUIRED**: Select 3 items including Rajma Chawal
6. **Surprise Moment** - "Will you be my forever date partner?"
7. **Under the Stars** - Local photos with romantic messages
8. **Proposal** - Ring animation with heartfelt proposal for Madhukar
9. **Celebration** - Fireworks and eternal love celebration

### **Alternative Paths:**
- **Dance Experience** - Select songs, enjoy music with dancing cats
- **Game Experience** - Choose between action or quiz games
- Both return to main menu (no romantic progression)

## 🛠️ Technical Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript throughout
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Audio**: HTML5 Audio API with robust error handling
- **Images**: Local static assets (no external dependencies)
- **Deployment**: Netlify with static export
- **Mobile**: Mobile-first responsive design

## 📱 Mobile-First Design

The experience is fully optimized with mobile-first approach:
- 📱 **Mobile devices** - Primary focus with touch-friendly interactions
- 📱 **Tablets** - Optimized layouts and spacing
- 💻 **Desktop computers** - Enhanced experience with larger screens
- **Responsive typography** - Scales from text-sm to text-8xl
- **Touch-friendly buttons** - Proper sizing and spacing
- **Flexible grids** - 1 col → 2 cols → 3 cols based on screen size

## 🎨 Design System

### Color Palette
- **Primary**: Pink/Rose tones for romance
- **Secondary**: Orange/Amber for festival warmth
- **Accent**: Purple for magical moments
- **Background**: Soft gradients and warm tones

### Typography
- **Headlines**: Large, decorative fonts for impact
- **Body**: Clean, readable fonts for content
- **Emojis**: Extensive use for emotional connection

### Animations
- **Particle Effects**: Diyas, confetti, fireworks
- **Transitions**: Smooth page transitions
- **Hover Effects**: Interactive feedback
- **Loading States**: Engaging waiting experiences

## 💝 Customization

### Personalizing for Your Partner

1. **Update the name** in `src/components/screens/HomeScreen.tsx`
2. **Modify messages** throughout the screens
3. **Change images** by updating Unsplash URLs
4. **Adjust colors** in `src/app/globals.css`

### Adding New Activities

1. Create new screen component in `src/components/screens/`
2. Add to the main app flow in `src/app/page.tsx`
3. Update the `explored` state management
4. Add navigation in `MainScreen.tsx`

## 🔧 Development Guidelines

### Code Structure
```
src/
├── app/                 # Next.js app directory
├── components/
│   ├── screens/        # Main screen components
│   ├── shared/         # Reusable components
│   └── ui/             # UI component library
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

### Best Practices
- Use TypeScript for type safety
- Follow React best practices
- Implement proper error handling
- Ensure accessibility compliance
- Optimize for performance

## 🎉 Special Features

### Progressive Unlocking
- Activities must be completed in sequence
- Romantic ending unlocks after all activities
- Meaningful progress indicators

### Emotional Journey
- Carefully crafted messages for emotional impact
- Building anticipation throughout the experience
- Satisfying conclusion with proposal moment

### Interactive Elements
- Click/tap interactions with visual feedback
- Animated responses to user actions
- Particle effects for celebration moments

## 🌟 Future Enhancements

- 🎵 Background music integration
- 📸 Photo upload functionality
- 💌 Custom message creation
- 🎁 Additional mini-games
- 📱 PWA capabilities for mobile installation

## 💖 Made with Love

This project was created with love for couples celebrating festivals across distances. May it bring joy, connection, and beautiful memories to your relationship.

---

**Happy Dating! 💕✨**

*"Distance means nothing when someone means everything."*