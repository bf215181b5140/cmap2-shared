export declare class ParentId {
    parentId?: string;
}
export declare class ClientDto {
    id: string;
    username: string;
    displayName: string;
    bio: string | null;
    picture: string | null;
    hidden: boolean;
    avatars: AvatarDto[];
}
export declare class AvatarDto extends ParentId {
    id: string;
    vrcId: string;
    label: string;
    default: boolean;
    layouts: LayoutDto[];
}
export declare class LayoutDto extends ParentId {
    id: string;
    label: string;
    order: number;
    buttons: ButtonDto[];
}
export declare class ButtonDto extends ParentId {
    id: string;
    label: string;
    path: string;
    value: string;
    valueType: ValueType;
    buttonType: ButtonType;
    image: string | null;
    order: number;
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
