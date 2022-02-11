export interface IConfigService {
  getConnectionString(): any;
  getJwtSecretKey(): string;
  getAccessTokenExpiration(): string;
}
