import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '局部广告-阅读-底部卡片广告',
      desc: '点击X',
      fastQuery: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: [
        {
          key: 1,
          actionDelay: 200,
          matches:
            'ImageView < @ViewGroup <3 ViewGroup[childCount=5] <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id="com.phoenix.read:id/root_view"]',
          snapshotUrls: 'https://i.gkd.li/i/27986281',
        },
        {
          preKeys: 1,
          matches: 'TextView[text="关闭此广告"]',
          snapshotUrls: 'https://i.gkd.li/i/28024153',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-阅读-视频广告',
      desc: '滑动翻页',
      fastQuery: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: [
        {
          matches: '[text="点击关闭广告并退出小说"][visibleToUser=true]',
          excludeMatches: '[text$="秒后，继续阅读下一页"]',
          forcedTime: 3600000,
          action: 'swipe',
          swipeArg: {
            start: { x: 'screenWidth*0.8', y: 'screenHeight/2' },
            end: { x: 'screenWidth*0.2', y: 'screenHeight/2' },
            duration: 300,
          },
          snapshotUrls: 'https://i.gkd.li/i/27988263',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/27988163',
            'https://i.gkd.li/i/28187435', //前一页
            'https://i.gkd.li/i/28187442', //后一页
          ],
        },
      ],
    },
  ],
});
