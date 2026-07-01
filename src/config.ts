import { 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Globe, 
  Youtube, 
  ShoppingCart,
  MapPin,
  MessageCircle,
  Folder,
  Briefcase
} from 'lucide-react';

export const config = {
  // Profile Information
  profile: {
    name: 'Stokqu Project',
    verified: true,
    bio: 'Platform Terbaik untuk Manajemen Stok & Bisnis Anda. Mudah, Cepat, dan Terpercaya.',
    avatarUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=256&q=80', // Shop/Business image placeholder
  },

  // Link Groups
  linkGroups: [
    {
      title: '🌟 Layanan Utama',
      links: [
        {
          title: 'Website Resmi Stokqu',
          url: 'https://stokqu.com',
          icon: Globe,
        },
        {
          title: 'Katalog Produk & Fitur',
          url: 'https://stokqu.com/fitur',
          icon: ShoppingCart,
        },
      ]
    },
    {
      title: '💼 Informasi & Kontak',
      links: [
        {
          title: 'Lokasi Kantor',
          url: 'https://maps.google.com',
          icon: MapPin,
        },
        {
          title: 'Chat Admin via WhatsApp',
          url: 'https://wa.me/6281234567890',
          icon: MessageCircle,
        },
      ]
    },
    {
      title: '📂 Lainnya',
      links: [
        {
          title: 'Program Kemitraan',
          icon: Folder,
          subLinks: [
            {
              title: 'Daftar Reseller',
              url: 'https://stokqu.com/reseller',
              icon: Briefcase
            },
            {
              title: 'Daftar Dropshipper',
              url: 'https://stokqu.com/dropship',
              icon: Briefcase
            }
          ]
        }
      ]
    }
  ],

  // Social Media Icons (Bottom Bar)
  socials: [
    {
      platform: 'Instagram',
      url: 'https://instagram.com/stokqu',
      icon: Instagram,
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/stokqu',
      icon: Twitter,
    },
    {
      platform: 'Email',
      url: 'mailto:halo@stokqu.com',
      icon: Mail,
    },
  ],

  // Theme Configuration
  theme: {
    // These colors are used as fallback or specific overrides, 
    // but the app primarily uses Tailwind utility classes for easy customization.
    primaryColor: '#3b82f6', // blue-500
  }
};
