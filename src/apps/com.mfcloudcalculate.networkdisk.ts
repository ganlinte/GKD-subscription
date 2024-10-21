import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mfcloudcalculate.networkdisk',
  name: '123云盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-应用内广告弹窗',
      desc: '点击 X 或 关闭',
      fastQuery: true,
      rules: [
        {
          activityIds:
            'com.mfcloudcalculate.networkdisk.activity.AdFreeActivity',
          matches:
            '[text="关闭"][id="com.mfcloudcalculate.networkdisk:id/tv_ad_free_colse"]',
          snapshotUrls: 'https://i.gkd.li/import/13546173',
        },
        {
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.meishu.sdk.activity.SdkInterstitialActivity',
          ],
          matches:
            '[text="关闭"][id="com.mfcloudcalculate.networkdisk:id/tv_ad_free_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/15087252',
            'https://i.gkd.li/import/16611758',
          ],
        },
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '@View +4 TextView[text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/import/15087275',
        },
      ],
    },
    {
      key: 2,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="com.mfcloudcalculate.networkdisk:id/frame_ad_splash_container"]',
          snapshotUrls: 'https://i.gkd.li/import/14018247',
        },
        // 该应用存在特殊开屏广告，被全局规则排除，以下为之前的开屏广告规则
        {
          key: 1,
          quickFind: true,
          matches:
            '[id="com.mfcloudcalculate.networkdisk:id/frame_ad_splash_container"] >n [text^="跳过"][text.length<=4]',
          snapshotUrls: [
            'https://i.gkd.li/import/12846434',
            'https://i.gkd.li/import/13059834',
          ],
        },
        {
          key: 2,
          quickFind: true,
          matches:
            '[id$="tt_splash_skip_btn"] <<n [id="com.mfcloudcalculate.networkdisk:id/frame_ad_splash_container"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13259303',
            'https://i.gkd.li/import/13695497',
          ],
        },
      ],
    },
  ],
});
