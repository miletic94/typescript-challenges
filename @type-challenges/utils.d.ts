// export type Equal<A, B> = A extends B ? (B extends A ? true : false) : false; // Considers {a : 1} and {readonly a : 1} to be equal
export type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? true
  : false;

export type Expect<T extends true> = T;
