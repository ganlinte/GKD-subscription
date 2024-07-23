import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.dragon.read.update.b',
      rules: '@[text="以后再说"] + [text="优先体验"]',
      snapshotUrls: 'https://i.gkd.li/import/12716477',
    },
    {
      key: 2,
      name: '局部广告-书城-右侧悬浮红包广告',
      activityIds: [
        'com.dragon.read.pages.main.MainFragmentActivity',
        'com.dragon.read.ad.openingscreenad.OpeningScreenADActivity',
      ],
      rules: [
        {
          matches:
            '[id="android:id/content"] > FrameLayout[childCount=1] > RelativeLayout[childCount=1] >2 ImageView[id!=null][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12716506', //relativeLayout和ImageView之间是RelativeLayoutRelativeLayout
            'https://i.gkd.li/import/13318796', //relativeLayout和ImageView之间是ViewGroup
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-书城-优惠券弹窗',
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
      name: '全屏广告-书城-周末开红包',
      desc: '点击 X',
      quickFind: true,
      matchTime: 100000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: [
        {
          matches:
            'FlattenUIText[text="开心收下"] +n FlattenUIImage[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/14383684',
        },
        {
          matches:
            'FlattenUIImage[name="com.lynx.tasm.ui.image.FlattenUIImage"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/16347298',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-书城-动画小说',
      quickFind: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: [
        {
          matches: '@ImageView - RelativeLayout < LinearLayout[childCount=2]',
          snapshotUrls: 'https://i.gkd.li/import/14813934',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-书城-开启推送提醒',
      desc: '自动点击【取消】',
      enable: false,
      activityIds: 'com.dragon.read.widget.ConfirmDialogBuilder',
      rules: '@[text="取消"] < * -2 * > [text="开启推送提醒"]',
      snapshotUrls: 'https://i.gkd.li/import/12716592',
    },
    {
      key: 7,
      name: '全屏广告-限时会员福利',
      desc: '点击 X',
      quickFind: true,
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
      enable: false,
      quickFind: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: [
        {
          matches:
            '@ImageView - LinearLayout[childCount=3] > FrameLayout[childCount=1] > TextView[text!=""]',
          snapshotUrls: [
            'https://i.gkd.li/import/12908734',
            'https://i.gkd.li/import/13520314', //有唯一ID
            'https://i.gkd.li/import/15294350',
          ],
        },
        {
          matches:
            'ViewGroup[childCount=4] > @FrameLayout[id!=null][clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12716444',
        },
        {
          name: '卡片-关注作者',
          matches: '@ImageView + TextView[text="关注我，掌握书籍最新动态"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13399505',
            'https://i.gkd.li/import/14896809',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-阅读中广告',
      desc: '点击右上角【关闭】',
      quickFind: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: 'TextView[text="广告"] +2 Button[id="com.dragon.read:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13191156',
    },
    {
      key: 13,
      name: '分段广告-阅读中视频广告',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点击反馈按钮',
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          // 有反馈原规则'[text="反馈"][clickable=true]'不触发删除[clickable=true]才能点击；有反馈原规则点击屏外节点，导致无法执行下一步，遂添加[visibleToUser=true]
          matches: '[text="反馈"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13520160',
            'https://i.gkd.li/import/13843155',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击不感兴趣',
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: '@ViewGroup[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13520219',
            'https://i.gkd.li/import/13674550',
          ],
        },
        {
          key: 2,
          name: '点击下一页',
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches:
            '[id="com.dragon.read:id/readFlowNonRoundEntranceLayout"] [id="com.dragon.read:id/relativeRight"]',
          snapshotUrls: 'https://i.gkd.li/import/13674556',
        },
        {
          key: 3,
          name: '点击反馈',
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: '[text="看视频免广告"] - [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/import/13816453',
        },
        {
          preKeys: 3,
          key: 4,
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: '[text="举报"] <2 ViewGroup - ViewGroup[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13816454',
        },
      ],
    },
  ],
});
