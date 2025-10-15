import { defineConfigWithTheme } from 'vitepress'
// @ts-ignore
import mdItCustomAttrs from 'markdown-it-custom-attrs'
export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  videoBanner: boolean
  name: string
  welcomeText: string
  motto: string[]
  social: { icon: string; url: string }[]

  //spine
  spineVoiceLang: 'zh' | 'jp'

  //footer
  footerName: string
  poweredList: { name: string; url: string }[]

  //gitalk
  clientID: string
  clientSecret: string
  repo: string
  owner: string
  admin: string[]
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // gitalk
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
    // bluearchive font
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka/Blueaka.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka_Bold/Blueaka_Bold.css',
      },
    ],
    // 图片灯箱
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
      },
    ],
  ],
  ignoreDeadLinks: true,
  // 生成站点地图
  // sitemap: {
    // hostname: 'https://www.112227.xyz/',
  // },
  title: "XiaoBei's 部落格",
  description: "XiaoBei's 部落格",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    videoBanner: false,
    name: "XiaoBei's 部落格",
    welcomeText: 'Hello, World',
    motto: ['和你的日常，就是奇迹', '何気ない日常で、ほんの少しの奇跡を見つける物語。'],
    social: [
      { icon: 'github', url: 'https://github.com/Xiaonorth/' },
      { icon: 'bilibili', url: 'https://b23.tv/s6Lkb8O' },
      { icon: 'qq', url: 'https://qm.qq.com/q/Twq4muSv2o' },
      { icon: 'coolapk', url: 'http://www.coolapk.com/u/31227138' },
    ],

    //spine语音配置，可选zh/jp
    spineVoiceLang: 'jp',

    //footer配置
    footerName: 'Sensei',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'GitHub Pages', url: 'https://docs.github.com/zh/pages' },
    ],

    //gitalk配置
    clientID: 'Ov23liOc0M2l43ZrFsf8',
    clientSecret: '310b8ca6eeb79d2c90069ea17e4a7db8ae2757eb',
    repo: 'gitalk_xiaobei',
    owner: 'Xiaonorth',
    admin: ['Xiaonorth'],
  },
  markdown: {
    theme: 'solarized-dark',
    lineNumbers: true,
    math: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      })
    },
  },
})
