import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { isTablet } from '../../lib/methods/helpers';

const SIZE = 180;
const MARGIN_TOP = isTablet ? 0 : 64;
const BORDER_RADIUS = 8;

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
		width: '100%',
		height: SIZE + MARGIN_TOP,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	image: {
		width: SIZE,
		height: SIZE,
		borderRadius: BORDER_RADIUS
	}
});

interface IServerAvatar {
	url: string;
	image: string;
}

// TODO: missing skeleton
const ServerAvatar = React.memo(({ image }: IServerAvatar) => (
	<View style={styles.container}>
		{image && (
			// <FastImage style={[styles.image, { borderColor: themes[theme].borderColor }]} source={{ uri: `${url}/${image}` }} />
			<Image
				style={[
					{
						'flex': 1,
						'width': 160,
						'resizeMode': 'contain',
						'alignSelf': 'center'
					}
				]}
				source={require('../../static/images/peers_black_text.png')}
				fadeDuration={0}
			/>
		)}
	</View>
));

export default ServerAvatar;
