import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.wireless',
  name: '阿里巴巴',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页-弹窗广告',
      fastQuery: true,
      activityIds: '.launch.home.V5HomeActivity',
      rules: [
        {
          matches: 'WebView >n View > Image[text*="FXa-124-124"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13683509',
            'https://i.gkd.li/import/13683510',
          ],
        },
      ],
    },
  ],
});
