export interface IBlock {
  delay: number | null;
}

export interface IBlockEmits {
  (event: "end", time: number): void;
}


export interface IResults {
    results: number;
}
