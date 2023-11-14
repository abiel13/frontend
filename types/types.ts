export type TUser = {
  email: string;
  firstname: string;
  has_subscription: boolean;
  lastname: string;
  newsletter_subscription: boolean;
  token: string;
};

export type Categories = {
  description: string;
  title: string;
  id: number;
};

export type Stories = {
  author: string;
  background_url: string;
  category: string;
  category_id: number;
  doc_url: string;
  description: string;
  id: number;
  title: string;
  year: number;
  thumbnail_url: string;
  parts: [];
};
