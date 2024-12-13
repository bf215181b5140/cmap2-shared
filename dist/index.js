"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedInviteKeySchema = exports.UseInviteKeyFormSchema = exports.TiersPageSchema = exports.StylePageSchema = exports.InteractionKeysFormSchema = exports.InteractionKeysPageSchema = exports.ButtonCopySchema = exports.ButtonFormSchema = exports.GroupCopySchema = exports.GroupFormSchema = exports.LayoutCopySchema = exports.LayoutFormSchema = exports.ParameterBadgeFormSchema = exports.LayoutsPageSchema = exports.ProfileFormSchema = exports.ProfilePageSchema = exports.TrackedParameterFormSchema = exports.RegisterWithKeyFormSchema = exports.RegisterFormSchema = exports.RegisterInfoSchema = exports.LoginFormSchema = exports.LoginTokenSchema = exports.ApiResponseSchema = exports.VisibilityParameterSchema = exports.CallbackParameterSchema = exports.KeyValueSchema = exports.TrackedParametersSchema = exports.TrackedParameterSchema = exports.TrackedParametersMap = exports.ClientStateSchema = exports.UploadedFileSchema = exports.UpdateSchema = exports.TierSchema = exports.ThemeSchema = exports.ParameterBadgeSchema = exports.InviteKeySchema = exports.LayoutSchema = exports.InteractionKeySchema = exports.GroupSchema = exports.ClientSchema = exports.ButtonSchema = exports.BackgroundSchema = exports.VrcParameterSchema = exports.VisibilityParameterConditionSchema = exports.ParameterBadgeTypeSchema = exports.NotificationTypeSchema = exports.ImageOrientationSchema = exports.GroupWidthSchema = exports.ClientVisibilitySchema = exports.ButtonTypeSchema = void 0;
exports.convertParameterValueFromString = exports.OrderSchema = exports.vrcAvatarIdSchema = exports.usernameSchema = exports.passwordSchema = exports.parameterValueSchema = exports.parameterValueOrAvatarSchema = exports.parameterValueObjectSchema = exports.parameterValueObjectOrAvatarSchema = exports.parameterPathSchema = exports.IdSchema = exports.BaseNullableIdSchema = exports.BaseIdSchema = exports.BaseFormSchema = void 0;
// ------------------------------ Enums ------------------------------ //
var buttonType_1 = require("./enums/buttonType");
Object.defineProperty(exports, "ButtonTypeSchema", { enumerable: true, get: function () { return buttonType_1.ButtonTypeSchema; } });
var clientVisibility_1 = require("./enums/clientVisibility");
Object.defineProperty(exports, "ClientVisibilitySchema", { enumerable: true, get: function () { return clientVisibility_1.ClientVisibilitySchema; } });
var groupWidth_1 = require("./enums/groupWidth");
Object.defineProperty(exports, "GroupWidthSchema", { enumerable: true, get: function () { return groupWidth_1.GroupWidthSchema; } });
var imageOrientation_1 = require("./enums/imageOrientation");
Object.defineProperty(exports, "ImageOrientationSchema", { enumerable: true, get: function () { return imageOrientation_1.ImageOrientationSchema; } });
var notificationType_1 = require("./enums/notificationType");
Object.defineProperty(exports, "NotificationTypeSchema", { enumerable: true, get: function () { return notificationType_1.NotificationTypeSchema; } });
var parameterBadgeType_1 = require("./enums/parameterBadgeType");
Object.defineProperty(exports, "ParameterBadgeTypeSchema", { enumerable: true, get: function () { return parameterBadgeType_1.ParameterBadgeTypeSchema; } });
var visibilityParameterCondition_1 = require("./enums/visibilityParameterCondition");
Object.defineProperty(exports, "VisibilityParameterConditionSchema", { enumerable: true, get: function () { return visibilityParameterCondition_1.VisibilityParameterConditionSchema; } });
// ------------------------------ Objects ------------------------------ //
var vrcParameter_1 = require("./objects/vrcParameter");
Object.defineProperty(exports, "VrcParameterSchema", { enumerable: true, get: function () { return vrcParameter_1.VrcParameterSchema; } });
var background_1 = require("./objects/background");
Object.defineProperty(exports, "BackgroundSchema", { enumerable: true, get: function () { return background_1.BackgroundSchema; } });
var button_1 = require("./objects/button");
Object.defineProperty(exports, "ButtonSchema", { enumerable: true, get: function () { return button_1.ButtonSchema; } });
var client_1 = require("./objects/client");
Object.defineProperty(exports, "ClientSchema", { enumerable: true, get: function () { return client_1.ClientSchema; } });
var group_1 = require("./objects/group");
Object.defineProperty(exports, "GroupSchema", { enumerable: true, get: function () { return group_1.GroupSchema; } });
var interactionKey_1 = require("./objects/interactionKey");
Object.defineProperty(exports, "InteractionKeySchema", { enumerable: true, get: function () { return interactionKey_1.InteractionKeySchema; } });
var layout_1 = require("./objects/layout");
Object.defineProperty(exports, "LayoutSchema", { enumerable: true, get: function () { return layout_1.LayoutSchema; } });
var inviteKey_1 = require("./objects/inviteKey");
Object.defineProperty(exports, "InviteKeySchema", { enumerable: true, get: function () { return inviteKey_1.InviteKeySchema; } });
var parameterBadge_1 = require("./objects/parameterBadge");
Object.defineProperty(exports, "ParameterBadgeSchema", { enumerable: true, get: function () { return parameterBadge_1.ParameterBadgeSchema; } });
var theme_1 = require("./objects/theme");
Object.defineProperty(exports, "ThemeSchema", { enumerable: true, get: function () { return theme_1.ThemeSchema; } });
var tier_1 = require("./objects/tier");
Object.defineProperty(exports, "TierSchema", { enumerable: true, get: function () { return tier_1.TierSchema; } });
var update_1 = require("./objects/update");
Object.defineProperty(exports, "UpdateSchema", { enumerable: true, get: function () { return update_1.UpdateSchema; } });
var uploadedFile_1 = require("./objects/uploadedFile");
Object.defineProperty(exports, "UploadedFileSchema", { enumerable: true, get: function () { return uploadedFile_1.UploadedFileSchema; } });
var clientState_1 = require("./objects/clientState");
Object.defineProperty(exports, "ClientStateSchema", { enumerable: true, get: function () { return clientState_1.ClientStateSchema; } });
var trackedParameters_1 = require("./objects/trackedParameters");
Object.defineProperty(exports, "TrackedParametersMap", { enumerable: true, get: function () { return trackedParameters_1.TrackedParametersMap; } });
Object.defineProperty(exports, "TrackedParameterSchema", { enumerable: true, get: function () { return trackedParameters_1.TrackedParameterSchema; } });
Object.defineProperty(exports, "TrackedParametersSchema", { enumerable: true, get: function () { return trackedParameters_1.TrackedParametersSchema; } });
var keyValue_1 = require("./objects/keyValue");
Object.defineProperty(exports, "KeyValueSchema", { enumerable: true, get: function () { return keyValue_1.KeyValueSchema; } });
var callbackParameter_1 = require("./objects/callbackParameter");
Object.defineProperty(exports, "CallbackParameterSchema", { enumerable: true, get: function () { return callbackParameter_1.CallbackParameterSchema; } });
var visibilityParameter_1 = require("./objects/visibilityParameter");
Object.defineProperty(exports, "VisibilityParameterSchema", { enumerable: true, get: function () { return visibilityParameter_1.VisibilityParameterSchema; } });
// ------------------------------ API ------------------------------ //
var api_1 = require("./api");
Object.defineProperty(exports, "ApiResponseSchema", { enumerable: true, get: function () { return api_1.ApiResponseSchema; } });
var login_1 = require("./api/login/login");
Object.defineProperty(exports, "LoginTokenSchema", { enumerable: true, get: function () { return login_1.LoginTokenSchema; } });
Object.defineProperty(exports, "LoginFormSchema", { enumerable: true, get: function () { return login_1.LoginFormSchema; } });
var register_1 = require("./api/register/register");
Object.defineProperty(exports, "RegisterInfoSchema", { enumerable: true, get: function () { return register_1.RegisterInfoSchema; } });
Object.defineProperty(exports, "RegisterFormSchema", { enumerable: true, get: function () { return register_1.RegisterFormSchema; } });
Object.defineProperty(exports, "RegisterWithKeyFormSchema", { enumerable: true, get: function () { return register_1.RegisterWithKeyFormSchema; } });
// todo
var parameter_1 = require("./api/trackedParameters/parameter/parameter");
Object.defineProperty(exports, "TrackedParameterFormSchema", { enumerable: true, get: function () { return parameter_1.TrackedParameterFormSchema; } });
var profile_1 = require("./api/profile/profile");
Object.defineProperty(exports, "ProfilePageSchema", { enumerable: true, get: function () { return profile_1.ProfilePageSchema; } });
Object.defineProperty(exports, "ProfileFormSchema", { enumerable: true, get: function () { return profile_1.ProfileFormSchema; } });
var layouts_1 = require("./api/layouts/layouts");
Object.defineProperty(exports, "LayoutsPageSchema", { enumerable: true, get: function () { return layouts_1.LayoutsPageSchema; } });
var parameterBadges_1 = require("./api/layouts/layout/parameterBadges/parameterBadges");
Object.defineProperty(exports, "ParameterBadgeFormSchema", { enumerable: true, get: function () { return parameterBadges_1.ParameterBadgeFormSchema; } });
var layout_2 = require("./api/layouts/layout/layout");
Object.defineProperty(exports, "LayoutFormSchema", { enumerable: true, get: function () { return layout_2.LayoutFormSchema; } });
Object.defineProperty(exports, "LayoutCopySchema", { enumerable: true, get: function () { return layout_2.LayoutCopySchema; } });
var group_2 = require("./api/layouts/group/group");
Object.defineProperty(exports, "GroupFormSchema", { enumerable: true, get: function () { return group_2.GroupFormSchema; } });
Object.defineProperty(exports, "GroupCopySchema", { enumerable: true, get: function () { return group_2.GroupCopySchema; } });
var button_2 = require("./api/layouts/button/button");
Object.defineProperty(exports, "ButtonFormSchema", { enumerable: true, get: function () { return button_2.ButtonFormSchema; } });
Object.defineProperty(exports, "ButtonCopySchema", { enumerable: true, get: function () { return button_2.ButtonCopySchema; } });
var interactionKeys_1 = require("./api/interactionKeys/interactionKeys");
Object.defineProperty(exports, "InteractionKeysPageSchema", { enumerable: true, get: function () { return interactionKeys_1.InteractionKeysPageSchema; } });
Object.defineProperty(exports, "InteractionKeysFormSchema", { enumerable: true, get: function () { return interactionKeys_1.InteractionKeysFormSchema; } });
var style_1 = require("./api/style/style");
Object.defineProperty(exports, "StylePageSchema", { enumerable: true, get: function () { return style_1.StylePageSchema; } });
var tiers_1 = require("./api/tiers/tiers");
Object.defineProperty(exports, "TiersPageSchema", { enumerable: true, get: function () { return tiers_1.TiersPageSchema; } });
Object.defineProperty(exports, "UseInviteKeyFormSchema", { enumerable: true, get: function () { return tiers_1.UseInviteKeyFormSchema; } });
Object.defineProperty(exports, "GeneratedInviteKeySchema", { enumerable: true, get: function () { return tiers_1.GeneratedInviteKeySchema; } });
// ------------------------------ Shared ------------------------------ //
var shared_1 = require("./shared");
Object.defineProperty(exports, "BaseFormSchema", { enumerable: true, get: function () { return shared_1.BaseFormSchema; } });
Object.defineProperty(exports, "BaseIdSchema", { enumerable: true, get: function () { return shared_1.BaseIdSchema; } });
Object.defineProperty(exports, "BaseNullableIdSchema", { enumerable: true, get: function () { return shared_1.BaseNullableIdSchema; } });
Object.defineProperty(exports, "IdSchema", { enumerable: true, get: function () { return shared_1.IdSchema; } });
Object.defineProperty(exports, "parameterPathSchema", { enumerable: true, get: function () { return shared_1.parameterPathSchema; } });
Object.defineProperty(exports, "parameterValueObjectOrAvatarSchema", { enumerable: true, get: function () { return shared_1.parameterValueObjectOrAvatarSchema; } });
Object.defineProperty(exports, "parameterValueObjectSchema", { enumerable: true, get: function () { return shared_1.parameterValueObjectSchema; } });
Object.defineProperty(exports, "parameterValueOrAvatarSchema", { enumerable: true, get: function () { return shared_1.parameterValueOrAvatarSchema; } });
Object.defineProperty(exports, "parameterValueSchema", { enumerable: true, get: function () { return shared_1.parameterValueSchema; } });
Object.defineProperty(exports, "passwordSchema", { enumerable: true, get: function () { return shared_1.passwordSchema; } });
Object.defineProperty(exports, "usernameSchema", { enumerable: true, get: function () { return shared_1.usernameSchema; } });
Object.defineProperty(exports, "vrcAvatarIdSchema", { enumerable: true, get: function () { return shared_1.vrcAvatarIdSchema; } });
Object.defineProperty(exports, "OrderSchema", { enumerable: true, get: function () { return shared_1.OrderSchema; } });
// ------------------------------ Other ------------------------------ //
var util_1 = require("./util");
Object.defineProperty(exports, "convertParameterValueFromString", { enumerable: true, get: function () { return util_1.convertParameterValueFromString; } });
