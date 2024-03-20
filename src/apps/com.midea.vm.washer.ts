import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.midea.vm.washer',
  name: 'U净',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13407199',
    },
    {
      key: 1,
      name: '全屏广告-首页',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          name: '领劵',
          activityIds: 'com.midea.vm.washer.ui.activity.IndexActivity',
          matches: 'ImageView[id="com.midea.vm.washer:id/close_img"]',
          snapshotUrls: 'https://i.gkd.li/import/14661498',
        },
      ],
    },
  ],
});
