import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.midea.vm.washer',
  name: 'U净',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13407199',
    },
    {
      key: 1,
      name: '全屏广告-首页-领劵',
      desc: '关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
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
    {
      key: 2,
      name: '局部广告-首页-左侧领劵',
      desc: '关闭',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.midea.vm.washer.ui.activity.IndexActivity',
          matches: 'ImageView[id="com.midea.vm.washer:id/closeButton"]',
          snapshotUrls: 'https://i.gkd.li/import/14818918',
        },
      ],
    },
  ],
});
