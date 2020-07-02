export const initialState: stateName = { firstname: 'John', lastname: 'Doe', loader: false};

export type stateName = Readonly<{
    firstname: string;
    lastname: string;
    loader: boolean;
}>;
