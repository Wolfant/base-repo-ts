import {AssetBuilder} from "./asset-builder";
import {FixedAssetType} from "./fixed-asset-type";

export class Director {

    public buildTable(assetBuilder: AssetBuilder) {
        return assetBuilder
            .withName('table')
            .withCode('001')
            .withPrice(20)
            .withDescription('A table')
            .withFixedAssetType(FixedAssetType.DEPRECIABLE);
    }

    public buildComputer(assetBuilder: AssetBuilder) {
        return assetBuilder
            .withName('computer')
            .withCode('002')
            .withPrice(1345)
            .withDescription('A linux computer')
            .withFixedAssetType(FixedAssetType.NON_DEPRECIABLE);
    }

    public buildChair(assetBuilder: AssetBuilder) {
        return assetBuilder
            .withName('Chair')
            .withCode('003')
            .withPrice(120)
            .withDescription('A chair')
            .withFixedAssetType(FixedAssetType.EXHAUSTIBLE);
    }
}
