import xml2js from "xml2js";
import {
  APIResponse,
  OutputContent,
  OutputFormat,
  SfwRoutes,
  Version,
} from "./enums";
import request from "../request";

/**
 * @class Options
 * @classdesc Options for configuring the ZenithOmen function.
 */
export class Options {
  /**
   * The desired output type for API responses.
   * @type {OutputFormat}
   */
  outputFormat: OutputFormat;

  /**
   * The default API version to use.
   * @type {Version}
   */
  defaultVersion: Version;

  /**
   * Create a new instance of Options.
   * @constructor
   * @param {object} options - The configuration options.
   * @param {OutputFormat} options.outputFormat - The desired output type (default: JSON).
   * @param {Version} options.defaultVersion - The default API version to use (default: V1).
   */
  constructor(options?: {
    outputFormat?: OutputFormat;
    defaultVersion?: Version;
  }) {
    const defaultOptions = {
      outputFormat: OutputFormat.JSON,
      defaultVersion: Version.V1,
    };
    const opts = { ...defaultOptions, ...options };

    this.outputFormat = opts.outputFormat;
    this.defaultVersion = opts.defaultVersion;
  }
}

/**
 * @classdesc ZenithOmen represents a class that allows users to send requests to a specific list of API routes.
 * @extends request Extends the base request class.
 */
export class ZenithOmen extends request {
  /**
   * The configuration options for ZenithOmen.
   * @type {Options}
   */
  options: Options;

  /**
   * Create a new instance of ZenithOmen.
   * @constructor
   * @param {Options} options - The configuration options.
   */
  constructor(options: Options) {
    super();
    this.options = new Options(options);
  }

  /**
   * Fetch data for the "bite" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async bite(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.BITE, outputContent);
  }

  /**
   * Fetch data for the "dare" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async dare(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.DARE, outputContent);
  }

  /**
   * Fetch data for the "headpat" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async headpat(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HEADPAT, outputContent);
  }

  /**
   * Fetch data for the "highfive" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async highfive(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HIGHFIVE, outputContent);
  }

  /**
   * Fetch data for the "hug" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async hug(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HUG, outputContent);
  }

  /**
   * Fetch data for the "husbando" route.
   * @returns {Promise<APIResponse>}
   */
  async husbando(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HUSBANDO, outputContent);
  }

  /**
   * Fetch data for the "neko" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async neko(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.NEKO, outputContent);
  }

  /**
   * Fetch data for the "poke" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async poke(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.POKE, outputContent);
  }

  /**
   * Fetch data for the "run" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async run(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.RUN, outputContent);
  }

  /**
   * Fetch data for the "slap" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async slap(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.SLAP, outputContent);
  }

  /**
   * Fetch data for the "smile" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async smile(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.SMILE, outputContent);
  }

  /**
   * Fetch data for the "truth" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async truth(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.TRUTH, outputContent);
  }

  /**
   * Fetch data for the "waifu" route.
   * @param {string | OutputContent} outputContent - The output content type that is requested (e.g., 'picture', 'gif')
   * @returns {Promise<APIResponse>}
   */
  async waifu(outputContent?: string | OutputContent): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.WAIFU, outputContent);
  }

  /**
   * Private method to fetch data from the API.
   * @private
   * @param {string} route - The route or endpoint to fetch data from.
   * @param {string} customOutputContent - Custom content type for the API response (e.g., 'json', 'xml').
   * @returns {Promise<APIResponse>} A promise that resolves to the APIResponse containing the fetched data.
   */
  private async __fetch(
    route: string,
    customOutputContent: string = ""
  ): Promise<APIResponse> {
    const { defaultVersion, outputFormat } = this.options;

    const requestOptions = {
      version: defaultVersion,
      endpoint: route,
      queryParams: {
        outputFormat,
        outputContent: customOutputContent,
      },
    };

    const apiResponse = await this.get(requestOptions);

    const parsedData =
      outputFormat === OutputFormat.JSON
        ? await apiResponse.json()
        : await xml2js.parseStringPromise(await apiResponse.text(), {
            explicitArray: false,
          });

    const responseData =
      outputFormat !== OutputFormat.JSON ? parsedData.response : parsedData;

    return new APIResponse(responseData);
  }
}
