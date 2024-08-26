"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseIdSchema = exports.BaseFormSchema = exports.UsedButtonSchema = exports.ApproveFilesPageSchema = exports.LayoutPageSchema = exports.TiersPageSchema = exports.RegisterInfoSchema = exports.LoginTokenSchema = exports.RegisterWithKeyFormSchema = exports.RegisterFormSchema = exports.LoginFormSchema = exports.ClientStateParameterFormSchema = exports.OrderFormSchema = exports.UploadFileFormSchema = exports.UpdatesFormSchema = exports.StateBadgeFormSchema = exports.UseCostFormSchema = exports.HealthFormSchema = exports.StyleFormSchema = exports.BackgroundFormSchema = exports.LayoutFormSchema = exports.InteractionKeyFormSchema = exports.GroupFormSchema = exports.ProfileFormSchema = exports.CallbackFormSchema = exports.ButtonFormSchema = exports.ClientStateSchema = exports.ClientStateParameterSchema = exports.UploadedFileSchema = exports.UpdateSchema = exports.TierSchema = exports.StyleSchema = exports.StateBadgeSchema = exports.RegistrationKeySchema = exports.LayoutSchema = exports.InteractionKeySchema = exports.GroupSchema = exports.CallbackSchema = exports.ClientSchema = exports.ButtonSchema = exports.BackgroundSchema = exports.StateBadgeType = exports.ButtonType = exports.ButtonImageOrientation = exports.UnknownAvatarDisplayOptions = exports.UnknownAvatarDisplay = exports.OfflineDisplayOptions = exports.OfflineDisplay = exports.ClientVisibilityOptions = exports.ClientVisibility = void 0;
exports.SegmentWidth = exports.theme = exports.convertParameterValueFromString = exports.vrcAvatarIdSchema = exports.usernameSchema = exports.passwordSchema = exports.parameterValueSchema = exports.parameterValueOrAvatarSchema = exports.parameterValueObjectSchema = exports.parameterValueObjectOrAvatarSchema = exports.parameterPathSchema = exports.IdSchema = exports.BaseNullableIdSchema = void 0;
// ------------------------------ Enums ------------------------------ //
var client_1 = require("./types/enums/client");
Object.defineProperty(exports, "ClientVisibility", { enumerable: true, get: function () { return client_1.ClientVisibility; } });
Object.defineProperty(exports, "ClientVisibilityOptions", { enumerable: true, get: function () { return client_1.ClientVisibilityOptions; } });
Object.defineProperty(exports, "OfflineDisplay", { enumerable: true, get: function () { return client_1.OfflineDisplay; } });
Object.defineProperty(exports, "OfflineDisplayOptions", { enumerable: true, get: function () { return client_1.OfflineDisplayOptions; } });
Object.defineProperty(exports, "UnknownAvatarDisplay", { enumerable: true, get: function () { return client_1.UnknownAvatarDisplay; } });
Object.defineProperty(exports, "UnknownAvatarDisplayOptions", { enumerable: true, get: function () { return client_1.UnknownAvatarDisplayOptions; } });
var button_1 = require("./types/enums/button");
Object.defineProperty(exports, "ButtonImageOrientation", { enumerable: true, get: function () { return button_1.ButtonImageOrientation; } });
Object.defineProperty(exports, "ButtonType", { enumerable: true, get: function () { return button_1.ButtonType; } });
var stateBadge_1 = require("./types/enums/stateBadge");
Object.defineProperty(exports, "StateBadgeType", { enumerable: true, get: function () { return stateBadge_1.StateBadgeType; } });
// ------------------------------ Objects ------------------------------ //
var background_1 = require("./types/objects/background");
Object.defineProperty(exports, "BackgroundSchema", { enumerable: true, get: function () { return background_1.BackgroundSchema; } });
var button_2 = require("./types/objects/button");
Object.defineProperty(exports, "ButtonSchema", { enumerable: true, get: function () { return button_2.ButtonSchema; } });
var client_2 = require("./types/objects/client");
Object.defineProperty(exports, "ClientSchema", { enumerable: true, get: function () { return client_2.ClientSchema; } });
var callback_1 = require("./types/objects/callback");
Object.defineProperty(exports, "CallbackSchema", { enumerable: true, get: function () { return callback_1.CallbackSchema; } });
var group_1 = require("./types/objects/group");
Object.defineProperty(exports, "GroupSchema", { enumerable: true, get: function () { return group_1.GroupSchema; } });
var interactionKey_1 = require("./types/objects/interactionKey");
Object.defineProperty(exports, "InteractionKeySchema", { enumerable: true, get: function () { return interactionKey_1.InteractionKeySchema; } });
var layout_1 = require("./types/objects/layout");
Object.defineProperty(exports, "LayoutSchema", { enumerable: true, get: function () { return layout_1.LayoutSchema; } });
var registrationKey_1 = require("./types/objects/registrationKey");
Object.defineProperty(exports, "RegistrationKeySchema", { enumerable: true, get: function () { return registrationKey_1.RegistrationKeySchema; } });
var stateBadge_2 = require("./types/objects/stateBadge");
Object.defineProperty(exports, "StateBadgeSchema", { enumerable: true, get: function () { return stateBadge_2.StateBadgeSchema; } });
var style_1 = require("./types/objects/style");
Object.defineProperty(exports, "StyleSchema", { enumerable: true, get: function () { return style_1.StyleSchema; } });
var tier_1 = require("./types/objects/tier");
Object.defineProperty(exports, "TierSchema", { enumerable: true, get: function () { return tier_1.TierSchema; } });
var update_1 = require("./types/objects/update");
Object.defineProperty(exports, "UpdateSchema", { enumerable: true, get: function () { return update_1.UpdateSchema; } });
var uploadedFile_1 = require("./types/objects/uploadedFile");
Object.defineProperty(exports, "UploadedFileSchema", { enumerable: true, get: function () { return uploadedFile_1.UploadedFileSchema; } });
var clientState_1 = require("./types/objects/clientState");
Object.defineProperty(exports, "ClientStateParameterSchema", { enumerable: true, get: function () { return clientState_1.ClientStateParameterSchema; } });
Object.defineProperty(exports, "ClientStateSchema", { enumerable: true, get: function () { return clientState_1.ClientStateSchema; } });
// ------------------------------ Forms ------------------------------ //
var button_3 = require("./types/forms/button");
Object.defineProperty(exports, "ButtonFormSchema", { enumerable: true, get: function () { return button_3.ButtonFormSchema; } });
var callback_2 = require("./types/forms/callback");
Object.defineProperty(exports, "CallbackFormSchema", { enumerable: true, get: function () { return callback_2.CallbackFormSchema; } });
var profile_1 = require("./types/forms/profile");
Object.defineProperty(exports, "ProfileFormSchema", { enumerable: true, get: function () { return profile_1.ProfileFormSchema; } });
var group_2 = require("./types/forms/group");
Object.defineProperty(exports, "GroupFormSchema", { enumerable: true, get: function () { return group_2.GroupFormSchema; } });
var interactionKey_2 = require("./types/forms/interactionKey");
Object.defineProperty(exports, "InteractionKeyFormSchema", { enumerable: true, get: function () { return interactionKey_2.InteractionKeyFormSchema; } });
var layout_2 = require("./types/forms/layout");
Object.defineProperty(exports, "LayoutFormSchema", { enumerable: true, get: function () { return layout_2.LayoutFormSchema; } });
var background_2 = require("./types/forms/background");
Object.defineProperty(exports, "BackgroundFormSchema", { enumerable: true, get: function () { return background_2.BackgroundFormSchema; } });
var style_2 = require("./types/forms/style");
Object.defineProperty(exports, "StyleFormSchema", { enumerable: true, get: function () { return style_2.StyleFormSchema; } });
var health_1 = require("./types/forms/health");
Object.defineProperty(exports, "HealthFormSchema", { enumerable: true, get: function () { return health_1.HealthFormSchema; } });
var useCost_1 = require("./types/forms/useCost");
Object.defineProperty(exports, "UseCostFormSchema", { enumerable: true, get: function () { return useCost_1.UseCostFormSchema; } });
var stateBadge_3 = require("./types/forms/stateBadge");
Object.defineProperty(exports, "StateBadgeFormSchema", { enumerable: true, get: function () { return stateBadge_3.StateBadgeFormSchema; } });
var update_2 = require("./types/forms/update");
Object.defineProperty(exports, "UpdatesFormSchema", { enumerable: true, get: function () { return update_2.UpdatesFormSchema; } });
var uploadedFile_2 = require("./types/forms/uploadedFile");
Object.defineProperty(exports, "UploadFileFormSchema", { enumerable: true, get: function () { return uploadedFile_2.UploadFileFormSchema; } });
var order_1 = require("./types/forms/order");
Object.defineProperty(exports, "OrderFormSchema", { enumerable: true, get: function () { return order_1.OrderFormSchema; } });
var clientState_2 = require("./types/forms/clientState");
Object.defineProperty(exports, "ClientStateParameterFormSchema", { enumerable: true, get: function () { return clientState_2.ClientStateParameterFormSchema; } });
var login_1 = require("./types/forms/login");
Object.defineProperty(exports, "LoginFormSchema", { enumerable: true, get: function () { return login_1.LoginFormSchema; } });
var register_1 = require("./types/forms/register");
Object.defineProperty(exports, "RegisterFormSchema", { enumerable: true, get: function () { return register_1.RegisterFormSchema; } });
Object.defineProperty(exports, "RegisterWithKeyFormSchema", { enumerable: true, get: function () { return register_1.RegisterWithKeyFormSchema; } });
// ------------------------------ Pages ------------------------------ //
var login_2 = require("./types/pages/login");
Object.defineProperty(exports, "LoginTokenSchema", { enumerable: true, get: function () { return login_2.LoginTokenSchema; } });
var register_2 = require("./types/pages/register");
Object.defineProperty(exports, "RegisterInfoSchema", { enumerable: true, get: function () { return register_2.RegisterInfoSchema; } });
var tiers_1 = require("./types/pages/tiers");
Object.defineProperty(exports, "TiersPageSchema", { enumerable: true, get: function () { return tiers_1.TiersPageSchema; } });
var layout_3 = require("./types/pages/layout");
Object.defineProperty(exports, "LayoutPageSchema", { enumerable: true, get: function () { return layout_3.LayoutPageSchema; } });
var approveFiles_1 = require("./types/pages/approveFiles");
Object.defineProperty(exports, "ApproveFilesPageSchema", { enumerable: true, get: function () { return approveFiles_1.ApproveFilesPageSchema; } });
// ------------------------------ Website ------------------------------ //
var website_1 = require("./types/website");
Object.defineProperty(exports, "UsedButtonSchema", { enumerable: true, get: function () { return website_1.UsedButtonSchema; } });
// ------------------------------ Shared ------------------------------ //
var shared_1 = require("./types/shared");
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
var util_1 = require("./util");
Object.defineProperty(exports, "convertParameterValueFromString", { enumerable: true, get: function () { return util_1.convertParameterValueFromString; } });
// ------------------------------ React ------------------------------ //
var theme_1 = require("./react/theme");
Object.defineProperty(exports, "theme", { enumerable: true, get: function () { return theme_1.theme; } });
var types_1 = require("./react/types");
Object.defineProperty(exports, "SegmentWidth", { enumerable: true, get: function () { return types_1.SegmentWidth; } });
