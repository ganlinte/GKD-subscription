import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const UPDATE_PROMPT_ORDER = -9; // 更新提示
export const YOUTH_MODE_ORDER = -8; // 青少年模式

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告-全局',
    order: OPEN_AD_ORDER,
    matchTime: 10000,
    actionMaximum: 2,
    fastQuery: true,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    priorityTime: 10000,
    rules: [
      {
        anyMatches: ['[text*="跳过"][text.length<10][visibleToUser=true]'],
      },
    ],
    apps: [...appList.openAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.openAdWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 2,
    name: '青少年模式-全局',
    order: YOUTH_MODE_ORDER,
    fastQuery: true,
    matchTime: 100000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          'TextView[text="未成年人模式" ||text="开启青少年模式"]',
          'TextView[text="我知道了"]',
        ],
      },
    ],
    apps: [...appList.yongBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.yongWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
]);
