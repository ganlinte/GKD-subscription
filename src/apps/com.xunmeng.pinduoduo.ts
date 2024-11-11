import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击【X】',
      fastQuery: true,
      rules: [
        {
          activityIds: '.activity.NewPageActivity',
          matches: '@ImageButton - LinearLayout > [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/import/12642017',
        },
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@Image + Image +n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13195645',
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-商品详情页视频讲解窗口',
      fastQuery: true,
      activityIds: '.activity.NewPageActivity',
      rules:
        '@TextView < [id="com.xunmeng.pinduoduo:id/iv_float_window_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13178326',
    },
    {
      key: 12,
      name: '局部广告-多多视频',
      desc: '点击【X】',
      fastQuery: true,
      activityIds: '.ui.activity.HomeActivity',
      rules: [
        {
          name: '左侧',
          matches:
            '@TextView[id=null][clickable=true] + Image[text="webp"][id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12642058',
        },
        {
          name: '右侧',
          matches:
            '@TextView[id=null][clickable=true] + View > Image[text="webp"]',
          snapshotUrls: 'https://i.gkd.li/import/12642058',
        },
      ],
    },
    {
      key: 20,
      name: '全屏广告-优惠卷弹窗',
      desc: '点击【X】',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.miui.home.launcher.Launcher',
          matches:
            'ImageView - @ImageView < RelativeLayout[childCount=2] < FrameLayout < FrameLayout <2 FrameLayout[parent=null] ',
          snapshotUrls: 'https://i.gkd.li/import/12642015',
        },
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView < ViewGroup[clickable=true][visibleToUser=true] < ViewGroup + ViewGroup >n [text="开心收下"]',
          snapshotUrls: 'https://i.gkd.li/import/13761182',
        },
        {
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text="百亿补贴"] > View > View > @View[clickable=true] +n [text^="立即领取"]',
          snapshotUrls: 'https://i.gkd.li/import/13669963',
        },
        {
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'View[childCount=1] > Button[text="关闭弹窗"][id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642053',
        },
      ],
    },
    {
      key: 21,
      name: '全屏广告-免单活动',
      desc: '点击【X】',
      fastQuery: true,
      activityIds: '.activity.NewPageActivity',
      rules: [
        {
          name: '免单特权',
          matches: [
            'TextView[text="免单特权"]',
            '@Image[text="webp"] < View <7 View <2 View < View + View[id="portal-main-content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/12642032',
        },
        {
          name: '抽免单',
          matches:
            'TextView[text="再拼一单，抽免单"] -2 @Image[text="webp"] < View < View + View[id="portal-main-content"]',
          snapshotUrls: 'https://i.gkd.li/import/12642038',
        },
      ],
    },
    {
      key: 22,
      name: '全屏广告-红包',
      desc: '点击【X】',
      fastQuery: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches:
            '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup > ImageView + ViewGroup > ImageView +(2) FrameLayout > TextView[text="专属现金红包"]',
          snapshotUrls: 'https://i.gkd.li/import/12642023',
        },
        {
          matches:
            '@ImageView[clickable=true] < ViewGroup + ViewGroup >n [text="送你大额现金"||text="现金"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13625441',
            'https://i.gkd.li/import/14879427',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '全屏广告-下单成功',
      desc: '点击【X】',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@[text="关闭弹窗"][clickable=true] + [text$="下单成功"]',
          snapshotUrls: 'https://i.gkd.li/import/13308175',
        },
        {
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
          matches: '[id="com.xunmeng.pinduoduo:id/pdd"] >7 [text="关闭弹窗"]',
          snapshotUrls: 'https://i.gkd.li/import/13927594',
        },
      ],
    },
    {
      key: 24,
      name: '全屏广告-多多视频-每日签到',
      desc: '点击【X】',
      fastQuery: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches:
            '@ImageView[id=null] < ViewGroup < ViewGroup +(2) ViewGroup >(n) [text^="每日签到"]',
          snapshotUrls: 'https://i.gkd.li/import/12700615',
        },
        {
          matches:
            'ViewGroup[childCount=5] > @ViewGroup[index=0][clickable=true] +3 ViewGroup >2 [text="分享现金红包至拼小圈"]',
          snapshotUrls: 'https://i.gkd.li/import/13804657',
        },
      ],
    },
    {
      key: 25,
      name: '全屏广告-爆款限时直降',
      desc: '点击【X】',
      fastQuery: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches:
            '@ImageView < ViewGroup < ViewGroup + ViewGroup >n TextView[text="去抢购"]',
          snapshotUrls: 'https://i.gkd.li/import/15212017',
        },
      ],
    },
    {
      key: 30,
      name: '功能类-多多视频-划到广告自动跳过',
      desc: '点击返回自动刷新，从而跳过广告',
      fastQuery: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches: [
            'TextView[text="正在直播"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13446291',
        },
        {
          matches: [
            'TextView[text="查看更多低价商品"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13791119',
        },
      ],
    },
    {
      key: 31,
      name: '功能类-多多视频-每日自动签到',
      desc: '',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        {
          key: 0,
          name: '自动签到',
          action: 'clickCenter',
          matches: ['FrameLayout > TextView[text="领取今日现金"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/13201422', //com.xunmeng.pinduoduo.ui.activity.HomeActivity
            'https://i.gkd.li/import/13372677', //com.bbk.launcher2.Launcher
          ],
        },
        {
          key: 1,
          preKeys: 0,
          name: '在签到后关闭弹窗',
          action: 'clickCenter',
          matches: 'FrameLayout > TextView[text="明日继续来领"]',
          snapshotUrls: 'https://i.gkd.li/import/13205634',
        },
      ],
    },
    {
      key: 32,
      name: '功能类-自动点击原图',
      fastQuery: true,
      activityIds:
        'com.xunmeng.pinduoduo.app_album.album.MultiImageSelectorActivity',
      rules: '@[text="原图"][checked=false] + [text="发送"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13925378', // checked=false
        'https://i.gkd.li/import/13925380', // checked=true
      ],
    },
  ],
});
