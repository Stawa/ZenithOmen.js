/**
 * Represents an API request utility.
 */
export default class APIRequest {
  /**
   * The base URL for the API requests.
   * @type {string}
   * @private
   */
  private baseUrl: string;

  /**
   * Create a new APIRequest instance.
   * @constructor
   * @param {string} [baseUrl="https://zenith-omen.vercel.app/api/"] - The base URL for the API requests.
   */
  constructor(baseUrl: string = "https://zenith-omen.vercel.app/api/") {
    this.baseUrl = baseUrl;
  }

  /**
   * Make a GET request to the API.
   * @param {string} version - The version of the API.
   * @param {string} endpoint - The endpoint of the API.
   * @param {string} outputType - The output type of the image.
   * @returns {Promise<object>} A promise that resolves to the JSON response from the API.
   */
  async get(
    version: string,
    endpoint: string,
    outputType: string
  ): Promise<object> {
    const response = await fetch(
      `${this.baseUrl}${version}/${endpoint}/?type=${outputType}`
    );
    return await response.json();
  }
}
