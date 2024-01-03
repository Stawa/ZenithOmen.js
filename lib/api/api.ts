import xml2js from "xml2js";
import {
  APIResponse,
  OutputFormat,
  SfwRoutes,
  Version,
  EnumTypes,
} from "./enums";
import { APIRequest, RequestOptions } from "../request";

export interface OptionsClass {
  outputFormat?: OutputFormat | EnumTypes["OutputFormat"];
  defaultVersion?: Version | EnumTypes["Version"];
}

export interface APIParameters {
  outputContent?: EnumTypes["OutputContent"];
}

/**
 * @class Options
 * @classdesc Options for configuring the ZenithOmen function.
 *
 * @example
 * const option = new Options({
 *  option.outputFormat = "xml"
 *  option.defaultVersion = "v1"
 * });
 * const zenith = new ZenithOmen(option);
 */
export class Options {
  /**
   * The desired output type for API responses.
   * @type {OutputFormat | EnumTypes['OutputFormat']}
   */
  outputFormat: OutputFormat | EnumTypes["OutputFormat"];

  /**
   * The default API version to use.
   * @type {Version | EnumTypes['Version']}
   */
  defaultVersion: Version | EnumTypes["Version"];

  /**
   * Create a new instance of Options.
   * @constructor
   * @param {OptionsClass} options - The configuration options.
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
   * @example
   * const zenith = new ZenithOmen();
   * zenith.bite().then(res => {
   *  console.log(res)
   * })
   */
  async bite(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.BITE, param);
  }

  /**
   * Fetch data for the "dare" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.dare().then(res => {
   *  console.log(res)
   * })
   */
  async dare(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.DARE, param);
  }

  /**
   * Fetch data for the "headpat" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.headpat().then(res => {
   *  console.log(res)
   * })
   */
  async headpat(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HEADPAT, param);
  }

  /**
   * Fetch data for the "highfive" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.highfive().then(res => {
   *  console.log(res)
   * })
   */
  async highfive(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HIGHFIVE, param);
  }

  /**
   * Fetch data for the "hug" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.hug().then(res => {
   *  console.log(res)
   * })
   */
  async hug(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HUG, param);
  }

  /**
   * Fetch data for the "husbando" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.husbando().then(res => {
   *  console.log(res)
   * })
   */
  async husbando(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.HUSBANDO, param);
  }

  /**
   * Fetch data for the "neko" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.neko().then(res => {
   *  console.log(res)
   * })
   */
  async neko(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.NEKO, param);
  }

  /**
   * Fetch data for the "poke" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.poke().then(res => {
   *  console.log(res)
   * })
   */
  async poke(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.POKE, param);
  }

  /**
   * Fetch data for the "run" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.run().then(res => {
   *  console.log(res)
   * })
   */
  async run(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.RUN, param);
  }

  /**
   * Fetch data for the "slap" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.slap().then(res => {
   *  console.log(res)
   * })
   */
  async slap(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.SLAP, param);
  }

  /**
   * Fetch data for the "smile" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.smile().then(res => {
   *  console.log(res)
   * })
   */
  async smile(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.SMILE, param);
  }

  /**
   * Fetch data for the "truth" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.truth().then(res => {
   *  console.log(res)
   * })
   */
  async truth(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.TRUTH, param);
  }

  /**
   * Fetch data for the "waifu" route.
   * @param {APIParameters} param - The parameters for configuration are used when sending a request to the API.
   * @returns {Promise<APIResponse>}
   * @example
   * const zenith = new ZenithOmen();
   * zenith.waifu().then(res => {
   *  console.log(res)
   * })
   */
  async waifu(param: APIParameters): Promise<APIResponse> {
    return this.__fetch(SfwRoutes.WAIFU, param);
  }

  /**
   * Private method to fetch data from the API.
   * @private
   * @param {SfwRoutes | EnumTypes['SfwRoute']} route - The route or endpoint to fetch data from.
   * @param {APIParameters} param - Custom configuration for the API request.
   * @returns {Promise<APIResponse>} A promise that resolves to the APIResponse containing the fetched data.
   */
  private async __fetch(
    route: SfwRoutes | EnumTypes["SfwRoute"],
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
    const parsedData = await this.parseResponse(apiResponse);

    const responseData = this.isJSON() ? parsedData : parsedData.response;

    return new APIResponse(responseData);
  }

  /**
   * Checks if the output format is JSON based on the provided options.
   * @private
   * @returns {boolean} True if the output format is JSON, false otherwise.
   */
  private isJSON(): boolean {
    return this.options.outputFormat.toLowerCase() === OutputFormat.JSON;
  }

  /**
   * Parses the response from the API based on the detected output format.
   * @private
   * @param apiResponse - The response object comes from the API.
   * @returns {Promise<any>} A promise refers to the parsed content of the response.
   */
  private async parseResponse(apiResponse: Response): Promise<any> {
    const isJSON: boolean = this.isJSON();
    const content: any = isJSON
      ? await apiResponse.json()
      : await apiResponse.text();

    return isJSON
      ? content
      : await xml2js.parseStringPromise(content, { explicitArray: false });
  }
}
