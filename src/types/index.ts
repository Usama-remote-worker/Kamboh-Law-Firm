export interface CalculatorResult {
  label: string;
  value: number | string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}
