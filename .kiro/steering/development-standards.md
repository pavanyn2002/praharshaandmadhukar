---
inclusion: manual
---

# Development Standards for Virtual Navratri Experience

## Code Quality Standards

### TypeScript Usage
- Always use proper TypeScript types
- Define interfaces for component props
- Use type unions for state management
- Avoid `any` type usage

### Component Structure
```typescript
interface ComponentProps {
  onAction: () => void;
  data?: string;
}

const Component: FC<ComponentProps> = ({ onAction, data }) => {
  // Component logic
};
```

### State Management
- Use React hooks appropriately
- Implement proper cleanup in useEffect
- Handle loading and error states
- Use meaningful state variable names

### Animation Guidelines
- Use CSS animations for performance
- Implement smooth transitions between screens
- Add loading states for better UX
- Use particle effects sparingly for impact

### Image Optimization
- Use Unsplash URLs with proper dimensions
- Implement lazy loading where appropriate
- Add alt text for accessibility
- Use WebP format when possible

### Responsive Design
- Mobile-first approach
- Use Tailwind responsive classes
- Test on multiple screen sizes
- Ensure touch-friendly interactions

### Performance Optimization
- Minimize bundle size
- Use dynamic imports for large components
- Optimize images and assets
- Implement proper caching strategies

## Romantic Experience Guidelines

### Message Crafting
- Use personal, heartfelt language
- Include cultural references to Navratri
- Balance playfulness with sincerity
- Add appropriate emojis for emotional connection

### User Flow Design
- Create anticipation and build-up
- Ensure smooth transitions between sections
- Provide clear progress indicators
- Make interactions feel meaningful

### Visual Hierarchy
- Use typography to guide attention
- Implement proper spacing and layout
- Create focal points with animations
- Maintain consistent visual language

## Testing Considerations
- Test all user interaction paths
- Verify responsive behavior
- Check animation performance
- Validate accessibility features