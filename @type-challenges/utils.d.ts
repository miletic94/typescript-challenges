// export type Equal<A, B> = A extends B ? (B extends A ? true : false) : false; // Considers {a : 1} and {readonly a : 1} to be equal
export type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? true
  : false;

export type Expect<T extends true> = T;

type Alike<X, Y> = (<T>() => T extends MergeInsertions<X> ? 1 : 2) extends <
  T
>() => T extends MergeInsertions<Y> ? 1 : 2
  ? true
  : false;

export type MergeInsertions<T> = T extends object
  ? { [P in typeof T]: T[P] }
  : T;
