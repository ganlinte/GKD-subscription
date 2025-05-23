import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dongqiudi.news',
  name: '懂球帝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.byted.pangle:id/tt_splash_skip_btn"||text^="跳过"&&id=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/12620568',
            'https://i.gkd.li/import/12620577',
            'https://i.gkd.li/import/12621997',
          ],
        },
        {
          fastQuery: true,
          name: '另一种倒计时广告', // 此广告要点击文字相邻的图片,如果直接点击文字会无反应或者触发广告跳转
          matches:
            '[id="com.dongqiudi.news:id/ad_skip_time"] + [id="com.dongqiudi.news:id/scale_iv"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12620583',
            'https://i.gkd.li/import/12621953',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      activityIds: 'com.dongqiudi.news.MainActivity',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="青少年模式"] + [id="com.dongqiudi.news:id/tv_know"]',
      snapshotUrls: 'https://i.gkd.li/import/12621980',
    },
    {
      key: 2,
      name: '更新提示',
      activityIds: 'com.dongqiudi.news.DownloadActivity',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text*="新版本"] +3 TextView[text="下次提醒"]',
      snapshotUrls: 'https://i.gkd.li/import/12620586',
    },
    {
      enable: false,
      key: 4,
      name: '局部广告-首页信息流广告',
      desc: '点击广告卡片x关闭按钮-关闭反馈理由弹窗',
      activityIds: 'com.dongqiudi.news.MainActivity',
      fastQuery: true,
      rules: [
        {
          preKeys: [1, 2],
          name: '首页信息流广告-反馈理由',
          matches:
            'TextView[text="诱导点击"][id="com.dongqiudi.news:id/text_item"]',
          snapshotUrls: 'https://i.gkd.li/import/12620656',
        },
        {
          key: 1,
          matches:
            'TextView[id="com.dongqiudi.news:id/ads_label"] +(n) ImageView[id="com.dongqiudi.news:id/feedback_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12620654',
        },
        {
          key: 2,
          matches:
            'TextView[id="com.dongqiudi.news:id/ads_title"] +(2) RelativeLayout > ImageView[id="com.dongqiudi.news:id/feedback_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12620788',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-首页-广告弹窗',
      desc: '点击底部【x】关闭',
      activityIds: 'com.dongqiudi.news.MainActivity',
      fastQuery: true,
      rules: '[id="com.dongqiudi.news:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13260467',
    },
    {
      key: 8,
      name: '全屏广告-数据页弹窗广告',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.dongqiudi.news.MainActivity',
      rules: [
        {
          name: '腾讯广告SDK',
          matches:
            'FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
          snapshotUrls: 'https://i.gkd.li/import/13626900',
        },
        {
          name: '快手广告磁力智投SDK',
          matches:
            'ViewGroup[childCount=1] > @ViewGroup[clickable=true][childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13627105',
        },
        {
          name: '字节广告穿山甲SDK-1',
          matches: 'View[text="反馈"] -2 @View > Image',
          snapshotUrls: 'https://i.gkd.li/import/13627106',
        },
        {
          name: '字节广告穿山甲SDK-2', //合并key3
          matches: 'FrameLayout[desc^="webview-close"] > View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12620588',
        },
      ],
    },
  ],
});
