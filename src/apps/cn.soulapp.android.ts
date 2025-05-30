import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.soulapp.android',
  name: 'Soul',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter', // 在极少数情况下, 即使节点是 clickable 的, APP 也不会响应节点点击事件, 此时需要手动设置 `clickCenter`
          matches: '[id="cn.soulapp.android:id/c_ad_skip_view_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12833280',
            'https://i.gkd.li/import/12850094',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-广场-卡片广告',
      fastQuery: true,
      activityIds: ['cn.soulapp.android.component.startup.main.MainActivity'],
      rules: [
        {
          matches:
            '@ImageView - [text="广告"] < LinearLayout < [id="cn.soulapp.android:id/fl_tag_container"]',
          snapshotUrls: 'https://i.gkd.li/import/12838000',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-app评分',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.component.chat.ConversationActivity',
      rules: [
        {
          matches:
            '@[id="cn.soulapp.android:id/cancel"][text="取消"] - [id="cn.soulapp.android:id/score_rate"]',
          snapshotUrls: 'https://i.gkd.li/import/13425057',
        },
      ],
    },
    {
      key: 4,
      name: '更新提示-升级到最新版本',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.component.startup.main.MainActivity',
      rules: [
        {
          matches:
            '@[id="cn.soulapp.android:id/img_close"] -2 RelativeLayout > [text="升级到最新版本"]',
          snapshotUrls: 'https://i.gkd.li/import/13693361',
        },
      ],
    },
  ],
});
