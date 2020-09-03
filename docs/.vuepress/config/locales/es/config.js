const ads = require('./ads')

const translation = require('./translation')

module.exports = {
  languages: {
    label: 'Spanish',
    shortname: 'ES'
  },
  translation,
  ads,
  logo: {
    name: 'logo-cit',
    ext: 'png',
    alt: 'Logo CIT'
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
          HECHO CON VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'CIT Conecta',
      items: [
        {
          label: 'ACERCA',
          path: '/es/sobre/'
        },
        {
          label: 'POSTS',
          path: '/es/posts/'
        },
        {
          label: 'CATEGORÍAS',
          path: '/es/categorias/'
        },
        {
          label: 'AUTORES',
          path: '/es/autores/'
        },
        {
          label: 'CONTACTO',
          path: '/es/contacto/'
        }
      ]
    },
    nav2: {
      title: 'Comunidad',
      items: []
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
