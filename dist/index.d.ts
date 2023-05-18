import { ReactNode } from "react";
import { AvatarsPageDto, ProfilePageDto } from './dtos';
export { ProfilePageDto, AvatarsPageDto };
export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}
export interface Profile {
    client: ClientDto;
    backgrounds: BackgroundDto[];
    buttonStyles: ButtonStyleDto[];
}
export interface Avatars {
    tier: TierDto;
    buttonStyle: ButtonStyleDto;
    avatars: AvatarDto[];
}
export interface Parameters {
    avatarId: string;
    parameters: ParameterDto[];
}
export interface Tiers {
    tiers: TierDto[];
    clientTier: TierDto;
}
export interface ClientWithActivity extends ClientDto {
    isActive: boolean;
    isConnected: boolean;
}
export interface ReactProps {
    children?: ReactNode;
}
export declare class RegistrationFormDto {
    username: string;
    passwordOne: string;
    passwordTwo: string;
    registrationKey: string;
}
declare class BaseDto {
    id: string;
    createDate: Date;
    updateDate: Date;
}
declare class BaseParentDto extends BaseDto {
    parentId?: string;
}
export declare class TierDto extends BaseDto {
    rank: number;
    tier: ClientTier;
    color: string;
    avatars: number;
    layouts: number;
    buttons: number;
    exp: boolean;
    hp: boolean;
}
export declare class BackgroundDto extends BaseDto {
    Label: string;
    className: string;
    tier: TierDto;
}
export declare class ButtonStyleDto extends BaseDto {
    Label: string;
    className: string;
    tier: TierDto;
}
export declare class ClientDto extends BaseDto {
    username: string;
    displayName: string;
    bio: string | null;
    image: string | null;
    hidden: boolean;
    tier: TierDto;
    background: BackgroundDto;
    buttonStyle: ButtonStyleDto;
    avatars: AvatarDto[] | undefined | null;
}
export declare class AvatarDto extends BaseParentDto {
    vrcId: string;
    label: string;
    default: boolean;
    layouts: LayoutDto[] | undefined | null;
    parameters: ParameterDto[] | undefined | null;
    controlParameters: ControlParameterDto[] | undefined | null;
}
export declare class ParameterDto extends BaseParentDto {
    label: string;
    path: string;
    valueType: ValueType;
}
export declare class ControlParameterDto extends BaseParentDto {
    label: string;
    role: ParameterRole;
    path: string;
    value: string;
    valueAlt: string;
    valueType: ValueType;
}
export declare class LayoutDto extends BaseParentDto {
    label: string;
    order: number;
    buttons: ButtonDto[] | undefined | null;
}
export declare class ButtonDto extends BaseParentDto {
    label: string;
    path: string;
    value: string;
    valueAlt: string;
    valueType: ValueType;
    buttonType: ButtonType;
    image: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    useCost: number | null;
}
export declare class FileUploadDto {
    parentType: string;
    parentId: string;
    file: File;
}
export declare class FieldOption {
    key: string;
    value: string;
}
export declare enum ClientTier {
    Basic = "Basic",
    Standard = "Standard",
    Premium = "Premium"
}
export declare enum ParameterRole {
    Exp = "exp",
    HP = "hp"
}
export declare enum ValueType {
    Int = "int",
    Float = "float",
    Boolean = "boolean"
}
export declare enum ButtonType {
    Button = "button",
    Slider = "slider",
    Toggle = "toggle"
}
export declare enum ButtonImageOrientation {
    Horizontal = "Horizontal",
    Vertical = "Vertical",
    Square = "Square"
}
export declare enum InputType {
    Text = "text",
    Button = "button",
    Checkbox = "checkbox",
    Date = "date",
    Email = "email",
    File = "file",
    Hidden = "hidden",
    Number = "number",
    Password = "password",
    Radio = "radio",
    Range = "range",
    Reset = "reset",
    Submit = "submit",
    Time = "time",
    Url = "url",
    Label = "label",
    Boolean = "boolean",
    Select = "select",
    Textarea = "textarea"
}
export declare enum ContentBoxWidth {
    None = "none",
    Third = "third",
    Half = "half",
    Full = "full"
}
