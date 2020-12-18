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
        name: 'author',
        message: 'What is your name?',
        default: this.gitUser.name,
      },
      {
        name: 'title',
        message: 'What is the title of your blog:',
        default({ author }) {
          return `${author} Blog`
        },
      },
      {
        name: 'githubOwner',
        message: 'What is your GitHub username?',
        default: this.gitUser.username || this.gitUser.name,
        filter: (val) => val.toLowerCase(),
        store: true,
      },
      {
        name: 'githubRepository',
        message: 'What is your GitHub repository name?',
        default: this.outFolder,
      },
      {
        name: 'url',
        message: 'What is the URL of your blog:',
        default({ githubOwner }) {
          return `https://${githubOwner}.github.io`
        },
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
