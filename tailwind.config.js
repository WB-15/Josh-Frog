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
    borderRadius: ['first', 'last']
  },
  plugins: [require('@tailwindcss/ui')]
};
