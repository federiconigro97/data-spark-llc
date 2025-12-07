import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const baseStyles = {
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  };

  const animationStyles = {
    'fade-up': {
      initial: { opacity: 0, transform: 'translateY(30px)' },
      visible: { opacity: 1, transform: 'translateY(0)' },
    },
    'fade-in': {
      initial: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'fade-left': {
      initial: { opacity: 0, transform: 'translateX(-30px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    'fade-right': {
      initial: { opacity: 0, transform: 'translateX(30px)' },
      visible: { opacity: 1, transform: 'translateX(0)' },
    },
    'scale': {
      initial: { opacity: 0, transform: 'scale(0.95)' },
      visible: { opacity: 1, transform: 'scale(1)' },
    },
  };

  const currentAnimation = animationStyles[animation];
  const currentStyle = isVisible ? currentAnimation.visible : currentAnimation.initial;

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...baseStyles, ...currentStyle }}
    >
      {children}
    </div>
  );
};

export const StaggeredChildren: React.FC<{
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale';
}> = ({ children, className = '', staggerDelay = 100, animation = 'fade-up' }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 500ms ease-out, transform 500ms ease-out`,
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
