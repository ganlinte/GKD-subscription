import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      fastQuery: true,
      resetMatch: 'app',
      matchTime: 20000,
      forcedTime: 20000,
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: '@[text="以后再说"] + [text="优先体验"]',
      snapshotUrls: 'https://i.gkd.li/import/16918420',
    },
    {
      key: 2,
      name: '局部广告-书城-右侧悬浮红包广告',
      fastQuery: true,
      resetMatch: 'app',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: [
        {
          matches:
            '@ImageView < * < RelativeLayout < FrameLayout <(1,2) [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12716506',
            'https://i.gkd.li/i/17725414',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-优惠券弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '电商惊喜券',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          quickFind: true,
          matches:
            '@LynxFlattenUI[id=null][text=""][clickable=true] - [text="去逛商城"] -4 [text$="电商惊喜券"]',
          snapshotUrls: 'https://i.gkd.li/import/12910159',
        },
        {
          key: 1,
          name: '爆款好物一分购',
          quickFind: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id="android:id/content"][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/import/12878266',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-周末开红包',
      desc: '点击 X',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: [
        {
          matches:
            '@FlattenUIImage[index=parent.childCount.minus(1) ||index=parent.childCount.minus(2)] <n FrameLayout < * < * < * < * < * < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/import/16347298',
            'https://i.gkd.li/import/14383684',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-开启推送提醒',
      desc: '自动点击【取消】',
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: '@[text="取消"] < * -2 * > [text="开启推送提醒"]',
      snapshotUrls: 'https://i.gkd.li/i/17661722',
    },
    {
      key: 7,
      name: '全屏广告-限时会员福利',
      desc: '点击 X',
      fastQuery: true,
      resetMatch: 'app',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView -3 ViewGroup[childCount=8] > TextView[text="恭喜获得限时会员福利"]',
          snapshotUrls: 'https://i.gkd.li/import/15197509',
        },
        {
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView - ViewGroup[childCount=7] > TextView[text="恭喜获得限时会员福利"]',
          snapshotUrls: 'https://i.gkd.li/import/16346875',
        },
        {
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches:
            '@ImageView +2 TextView[text="恭喜获得限时会员福利"] <n ViewGroup[childCount=8]',
          snapshotUrls: 'https://i.gkd.li/import/16347254',
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-阅读中卡片广告',
      desc: '点击X',
      fastQuery: true,
      forcedTime: 3600000,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: [
        {
          key: 1,
          name: '卡片广告',
          anyMatches: [
            '@ImageView[visibleToUser=true] - LinearLayout <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view"]',
            '@ImageView[visibleToUser=true] < FrameLayout <3 ViewGroup[childCount=4] <n * <n * <n * <n * <n * <n  * <n * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view" || id="android:id/content"]',
            '@ImageView[visibleToUser=true] < FrameLayout - LinearLayout <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12908734', //1
            'https://i.gkd.li/import/13520314', //1
            'https://i.gkd.li/import/15294350', //1
            'https://i.gkd.li/i/17474877', //1
            'https://i.gkd.li/import/12716444', //2
            'https://i.gkd.li/i/17474881', //2
            'https://i.gkd.li/i/17565008', //3
          ],
        },
        {
          preKeys: 1,
          anyMatches: [
            '@TextView[text="关闭此条广告"]',
            '@TextView[text="关闭此广告"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/17793195', //1
            'https://i.gkd.li/i/17928194', //2,
          ],
        },
        {
          name: '卡片-关注作者',
          matches:
            '@ImageView[visibleToUser=true] + TextView[text="关注我，掌握书籍最新动态"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13399505',
            'https://i.gkd.li/import/14896809',
          ],
        },
        {
          name: '领金币',
          matches: '@ImageView < [id="com.dragon.read:id/parent"]',
          snapshotUrls: 'https://i.gkd.li/i/17474890',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-阅读中广告',
      desc: '点击【关闭】/【反馈-不感兴趣】',
      fastQuery: true,
      matchRoot: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: [
        {
          key: 1,
          name: '点击【关闭】',
          matches: '@[text="关闭"] - [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/import/13191156',
        },
        {
          key: 2,
          name: '点击【反馈】',
          matches: '@[text="反馈"][visibleToUser=true]',
          excludeMatches: [
            '@[text="关闭"] - [text="反馈"]', //优先【关闭】
            '[text$="秒后，继续阅读下一页"]', //等待
            '@[text="反馈"][visibleToUser=true][2=parent.childCount]', //插图
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13520160',
            'https://i.gkd.li/i/17468490',
            'https://i.gkd.li/i/17474896',
          ],
          exampleUrls: [
            'https://i.gkd.li/i/17564881', //等待
            'https://i.gkd.li/i/17689909', //插图
          ],
        },
        {
          preKeys: 2,
          key: 3,
          name: '点击【不感兴趣】',
          matches: '@TextView[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13520219',
            'https://i.gkd.li/import/13674550',
            'https://i.gkd.li/i/17461153',
            'https://i.gkd.li/i/17928168',
          ],
        },
        {
          key: 4,
          actionCdKey: 3,
          matches: [
            '[text="点击关闭广告并退出小说"][visibleToUser=true]',
            '[id="android:id/content"]',
          ],
          excludeMatches: '@[text="反馈"]', //优先【反馈】
          position: { right: 100, bottom: 300 },
          snapshotUrls: [
            'https://i.gkd.li/i/17474887',
            'https://i.gkd.li/i/17474889',
          ],
        },
      ],
    },
  ],
});
