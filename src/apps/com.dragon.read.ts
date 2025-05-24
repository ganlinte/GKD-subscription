import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
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
      activityIds: '.pages.main.MainFragmentActivity',
      fastQuery: true,
      rules: [
        {
          name: '电商惊喜券',
          matches:
            '@LynxFlattenUI[id=null][text=""][clickable=true] - [text="去逛商城"] -4 [text$="电商惊喜券"]',
          snapshotUrls: 'https://i.gkd.li/import/12910159',
        },
        {
          name: '爆款好物一分购',
          matches:
            '@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id="android:id/content"][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/import/12878266',
        },
        {
          name: '限时会员福利',
          matches:
            '@ImageView[clickable=true] -3 ViewGroup >n TextView[text="恭喜获得限时会员福利"]',
          snapshotUrls: 'https://i.gkd.li/i/18553545',
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
      activityIds: '.pages.main.MainFragmentActivity',
      forcedTime: 20000,
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
      key: 5,
      name: '全屏广告-广告弹窗',
      desc: '【X】',
      fastQuery: true,
      rules: [
        {
          activityIds: '.pages.main.MainFragmentActivity',
          matches: '@ImageView <2 LinearLayout < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18124360',
            'https://i.gkd.li/i/18124367',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '通知提示-开启推送提醒',
      desc: '自动点击【取消】',
      fastQuery: true,
      activityIds: '.pages.main.MainFragmentActivity',
      rules: '@[text="取消"] < * -2 * > [text="开启推送提醒"]',
      snapshotUrls: 'https://i.gkd.li/i/17661722',
    },
    {
      key: 11,
      name: '局部广告-阅读-卡片广告',
      desc: '点击X',
      fastQuery: true,
      activityIds: '.reader.ui.ReaderActivity',
      rules: [
        {
          name: '卡片广告',
          forcedTime: 3600000, //1小时
          anyMatches: [
            '@ImageView[visibleToUser=true] < FrameLayout <3 ViewGroup[childCount=4] <n * <n * <n * <n * <n * <n  * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view"]',
            '@ImageView[visibleToUser=true] < FrameLayout <3 ViewGroup[childCount=4] <n * <n * <n * <n * <n * <n  * <n * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view"]',
          ],
          excludeMatches: ['TextView[text="目录"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/12716444', //1
            'https://i.gkd.li/i/17474881', //2
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/20340317', //卡片广告关闭按钮和听书按钮重叠会误触
          ],
        },
        {
          key: 1,
          name: '底部卡片广告',
          anyMatches: [
            '@ImageView - LinearLayout <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view"]',
            '@ImageView < FrameLayout - LinearLayout <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id="com.dragon.read:id/root_view"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12908734', //1
            'https://i.gkd.li/import/13520314', //1
            'https://i.gkd.li/import/15294350', //1
            'https://i.gkd.li/i/17474877', //1
            'https://i.gkd.li/i/17565008', //2
          ],
        },
        {
          preKeys: 1,
          matches: 'TextView[text~="(?is)关闭此.*广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17928194', //关闭此广告
            'https://i.gkd.li/i/17793195', //关闭此条广告
          ],
        },
        {
          name: '卡片-关注作者',
          matches: '@ImageView + TextView[text="关注我，掌握书籍最新动态"]',
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
        {
          name: '免广告权益',
          matches: '@ImageView - TextView[text="免广告权益"]',
          snapshotUrls: 'https://i.gkd.li/i/19937082',
        },
        {
          name: '限时会员福利',
          matches: '@ImageView + View + TextView[text="恭喜获得限时会员福利"]',
          snapshotUrls: 'https://i.gkd.li/i/19937239',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-阅读-视频广告',
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
            'TextView[text$="秒后，继续阅读下一页"]', //等待
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
          actionDelay: 100,
          matches: '@TextView[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13520219',
            'https://i.gkd.li/import/13674550',
            'https://i.gkd.li/i/17461153',
            'https://i.gkd.li/i/17928168',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-阅读-章节间图片广告',
      desc: '自动点击右下方空白处翻页，翻页模式【上下】无法使用',
      fastQuery: true,
      forcedTime: 3600000, //1小时
      rules: [
        {
          matches: ['[id="android:id/content"]'],
          anyMatches: [
            'UISvg +n FlattenUIText[text^="¥"][visibleToUser=true]',
            '[text="点击关闭广告并退出小说" || text="去抢购" || text="去领取"][visibleToUser=true]',
            'TextView[text~="(?is)全[0-9]+集"] <2 ViewGroup + TextView[text="看全集"][visibleToUser=true]',
          ],
          excludeMatches: '[text="反馈"]', //翻页时容易误触
          position: { right: 100, bottom: 300 },
          snapshotUrls: [
            'https://i.gkd.li/i/17941812', //¥ 单判断容易与卡片广告冲突
            'https://i.gkd.li/i/17967442', //¥
            'https://i.gkd.li/i/17474887', //去领取/点击关闭广告并退出小说
            'https://i.gkd.li/i/17474889', //去领取/点击关闭广告并退出小说
            'https://i.gkd.li/i/17932302', //去领取
            'https://i.gkd.li/i/18124417', //去抢购
            'https://i.gkd.li/i/20279981', //看全集
          ],
        },
      ],
    },
    {
      key: 14,
      name: '局部广告-阅读-菜单右侧图书福利浮窗',
      desc: '点击X',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@ImageView - ImageView < * < * < FrameLayout + LinearLayout > LinearLayout > TextView[text="目录"]',
          snapshotUrls: 'https://i.gkd.li/i/20340317',
        },
      ],
    },
  ],
});
