import { ArtWork, ServiceItem, FlowStep } from './types';

export const ARTWORKS: ArtWork[] = [
  {
    id: '1',
    title: 'The Silent Architect',
    artist: 'Elena Vavora',
    year: '1924',
    medium: 'Oil on Canvas',
    dimensions: '140cm x 180cm',
    valuation: '€2,400,000',
    imageUrl: 'https://picsum.photos/id/237/1200/800', // Placeholder
    description: 'A striking example of post-cubist structuralism, evoking the silent weight of history.',
    provenance: 'Collection of Count de Morcerf (1925-1980); Private Collection, Zurich (1980-Present).'
  },
  {
    id: '2',
    title: 'Composition in Gold No. 4',
    artist: 'Marcus Thorne',
    year: '1962',
    medium: 'Mixed Media & Gold Leaf',
    dimensions: '200cm x 200cm',
    valuation: '€1,850,000',
    imageUrl: 'https://picsum.photos/id/104/1200/800',
    description: 'An abstract exploration of value and divinity, utilizing 24k gold leaf layered over industrial charcoal.',
    provenance: 'Acquired directly from the artist; The Thorne Estate.'
  },
  {
    id: '3',
    title: 'Midnight in Prague',
    artist: 'Unknown Master',
    year: 'Circa 1890',
    medium: 'Oil on Panel',
    dimensions: '80cm x 60cm',
    valuation: '€950,000',
    imageUrl: 'https://picsum.photos/id/238/1200/800',
    description: 'A moody, atmospheric rendering of the Charles Bridge at night, illuminated by gaslight.',
    provenance: 'Discovered in a Parisian attic, authenticated by The Christie Bureau in 2012.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Private Exhibitions',
    shortDesc: 'Curated showings for discerning collectors.',
    fullDesc: 'We organize exclusive, invite-only viewings in our secure European salon locations or partner freeports. Each exhibition is tailored to the specific narrative of the collection.',
    iconName: 'Building'
  },
  {
    id: 's2',
    title: 'Custody & Insurance',
    shortDesc: 'Bank-grade security for physical assets.',
    fullDesc: 'Your assets are held in climate-controlled, bonded warehouses in Geneva or Singapore. Fully insured by Lloyd\'s of London syndicates against all risks.',
    iconName: 'Shield'
  },
  {
    id: 's3',
    title: 'Art Collateralization',
    shortDesc: 'Unlock liquidity without selling.',
    fullDesc: 'Leverage your art portfolio to secure low-interest capital. We provide non-recourse loans up to 50% of the appraised value, allowing you to maintain ownership while accessing funds.',
    iconName: 'Coins'
  },
  {
    id: 's4',
    title: 'Fractional Ownership',
    shortDesc: 'Syndicated investment structures.',
    fullDesc: 'Participate in the ownership of blue-chip masterpieces. Our legal structures allow for divided ownership shares, managed via transparent SPVs.',
    iconName: 'Users'
  }
];

export const FLOW_STEPS: FlowStep[] = [
  {
    id: 1,
    title: 'High-Res Scan',
    description: 'Digital twin creation.',
    details: ['Photogrammetry', 'Spectral Analysis', 'Condition Report Generation']
  },
  {
    id: 2,
    title: 'Valuation',
    description: 'AI + Expert Consensus.',
    details: ['Market Data Analysis', 'Comparable Sales', 'Expert Appraisal Panel']
  },
  {
    id: 3,
    title: 'Structuring',
    description: 'Legal & Financial Wrapping.',
    details: ['SPV Creation', 'Insurance Binding', 'Tokenization / Loan Issuance']
  },
  {
    id: 4,
    title: 'Distribution',
    description: 'Liquidity Event.',
    details: ['Private Placement', 'Marketplace Listing', 'Capital Release']
  }
];