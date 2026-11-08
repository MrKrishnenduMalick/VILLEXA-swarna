export interface CollectionItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  metal: string;
  purity: string;
  gemstone: string;
  description: string;
  priceStarting: string;
}

export const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'traditional',
    title: 'Traditional Collection',
    tagline: 'Centuries of Filigree Heritage',
    category: 'Gold Jhumka Earrings',
    image: '/images/traditional-collection-hd.jpg',
    metal: '22KT Yellow Gold',
    purity: '916 BIS Hallmarked',
    gemstone: 'South Sea Pearls & Enamel',
    description: 'Masterfully sculpted 22KT gold filigree jhumka earrings featuring traditional repoussé bells, floral stud caps, and delicate hanging pearl clusters.',
    priceStarting: '₹85,000'
  },
  {
    id: 'diamond',
    title: 'Diamond Collection',
    tagline: 'Radiance Beyond Measure',
    category: 'High Fine Diamond Necklace',
    image: '/images/diamond-collection-hd.jpg',
    metal: '18KT White & Platinum',
    purity: 'VVS-VS Clarity, EF Colour',
    gemstone: 'Certified Solitaires & Natural Gemstones',
    description: 'An illustrious high-jewellery diamond necklace collar showcasing precision-cut diamonds cascading into an iconic gemstone pendant.',
    priceStarting: '₹1,50,000'
  },
  {
    id: 'bridal',
    title: 'Bridal Collection',
    tagline: 'The Crowning Glory of Her Auspicious Day',
    category: 'Royal Gold Bridal Necklace',
    image: '/images/bridal-collection-hd.jpg',
    metal: '22KT Pure Gold',
    purity: '916 BIS Certified',
    gemstone: 'Burmese Rubies, Emeralds & Seed Pearls',
    description: 'A breathtaking royal Indian bridal choker necklace forged in 22KT gold with kundan-set rubies, emerald droplets, and elaborate meenakari cresting.',
    priceStarting: '₹3,20,000'
  },
  {
    id: 'polki',
    title: 'Polki Collection',
    tagline: 'Mughal Splendour & Uncut Brilliance',
    category: 'Mughal Polki & Pearl Hansli',
    image: '/images/polki-collection-hd.jpg',
    metal: '22KT Gold & Silver Foil Backing',
    purity: 'Syndicate Polki Certified',
    gemstone: 'Natural Uncut Diamonds & Natural Pearls',
    description: 'Authentic uncut syndicate polki diamonds set into a royal hansli collar with intricate reverse enamelling and natural Basra pearl drops.',
    priceStarting: '₹2,10,000'
  },
  {
    id: 'daily-wear',
    title: 'Daily Wear Collection',
    tagline: 'Subtle Luxury for Everyday Grace',
    category: 'Intricate Gold Bangles & Kadas',
    image: '/images/daily-wear-collection-hd.jpg',
    metal: '22KT Yellow Gold',
    purity: '916 BIS Hallmarked',
    gemstone: 'Pure Chased Gold Work',
    description: 'Heirloom stackable 22KT gold bangles and kadas carved with intricate traditional patterns, offering comfortable everyday wear and lasting lustre.',
    priceStarting: '₹45,000'
  }
];
