

module.exports = {
  dest: 'docs' ,
  base:'/aprendizaje/' ,
  title: 'Guias',
 
  description: 'Descripcion',
  
  
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],


  themeConfig: {
    search: false,
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
  
    
    nav: [
      {
        text: 'Inicio',
        link: '/',
        
      },
     
    ],
    sidebar: 
    {
      '/LenguajeCss/' : [
        '' ,
        'flexbox' ,
        'grid'
     ] ,
      '/Javascript/' : [
        '' ,
        'basico' , 
        'basico-2',
        'objeto' ,
        'DOM' , 
        'array'
      ] , 
      '/GuiaVuepress/' : [
        ''
  
      ] ,
      '/Git/' : [
        '' ,
        'comando' ,
        'github' ,
        'commit' ,
        'ramas' , 
        'tag'
  
      ] ,
     '/' : [
       ''

     ] 
  
     
      
    
  }
} ,


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]

}
