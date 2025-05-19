import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.wallet',
  name: '钱包',
  groups: [
    {
      key: 1,
      name: '全屏广告-通知权限授权弹窗',
      activityIds: 'com.vivo.wallet.bookkeep.activity.BookKeepMainActivity',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: '@Button[text*="取消"]',
          snapshotUrls: 'https://i.gkd.li/import/13440881',
        },
      ],
    },
  ],
});
