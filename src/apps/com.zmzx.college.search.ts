import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  groups: [
    {
      enable: false,
      key: 1,
      name: '全屏广告-首页-推送通知',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: 'ImageView[id="com.zmzx.college.search:id/siv_dialog_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12867853',
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: [
            'com.zmzx.college.search.activity.main.activity.MainActivity',
            'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
          ],
          matches: 'ImageView[id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12867751',
            'https://i.gkd.li/import/12894813',
          ],
        },
        {
          key: 1,
          name: '快手广告-1',
          activityIds: 'com.bbk.launcher2.Launcher',
          matches:
            '[text="广告"] <2 ViewGroup -3 ViewGroup > @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13346628',
        },
        {
          key: 2,
          name: '快手广告-2',
          activityIds:
            'com.zmzx.college.search.activity.main.activity.MainActivity',
          matches: [
            'ViewGroup > ViewGroup > ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup > ViewGroup > @ViewGroup[childCount=1][clickable=true] > ImageView[childCount=0]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13451304',
        },
        {
          key: 3,
          name: '字节广告-1',
          activityIds:
            'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
          matches:
            '[id="com.zmzx.college.search:id/ad_flag_source_layout"] + [id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13522998',
        },
        {
          key: 4,
          name: '字节广告-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches: '@Image < View +3 View > View > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13523288',
        },
        {
          key: 5,
          name: '字节广告-3',
          fastQuery: true,
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches:
            '@[clickable=true] > [id="com.zmzx.college.search:id/tt_reward_full_count_down_after_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12893408',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
          matches: '[vid="close_m_image_left_text_right_app_compliance"]',
          snapshotUrls: 'https://i.gkd.li/import/13849755',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
          matches:
            '[id^="com.zmzx.college.search:id/ad_flag_source"] - * > [id="com.zmzx.college.search:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13063381',
        },
      ],
    },
    {
      key: 5,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.zmzx.college.search.activity.main.activity.MainActivity',
        'com.zmzx.college.search.activity.init.InitActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/update_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13063373',
        'https://i.gkd.li/import/13623469',
      ],
    },
    {
      key: 6,
      name: '权限提示-申请开启推送通知弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          matches:
            '[text="开启推送通知"] - [id="com.zmzx.college.search:id/siv_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13440939',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-请求好评弹窗',
      activityIds:
        'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
      fastQuery: true,
      rules:
        '[id="com.zmzx.college.search:id/iv_logo"] + [id="com.zmzx.college.search:id/siv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13476308',
    },
    {
      key: 8,
      name: '局部广告-教材内弹窗广告1',
      fastQuery: true,
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after"]',
      snapshotUrls: ['https://i.gkd.li/import/13929945'],
    },
    {
      key: 9,
      name: '局部广告-教材内弹窗广告2',
      fastQuery: true,
      activityIds: [
        'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/iv_close"]',
      snapshotUrls: ['https://i.gkd.li/import/13929981'],
    },
    {
      key: 10,
      name: '局部广告-教材内底部广告',
      fastQuery: true,
      activityIds: [
        'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
      ],
      rules:
        '[id="com.zmzx.college.search:id/close_m_image_left_text_right_app_compliance"]',
      snapshotUrls: ['https://i.gkd.li/import/13929965'],
    },
  ],
});
