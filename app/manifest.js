export default function manifest() {
  return {
    name: 'C2F INSTALL - Électricien & Sécurité à Montluçon',
    short_name: 'C2F INSTALL',
    description: 'Installation électrique générale, bornes de recharge IRVE, alarmes et vidéosurveillance à Montluçon (03100) et dans l\'Allier.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A192F',
    theme_color: '#0077D9',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
