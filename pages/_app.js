/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Provider } from 'react-redux'

import store from '../client/store'
import '../client/styles/styles.global.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
