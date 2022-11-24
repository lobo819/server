export const MYSQLCONFIG:any = {
    type: 'mysql',
    username: 'root',
    password: 'root123',
    host: 'localhost',
    port: '3306',
    database: 'nest',
    synchronize: true,
    retryDelay: 500,
    retryAttempts: 10,
    autoLoadEntities: true
}