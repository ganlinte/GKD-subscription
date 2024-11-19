import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuangxiangciweimao.novel',
  name: '刺猬猫阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
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
      fastQuery: true,
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
      fastQuery: true,
      rules:
        '@[id="com.kuangxiangciweimao.novel:id/imgclose"] - [vid="img_activity"]',
      snapshotUrls: 'https://i.gkd.li/import/16347338',
    },
    {
      key: 3,
      name: '青少年模式',
      desc: '点击 我知道了',
      actionMaximum: 1,
      fastQuery: true,
      resetMatch: 'app',
      activityIds:
        'com.kuangxiangciweimao.novel.activity.frame.MainFrameActivity',
      rules: [
        {
          matches: [
            '[text="我知道了"]',
            '[id="com.kuangxiangciweimao.novel:id/nav_btn"]',
          ],
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/17158995',
    },
    {
      key: 4,
      name: '全屏广告-绑定账号',
      desc: '点击【以后】',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="绑定账号"]', '@[text="以后"] + [text="去绑定"]'],
          snapshotUrls: 'https://i.gkd.li/i/17789233',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-签到',
      desc: '点击【签到】',
      actionCdKey: 1,
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: '.activity.frame.MainFrameActivity',
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches:
            '[id="com.kuangxiangciweimao.novel:id/signBtn"][text="签到"]',
          snapshotUrls: 'https://i.gkd.li/i/17554248',
        },
        {
          preKeys: 0,
          action: 'clickCenter',
          matches:
            '[id="com.kuangxiangciweimao.novel:id/signBtn"][text="每周福利"]',
          snapshotUrls: 'https://i.gkd.li/i/17686396',
        },
      ],
    },
    {
      key: 30,
      name: '功能类-APP自动点击退出',
      desc: '点击 确定',
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds:
        'com.kuangxiangciweimao.novel.activity.frame.MainFrameActivity',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '[id="com.kuangxiangciweimao.novel:id/dia_message"][text="是否退出？"]',
            '[id="com.kuangxiangciweimao.novel:id/pos_btn"][text="确定"]',
          ],
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/15294427',
    },
  ],
});
