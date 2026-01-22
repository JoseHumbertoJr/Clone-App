import ArrowBack from '@/assets/images/icons/arrow_back';
import IconInfo from '@/assets/images/icons/info';
import { typographyStyles } from '@/constants/theme/typographyStyles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type HeaderText = {
  title: string;
};

export function HeaderArrowLargeTitle({ title }: HeaderText) {
  return (
    <View style={styles.container}>
      <div style={styles.divIcon}>
        <div style={styles.iconBack}><ArrowBack size='24'/></div>
        <div style={styles.iconInfo}><IconInfo size='24'/></div>
      </div>
      <div style={styles.titleDiv}>
        <Text style={[styles.titleHeader, typographyStyles.headlineSmall]}>{title}</Text>
      </div>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 'auto',
    paddingBottom: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
  },
  divIcon: {
    display: 'flex',
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 0,
    paddingLeft: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'stretch'
  },
  iconBack: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  iconInfo:{
    display: 'flex',
    width: 48,
    height: 48,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleDiv:{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    alignSelf: 'stretch',
  },
  titleHeader: {
    flex: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: '#242424',
    fontSize: 24,
    fontWeight: 600,
    marginLeft: 24,
    marginRight: 24,
  }

});