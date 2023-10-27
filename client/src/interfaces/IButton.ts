export interface IButton {
    link: string;
    text: string;
    icon?: string | JSX.Element | JSX.Element[];
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}