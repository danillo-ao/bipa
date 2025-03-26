/* eslint-disable  @typescript-eslint/no-explicit-any */

// COMMON TYPES

export type DotNotation<T extends Record<string, any>, Prefix extends string = ''> = {
  [K in Extract<keyof T, string>]: T[K] extends Record<string, any> ? `${Prefix}${K}` | DotNotation<T[K], `${Prefix}${K}.`> : `${Prefix}${K}`;
}[Extract<keyof T, string>];

// LAYOUT TYPES

export type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export interface ScreenController<T> {
  (props: { children(args: T): React.ReactNode }): React.ReactNode;
}
