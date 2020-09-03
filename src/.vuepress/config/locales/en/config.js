const ads = require('./ads')

module.exports = {
  languages: {
    label: 'English',
    shortname: 'EN'
  },
  translation: {
    news_title: 'Receive our articles, videos and more directly in your inbox and stay up to date.',
  },
  ads,
  logo: {
    name: 'logo-cit',
    ext: 'png',
    alt: 'CIT Logo'
  },
  share: {
    facebookCaption: 'CIT Conecta',
    twitterVia: 'CIT Conecta',
  },
  newsletter: {
    provider: 'mailchimp',
    action: ''
  },
  copy: `2020 © CIT Conecta - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          MADE WITH VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'CIT Conecta',
      items: [
        {
          label: 'ABOUT',
          path: '/about/'
        },
        {
          label: 'POSTS',
          path: '/posts/'
        },
        {
          label: 'CATEGORIES',
          path: '/categories/'
        },
        {
          label: 'AUTHORS',
          path: '/authors/'
        },
        {
          label: 'CONTACT',
          path: '/contact/'
        }
      ]
    },
    nav2: {
      title: 'Community',
      items: [
        // {
        //   label: 'FB GROUP',
        //   link: 'https://www.facebook.com/groups/MY_GROUP'
        // }
      ]
    }
  },
  social: [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/citITS/'
    },
    {
      name: 'youtube',
      link: 'https://www.youtube.com/channel/UChobrGCsXmtI48jJvKHrmLA'
    },
    // {
    //   name: 'instagram',
    //   link: 'https://www.instagram.com/cit_its/'
    // }
  ]
}
