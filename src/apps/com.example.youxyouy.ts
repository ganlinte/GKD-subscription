import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.youxyouy',
  name: '有鱼生活',
  groups: [
    {
      key: 1,
      name: '全屏广告-视频广告弹窗',
      fastQuery: true,
      activityIds: '.home.RewardVideoAdActivity',
      rules: [
        {
          anyMatches: [
            'ImageView[id="com.example.youxyouy:id/iv_cancel"]',
            'ImageView[id="com.example.youxyouy:id/iv_close"]',
            '[id="com.example.youxyouy:id/tv_exit"][text="退出"]',
            '[id="com.example.youxyouy:id/tv_action"][text="确定"]',
            '[id="com.example.youxyouy:id/iv_replay"][text="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/18878136',
            'https://i.gkd.li/i/18929693',
            'https://i.gkd.li/i/18878152',
            'https://i.gkd.li/i/18878154',
            'https://i.gkd.li/i/18878101',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-SDK广告',
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          anyMatches: [
            'TextView[text="跳过"]',
            '@ImageView < LinearLayout < LinearLayout - FrameLayout > TextView[text="反馈"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19117630',
            'https://i.gkd.li/i/19117646',
          ],
        },
        {
          activityIds: 'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          anyMatches: [
            'TextView[text="继续观看"]',
            '@ImageView < ViewGroup < ViewGroup < ViewGroup[desc="close_button"] - ViewGroup > ViewGroup > TextView[text="立即获取"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19117637',
            'https://i.gkd.li/i/19117609',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-首页广告弹窗',
      fastQuery: true,
      activityIds: '.MainActivity',
      rules: [
        {
          matches: 'ImageView[id="com.example.youxyouy:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/19019416',
            'https://i.gkd.li/i/19019419',
          ],
        },
      ],
    },
  ],
});
