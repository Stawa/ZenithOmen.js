import xml2js from "xml2js";
import {
  APIResponse,
  OutputContent,
  OutputFormat,
  SfwRoutes,
  Version,
} from "./enums";
import { APIRequest, RequestOptions } from "../request";

interface OptionsClass {
  outputFormat?: OutputFormat;
  defaultVersion?: Version;
}

interface APIParameters {
  outputContent?: string | OutputContent;
}

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
   * @param {OptionsClass} options - The configuration options.
   * @param {OutputFormat} options.outputFormat - The desired output type (default: JSON).
   * @param {Version} options.defaultVersion - The default API version to use (default: V1).
   */
  constructor(options?: OptionsClass) {
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
 * @extends APIRequest Extends the base request class.
 */
export class ZenithOmen extends APIRequest {
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
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async bite(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.BITE, param);
  }

  /**
   * Fetch data for the "dare" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async dare(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.DARE, param);
  }

  /**
   * Fetch data for the "headpat" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async headpat(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HEADPAT, param);
  }

  /**
   * Fetch data for the "highfive" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async highfive(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HIGHFIVE, param);
  }

  /**
   * Fetch data for the "hug" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async hug(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HUG, param);
  }

  /**
   * Fetch data for the "husbando" route.
   * @returns {Promise<APIResponse>}
   */
  async husbando(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HUSBANDO, param);
  }

  /**
   * Fetch data for the "neko" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async neko(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.NEKO, param);
  }

  /**
   * Fetch data for the "poke" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async poke(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.POKE, param);
  }

  /**
   * Fetch data for the "run" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async run(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.RUN, param);
  }

  /**
   * Fetch data for the "slap" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async slap(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.SLAP, param);
  }

  /**
   * Fetch data for the "smile" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async smile(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.SMILE, param);
  }

  /**
   * Fetch data for the "truth" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async truth(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.TRUTH, param);
  }

  /**
   * Fetch data for the "waifu" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   */
  async waifu(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.WAIFU, param);
  }

  /**
   * Private method to fetch data from the API.
   * @private
   * @param {string} route - The route or endpoint to fetch data from.
   * @param {APIParameters} param - Custom configuration for the API request.
   * @returns {Promise<APIResponse>} A promise that resolves to the APIResponse containing the fetched data.
   */
  private async __fetch(
    route: string,
    param: APIParameters
  ): Promise<APIResponse> {
    const { defaultVersion, outputFormat } = this.options;
    const { outputContent = "" } = param;

    const requestOptions: RequestOptions = {
      version: defaultVersion,
      endpoint: route,
      queryParams: {
        outputFormat,
        outputContent,
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
