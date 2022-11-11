import {FixedAssetType} from "./fixed-asset-type";
import {AssetBuilder} from "./asset-builder";

export interface Builder {
    withCode(value: string): AssetBuilder,

    withName(value: string): AssetBuilder,

    withPrice(value: number): AssetBuilder,

    withDescription(value: string): AssetBuilder,

    withDepreciationRate(value: string): AssetBuilder,

    withIngressDate(value: Date): AssetBuilder,

    withManufactureDate(value: Date): AssetBuilder,

    withFixedAssetType(value: FixedAssetType): AssetBuilder,
}
