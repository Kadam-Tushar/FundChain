'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

  web3 = new _web2.default(window.web3.currentProvider);
} else {

  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/167d46097ac8446190da258da673fa66');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBSUEsT0FBTyxLQUFLLENBQWhCOztBQUVBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRCxJQUFkLEtBQXVCLFdBQTVELEVBQXlFOztBQUV2RUEsU0FBTyxrQkFBU0MsT0FBT0QsSUFBUCxDQUFZRSxlQUFyQixDQUFQO0FBQ0QsQ0FIRCxNQUdPOztBQUVMLE1BQUlDLFdBQVcsSUFBSSxjQUFLQyxTQUFMLENBQWVDLFlBQW5CLENBQWdDLCtEQUFoQyxDQUFmO0FBQ0FMLFNBQU8sa0JBQVNHLFFBQVQsQ0FBUDtBQUNEOztrQkFFY0gsSSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG52YXIgd2ViMyA9IHZvaWQgMDtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbn0gZWxzZSB7XG5cbiAgdmFyIHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcignaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My8xNjdkNDYwOTdhYzg0NDYxOTBkYTI1OGRhNjczZmE2NicpO1xuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBSUEsT0FBTyxLQUFLLENBQWhCOztBQUVBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRCxJQUFkLEtBQXVCLFdBQTVELEVBQXlFOztBQUV2RUEsU0FBTyxrQkFBU0MsT0FBT0QsSUFBUCxDQUFZRSxlQUFyQixDQUFQO0FBQ0QsQ0FIRCxNQUdPOztBQUVMLE1BQUlDLFdBQVcsSUFBSSxjQUFLQyxTQUFMLENBQWVDLFlBQW5CLENBQWdDLCtEQUFoQyxDQUFmO0FBQ0FMLFNBQU8sa0JBQVNHLFFBQVQsQ0FBUDtBQUNEOztrQkFFY0gsSSIsImZpbGUiOiJ1bmtub3duIn0=