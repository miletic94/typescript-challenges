/*
43 Exclude 
-------
by Zheeeeng (@zheeeeng) #easy #built-in #union

### Question

Implement the built-in `Exclude<T, U>`

> Exclude from `T` those types that are assignable to `U`

For example:

```ts
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // expected 'b' | 'c|
```
*/

type MyExclude<T, U> = T extends U ? never : T;

/* _______________ Test Cases _______________*/
import type { Expect, Equal } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];
