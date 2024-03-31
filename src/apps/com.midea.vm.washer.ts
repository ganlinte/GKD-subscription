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
      name: '全屏广告-首页-领劵',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.midea.vm.washer.ui.activity.IndexActivity',
      rules: [
        {
          matches: 'ImageView[id="com.midea.vm.washer:id/close_img"]',
          snapshotUrls: 'https://i.gkd.li/import/14661498',
        },
        {
          matches:
            '@ImageView <2 * <2 FrameLayout[id="com.midea.vm.washer:id/bootstrap_weex_layout"]',
          snapshotUrls: 'https://i.gkd.li/import/14814072',
        },
      ],
    },
  ],
});
