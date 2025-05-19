import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qihoo.srouter.n300',
  name: '360家庭防火墙',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '[vid="app_update_later_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13800011',
    },
  ],
});
