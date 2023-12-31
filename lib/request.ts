/**
 * Interface representing options for making API requests.
 * @interface
 */
interface RequestOptions {
  version: string;
  endpoint: string;
  queryParams?: Record<string, string>;
  headers?: Record<string, string>;
}

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
   * @param {RequestOptions} options - The options for the GET request.
   * @returns {Promise<Response>} A promise that resolves to the API's raw response.
   */
  async get(options: RequestOptions): Promise<Response> {
    const { version, endpoint, queryParams, headers } = options;

    let queryParamsString = "";

    if (queryParams) {
      const queryParamsArray = Object.entries(queryParams).map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      );

      queryParamsString = `?${queryParamsArray.join("&")}`;
    }

    const url = `${this.baseUrl}${version}/${endpoint}${queryParamsString}`;

    const response = await fetch(url, {
      headers: { ...headers },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    return response;
  }
}
