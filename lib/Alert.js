"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("../Alert.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.state = {
      shows: false
    };
    return _this;
  }

  _createClass(Alert, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nxtprops) {
      console.log(nxtprops.show);
      if (nxtprops.show) {
        this.openAlert();
      } else {
        this.closeAlert();
      }
    }
  }, {
    key: "openAlert",
    value: function openAlert() {
      var _this2 = this;

      this.setState({ shows: true });
      console.log(this.state.shows);
      if (this.props.autoCloseIn) {
        setInterval(function () {
          _this2.closeAlert();
        }, this.props.autoCloseIn);
      }
    }
  }, {
    key: "closeAlert",
    value: function closeAlert() {
      this.setState({ shows: false });
      console.log(this.state.shows);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var boxOverlay = ["overlay"];
      if (this.state.shows) {
        boxOverlay.push('show');
      }
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { id: "popup1", className: boxOverlay.join(' ') },
          _react2.default.createElement(
            "div",
            { className: "popup" },
            this.props.title ? _react2.default.createElement(
              "div",
              { className: "popup-title", id: "mod_title" },
              this.props.title
            ) : null,
            this.props.title ? _react2.default.createElement(
              "div",
              { className: "content", style: { marginTop: '15px' }, id: "mod_content" },
              this.props.content
            ) : _react2.default.createElement(
              "div",
              { className: "content", id: "mod_content" },
              this.props.content
            ),
            _react2.default.createElement(
              "div",
              { className: "footer" },
              this.props.type === "confirm" ? _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("input", { type: "button", onClick: function onClick() {
                    return _this3.closeAlert();
                  }, className: "popup-button btn-cancel", id: "closebtn", value: "Cancel" }),
                _react2.default.createElement("input", { type: "button", onClick: function onClick() {
                    return _this3.props.onConfirm();
                  }, className: "popup-button btn-danger", id: "closebtn", value: "Confirm" })
              ) : _react2.default.createElement("input", { type: "button", onClick: function onClick() {
                  return _this3.props.onConfirm();
                }, className: "popup-button", id: "closebtn", value: "OK" })
            )
          )
        )
      );
    }
  }]);

  return Alert;
}(_react.Component);

exports.default = Alert;
