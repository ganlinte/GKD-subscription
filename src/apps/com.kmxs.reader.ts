import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kmxs.reader',
  name: '七猫免费小说',
  groups: [
    {
      key: 0,
      name: '青少年模式',
      activityIds: 'com.kmxs.reader.home.ui.HomeActivity',
      rules: '[id="com.kmxs.reader:id/young_dialog_close"]',
    },
    {
      key: -2,
      name: '更新提示',
      activityIds: 'com.km.app.update.UpdateVersionV2Activity',
      rules: '[id="com.kmxs.reader:id/tv_update_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12641338',
    },
    {
      key: 2,
      name: '局部广告-阅读页面底部广告',
      activityIds: 'org.geometerplus.android.fbreader.FBReader',
      rules:
        '[id="com.kmxs.reader:id/ll_ad_native_banner"] > [id="com.kmxs.reader:id/iv_ad_direct_close"]',
      snapshotUrls: ['https://i.gkd.li/import/12640296'],
    },
    {
      key: 3,
      name: '全屏广告-阅读结束后显示的广告',
      fastQuery: true,
      activityIds: 'org.geometerplus.android.fbreader.FBReader',
      rules: [
        {
          key: 0,
          matches: [
            '[text$="广告"]',
            '[id="com.kmxs.reader:id/ad_direct_close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12640303',
            'https://i.gkd.li/import/13362269',
            'https://i.gkd.li/import/13362272',
          ],
        },
        {
          key: 1,
          preKeys: 0,
          matches: [
            '[text="直接关闭"]',
            '[id="com.kmxs.reader:id/bubble_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/17354753',
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '全屏广告-签到弹窗',
      activityIds: 'org.geometerplus.android.fbreader.FBReader',
      rules:
        '@TextView[id=null] < View +(2) TextView[text^="已连签"&&text*="天"]',
      snapshotUrls: ['https://i.gkd.li/import/12640320'],
    },
    {
      enable: false,
      key: 99,
      name: '局部广告-右侧悬浮红包',
      activityIds: 'com.kmxs.reader.home.ui.HomeActivity',
      rules: {
        matches:
          '[id="com.kmxs.reader:id/red_packet_img"] + [id="com.kmxs.reader:id/close_red_packet"]',
        action: 'clickCenter',
      },
      snapshotUrls: ['https://i.gkd.li/import/12640287'],
    },
    {
      key: 8,
      name: '局部广告-书架顶部广告',
      fastQuery: true,
      activityIds: 'com.kmxs.reader.home.ui.HomeActivity',
      rules: '[id="com.kmxs.reader:id/bookshelf_book_item_direct_close"]',
      snapshotUrls: ['https://i.gkd.li/import/13489942'],
    },
    {
      enable: false,
      key: 5,
      name: '全屏广告-【字节】视频广告',
      desc: '此规则有概率误触或失效，请谨慎选择开启。',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: [
        {
          key: 0,
          name: '点击跳过',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13459157',
            'https://i.gkd.li/import/13459172',
            'https://i.gkd.li/import/13459174',
          ],
        },
        {
          key: 1,
          name: '点击【x】',
          fastQuery: true,
          matches:
            '[id="com.byted.pangle:id/tt_reward_full_count_down_after_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13459182',
        },
      ],
    },
    {
      enable: false,
      key: 6,
      name: '全屏广告-【百度】全屏广告',
      desc: '此规则有概率误触或失效，请谨慎选择开启。',
      activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
      rules: [
        {
          key: 0,
          name: '点击【x】',
          matches:
            'RelativeLayout > RelativeLayout + ImageView + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13472957',
        },
      ],
    },
    {
      enable: false,
      key: 7,
      name: '全屏广告-【腾讯】全屏广告',
      desc: '此规则有概率误触或失效，请谨慎选择开启。',
      activityIds: 'com.qq.e.ads.PortraitADActivity',
      rules: [
        {
          key: 0,
          name: '点击【x】',
          matches:
            'FrameLayout[childCount=10] > FrameLayout[index=3] > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13472955',
        },
      ],
    },
  ],
});
