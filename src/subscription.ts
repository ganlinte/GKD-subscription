import { defineGkdSubscription } from '@gkd-kit/define';
import { RawApp, RawAppGroup } from '@gkd-kit/api';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups, { OPEN_AD_ORDER } from './globalGroups';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    if (!g.name.startsWith('开屏广告')) {
      g.enable = false;
    } else {
      g.order = OPEN_AD_ORDER;
    }
  });
  rawApps.push(appConfig);
});

export default defineGkdSubscription({
  id: 233,
  name: '甘霖的GKD订阅',
  version: 0,
  author: 'ganlinte',
  supportUri: 'https://github.com/ganlinte/GKD-subscription',
  checkUpdateUrl: './ganlin_gkd.version.json5',
  categories,
  globalGroups,
  apps: rawApps,
});
