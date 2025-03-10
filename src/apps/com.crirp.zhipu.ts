import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.crirp.zhipu',
  name: '智谱',
  groups: [
    {
      name: '开屏广告',
      key: 1,
      enable: true,
      matchTime: 10000,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13725305',
        },
      ],
    },
    {
      name: '全屏广告-首页-今日要闻-不再提示',
      key: 2,
      desc: '【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可',
      enable: false,
      fastQuery: true,
      activityIds: 'com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity',
      rules: [
        {
          matches: '[id$="/cancel_tv"]',
          snapshotUrls: 'https://i.gkd.li/import/13725337',
        },
      ],
    },
    {
      name: '全屏广告-首页-今日要闻-关闭',
      key: 3,
      desc: '【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可',
      enable: false,
      fastQuery: true,
      activityIds: 'com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity',
      rules: [
        {
          matches: '[id$="/tv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13725337',
        },
      ],
    },
  ],
});
