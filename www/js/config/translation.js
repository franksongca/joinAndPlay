/* jshint -W097 */
'use strict';

angular.module('joinAndPlay')
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('zh', {
      ADDRESS: '地址',
      DISTANCE: '距离(公里)',
      DISTANCE_RANGE: '距离范围(公里)',
      FIELD: '球场信息',
      FIELDS: '球场',
      FIELDS_LIST: '球场列表',
      SETTINGS: '设置',
      SELECTED_FIELD: '选定球场状态',
      SEARCH_FIELD: '寻找球场',
      CHATS: '联络球员',
      REGISTERED_PLAYERS: '注册球员',
      ARRIVED_PLAYERS: '签到球员',
      DISTANCE_1: '2 公里内',
      DISTANCE_2: '5 公里内',
      DISTANCE_3: '10 公里内',
      DISTANCE_4: '15 公里内',
      DISTANCE_5: '20 公里内',
      DISTANCE_6: '30 公里内',
      DISTANCE_7: '40 公里内',
      DISTANCE_8: '50 公里内',
      DISTANCE_9: '该地区全部',
      LABEL_RANGE: '请选择距离范围(默认距离 2 公里)'


    });
    $translateProvider.translations('en', {
      ADDRESS: 'Address',
      DISTANCE: 'Distance(km)',
      DISTANCE_RANGE: 'Distance Range(km)',
      FIELD: 'Field Details',
      FIELDS: 'Fields',
      FIELDS_LIST: 'Fields List',
      SETTINGS: 'Settings',
      SELECTED_FIELD: 'Selected Field Status',
      SEARCH_FIELD: 'Looking for Field',
      CHATS: 'Contact',
      REGISTERED_PLAYERS: 'Registered Players',
      ARRIVED_PLAYERS: 'Players Arrived',
      DISTANCE_1: 'Less Than 2 km',
      DISTANCE_2: 'Less than 5 km',
      DISTANCE_3: 'Less than 10 km',
      DISTANCE_4: 'Less than 15 km',
      DISTANCE_5: 'Less than 20 km',
      DISTANCE_6: 'Less than 30 km',
      DISTANCE_7: 'Less than 40 km',
      DISTANCE_8: 'Less than 50 km',
      DISTANCE_9: 'All in this area',
      LABEL_RANGE: 'Select the range of distance (default is 2 km)'
    });

    $translateProvider.preferredLanguage('zh');
  }]);