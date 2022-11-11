import {Builder} from "./builder";
import {Asset} from "./asset";
import {FixedAssetType} from "./fixed-asset-type";

export class AssetBuilder implements Builder {
    asset: Asset;

    constructor() {
        this.asset = new Asset();
    }

    withCode(value: string): AssetBuilder {
        this.asset.code = value;
        return this;
    }

    withName(value: string): AssetBuilder {
        this.asset.name = value;
        return this;
    }

    withPrice(value: number): AssetBuilder {
        this.asset.price = value;
        return this;
    }

    withDescription(value: string): AssetBuilder {
        this.asset.description = value;
        return this;
    }

    withDepreciationRate(value: string): AssetBuilder {
        this.asset.depreciationRate = value;
        return this;
    }

    withIngressDate(value: Date): AssetBuilder {
        this.asset.ingressDate = value;
        return this;
    }

    withManufactureDate(value: Date): AssetBuilder {
        this.asset.manufactureDate = value;
        return this;
    }

    withFixedAssetType(value: FixedAssetType): AssetBuilder {
        this.asset.fixedAssetType = value;
        return this;
    }

    toString() {
        return `
    Name :${this.asset.name}
    Code: ${this.asset.code}
    Price: ${this.asset.price}
    Description: ${this.asset.description}
    FixedAssetType: ${this.asset.fixedAssetType}
        `;
    }


}
