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
      }
    }
  },
  variants: {
    borderRadius: ['first', 'last'],
    backgroundColor: ['disabled', 'hover', 'active'],
    opacity: ['disabled'],
    cursor: ['disabled']
  },
  plugins: [require('@tailwindcss/ui')]
};
