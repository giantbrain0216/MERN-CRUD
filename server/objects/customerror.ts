module objects {
    export class CustomError extends Error {
        public status: number;
        constructor(message?: string) {
            super(message);
        }
    }
}

export = objects;    
