import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 1,
      name: '全屏广告-关闭更新弹窗',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      snapshotUrls: 'https://i.gkd.li/import/12534264',
      rules:
        'Button[text="以后再说"][id^="com.greenpoint.android.mc10086.activity:id/dialog_btn"]',
    },
    {
      key: 2,
      name: '全屏广告-首页广告弹窗',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: ['https://i.gkd.li/import/12662361'],
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-请求推送通知弹窗',
      desc: '请求推送通知弹窗，点击取消',
      activityIds: 'com.mc10086.cmcc.base.StartPageActivity',
      rules: [
        {
          matches: '[text*="开启推送通知"] +(2) LinearLayout > [text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12662213',
            'https://i.gkd.li/import/13327880',
          ],
        },
        {
          fastQuery: true,
          matches: '[text="授权提醒"] +3 [text="拒绝"]',
          snapshotUrls: ['https://i.gkd.li/import/13775652'],
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-请求获取剪贴板权限弹窗',
      desc: '请求获取剪贴板权限弹窗，点击不允许',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '[text*="获取您的"] < LinearLayout +(2) LinearLayout >(2) [text="不允许"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12662251',
            'https://i.gkd.li/import/13775651',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-右侧悬浮小图标',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/drag_img"] + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: ['https://i.gkd.li/import/12662265'],
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-请求好评弹窗',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '@[id="com.greenpoint.android.mc10086.activity:id/close_img"][desc="关闭"] - RelativeLayout >(2) [text$="好评"]',
          snapshotUrls: ['https://i.gkd.li/import/12662345'],
        },
      ],
    },
  ],
});
