'use strict';

angular.module('dcm.version', [
  'dcm.version.interpolate-filter',
  'dcm.version.version-directive'
])

.value('version', '0.1');
