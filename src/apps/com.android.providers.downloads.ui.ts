import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.providers.downloads.ui',
  name: '下载管理',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '@[text="以后再说"] + [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13631769',
    },
  ],
});
