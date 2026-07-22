import type { FirebaseOptions } from 'firebase/app';

export interface AppEnvironment {
  readonly firebase: FirebaseOptions | null;
}

export const environment: AppEnvironment = {
  firebase: null,
};
