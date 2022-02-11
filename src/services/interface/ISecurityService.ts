export interface ISecurityService {
  createAccessToken(data: object): Promise<string>;
}
