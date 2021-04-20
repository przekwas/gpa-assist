export interface StudentsTable {
    id?: number;
    email?: string;
    password?: string;
    name?: string;
    created_at?: Date;
}

export interface MySQLResponse {
    affectedRows: number;
    insertId: number;
}