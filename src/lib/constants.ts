export const SITE_NAME = 'Kamboh Associates';
export const SITE_DESCRIPTION = 'Expert tax filing, NTN registration, business setup and financial services in Lahore, Pakistan';
export const SITE_URL = 'https://kambohassociates.com';

// ── Shop Address Updated per Audit Instructions ──
export const SHOP_ADDRESS = {
  name: 'Kamboh Associates',
  street: 'Allama Iqbal Town, Opp. Shell Pump, Main Boulevard',
  city: 'Lahore',
  country: 'Pakistan',
  phone1: '0328-4675162',
  phone2: '0304-4296295',
  whatsapp: '03284675162',
  hours: 'Mon–Sat: 10:00 AM – 10:00 PM',
  rating: '4.7',
  reviewCount: '3',
  type: 'Law Firm / Tax Consultancy',
  mapUrl: 'https://vymaps.com/PK/Kamboh-Associates-6347517/',
};

export const TOOLS = [
  {
    id: 'salary-tax-calculator',
    title: 'Salary Tax Calculator',
    description: 'Calculate your monthly & annual income tax instantly with 2025-26 FBR slabs',
    icon: 'Calculator',
    path: '/tools/salary-calculator',
    badge: 'Most Used',
  },
  {
    id: 'gst-calculator',
    title: 'GST / Sales Tax Calculator',
    description: 'Compute GST at 17% standard rate or custom rates for your sector',
    icon: 'Coins',
    path: '/tools/gst-calculator',
    badge: null,
  },
  {
    id: 'ntn-checker',
    title: 'NTN Status Checker',
    description: 'Verify your NTN registration status directly with FBR records',
    icon: 'ShieldCheck',
    path: '/tools/ntn-checker',
    badge: 'Popular',
  },
  {
    id: 'withholding-calculator',
    title: 'Withholding Tax Calculator',
    description: 'Calculate withholding tax on contracts, payments & imports',
    icon: 'FileText',
    path: '/tools/withholding-calculator',
    badge: 'Popular',
  },
  {
    id: 'investment-calculator',
    title: 'Investment Return Calculator',
    description: 'Calculate ROI and projections for your business investments',
    icon: 'TrendingUp',
    path: '/tools/investment-calculator',
    badge: null,
  },
  {
    id: 'company-fee-estimator',
    title: 'Company Registration Fee Estimator',
    description: 'Estimate SECP fees for Pvt Ltd, AOP, and Sole Prop registrations',
    icon: 'Building2',
    path: '/tools/company-fee-estimator',
    badge: 'New',
  },
];

export const SERVICES = [
  // ── Individual Services ──
  {
    id: 'income-tax-filing',
    category: 'Individual',
    name: 'FBR Tax Filing',
    description: 'File your individual income tax return with full FBR compliance. We handle salaried, freelance, rental, and business income.',
    icon: 'ClipboardList',
    features: ['Salaried & freelance income', 'Rental & property income', 'Tax deduction optimization', 'FBR e-filing submission', 'Withholding tax reconciliation'],
    popular: false,
  },
  {
    id: 'ntn-registration',
    category: 'Individual',
    name: 'NTN Registration',
    description: 'Get your National Tax Number (NTN) registered with FBR swiftly. Mandatory for all filers and business entities.',
    icon: 'FileCheck2',
    features: ['Individual NTN', 'Business NTN', 'CNIC-based verification', 'FBR IRIS enrollment', 'Digital certificate issuance'],
    popular: false,
  },
  // ── Business Registration ──
  {
    id: 'sele-proprietorship',
    category: 'Business Registration',
    name: 'Sole Proprietorship',
    description: 'Simple & affordable registration for individual business owners. Ideal for freelancers, shopkeepers, and small traders.',
    icon: 'User',
    features: ['NTN registration', 'Bank account opening support', 'Professional letterhead', 'FBR enrollment', 'GST registration (if applicable)'],
    popular: false,
  },
  {
    id: 'private-limited',
    category: 'Business Registration',
    name: 'SECP Company Registration',
    description: 'Full SECP-registered Private Limited company formation. Perfect for scalable, investor-ready ventures.',
    icon: 'Building2',
    features: ['SECP incorporation', 'Memorandum & Articles', 'NTN & GST registration', 'Share certificate issuance', 'Director/officer registration'],
    popular: true,
  },
  {
    id: 'aop-partnership',
    category: 'Business Registration',
    name: 'AOP / Partnership',
    description: 'Association of Persons or Partnership firm registration for joint ventures and professional practices.',
    icon: 'Users2',
    features: ['Partnership deed drafting', 'NTN registration', 'FBR compliance setup', 'Bank account support', 'Annual filing support'],
    popular: false,
  },
  // ── Accounting ──
  {
    id: 'bookkeeping',
    category: 'Accounting',
    name: 'Audit & Accounts',
    description: 'Professional monthly bookkeeping, financial statements, and management accounts for your business.',
    icon: 'BarChart',
    features: ['Monthly bookkeeping', 'Profit & Loss statements', 'Audit notice representation', 'FBR Liaison', 'Document compliance'],
    popular: false,
  },
  {
    id: 'audit-support',
    category: 'Accounting',
    name: 'FBR Audit Representation',
    description: 'Expert representation and documentation support during FBR tax audits. Protect your rights with professional counsel.',
    icon: 'ShieldCheck',
    features: ['Audit notice response', 'Document compilation', 'FBR liaison', 'Legal representation', '360° Defense strategy'],
    popular: false,
  },
];

export const SERVICE_CATEGORIES = ['Individual', 'Business Registration', 'Accounting'];

export const KEYWORDS = [
  'tax filing Lahore',
  'NTN registration Pakistan',
  'income tax return',
  'GST calculator',
  'business registration SECP',
  'tax services Lahore',
  'FBR filing',
  'sole proprietorship registration',
  'private limited company Pakistan',
  'sales tax return filing',
  'bookkeeping services',
  'tax audit support',
  'Kamboh Associates',
  'accounting services Lahore',
];
