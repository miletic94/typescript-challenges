/*____________ Your Code Here _____________ */
type MyAwaited<T> = T extends object & {
  then: (onfulfilled: infer F, ...args: infer _) => any;
}
  ? F extends (arg: infer V) => any
    ? MyAwaited<V>
    : never
  : T;
/*____________ Test Cases _____________ */
import type { Expect, Equal } from "@type-challenges/utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>
];
