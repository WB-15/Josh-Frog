module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding'
      },
      colors: {
        jfgreen: {
          '50': '#ecf3e4',
          '100': '#d8e7c9',
          '200': '#c5e0ab',
          '300': '#b2d88c',
          '400': '#a0d075',
          '500': '#8ec95d',
          '600': '#7ac144',
          '700': '#6db845',
          '800': '#61af46',
          '900': '#56a646'
        },
        jfyellow: {
          '100': '#fffdbe',
          '200': '#fff8be',
          '300': '#fef49c',
          '400': '#fbf17a',
          '500': '#f6ed53',
          '600': '#f0ea18'
        }
      }
    }
  },
  variants: {
    borderRadius: ['responsive', 'first', 'last'],
    backgroundColor: ['disabled', 'hover', 'active'],
    opacity: ['disabled'],
    cursor: ['disabled'],
    extend: {
      outline: ['focus-visible'],
      textOverflow: ['hover']
    }
  },
  plugins: [require('@tailwindcss/ui')]
};
