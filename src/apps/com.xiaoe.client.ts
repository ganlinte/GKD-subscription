import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaoe.client',
  name: '小鹅通',
  groups: [
    {
      key: 1,
      fastQuery: true,
      name: '更新提示-版本更新弹窗',
      desc: '点击暂不更新',
      rules: [
        {
          activityIds: 'com.xiaoe.app.ui.main.XiaoeMainActivity',
          matches: 'FrameLayout[vid="centerPopupContainer"] [text="暂不更新"]',
          snapshotUrls: 'https://i.gkd.li/import/13832282',
        },
      ],
    },
  ],
});
