import { API, withSSRContext } from 'aws-amplify'
import * as gqlQueries from '~/graphql/queries'
import * as gqlMutations from '~/graphql/mutations'

export const state = () => ({
  posts: [],
  post: null
})

export const getters = {
  authMode: (state, getters, rootState) =>
    rootState.auth.isAuthenticated ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY'
}

export const mutations = {
  set(state, { key, value }) {
    state[key] = value
  }
}

export const actions = {
  async listPosts({ dispatch }, { req }) {
    return dispatch('query', { key: 'posts', query: 'listPosts', req })
  },

  async getPost({ dispatch }, { id, req }) {
    return dispatch('get', { key: 'post', query: 'getPost', id, req })
  },

  async createPost({ dispatch }, input) {
    return dispatch('mutate', { key: 'post', mutation: 'createPost', input })
  },

  async updatePost({ dispatch }, input) {
    return dispatch('mutate', { key: 'post', mutation: 'updatePost', input })
  },

  async deletePost({ dispatch }, id) {
    return dispatch('mutate', { mutation: 'deletePost', input: { id } })
  },

  async get({ commit, getters }, { key, query, id, req }) {
    let api = req ? withSSRContext({ req }).API : API;

    const { data } = await api.graphql({
      query: gqlQueries[query],
      variables: { id },
      authMode: getters.authMode
    })

    const value = data[query]
    if (key) commit('set', { key, value })
    return value
  },

  async query({ commit, getters }, { key, query, filter, req }) {
    let api = req ? withSSRContext({ req }).API : API;

    const { data } = await api.graphql({
      query: gqlQueries[query],
      variables: { filter },
      authMode: getters.authMode
    })

    const value = data[query].items
    if (key) commit('set', { key, value })
    return value
  },

  async mutate({ commit, getters }, { key, mutation, input }) {
    const { data } = await API.graphql({
      query: gqlMutations[mutation],
      variables: { input },
      authMode: getters.authMode
    })

    const value = data[mutation]
    if (key) commit('set', { key, value })
    return value
  }
}
