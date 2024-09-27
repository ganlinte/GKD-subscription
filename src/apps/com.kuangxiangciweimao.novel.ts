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
    {
      key: 1,
      name: '局部广告-阅读中-加入书架',
      desc: '点击 X',
      quickFind: true,
      activityIds:
        'com.kuangxiangciweimao.novel.activity.bookshelf.reader.ReaderActivity4',
      rules: 'ImageView[id="com.kuangxiangciweimao.novel:id/closeImg"]',
      snapshotUrls: 'https://i.gkd.li/import/15397865',
    },
    {
      key: 2,
      name: '全屏广告-阅读-活动弹窗',
      desc: '点击 X',
      activityIds:
        'com.kuangxiangciweimao.novel.activity.frame.MainFrameActivity',
      actionMaximum: 1,
      quickFind: true,
      rules:
        '@ImageView[id="com.kuangxiangciweimao.novel:id/imgclose"] - ImageView',
      snapshotUrls: 'https://i.gkd.li/import/16347338',
    },
    {
      key: 3,
      name: '青少年模式',
      desc: '点击 我知道了',
      actionMaximum: 1,
      quickFind: true,
      resetMatch: 'app',
      activityIds:
        'com.kuangxiangciweimao.novel.activity.frame.MainFrameActivity',
      rules: '[id="com.kuangxiangciweimao.novel:id/nav_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/17158995',
    },
    {
      key: 30,
      name: '功能类-APP自动点击退出(存在延迟双击现象)',
      desc: '点击 确定',
      quickFind: true,
      resetMatch: 'app',
      activityIds:
        'com.kuangxiangciweimao.novel.activity.frame.MainFrameActivity',
      rules: 'TextView[id="com.kuangxiangciweimao.novel:id/pos_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/15294427',
    },
  ],
});
