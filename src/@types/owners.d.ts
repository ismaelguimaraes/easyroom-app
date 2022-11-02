interface TelephonesOwnersProps {
    ddd: string;
    number: string;
}

export default interface OwnersProps {
    name: string;
    photo: string;
    telephones: Array<TelephonesOwnersProps>;
    bio?: string;
}