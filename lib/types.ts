export interface Volunteer {
  id: number;
  full_name: string;
  lga: string;
  phone_number: string;
  email_address: string;
  support_type: string;
  created_at: Date;
}

export interface Idea {
  id: number;
  name: string | null;
  lga: string;
  question_suggestion: string;
  created_at: Date;
}

export interface AdminSettings {
  id: number;
  setting_key: string;
  setting_value: string | null;
  updated_at: Date;
}

export type SupportType = 'Volunteer' | 'Mobilization' | 'Professional Support' | 'Media/Content' | 'Other';
