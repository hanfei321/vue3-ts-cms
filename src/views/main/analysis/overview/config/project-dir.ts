export const projectDir = `
│  .browserslistrc
│  .gitignore
│  .prettierignore
│  .prettierrc
│  auto-imports.d.ts
│  babel.config.js
│  commitlint.config.js
│  components.d.ts
│  editorconfig
│  package-lock.json
│  package.json
│  project.txt
│  README.md
│  tsconfig.json
│  vue.config.js
│  
├─.husky
│  │  commit-msg
│  │  pre-commit
│  │  
│  └─_
│          .gitignore
│          husky.sh
│          
├─public
│      favicon.ico
│      index.html
│      
└─src
    │  App.vue
    │  main.ts
    │  shims-vue.d.ts
    │  
    ├─assets
    │  ├─css
    │  │      base.less
    │  │      index.less
    │  │      
    │  └─img
    │          img.png
    │          login-bg.svg
    │          logo.svg
    │          R-C.gif
    │          
    ├─base-ui
    │  ├─breadcrumb
    │  │  │  index.ts
    │  │  │  
    │  │  ├─src
    │  │  │      breadcrumb.vue
    │  │  │      
    │  │  └─type
    │  │          index.ts
    │  │          
    │  ├─card
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          card.vue
    │  │          
    │  ├─code
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          code.vue
    │  │          
    │  ├─descriptions
    │  │  │  index.ts
    │  │  │  
    │  │  ├─src
    │  │  │      descriptions.vue
    │  │  │      
    │  │  └─types
    │  │          types.ts
    │  │          
    │  ├─echarts
    │  │  │  index.ts
    │  │  │  
    │  │  ├─data
    │  │  │      china.json
    │  │  │      
    │  │  ├─hook
    │  │  │      useEchart.ts
    │  │  │      
    │  │  └─src
    │  │          base-echars.vue
    │  │          
    │  ├─form
    │  │  │  index.ts
    │  │  │  
    │  │  ├─src
    │  │  │      hy-from.vue
    │  │  │      
    │  │  └─type
    │  │          index.ts
    │  │          
    │  ├─table
    │  │  │  index.ts
    │  │  │  
    │  │  ├─src
    │  │  │      table.vue
    │  │  │      
    │  │  └─type
    │  └─text-link
    │      │  index.ts
    │      │  
    │      └─src
    │              textlink.vue
    │              
    ├─components
    │  ├─nav-header
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          nav-header.vue
    │  │          user-info.vue
    │  │          
    │  ├─nav-menu
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          nav-menu.vue
    │  │          
    │  ├─page-content
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          page-content.vue
    │  │          
    │  ├─page-echars
    │  │  │  index.ts
    │  │  │  
    │  │  ├─src
    │  │  │      bar-echart.vue
    │  │  │      line-echart.vue
    │  │  │      map-echart.vue
    │  │  │      pie-echars.vue
    │  │  │      rose-echart.vue
    │  │  │      
    │  │  ├─type
    │  │  │      type.ts
    │  │  │      
    │  │  └─utiles
    │  │          coordinate-data.ts
    │  │          
    │  ├─page-model
    │  │  │  index.ts
    │  │  │  
    │  │  └─src
    │  │          page-model.vue
    │  │          
    │  └─page-search
    │      │  index.ts
    │      │  
    │      └─src
    │              page-search.vue
    │              
    ├─global
    │  │  index.ts
    │  │  
    │  └─register-properties
    │          register-properties.ts
    │          
    ├─hooks
    │      use-page-model.ts
    │      use-page-search.ts
    │      use-permission.ts
    │      
    ├─network
    │  │  axios-demo.ts
    │  │  index.ts
    │  │  
    │  ├─dashboard
    │  │      dashboard.ts
    │  │      
    │  ├─login
    │  │      login.ts
    │  │      type.ts
    │  │      
    │  ├─main
    │  │  └─system
    │  │          system.ts
    │  │          
    │  └─request
    │          config.ts
    │          index.ts
    │          
    ├─router
    │  │  index.ts
    │  │  
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.ts
    │      │  │      
    │      │  └─overview
    │      │          overview.ts
    │      │          
    │      ├─product
    │      │  ├─category
    │      │  │      category.ts
    │      │  │      
    │      │  └─goods
    │      │          goods.ts
    │      │          
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.ts
    │      │  │      
    │      │  └─list
    │      │          list.ts
    │      │          
    │      └─system
    │          ├─department
    │          │      department.ts
    │          │      
    │          ├─menu
    │          │      menu.ts
    │          │      
    │          ├─role
    │          │      role.ts
    │          │      
    │          └─user
    │                  user.ts
    │                  
    ├─store
    │  │  index.ts
    │  │  type.ts
    │  │  
    │  ├─analysis
    │  │      dashboard.ts
    │  │      type.ts
    │  │      
    │  ├─login
    │  │      login.ts
    │  │      type.ts
    │  │      
    │  └─main
    │      └─system
    │              system.ts
    │              type.ts
    │              
    ├─utils
    │      cache.ts
    │      date-format.ts
    │      map-menus.ts
    │      
    └─views
        ├─login
        │  │  login.vue
        │  │  
        │  ├─config
        │  │      account-config.ts
        │  │      phone-config.ts
        │  │      
        │  └─ctns
        │          login-account.vue
        │          login-panel.vue
        │          login-phone.vue
        │          
        ├─main
        │  │  main.vue
        │  │  
        │  ├─analysis
        │  │  ├─dashboard
        │  │  │      dashboard.vue
        │  │  │      
        │  │  └─overview
        │  │      │  overview.vue
        │  │      │  
        │  │      └─config
        │  │              dependencies.ts
        │  │              dev-dependencies.ts
        │  │              index.ts
        │  │              project-dir.ts
        │  │              technology-stacks.ts
        │  │              
        │  ├─product
        │  │  ├─category
        │  │  │      category.vue
        │  │  │      
        │  │  └─goods
        │  │      │  goods.vue
        │  │      │  
        │  │      └─config
        │  │              search.config.ts
        │  │              table.config.ts
        │  │              
        │  ├─story
        │  │  ├─chat
        │  │  │      chat.vue
        │  │  │      
        │  │  └─list
        │  │          list.vue
        │  │          
        │  └─system
        │      ├─department
        │      │      department.vue
        │      │      
        │      ├─menu
        │      │  │  menu.vue
        │      │  │  
        │      │  └─config
        │      │          table.config.ts
        │      │          
        │      ├─role
        │      │  │  role.vue
        │      │  │  
        │      │  └─config
        │      │          model.config.ts
        │      │          search.config.ts
        │      │          table.config.ts
        │      │          
        │      └─user
        │          │  user.vue
        │          │  
        │          └─config
        │                  model.config.ts
        │                  page.model.config.ts
        │                  search.config.ts
        │                  table.config.ts
        │                  
        └─not-found
                no-found.vue
`
