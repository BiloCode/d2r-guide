export type Recipe = {
  tags?: string[];
  title: Record<string, string>;
  ingredients: Array<{
    key: string;
    name: Record<string, string>;
    quantity: number;
  }>;
  result: Array<{
    key: string;
    name: Record<string, string>;
  }>;
};
