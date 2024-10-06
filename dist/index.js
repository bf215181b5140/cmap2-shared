"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileFormSchema = exports.UpdatesFormSchema = exports.StateBadgeFormSchema = exports.UseCostFormSchema = exports.HealthFormSchema = exports.LayoutFormSchema = exports.GroupFormSchema = exports.ProfileFormSchema = exports.ControlParameterFormSchema = exports.ButtonFormSchema = exports.GeneratedInviteKeySchema = exports.UseInviteKeyFormSchema = exports.TiersPageSchema = exports.TrackedParameterFormSchema = exports.StylesSchema = exports.BackgroundsSchema = exports.InteractionKeysFormSchema = exports.BasicInfoFormSchema = exports.ProfilePageSchema = exports.RegisterWithKeyFormSchema = exports.RegisterFormSchema = exports.RegisterInfoSchema = exports.LoginFormSchema = exports.LoginTokenSchema = exports.ApiResponseSchema = exports.KeyValueSchema = exports.TrackedParametersSchema = exports.TrackedParameterSchema = exports.TrackedParametersMap = exports.ClientStateSchema = exports.UploadedFileSchema = exports.UpdateSchema = exports.TierSchema = exports.StyleSchema = exports.ParameterBadgeSchema = exports.InviteKeySchema = exports.LayoutSchema = exports.InteractionKeySchema = exports.GroupSchema = exports.ControlParameterSchema = exports.ClientSchema = exports.ButtonSchema = exports.BackgroundSchema = exports.VrcParameterSchema = exports.ParameterBadgeTypeSchema = exports.NotificationTypeSchema = exports.ImageOrientationSchema = exports.GroupWidthSchema = exports.ClientVisibilitySchema = exports.ButtonTypeSchema = void 0;
exports.convertParameterValueFromString = exports.vrcAvatarIdSchema = exports.usernameSchema = exports.passwordSchema = exports.parameterValueSchema = exports.parameterValueOrAvatarSchema = exports.parameterValueObjectSchema = exports.parameterValueObjectOrAvatarSchema = exports.parameterPathSchema = exports.IdSchema = exports.BaseNullableIdSchema = exports.BaseIdSchema = exports.BaseFormSchema = exports.UsedButtonSchema = exports.ApproveFilesPageSchema = exports.LayoutPageSchema = exports.OrderFormSchema = void 0;
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
// ------------------------------ Objects ------------------------------ //
var vrcParameter_1 = require("./objects/vrcParameter");
Object.defineProperty(exports, "VrcParameterSchema", { enumerable: true, get: function () { return vrcParameter_1.VrcParameterSchema; } });
var background_1 = require("./objects/background");
Object.defineProperty(exports, "BackgroundSchema", { enumerable: true, get: function () { return background_1.BackgroundSchema; } });
var button_1 = require("./objects/button");
Object.defineProperty(exports, "ButtonSchema", { enumerable: true, get: function () { return button_1.ButtonSchema; } });
var client_1 = require("./objects/client");
Object.defineProperty(exports, "ClientSchema", { enumerable: true, get: function () { return client_1.ClientSchema; } });
var controlParameter_1 = require("./objects/controlParameter");
Object.defineProperty(exports, "ControlParameterSchema", { enumerable: true, get: function () { return controlParameter_1.ControlParameterSchema; } });
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
var style_1 = require("./objects/style");
Object.defineProperty(exports, "StyleSchema", { enumerable: true, get: function () { return style_1.StyleSchema; } });
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
var profile_1 = require("./api/profile/profile");
Object.defineProperty(exports, "ProfilePageSchema", { enumerable: true, get: function () { return profile_1.ProfilePageSchema; } });
var basicInfo_1 = require("./api/profile/basicInfo/basicInfo");
Object.defineProperty(exports, "BasicInfoFormSchema", { enumerable: true, get: function () { return basicInfo_1.BasicInfoFormSchema; } });
var interactionKeys_1 = require("./api/profile/interactionKeys/interactionKeys");
Object.defineProperty(exports, "InteractionKeysFormSchema", { enumerable: true, get: function () { return interactionKeys_1.InteractionKeysFormSchema; } });
var background_2 = require("./api/profile/background/background");
Object.defineProperty(exports, "BackgroundsSchema", { enumerable: true, get: function () { return background_2.BackgroundsSchema; } });
var style_2 = require("./api/profile/style/style");
Object.defineProperty(exports, "StylesSchema", { enumerable: true, get: function () { return style_2.StylesSchema; } });
var parameter_1 = require("./api/state/parameter/parameter");
Object.defineProperty(exports, "TrackedParameterFormSchema", { enumerable: true, get: function () { return parameter_1.TrackedParameterFormSchema; } });
var tiers_1 = require("./api/tiers/tiers");
Object.defineProperty(exports, "TiersPageSchema", { enumerable: true, get: function () { return tiers_1.TiersPageSchema; } });
var useInviteKey_1 = require("./api/tiers/useInviteKey/useInviteKey");
Object.defineProperty(exports, "UseInviteKeyFormSchema", { enumerable: true, get: function () { return useInviteKey_1.UseInviteKeyFormSchema; } });
var generateInviteKey_1 = require("./api/tiers/generateInviteKey/generateInviteKey");
Object.defineProperty(exports, "GeneratedInviteKeySchema", { enumerable: true, get: function () { return generateInviteKey_1.GeneratedInviteKeySchema; } });
// ------------------------------ Forms ------------------------------ //
var button_2 = require("./OLD/forms/button");
Object.defineProperty(exports, "ButtonFormSchema", { enumerable: true, get: function () { return button_2.ButtonFormSchema; } });
var controlParameter_2 = require("./OLD/forms/controlParameter");
Object.defineProperty(exports, "ControlParameterFormSchema", { enumerable: true, get: function () { return controlParameter_2.ControlParameterFormSchema; } });
var profile_2 = require("./OLD/forms/profile");
Object.defineProperty(exports, "ProfileFormSchema", { enumerable: true, get: function () { return profile_2.ProfileFormSchema; } });
var group_2 = require("./OLD/forms/group");
Object.defineProperty(exports, "GroupFormSchema", { enumerable: true, get: function () { return group_2.GroupFormSchema; } });
var layout_2 = require("./OLD/forms/layout");
Object.defineProperty(exports, "LayoutFormSchema", { enumerable: true, get: function () { return layout_2.LayoutFormSchema; } });
var health_1 = require("./OLD/forms/health");
Object.defineProperty(exports, "HealthFormSchema", { enumerable: true, get: function () { return health_1.HealthFormSchema; } });
var useCost_1 = require("./OLD/forms/useCost");
Object.defineProperty(exports, "UseCostFormSchema", { enumerable: true, get: function () { return useCost_1.UseCostFormSchema; } });
var stateBadge_1 = require("./OLD/forms/stateBadge");
Object.defineProperty(exports, "StateBadgeFormSchema", { enumerable: true, get: function () { return stateBadge_1.StateBadgeFormSchema; } });
var update_2 = require("./OLD/forms/update");
Object.defineProperty(exports, "UpdatesFormSchema", { enumerable: true, get: function () { return update_2.UpdatesFormSchema; } });
var uploadedFile_2 = require("./OLD/forms/uploadedFile");
Object.defineProperty(exports, "UploadFileFormSchema", { enumerable: true, get: function () { return uploadedFile_2.UploadFileFormSchema; } });
var order_1 = require("./OLD/forms/order");
Object.defineProperty(exports, "OrderFormSchema", { enumerable: true, get: function () { return order_1.OrderFormSchema; } });
// ------------------------------ Pages ------------------------------ //
var layout_3 = require("./OLD/pages/layout");
Object.defineProperty(exports, "LayoutPageSchema", { enumerable: true, get: function () { return layout_3.LayoutPageSchema; } });
var approveFiles_1 = require("./OLD/pages/approveFiles");
Object.defineProperty(exports, "ApproveFilesPageSchema", { enumerable: true, get: function () { return approveFiles_1.ApproveFilesPageSchema; } });
// ------------------------------ Website ------------------------------ //
var website_1 = require("./OLD/website");
Object.defineProperty(exports, "UsedButtonSchema", { enumerable: true, get: function () { return website_1.UsedButtonSchema; } });
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
// ------------------------------ Other ------------------------------ //
var util_1 = require("./util");
Object.defineProperty(exports, "convertParameterValueFromString", { enumerable: true, get: function () { return util_1.convertParameterValueFromString; } });
