import OwnersProps from "./owners";

export interface DormitoriesProps {
    name: string;
    owner: OwnersProps;
    photos: Array<string>;
    type: string;
}