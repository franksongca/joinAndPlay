/* jshint -W097 */
'use strict';

angular.module('joinAndPlay')
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('zh', {
      ADDRESS: '地址',
      DISTANCE: '距离(公里)',
      FIELD: '球场信息',
      FIELDS: '球场',
      FIELDS_LIST: '球场列表',
      SETTINGS: '设置',
      SELECTED_FIELD: '选定球场状态',
      SEARCH_FIELD: '寻找球场',
      CHATS: '联络球员',
      REGISTERED_PLAYERS: '注册球员',
      ARRIVED_PLAYERS: '签到球员'


    });
    $translateProvider.translations('en', {
      ADDRESS: 'Address',
      DISTANCE: 'Distance(km)',
      FIELD: 'Field Details',
      FIELDS: 'Fields',
      FIELDS_LIST: 'Fields List',
      SETTINGS: 'Settings',
      SELECTED_FIELD: 'Selected Field Status',
      SEARCH_FIELD: 'Looking for Field',
      CHATS: 'Contact',
      REGISTERED_PLAYERS: 'Registered Players',
      ARRIVED_PLAYERS: 'Players Arrived'



    });

    $translateProvider.preferredLanguage('zh');
  }]);