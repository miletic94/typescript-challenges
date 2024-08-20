/*
14 - First of Array
-----
by Anthony Fu (@antfu) #easy #array

### Question

Implement a generic `First<T>` that takes an Array `T` and returns the first element's type

For example:

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

```
*/

/* ________ Your Code Here ________ */

import type { Equal, Expect } from "@type-challenges/utils";

type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];
