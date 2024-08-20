/*
18 - Length of Tuple
--------
by sinoon (@sinoon) #easy #tuple

### Question

For a given tuple, you need create a generic `Length`, pick the length of the tuple

For example:

```ts
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const 

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<space>
 */

/*____________ Your Code Here ____________ */

type Length<T extends readonly any[]> = T["length"];

import { Expect, Equal } from "@type-challenges/utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type t = Length<typeof tesla>;
type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"string">
];

type Length1<T extends any[]> = T["length"];

const arr1 = [1, 2, 3];

type o = Length1<typeof arr1>;
