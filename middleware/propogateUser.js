import { withSSRContext } from 'aws-amplify';

export default async function ({ store, req }) {
  await store.dispatch('auth/loadSSR', req);
}
