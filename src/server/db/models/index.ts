export interface StudentsTable {
    id?: number;
    email?: string;
    password?: string;
    name?: string;
    created_at?: Date;
}

export interface ClassesTable {
    id?: number;
    name?: string;
    created_at?: Date;
}

export interface StudentsClassesTable {
    student_id?: number;
    class_id?: number;
}

export interface MySQLResponse {
    affectedRows: number;
    insertId: number;
}