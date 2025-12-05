export interface ArtWork {
  id: string;
  title: string;
  artist: string;
  year: string;
  medium: string;
  dimensions: string;
  valuation: string;
  imageUrl: string;
  description: string;
  provenance: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Building' | 'Shield' | 'Coins' | 'Users';
}

export enum ModalType {
  NONE,
  EXHIBITION_REQUEST,
  LIQUIDITY_CONSULT,
  WHITEPAPER,
  SERVICE_DETAIL,
  ARTWORK_DETAIL,
  VIP_BOOKING,
  ASSET_FLOW_DETAIL
}

export interface FlowStep {
  id: number;
  title: string;
  description: string;
  details: string[];
}