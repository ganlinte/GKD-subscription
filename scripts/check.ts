import subscription from '../src/subscription';
import { checkSubscription } from '@gkd-kit/tools';
import { checkDeprecatedGroupKeys } from '../src/appDeprecatedKeys';
import picocolors from 'picocolors';

checkSubscription(subscription);

checkDeprecatedGroupKeys(subscription.apps!);

export default subscription;

console.log(picocolors.green('校验成功, 合法订阅'));
