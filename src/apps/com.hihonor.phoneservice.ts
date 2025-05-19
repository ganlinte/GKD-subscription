import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.phoneservice',
  name: '我的荣耀',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.hihonor.phoneservice.OpenScreenAdActivity',
          matches:
            'TextView[id="com.hihonor.phoneservice:id/start_skip_count_down"]',
          snapshotUrls: 'https://i.gkd.li/import/14896804',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '全屏广告-请求位置权限提示信息',
      activityIds: 'com.hihonor.phoneservice.main.MainActivity',
      rules:
        '[text^="开启定位权限"] + [id="com.hihonor.phoneservice:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12783134',
    },
  ],
});
