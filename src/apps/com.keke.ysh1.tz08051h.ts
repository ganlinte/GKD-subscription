import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.keke.ysh1.tz08051h',
  name: '可可影视',
  groups: [
    {
      key: 1,
      name: '全屏广告-开屏提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.salmon.film.main.ui.MainActivity'],
      rules: [
        {
          key: 1,
          name: '网址更新',
          fastQuery: true,
          matches:
            'TextView[text="可可影视"] < LinearLayout >n @TextView[text*="知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/13548412',
        },
      ],
    },
  ],
});
