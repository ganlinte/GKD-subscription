import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.aliyun',
  name: '阿里云',
  groups: [
    {
      key: 1,
      name: '权限提示-请求开启通知权限弹窗',
      quickFind: true,
      rules: '[text^="打开手机消息通知"] + * >2 [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/13446162',
    },
  ],
});
