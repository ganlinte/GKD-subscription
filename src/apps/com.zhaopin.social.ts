import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhaopin.social',
  name: '智联招聘',
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: 'com.zhaopin.social.my.setting.AboutUsActivity',
      rules:
        '[id="com.zhaopin.social:id/update"] + [id="com.zhaopin.social:id/ignore"]',
      snapshotUrls: ['https://i.gkd.li/import/12706186'],
    },
    {
      key: 2,
      name: '全屏广告-我的页面-banner广告',
      activityIds: 'com.zhaopin.social.homepage.ZSC_MainTabActivity',
      rules: '[id="com.zhaopin.social:id/rl_banner_close"][clickable=true]',
      snapshotUrls: ['https://i.gkd.li/import/12706181'],
    },
    {
      key: 3,
      name: '全屏广告-社区-弹窗广告',
      activityIds: ['com.zhaopin.social.homepage.ZSC_MainTabActivity'],
      rules:
        'ImageView[clickable=true&&focusable=true] < FrameLayout + FrameLayout > ImageView[clickable=false&&focusable=false]',
      snapshotUrls: 'https://i.gkd.li/import/13063442',
    },
    {
      key: 4,
      name: '全屏广告-消息-开启消息通知',
      desc: '自动点击关闭',
      enable: false,
      fastQuery: true,
      activityIds: ['com.zhaopin.social.homepage.ZSC_MainTabActivity'],
      rules: '[id="com.zhaopin.social:id/message_pushlayout_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13063427',
    },
  ],
});
