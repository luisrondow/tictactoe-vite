import { PropsWithChildren, ReactElement } from "react";

export type ContextProvider<T = any> = {
  (props: PropsWithChildren<T>): ReactElement<any, any> | null;
};

export interface ContextComposerProps {
  children: any;
}

export type Actions<T, P> = {
  readonly type: T;
  readonly payload: P;
};

export type ContextType<T, P> = Partial<T> & {
  actions?: P;
};
