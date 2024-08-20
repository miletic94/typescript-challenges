type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];

/* Test Cases */
import type { Expect, Equal } from "@type-challenges/utils";

const tuple = [1] as const;

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[], []>, []>>,
  Expect<
    Equal<
      Concat<["1", "2", "3"], [false, boolean, 4]>,
      ["1", "2", "3", false, boolean, 4]
    >
  >
];

// @ts-expect-error
type error = Concat<null, undefined>;
