export interface TableOfContentsItem {
    id: string;
    title: string;
    number: string;
  }
  
  export interface Section {
    id: string;
    number: string;
    title: string;
    content: string | string[];
    subsections?: {
      title: string;
      content: string[];
    }[];
  }