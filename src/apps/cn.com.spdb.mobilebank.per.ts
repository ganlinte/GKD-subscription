import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.spdb.mobilebank.per',
  name: '浦发银行',
  groups: [
    {
      key: 1,
      name: '权限提示-消息中心-系统通知请求',
      desc: '自动点击关闭。',
      fastQuery: true,
      activityIds: '.activity.web.stage.StageCommonWebActivity',
      rules: '@Image < View - TextView[text="去开启"]',
      snapshotUrls: 'https://i.gkd.li/import/13458535',
    },
  ],
});
