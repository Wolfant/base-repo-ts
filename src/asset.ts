import {FixedAssetType} from "./fixed-asset-type";

export class Asset {

    public name?: string;
    public code?: string;
    public price?: number;
    public description?: string;
    public depreciationRate?: string;
    public ingressDate?: Date;
    public manufactureDate?: Date;
    public fixedAssetType?: FixedAssetType;
}
