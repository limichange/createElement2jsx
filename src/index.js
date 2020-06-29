import reactElementToJSXString from 'react-element-to-jsx-string'
import { t, a } from './func.js'

const test1 = t(
  'tt-button',
  {
    style: a('width:156rpx;'),
    'open-type': a('share'),
    'data-channel': a('video'),
    'data-qrcode': a('inv34+23=='),
    key: 'ttElem_c73593e_0_if__c73593e_0_count_$1%70',
  },
  t(
    'tt-view',
    { className: a('fixed_paidouyin') },
    t('tt-image', {
      src: a('../../static/tiktok.png'),
      mode: !0,
    }),
    t('tt-text', null, a('拍视频'))
  )
)
console.log(reactElementToJSXString.default(test1))
