import React from 'react'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'white' | 'dark'
  showText?: boolean
  className?: string
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'default',
  showText = true,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-2xl'
  }

  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          shield: '#FBBF24', // gold
          text: '#ffffff',
          accent: '#FBBF24'
        }
      case 'dark':
        return {
          shield: '#FBBF24', // gold
          text: '#1f2937',
          accent: '#FBBF24'
        }
      default:
        return {
          shield: '#FBBF24', // gold
          text: '#1f2937',
          accent: '#FBBF24'
        }
    }
  }

  const colors = getColors()

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0 rounded-full overflow-hidden`}>
        <Image
          src="/elites_roots_logo.jpeg"
          alt="Elites Roots Logo"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSizes[size]} ${variant === 'white' ? 'text-white' : 'text-gray-900'} leading-tight tracking-tight`}>
            ELITES ROOTS
          </span>
          {size !== 'sm' && (
            <div className="flex flex-col items-center mt-0.5">
              <div className="flex items-center space-x-1">
                <div className={`h-px w-6 ${variant === 'white' ? 'bg-white' : 'bg-gray-600'}`}></div>
                <span className={`text-xs ${variant === 'white' ? 'text-white' : 'text-gray-600'} font-medium tracking-wider uppercase`}>
                  MAKHANA
                </span>
                <div className={`h-px w-6 ${variant === 'white' ? 'bg-white' : 'bg-gray-600'}`}></div>
              </div>
              <div className="flex items-center space-x-1 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className={`w-2 h-2 ${variant === 'white' ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Logo
