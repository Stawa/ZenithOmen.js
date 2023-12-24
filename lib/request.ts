/**
 * @class APIRequest
 * @classdesc Represents an API request utility.
 */
export default class APIRequest {
  /**
   * The default URL for API requests.
   * @type {string}
   * @private
   */
  private baseUrl: string;

  /**
   * Create a new instance of APIRequest.
   * @constructor
   * @param {string} [baseUrl="https://zenith-omen.vercel.app/api/"] - The default URL for API requests.
   */
  constructor(baseUrl: string = "https://zenith-omen.vercel.app/api/") {
    this.baseUrl = baseUrl;
  }

  /**
   * Request a GET response from the API.
   * @param {string} version - The version of the API.
   * @param {string} endpoint - The endpoint of the API.
   * @param {string} outputType - The response output type (for example, json).
   * @returns {Promise<Response>} A promise that resolves to the API's raw response.
   */
  async get(version: string, endpoint: string, outputType: string): Promise<Response> {
    const response = await fetch(
      `${this.baseUrl}${version}/${endpoint}/?type=${outputType}`
    );
    return response;
  }
}
