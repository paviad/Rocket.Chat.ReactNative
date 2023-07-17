import DeviceInfo from 'react-native-device-info';

import { simpleHash } from './simple-hash';

export const getMashup = (server: string, userId: string): string => {
	const deviceId = DeviceInfo.getUniqueId();
	const mashup = `${server}-${userId}-${deviceId}`;
	const hash = simpleHash(mashup).toString();
	return hash;
};
