"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importStar(require("styled-components"));
var colors_json_1 = __importDefault(require("./colors.json"));
function ParameterButton(props) {
    function onClick(id) {
        if (!props.active && props.onClick)
            props.onClick(id);
    }
    return ((0, jsx_runtime_1.jsxs)(ParameterButtonStyled, __assign({ onClick: function () { return onClick(props.button.id); }, flexBasis: props.flexBasis, active: props.active || props.disabled }, { children: [props.button.image && (0, jsx_runtime_1.jsx)(ParameterButtonPicture, { src: URL + '/' + props.button.image }), props.button.label && (0, jsx_runtime_1.jsx)(ParameterButtonLabel, { children: props.button.label })] })));
}
exports.default = ParameterButton;
var ParameterButtonStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-basis: ", ";\n  background: ", ";\n  border-radius: 8px;\n  text-align: center;\n  transition: 0.2s linear;\n  border: 2px solid ", ";\n  padding: 0;\n  align-self: flex-start;\n  min-height: 4.5em;\n  \n  ", ";\n"], ["\n  flex-basis: ", ";\n  background: ", ";\n  border-radius: 8px;\n  text-align: center;\n  transition: 0.2s linear;\n  border: 2px solid ", ";\n  padding: 0;\n  align-self: flex-start;\n  min-height: 4.5em;\n  \n  ", ";\n"])), function (props) { return props.flexBasis ? props.flexBasis : '100%'; }, colors_json_1.default['ui-primary-1'], colors_json_1.default['ui-primary-1'], function (props) { return props.active ? activeParamStyle : regularParamStyle; });
var activeParamStyle = (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  filter: saturate(0.5%);\n"], ["\n  filter: saturate(0.5%);\n"])));
var regularParamStyle = (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.02) perspective(1px);\n    background: ", ";\n    border: 2px solid ", ";\n  }\n"], ["\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.02) perspective(1px);\n    background: ", ";\n    border: 2px solid ", ";\n  }\n"])), colors_json_1.default['ui-primary-3'], colors_json_1.default['ui-primary-4']);
var ParameterButtonLabel = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 1.5em;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  padding: 1.5em;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var ParameterButtonPicture = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  aspect-ratio: 16/9;\n  margin: 0;\n  padding: 0;\n  background: url(", ") no-repeat center;\n  background-size: cover;\n  border-radius: 8px;\n"], ["\n  width: 100%;\n  aspect-ratio: 16/9;\n  margin: 0;\n  padding: 0;\n  background: url(", ") no-repeat center;\n  background-size: cover;\n  border-radius: 8px;\n"])), function (props) { return props.src; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
