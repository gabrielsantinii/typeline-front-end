import { AvatarContainer } from "./avatar-styles";

export function Avatar({ src }: { src?: string }): JSX.Element {
    return <AvatarContainer className="avatar-container" src={src} />;
}
