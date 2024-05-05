import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuangxiangciweimao.novel',
  name: '刺猬猫阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: '[id="com.kuangxiangciweimao.novel:id/mTasksView"]',
      snapshotUrls: 'https://i.gkd.li/import/13056248',
    },
  ],
});
