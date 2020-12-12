module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'Project name:',
        default: this.outFolder,
        filter: (val) => val.toLowerCase(),
      },
      {
        name: 'title',
        message: 'Blog title:',
        default: 'Nuxt Content Blog',
      },
      {
        name: 'appShortName',
        message: 'App Short Name:',
        default: 'MyBlog',
      },
      {
        name: 'url',
        message: 'Blog url:',
        url: 'https://mytechblog.io',
      },
      {
        name: 'author',
        message: 'Blog author:',
        default: 'José Silva',
      },
      {
        name: 'githubOwner',
        message: 'GitHub owner:',
        default: 'jsilva-pt',
      },
      {
        name: 'githubRepository',
        message: 'GitHub repository:',
        default: this.outFolder,
      },
      {
        name: 'githubMainBranch',
        message: 'GitHub  main branch:',
        default: 'main',
      },
      {
        name: 'twitterUsername',
        message: 'Twitter username:',
        default: 'jmanuelsilvapt',
      },
      {
        name: 'pm',
        message: 'Package manager:',
        choices: [
          { name: 'Yarn', value: 'yarn' },
          { name: 'Npm', value: 'npm' },
        ],
        type: 'list',
        default: 'yarn',
      },
    ]
  },
  templateData() {
    const pm = this.answers.pm === 'yarn' ? 'yarn' : 'npm'
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'

    return {
      pm,
      pmRun,
    }
  },
  actions: [
    {
      type: 'add',
      files: '**',
      templateDir: '../template',
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json',
      },
    },
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  },
}
