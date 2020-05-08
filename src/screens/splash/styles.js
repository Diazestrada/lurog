import { StyleSheet } from 'react-native'

import normalize from 'react-native-normalize'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: normalize(300),
    height: normalize(300)
  }
})

export default styles