import { ReactNode } from "react";

// -- Interfaces -- //
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

export interface Tiers {
    tiers: TierDto[];
    clientTier: TierDto;
}

export interface ActivationForm {
    username: string;
    passwordOne: string;
    passwordTwo: string;
    activationKey: string;
}

export interface ClientWithActivity extends ClientDto {
    isActive: boolean;
    isConnected: boolean;
}

export interface ReactProps {
    children?: ReactNode;
}

// -- Classes -- //
class BaseDto {
    id: string = null;
    createDate: Date;
    updateDate: Date;
}

class BaseParentDto extends BaseDto {
    parentId?: string;
}

export class TierDto extends BaseDto {
    rank: number;
    tier: ClientTier;
    color: string;
    avatars: number;
    layouts: number;
    buttons: number;
    exp: boolean;
    hp: boolean;
}

export class BackgroundDto extends BaseDto {
    Label: string;
    className: string;
    tier: TierDto;
}

export class ButtonStyleDto extends BaseDto {
    Label: string;
    className: string;
    tier: TierDto;
}

export class ClientDto extends BaseDto {
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

export class AvatarDto extends BaseParentDto {
    vrcId: string;
    label: string;
    default: boolean;
    layouts: LayoutDto[] | undefined | null;
    parameters: ParameterDto[] | undefined | null;
    trackedParameter: TrackedParameterDto[] | undefined | null;
}

export class ParameterDto extends BaseParentDto {
    label: string;
    path: string;
    valueType: ValueType;
}

export class TrackedParameterDto extends BaseParentDto {
    label: string;
    role: ParameterRole;
    path: string;
    value: string;
    valueAlt: string;
    valueType: ValueType;
}

export class LayoutDto extends BaseParentDto {
    label: string;
    order: number;
    buttons: ButtonDto[] | undefined | null;
}

export class ButtonDto extends BaseParentDto {
    label: string;
    path: string = '/avatar/parameters/';
    value: string;
    valueAlt: string;
    valueType: ValueType = ValueType.Int;
    buttonType: ButtonType = ButtonType.Button;
    image: string | null;
    imageOrientation: ButtonImageOrientation = ButtonImageOrientation.Horizontal;
    order: number;
    useCost: number | null;
}

export class FileUploadDto {
    parentType: string;
    parentId: string;
    file: File;
}

export class FieldOption {
    key: string;
    value: string;
}

// -- Enums -- //
export enum ClientTier {
    Basic = 'Basic',
    Standard = 'Standard',
    Premium = 'Premium'
}

export enum ParameterRole {
    Exp = 'exp',
    HP = 'hp',
}

export enum ValueType {
    Int = 'int',
    Float = 'float',
    Boolean = 'boolean',
}

export enum ButtonType {
    Button = 'button',
    Slider = 'slider',
    Toggle = 'toggle',
}

export enum ButtonImageOrientation {
    Horizontal = 'Horizontal',
    Vertical = 'Vertical',
    Square = 'Square',
}

export enum InputType {
    Text = 'text',
    Button = 'button',
    Checkbox = 'checkbox',
    Date = 'date',
    Email = 'email',
    File = 'file',
    Hidden = 'hidden',
    Number = 'number',
    Password = 'password',
    Radio = 'radio',
    Range = 'range',
    Reset = 'reset',
    Submit = 'submit',
    Time = 'time',
    Url = 'url',
    Label = 'label',
    Boolean = 'boolean',
    Select = 'select',
    Textarea = 'textarea',
}

export enum ContentBoxWidth {
    None = 'none',
    Third = 'third',
    Half = 'half',
    Full = 'full'
}
