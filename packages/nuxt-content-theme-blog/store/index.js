import defu from 'defu'

export const state = () => ({
  settings: {
    noResults: {
      img: '/no-results.png',
    },
    pageNotFound: {
      img: '/page-not-found.png',
    },
    social: {
      showOnHeader: false,
      shareEnabled: false,
      defaultHashtags: [],
      github: '',
      linkedin: '',
      twitter: '',
    },
    repository: {
      url: '',
      branch: '',
    },
    footerLinks: {},
  },
})

export const mutations = {
  SET_SETTINGS(state, settings) {
    state.settings = defu(settings, state.settings)
  },
}

export const actions = {
  async fetchSettings({ commit }) {
    try {
      const {
        dir,
        extension,
        path,
        slug,
        to,
        createdAt,
        updatedAt,
        ...settings
      } = await this.$content('settings').fetch()

      commit('SET_SETTINGS', settings)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(
        'You can add a `settings.json` file inside the `content/` folder to customize this theme.'
      )
    }
  },
}
