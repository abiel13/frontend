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
    parts: [];
  };